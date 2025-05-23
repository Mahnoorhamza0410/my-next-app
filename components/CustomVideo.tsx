'use client';
import { useRef, useState, useEffect } from 'react';

export default function CustomVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [showControls, setShowControls] = useState(false);

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

    const handlePlay = () => {
      setIsPaused(false);
      setShowControls(true);
    };

    const handlePause = () => {
      setIsPaused(true);
      setShowControls(false);
    };

    const handleEnded = () => {
      setIsPaused(true);
      setShowControls(false);
    };

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
    // padding top was before 125px
    <div className="margin-sides w-full px-5 sm:px-0 max-w-[998px] mx-auto relative sm:pt-[105px] pt-[90px]">
      <div className="relative w-full h-[499px] overflow-hidden rounded-lg">
        <video
          ref={videoRef}
          playsInline
          muted={false}
          controls={showControls}
          className="w-full h-[499px] object-cover"
        >
          <source src="/video/awesom-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {isPaused && (
          <img
            src="/video-overlay.jpg"
            alt="Overlay"
            className="absolute top-0 left-0 w-full h-[499px] object-cover z-10"
          />
        )}

        {isPaused && (
          <button
            onClick={handlePlayPause}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <img
              src="/icons/media-player.png"
              alt="Play"
              className="w-[108px] h-[108px] opacity-80 hover:opacity-100"
            />
          </button>
        )}
      </div>
    </div>
  );
}
