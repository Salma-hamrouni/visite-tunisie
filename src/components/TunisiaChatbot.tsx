import { useLanguage } from "../contexts/LanguageContext";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const TunisiaChatbot = () => {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const placeholders: Record<string, string> = {
    fr: "Posez une question sur la Tunisie...",
    ar: "اطرح سؤالاً عن تونس...",
    en: "Ask a question about Tunisia...",
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Msg = { role: "user", content: input.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);

    let assistantSoFar = "";

    try {
      // Build the function URL defensively from env vars.
      const envBase: string | undefined = import.meta.env.VITE_SUPABASE_URL ??
        (import.meta.env.VITE_SUPABASE_PROJECT_ID ? `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co` : undefined);

      if (!envBase) {
        const missing = lang === "ar" ? "Variable d'environnement manquante: VITE_SUPABASE_URL ou VITE_SUPABASE_PROJECT_ID" : lang === "fr" ? "Variable d'environnement manquante : VITE_SUPABASE_URL ou VITE_SUPABASE_PROJECT_ID" : "Missing environment variable: VITE_SUPABASE_URL or VITE_SUPABASE_PROJECT_ID";
        setMessages((prev) => [...prev, { role: "assistant", content: missing }]);
        setIsLoading(false);
        return;
      }

      const CHAT_URL = `${envBase.replace(/\/$/, "")}/functions/v1/tunisia-chat`;
      console.debug("TunisiaChatbot: sending request to", CHAT_URL);

      const publishable = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
      if (!publishable) {
        console.warn("TunisiaChatbot: VITE_SUPABASE_PUBLISHABLE_KEY is not set — request may be unauthorized");
      }

      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(publishable ? { Authorization: `Bearer ${publishable}` } : {}),
        },
        body: JSON.stringify({ messages: allMessages }),
      });

      // Provide clearer errors for debugging: include status and body when available.
      if (!resp.ok) {
        const text = await resp.text().catch(() => "<no body>");
        throw new Error(`Request failed ${resp.status} ${resp.statusText}: ${text}`);
      }

      if (!resp.body) {
        throw new Error("Response has no body (stream not available)");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantSoFar += content;
              setMessages((prev) => {
                const last = prev[prev.length - 1];
                if (last?.role === "assistant") {
                  return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
                }
                return [...prev, { role: "assistant", content: assistantSoFar }];
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      const errMsg = e instanceof Error ? e.message : String(e);
      // Show a helpful error message in the chat UI; keep it brief but informative.
      const userFacing =
        lang === "ar"
          ? `خطأ في الاتصال: ${errMsg}`
          : lang === "fr"
          ? `Erreur de connexion : ${errMsg}`
          : `Connection error: ${errMsg}`;

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: userFacing },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col h-[500px]">
      <div className="bg-primary/10 px-5 py-4 flex items-center gap-3 border-b border-border">
        <div className="p-2 rounded-full bg-primary/20">
          <Bot className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm">
            {lang === "ar" ? "مساعد تونس الذكي" : lang === "fr" ? "Assistant Tunisie IA" : "Tunisia AI Assistant"}
          </h4>
          <p className="text-xs text-muted-foreground">
            {lang === "ar" ? "اسألني أي شيء عن تونس!" : lang === "fr" ? "Demandez-moi tout sur la Tunisie !" : "Ask me anything about Tunisia!"}
          </p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-muted-foreground text-sm text-center gap-2">
            <Bot className="w-10 h-10 opacity-30" />
            <p>{lang === "ar" ? "مرحباً! اسألني عن تونس " : lang === "fr" ? "Bonjour ! Posez-moi une question sur la Tunisie " : "Hello! Ask me about Tunisia "}</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="p-1.5 rounded-full bg-primary/10 h-fit mt-1">
                <Bot className="w-4 h-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                msg.content
              )}
            </div>
            {msg.role === "user" && (
              <div className="p-1.5 rounded-full bg-primary/20 h-fit mt-1">
                <User className="w-4 h-4 text-primary" />
              </div>
            )}
          </div>
        ))}
        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex gap-3">
            <div className="p-1.5 rounded-full bg-primary/10 h-fit mt-1">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3">
              <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholders[lang] || placeholders.en}
            disabled={isLoading}
            className="flex-1 px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default TunisiaChatbot;
