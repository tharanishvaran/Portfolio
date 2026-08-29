import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown, Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function Hero({ isReady }) {
  const videoRef = useRef(null);
  const hasAutoPlayedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  // Attempt automatic video playback with audio once intro has completely finished
  const attemptAutoPlay = useCallback(() => {
    if (hasAutoPlayedRef.current) return;
    const video = videoRef.current;
    if (!video) return;

    hasAutoPlayedRef.current = true;
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1.0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setAudioBlocked(false);
          setIsEnded(false);
        })
        .catch((err) => {
          // Modern browsers may block unmuted autoplay without user gesture.
          // Gracefully fall back to showing the Play / Tap for Audio button without error.
          setIsPlaying(false);
          setAudioBlocked(true);
        });
    }
  }, []);

  // Sequence: When Preloader "THARANISH" animation completely finishes (isReady becomes true), start video & audio
  useEffect(() => {
    if (isReady && videoLoaded && !hasAutoPlayedRef.current) {
      attemptAutoPlay();
    }
  }, [isReady, videoLoaded, attemptAutoPlay]);

  // Handle video ending naturally
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setIsPlaying(false);
    setIsEnded(true);
  };

  // Single-Click Play/Pause/Replay Toggle Handler
  const handleTogglePlayPause = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended || isEnded) {
      // If the video has ended or is near the end, reset to 0:00 for clean replay
      if (video.ended || isEnded || video.currentTime >= (video.duration || 0) - 0.2) {
        video.currentTime = 0;
      }
      video.muted = false;
      video.volume = 1.0;
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioBlocked(false);
          setIsEnded(false);
        })
        .catch((err) => {
          console.error('Video playback failed:', err);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Manual audio trigger for fallback button
  const handleTapForAudio = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.ended || isEnded || video.currentTime >= (video.duration || 0) - 0.2) {
      video.currentTime = 0;
    }
    video.muted = false;
    video.volume = 1.0;
    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setAudioBlocked(false);
        setIsEnded(false);
      })
      .catch((err) => {
        console.error('Manual audio playback failed:', err);
      });
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen h-[100dvh] flex flex-col justify-end lg:justify-center overflow-hidden bg-black select-none"
    >
      {/* Background AI Video - Top-Aligned on Mobile to Keep Face 100% Visible */}
      <div className="absolute inset-0 w-full h-full min-w-full min-h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/ai-video.mp4"
          playsInline
          preload="auto"
          onLoadedData={() => {
            setVideoLoaded(true);
          }}
          onPlay={() => {
            setIsPlaying(true);
            setIsEnded(false);
          }}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnded}
          className="w-full h-full min-w-full min-h-full object-cover object-top sm:object-[center_20%] lg:object-center absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 1 : 0.9 }}
        />

        {/* Responsive Mobile-Friendly Gradient: Clear on Top (Face Area), Dark on Bottom (Text Area) */}
        {/* Mobile & Tablet Gradient Overlay */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-40% to-black/95 to-85%" />
        
        {/* Desktop Gradient Overlay */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="hidden lg:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      {/* Floating Audio Status Badge / Fallback Button in Top Corner */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-6 md:right-12 z-20">
        <AnimatePresence mode="wait">
          {audioBlocked ? (
            <motion.button
              key="unmute-fallback"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              type="button"
              onClick={handleTapForAudio}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,42,42,0.6)] flex items-center gap-2 transition-all hover:scale-105 animate-bounce"
            >
              <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Tap for Audio</span>
            </motion.button>
          ) : (
            <motion.div
              key="sound-active"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl text-white shadow-xl flex items-center gap-1.5 sm:gap-2"
            >
              <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff2a2a] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                Sound Active
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Container - Bottom Positioned on Mobile to Reveal Face */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 md:px-12 pb-8 sm:pb-12 lg:pb-0 lg:pt-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12">
        {/* Left Content Area - Compact & Non-Obstructive on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 lg:bg-white/10 border border-white/15 backdrop-blur-md mb-2 sm:mb-4">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
              MCA Student &bull; Full Stack Developer
            </span>
          </div>

          {/* Headings - Scaled for Mobile Cleanliness */}
          <div className="space-y-0 sm:space-y-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold font-display tracking-tight text-white">
              Hi, I'm a
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter uppercase text-stroke-white select-none hover:text-white transition-colors duration-500">
              Full Stack Developer
            </h1>
          </div>

          {/* Subheading Intro - Clean & Legible */}
          <p className="mt-2.5 sm:mt-4 text-xs sm:text-base md:text-lg text-white/90 font-sans leading-relaxed max-w-xl font-normal drop-shadow-md">
            I'm an aspiring Software Developer and MCA student passionate about building practical software solutions
            and exploring emerging technologies.
          </p>

          {/* Action CTAs & Mobile Play Reel Controller */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA: View My Work */}
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#ff2a2a] hover:text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] active:scale-95 flex items-center gap-1.5 sm:gap-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Contact Me */}
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-black/50 border border-white/25 backdrop-blur-xl text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/20 hover:border-white/50 active:scale-95 flex items-center gap-1.5 sm:gap-2"
            >
              <span>Contact Me</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff2a2a]" />
            </button>

            {/* Mobile-Only Compact Play/Pause Button */}
            <button
              type="button"
              onClick={handleTogglePlayPause}
              className="lg:hidden px-4 py-2.5 rounded-full bg-black/60 border border-white/30 backdrop-blur-xl text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 active:scale-95 hover:border-[#ff2a2a]"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#ff2a2a]" /> : <Play className="w-3.5 h-3.5 ml-0.5 text-white" />}
              <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Desktop-Only Circular Glassmorphic Play Reel Controller */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col items-center justify-center gap-4 lg:pr-8"
        >
          <div className="relative group">
            {/* Outer Pulsing Glow Ring */}
            <div
              className={`absolute -inset-4 rounded-full bg-[#ff2a2a]/25 blur-xl transition-opacity duration-500 group-hover:opacity-100 ${
                isPlaying ? 'opacity-80 animate-pulse' : 'opacity-20'
              }`}
            />

            {/* Orbiting Rotating Dashed Ring */}
            <svg
              className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] animate-spin-slow pointer-events-none text-white/30"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />
            </svg>

            {/* Play/Pause Button Circle */}
            <button
              type="button"
              onClick={handleTogglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video with sound'}
              className="relative w-28 h-28 rounded-full bg-black/50 border border-white/40 backdrop-blur-2xl flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:border-[#ff2a2a] hover:shadow-[0_0_35px_rgba(255,42,42,0.8)] shadow-2xl cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-10 h-10 text-white fill-current transition-transform duration-300" />
              ) : (
                <Play className="w-10 h-10 text-white fill-current ml-1 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Status Label */}
          <div className="text-center">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-white/90 transition-colors duration-300 group-hover:text-[#ff2a2a]">
              {isPlaying ? 'PAUSE REEL' : 'PLAY REEL'}
            </span>
            <p className="text-[10px] font-mono text-white/50 tracking-wider mt-0.5">
              AI CREATIVE SHOWCASE
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:border-[#ff2a2a] transition-colors"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
