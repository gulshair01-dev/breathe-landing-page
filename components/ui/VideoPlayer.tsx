"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

export interface VideoPlayerProps {
  src: string;
  label: string;
  poster?: string;
  className?: string;
  onPlay?: () => void;
  pauseSignal?: number;
}

export function VideoPlayer({
  src,
  label,
  poster,
  className = "",
  onPlay,
  pauseSignal,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || pauseSignal === undefined) return;
    video.pause();
    setPlaying(false);
  }, [pauseSignal]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (playing) {
      video.pause();
      setPlaying(false);
      return;
    }

    onPlay?.();
    void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }

  return (
    <button
      type="button"
      onClick={togglePlayback}
      className={`group relative block w-full overflow-hidden rounded-card bg-surface-dark ${className}`}
      aria-label={playing ? `Pause ${label}` : `Play ${label}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="aspect-9/16 h-full w-full object-cover"
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
      />

      {!playing ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-brand-forest/20 transition-opacity">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary shadow-lg sm:h-16 sm:w-16">
            <Play
              size={28}
              className="ml-0.5 fill-brand-accent text-brand-accent"
              aria-hidden
            />
          </span>
        </span>
      ) : null}
    </button>
  );
}
