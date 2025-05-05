'use client';
import { useRef, useState, useEffect } from 'react';

export default function CustomVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handlePlay = () => setIsPaused(false);
    const handlePause = () => setIsPaused(true);
    const handleEnded = () => setIsPaused(true);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="w-full px-5 sm:px-0 max-w-4xl mx-auto relative sm:pt-[125px] pt-[170px]">
      <div className="relative">
        {/* Video element */}
        <video
          ref={videoRef}
          controls
          playsInline
          muted={false}
          className="w-full h-auto rounded-lg shadow-lg"
        >
          <source src="/video/awesom-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Full-size overlay image (only shown when paused) */}
        {isPaused && (
          <img
            src="/video-overlay.jpg"
            alt="Overlay"
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-10"
          />
        )}

        {/* Centered Play Icon */}
        {isPaused && (
          <button
            onClick={handlePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <img
              src="/icons/media-player.png"
              alt="Play"
              className="w-16 h-16 opacity-80 hover:opacity-100"
            />
          </button>
        )}
      </div>
    </div>
  );
}
