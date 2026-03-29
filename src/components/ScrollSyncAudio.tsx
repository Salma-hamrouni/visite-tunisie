import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import maloufAudio from "../assets/malouf.mp3";

const ScrollSyncAudio = () => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMute = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(maloufAudio);
      audioRef.current.loop = true;
    }

    if (muted) {
      audioRef.current.play();
      setMuted(false);
    } else {
      audioRef.current.pause();
      setMuted(true);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:bg-card transition-all duration-300 hover:scale-110"
      aria-label={muted ? "Activer la musique" : "Couper la musique"}
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