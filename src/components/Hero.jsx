import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown, Sparkles, ArrowRight, Volume2, VolumeX, RotateCcw } from 'lucide-react';

export default function Hero({ isReady }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  // Initialize video element directly on mount with muted properties to guarantee browser autoplay compliance
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
    }
  }, []);

  // Synchronize playback with Preloader completion
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isReady) {
      // While preloader is active, keep video paused at 0:00 so speech isn't wasted
      try {
        video.pause();
        video.currentTime = 0;
      } catch (_) {}
    } else {
      // Preloader animation has finished: start smooth muted background reel from 0:00
      video.currentTime = 0;
      video.muted = true;
      video.defaultMuted = true;
      setIsMuted(true);
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsEnded(false);
          })
          .catch((err) => {
            console.warn('Muted background autoplay note:', err);
          });
      }
    }
  }, [isReady]);

  // Handle video ending naturally
  const handleVideoEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // Ambient background mode: loop seamlessly so the hero background stays alive
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      // Audio speech mode: intro finished cleanly! Pause and invite user to replay
      video.pause();
      setIsPlaying(false);
      setIsEnded(true);
    }
  };

  // Dedicated Audio Mute / Unmute Toggle Handler
  const handleToggleMute = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      // User tapped to UNMUTE and listen!
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);

      // If video had ended, was paused, or near end, restart from beginning so speech is heard in full
      if (video.paused || isEnded || video.ended || video.currentTime >= (video.duration || 7.7) - 0.3) {
        video.currentTime = 0;
        setIsEnded(false);
      }
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio play request error:', err);
        });
    } else {
      // User tapped to MUTE
      video.muted = true;
      setIsMuted(true);
    }
  };

  // Primary Reel Controller: Single-Click Play with Sound / Pause / Replay
  const handleTogglePlayPause = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const video = videoRef.current;
    if (!video) return;

    if (isEnded || video.ended) {
      // Replay speech with sound from beginning
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      setIsEnded(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else if (video.paused) {
      // Resuming from pause: play with sound
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else if (isMuted) {
      // Video is running as muted background: user clicked Play Reel to hear it!
      // Start from 0:00 with full sound!
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
      setIsEnded(false);
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      // Currently playing with sound: pause it
      video.pause();
      setIsPlaying(false);
    }
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] select-none pt-24 pb-16 lg:py-0"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Bio Content & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[50%] xl:w-[48%] text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase">
              MCA Student &bull; AI/ML &amp; Software Developer
            </span>
          </div>

          {/* Headings */}
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white/90">
              Hi, I'm an
            </h2>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/75">
              AI/ML Engineer
            </h1>
          </div>

          {/* Subheading Intro */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-xl font-normal">
            I'm an aspiring AI/ML Engineer and Software Developer passionate about building intelligent, practical solutions with modern technologies.
          </p>

          {/* Action CTAs & Desktop Reel Control */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary CTA: View My Work */}
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#ff2a2a] hover:text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Contact Me */}
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/20 hover:border-white/50 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Me</span>
              <Sparkles className="w-4 h-4 text-[#ff2a2a]" />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Clear, Auto-Adjusting Full Video Showcase (NO text, NO black masks) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="w-full lg:w-[50%] xl:w-[52%] flex flex-col items-center justify-center"
        >
          {/* Responsive Video Container - Auto Adjusts on Both Mobile & Desktop with Zero Letter Overlay */}
          <div className="w-full max-w-2xl aspect-[16/10] sm:aspect-video rounded-3xl overflow-hidden bg-black border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative group">
            {/* 100% Clear Video - Auto Adjust Full Video */}
            <video
              ref={videoRef}
              playsInline
              webkit-playsinline="true"
              preload="auto"
              muted
              defaultMuted
              poster="/tharanish.png"
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: videoLoaded ? 1 : 0.85 }}
            >
              <source src={`${import.meta.env.BASE_URL}ai-video.mp4`} type="video/mp4" />
              <source src="/ai-video.mp4" type="video/mp4" />
              <img
                src="/tharanish.png"
                alt="Tharanishvaran R"
                className="w-full h-full object-cover"
              />
            </video>

            {/* Audio Toggle Button - Positioned in top-right of the video */}
            <div className="absolute top-3.5 right-3.5 z-20">
              <AnimatePresence mode="wait">
                {isMuted ? (
                  <motion.button
                    key="btn-unmute"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    type="button"
                    onClick={handleToggleMute}
                    aria-label="Unmute audio"
                    className="px-3.5 py-1.5 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white font-mono font-bold text-[11px] uppercase tracking-wider shadow-[0_0_20px_rgba(255,42,42,0.6)] flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Unmute</span>
                  </motion.button>
                ) : (
                  <motion.button
                    key="btn-mute"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    type="button"
                    onClick={handleToggleMute}
                    aria-label="Mute audio"
                    className="px-3.5 py-1.5 rounded-full bg-black/70 hover:bg-black/90 border border-white/25 hover:border-[#ff2a2a] backdrop-blur-xl text-white shadow-xl flex items-center gap-1.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#ff2a2a] animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                      Sound On
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Play / Pause / Replay Floating Pill Button in Bottom Left of Video Card */}
            <div className="absolute bottom-3.5 left-3.5 z-20">
              <button
                type="button"
                onClick={handleTogglePlayPause}
                aria-label={
                  isEnded
                    ? 'Replay reel'
                    : isPlaying && !isMuted
                    ? 'Pause reel'
                    : 'Play reel with sound'
                }
                className="px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/25 backdrop-blur-xl text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300 hover:border-[#ff2a2a] hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isEnded ? (
                  <RotateCcw className="w-3.5 h-3.5 text-white" />
                ) : isPlaying && !isMuted ? (
                  <Pause className="w-3.5 h-3.5 text-[#ff2a2a]" />
                ) : (
                  <Play className="w-3.5 h-3.5 ml-0.5 text-white" />
                )}
                <span>
                  {isEnded
                    ? 'Replay Reel'
                    : isPlaying && !isMuted
                    ? 'Pause'
                    : 'Play With Sound'}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20 cursor-pointer"
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
