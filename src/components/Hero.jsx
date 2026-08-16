import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronDown, Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function Hero({ isReady }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);

  // Unmuted audio starter
  const startAudio = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1.0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setAudioBlocked(false);
        })
        .catch((err) => {
          console.log('Autoplay unmuted blocked by browser policy:', err);
          // Browser requires user gesture for sound: play muted initially and show fallback
          video.muted = true;
          video.play().then(() => {
            setIsPlaying(true);
            setAudioBlocked(true);
          });
        });
    }
  }, []);

  // Sequence: When Preloader "THARANISH" animation finishes (isReady becomes true), start video & audio
  useEffect(() => {
    if (isReady && videoLoaded) {
      startAudio();
    }
  }, [isReady, videoLoaded, startAudio]);

  // Global user gesture fallback to instantly unlock unmuted audio on first interaction
  useEffect(() => {
    const unlockSoundOnGesture = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.volume = 1.0;
        video
          .play()
          .then(() => {
            setIsPlaying(true);
            setAudioBlocked(false);
          })
          .catch(() => {});
      }
      window.removeEventListener('click', unlockSoundOnGesture);
      window.removeEventListener('touchstart', unlockSoundOnGesture);
      window.removeEventListener('pointerdown', unlockSoundOnGesture);
      window.removeEventListener('scroll', unlockSoundOnGesture);
      window.removeEventListener('keydown', unlockSoundOnGesture);
    };

    window.addEventListener('click', unlockSoundOnGesture);
    window.addEventListener('touchstart', unlockSoundOnGesture);
    window.addEventListener('pointerdown', unlockSoundOnGesture);
    window.addEventListener('scroll', unlockSoundOnGesture, { passive: true });
    window.addEventListener('keydown', unlockSoundOnGesture);

    return () => {
      window.removeEventListener('click', unlockSoundOnGesture);
      window.removeEventListener('touchstart', unlockSoundOnGesture);
      window.removeEventListener('pointerdown', unlockSoundOnGesture);
      window.removeEventListener('scroll', unlockSoundOnGesture);
      window.removeEventListener('keydown', unlockSoundOnGesture);
    };
  }, []);

  // Single-Click Play/Pause Toggle Handler
  const handleTogglePlayPause = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.volume = 1.0;
      video
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioBlocked(false);
        })
        .catch(() => {
          video.muted = false;
          video.play().then(() => setIsPlaying(true));
        });
    } else {
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
      className="relative w-full min-h-screen h-screen flex items-center justify-between overflow-hidden bg-black select-none"
    >
      {/* Background AI Video - Responsive Full Bleed */}
      <div className="absolute inset-0 w-full h-full min-w-full min-h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/ai-video.mp4"
          autoPlay
          loop
          playsInline
          onLoadedData={() => {
            setVideoLoaded(true);
            if (isReady) startAudio();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="w-full h-full min-w-full min-h-full object-cover object-center absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 1 : 0.85 }}
        />

        {/* Cinematic Multi-Layer Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />
      </div>

      {/* Floating Audio Status Badge / Browser Policy Fallback Prompt */}
      <div className="absolute top-24 right-6 md:right-12 z-20">
        <AnimatePresence mode="wait">
          {audioBlocked ? (
            /* Fallback Button if browser blocked initial unmuted autoplay */
            <motion.button
              key="unmute-fallback"
              initial={{ opacity: 0, scale: 0.9, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                startAudio();
              }}
              className="px-4 py-2 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(255,42,42,0.6)] flex items-center gap-2 transition-all hover:scale-105 animate-bounce"
            >
              <VolumeX className="w-4 h-4" />
              <span>Tap to Enable Audio</span>
            </motion.button>
          ) : (
            /* Sound Active Indicator */
            <motion.div
              key="sound-active"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-4 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-xl text-white shadow-xl flex items-center gap-2"
            >
              <Volume2 className="w-4 h-4 text-[#ff2a2a] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-white font-bold">
                Sound Active
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-12 pt-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              MCA Student &bull; Full Stack Developer
            </span>
          </motion.div>

          {/* Headings */}
          <div className="space-y-1 md:space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white"
            >
              Hi, I'm a
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tighter uppercase text-stroke-white select-none hover:text-white transition-colors duration-500"
            >
              Full Stack Developer
            </motion.h1>
          </div>

          {/* Subheading Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg text-white/90 font-sans leading-relaxed max-w-xl font-normal drop-shadow-md"
          >
            I'm an aspiring Software Developer and MCA student passionate about building practical software solutions
            and exploring emerging technologies.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA: View My Work */}
            <button
              type="button"
              onClick={() => scrollTo('#projects')}
              className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#ff2a2a] hover:text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,42,42,0.6)] active:scale-95 flex items-center gap-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Secondary CTA: Contact Me */}
            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="px-8 py-4 rounded-full bg-black/40 border border-white/25 backdrop-blur-xl text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <Sparkles className="w-4 h-4 text-[#ff2a2a]" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Circular Glassmorphic Play Reel Controller */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-4 lg:pr-8"
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

            {/* Play/Pause Button Circle - Single Click Guaranteed */}
            <button
              type="button"
              onClick={handleTogglePlayPause}
              aria-label={isPlaying ? 'Pause video' : 'Play video with sound'}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black/50 border border-white/40 backdrop-blur-2xl flex items-center justify-center text-white transition-all duration-500 hover:scale-110 hover:border-[#ff2a2a] hover:shadow-[0_0_35px_rgba(255,42,42,0.8)] shadow-2xl cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current transition-transform duration-300" />
              ) : (
                <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current ml-1 transition-transform duration-300" />
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 z-20 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/60">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 rounded-full border border-white/25 bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:border-[#ff2a2a] transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
