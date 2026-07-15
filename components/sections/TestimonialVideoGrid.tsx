"use client";

import { useState } from "react";
import { Carousel, CarouselSlide } from "@/components/ui/Carousel";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { testimonialVideos } from "@/lib/data/testimonialVideos";

export function TestimonialVideoGrid() {
  const [pauseTokens, setPauseTokens] = useState<Record<string, number>>({});

  function handlePlay(id: string) {
    setPauseTokens((prev) => {
      const next = { ...prev };
      for (const video of testimonialVideos) {
        if (video.id !== id) {
          next[video.id] = (next[video.id] ?? 0) + 1;
        }
      }
      return next;
    });
  }

  return (
    <>
      {/* Mobile: one video at a time with dots */}
      <div className="sm:hidden">
        <Carousel showArrows={false} showDots loop>
          {testimonialVideos.map((video) => (
            <CarouselSlide key={video.id}>
              <div className="mx-auto max-w-[260px]">
                <VideoPlayer
                  src={video.src}
                  label={video.label}
                  poster={video.poster}
                  pauseSignal={pauseTokens[video.id]}
                  onPlay={() => handlePlay(video.id)}
                />
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>

      {/* Tablet/desktop: 3-up grid */}
      <div className="hidden grid-cols-3 gap-3 sm:grid">
        {testimonialVideos.map((video) => (
          <VideoPlayer
            key={video.id}
            src={video.src}
            label={video.label}
            poster={video.poster}
            pauseSignal={pauseTokens[video.id]}
            onPlay={() => handlePlay(video.id)}
          />
        ))}
      </div>
    </>
  );
}
