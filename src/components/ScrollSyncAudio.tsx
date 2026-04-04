import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import maloufAudio from "../assets/malouf.mp3";

const ScrollSyncAudio = () => {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(maloufAudio);
    audio.loop = true;
    audio.muted = false;
    audioRef.current = audio;

    const playAudio = () => {
      audio.play()
        .then(() => {
          setMuted(false);
        })
        .catch(() => {
          setMuted(true);
        });
    };

    // 👉 essayer auto-play
    playAudio();

    // 👉 fallback : attendre interaction user
    const handleFirstClick = () => {
      playAudio();
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick);

    return () => {
      audio.pause();
      window.removeEventListener("click", handleFirstClick);
    };
  }, []);

  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMuted = !muted;
    audioRef.current.muted = newMuted;
    setMuted(newMuted);

    // 👉 si jamais audio stoppé → relancer
    if (!newMuted) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-all duration-300 hover:scale-110"
    >
      {muted ? (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      ) : (
        <Volume2 className="w-5 h-5 text-primary animate-pulse" />
      )}
    </button>
  );
};

export default ScrollSyncAudio;