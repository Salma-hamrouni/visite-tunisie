import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import TunisiaChatbot from "./TunisiaChatbot";

const FloatingChatButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-[90vw] max-w-md animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-primary text-primary-foreground">
              <span className="font-semibold text-sm">🤖 Tunisia Assistant</span>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full hover:bg-white/20 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              <TunisiaChatbot />
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Open chatbot"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
};

export default FloatingChatButton;
