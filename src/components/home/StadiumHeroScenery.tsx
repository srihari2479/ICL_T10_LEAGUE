import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const StadiumHeroScenery: React.FC = () => {
  const { theme } = useApp();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.95;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* High-Visibility Live Stadium Broadcast Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/cricket_stadium_broadcast.jpg"
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-90 brightness-[1.0] contrast-[1.05] saturate-[1.12]"
        >
          <source src="/assets/stadium_ambient_loop.mp4" type="video/mp4" />
          <img
            src="/assets/cricket_stadium_broadcast.jpg"
            alt="ICL Stadium Scenery"
            className="w-full h-full object-cover object-center"
          />
        </video>
      </div>

      {/* Atmospheric Theme-Adaptive Overlay for Crisp Broadcast Contrast */}
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'light'
            ? 'bg-gradient-to-t from-black/55 via-black/20 to-black/35'
            : 'bg-gradient-to-t from-black/70 via-black/30 to-black/45'
        }`} 
      />

      {/* Warm Stadium Floodlight Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[320px] bg-gradient-to-b from-[#FF5500]/18 via-[#F59E0B]/10 to-transparent blur-3xl opacity-75 pointer-events-none" />

    </div>
  );
};
