import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

const TOTAL_FRAMES = 40;
function pad(n) {
  return String(n).padStart(3, '0');
}

// Module-level image preloading for instant responsiveness
const frameImages = [];
if (typeof window !== 'undefined') {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const img = new Image();
    img.src = `/frames/ezgif-frame-${pad(i)}.jpg`;
    frameImages.push(img);
  }
}

export default function BackgroundVideoSection() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);
  const counterRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);

  // Animation state references
  const animState = useRef({
    current: 0,
    target: 0,
    rafId: null,
    isPlaying: false,
    playSpeed: 0.35, // frames per tick
  });

  const renderFrame = useCallback((idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const safeIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(idx)));
    const img = frameImages[safeIdx];

    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // Clear canvas so the dynamic background seamlessly shows through
    ctx.clearRect(0, 0, cw, ch);

    const imgW = img.naturalWidth || 720;
    const imgH = img.naturalHeight || 1280;
    const imgRatio = imgW / imgH;
    const canvasRatio = cw / ch;

    // 1. WIDE ATMOSPHERIC REEL LAYER (Spans entire width across desktop widescreen)
    if (canvasRatio > imgRatio) {
      ctx.save();
      const bgW = cw;
      const bgH = cw / imgRatio;
      const bgX = 0;
      const bgY = (ch - bgH) / 2;
      ctx.filter = 'blur(45px) brightness(0.8) saturate(1.3)';
      ctx.globalAlpha = 0.42;
      ctx.drawImage(img, bgX, bgY, bgW, bgH);
      ctx.restore();
    }

    // 2. CORE SHARP VIDEO REEL (Maximized height, 100% uncropped face & composition)
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      // Desktop widescreen: scale generously to 96% of stage height
      drawH = ch * 0.96;
      drawW = drawH * imgRatio;
      drawX = (cw - drawW) / 2;
      drawY = (ch - drawH) / 2;
    } else {
      // Mobile portrait: fit full width
      drawW = cw;
      drawH = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawH) / 2;
    }

    // Draw central sharp video frame with subtle rounded frame
    ctx.save();
    const cornerRadius = canvasRatio > imgRatio ? 22 : 0;
    if (cornerRadius > 0) {
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(drawX, drawY, drawW, drawH, cornerRadius);
      } else {
        ctx.rect(drawX, drawY, drawW, drawH);
      }
      ctx.clip();
    }
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();

    // Elegant glass border outline on desktop
    if (canvasRatio > imgRatio) {
      ctx.save();
      ctx.beginPath();
      if (typeof ctx.roundRect === 'function') {
        ctx.roundRect(drawX, drawY, drawW, drawH, 22);
      } else {
        ctx.rect(drawX, drawY, drawW, drawH);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.restore();
    }
  }, []);

  // Main animation tick
  const tick = useCallback(() => {
    const s = animState.current;

    if (s.isPlaying) {
      // Autoplay mode
      s.current = (s.current + s.playSpeed) % TOTAL_FRAMES;
      s.target = s.current;
    } else {
      // Scroll-scrub lerp mode
      const diff = s.target - s.current;
      if (Math.abs(diff) > 0.05) {
        s.current += diff * 0.14;
      } else {
        s.current = s.target;
      }
    }

    const frameIdx = Math.round(s.current);
    renderFrame(frameIdx);

    const frameNum = frameIdx + 1;
    if (counterRef.current) {
      counterRef.current.textContent = `${pad(frameNum)} / ${pad(TOTAL_FRAMES)}`;
    }
    setCurrentFrameDisplay(frameNum);

    const progress = s.current / (TOTAL_FRAMES - 1);
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${Math.min(Math.max(progress * 100, 0), 100)}%`;
    }

    s.rafId = requestAnimationFrame(tick);
  }, [renderFrame]);

  // Handle Resize & High-DPI Scaling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      renderFrame(animState.current.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial render
    const firstImg = frameImages[0];
    if (firstImg) {
      if (firstImg.complete && firstImg.naturalWidth) {
        renderFrame(0);
      } else {
        firstImg.onload = () => renderFrame(0);
      }
    }

    // Start requestAnimationFrame loop
    animState.current.rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animState.current.rafId) {
        cancelAnimationFrame(animState.current.rafId);
      }
    };
  }, [renderFrame, tick]);

  // Handle Scroll scrubbing & Smooth Dynamic Background Transition (About #FF2A2A -> Process #FFFFFF)
  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const scrollableHeight = container.offsetHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrolled = window.scrollY - containerTop;
      const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);

      // If user starts scrolling, pause autoplay and lock to scroll
      if (animState.current.isPlaying) {
        animState.current.isPlaying = false;
        setIsPlaying(false);
      }

      animState.current.target = progress * (TOTAL_FRAMES - 1);

      // Seamless background transition connecting About (#FF2A2A: 255, 42, 42) to Process (white: 255, 255, 255)
      const r = 255;
      const g = Math.round(42 + (255 - 42) * progress);
      const b = Math.round(42 + (255 - 42) * progress);
      if (stageRef.current) {
        stageRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    animState.current.isPlaying = nextState;
  };

  // Reset to first frame
  const handleReset = () => {
    animState.current.target = 0;
    animState.current.current = 0;
    animState.current.isPlaying = false;
    setIsPlaying(false);
    renderFrame(0);
  };

  // Manual scrub slider
  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    animState.current.isPlaying = false;
    setIsPlaying(false);
    animState.current.target = val - 1;
    animState.current.current = val - 1;
    renderFrame(val - 1);
  };

  return (
    <section
      id="video-experience"
      ref={containerRef}
      className="relative w-full select-none"
      style={{
        height: '220vh',
        background: 'linear-gradient(180deg, #FF2A2A 0%, #ff5252 25%, #ffffff 80%, #ffffff 100%)',
      }}
    >
      {/* Sticky Stage with Dynamic Background connecting About & Process */}
      <div
        ref={stageRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-150"
        style={{ backgroundColor: '#FF2A2A' }}
      >
        {/* Subtle Ambient Vignette & Backlight */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.3)_100%)]" 
        />

        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-black/10 z-30">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-white via-[#ff7f50] to-[#e8c96a] shadow-[0_0_12px_rgba(255,255,255,0.7)] transition-all duration-75"
            style={{ width: '0%' }}
          />
        </div>

        {/* Top Floating Badges */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-30 pointer-events-none">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase">
              Visual Reel
            </span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-xl text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#e8c96a]" />
            <span
              ref={counterRef}
              className="text-[10px] sm:text-xs font-mono font-bold tracking-widest"
            >
              001 / 040
            </span>
          </div>
        </div>

        {/* Maximized Width Visual Reel Presentation */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-1 sm:p-3 md:p-6">
          <div className="relative h-[94vh] sm:h-[96vh] max-h-[98vh] w-full max-w-[98vw] xl:max-w-[1500px] flex items-center justify-center rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              className="w-full h-full block"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>

        {/* Bottom Interactive Control Dock */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl text-white">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause sequence' : 'Play sequence'}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white transition-all text-[11px] sm:text-xs font-mono font-bold"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-[#ff2a2a]" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#e8c96a]" />
                <span>Auto Play</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            aria-label="Reset to beginning"
            title="Reset frame"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Frame Slider */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/20">
            <span className="hidden sm:inline text-[10px] font-mono text-white/60 uppercase">Scrub</span>
            <input
              type="range"
              min="1"
              max={TOTAL_FRAMES}
              value={currentFrameDisplay}
              onChange={handleSliderChange}
              className="w-20 sm:w-28 md:w-36 h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#ff2a2a]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
