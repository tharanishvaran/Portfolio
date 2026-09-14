import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Terminal, CheckCircle2 } from 'lucide-react';

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - card.left) / card.width - 0.5;
    const y = (e.clientY - card.top) / card.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="relative w-full bg-[#FF2A2A] text-white pt-24 pb-32 overflow-hidden">
      {/* Floating Black Star Decorations with Pulse & Slow Spin */}
      <div className="absolute top-16 left-10 pointer-events-none opacity-20 hover:opacity-40 transition-opacity">
        <svg className="w-12 h-12 text-black animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-12 pointer-events-none opacity-15">
        <svg className="w-16 h-16 text-black animate-pulse-subtle" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="absolute bottom-36 left-1/3 pointer-events-none opacity-20">
        <svg className="w-8 h-8 text-black animate-spin-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hanging Lanyard Conference/Employee ID Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Lanyard Top Strap */}
            <div className="w-10 h-24 lanyard-strap rounded-b-md relative z-10 shadow-2xl flex items-center justify-center">
              <div className="w-4 h-full bg-black/40" />
            </div>

            {/* Metal Clip Mechanism */}
            <div className="relative z-20 -mt-2 flex flex-col items-center">
              <div className="w-8 h-5 metallic-clip rounded-sm border border-neutral-400" />
              <div className="w-3 h-4 bg-neutral-800 rounded-b-sm border-t-0 border border-neutral-600" />
              <div className="w-5 h-5 rounded-full border-2 border-neutral-700 bg-neutral-900 -mt-1 shadow-md" />
            </div>

            {/* Suspended ID Badge Card with 3D Tilt */}
            <motion.div
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) rotate(-3deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative -mt-3 w-full max-w-sm bg-[#121212] text-white rounded-3xl p-6 md:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.6)] border border-neutral-800/80 transition-transform duration-200 ease-out cursor-grab active:cursor-grabbing"
            >
              {/* Badge Top Slot/Hole Detail */}
              <div className="w-16 h-3 bg-neutral-900 mx-auto rounded-full border border-neutral-700/80 mb-5 shadow-inner" />

              {/* Badge Header with Holographic Dev Chip */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff2a2a] animate-ping" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-neutral-400 uppercase">
                    DEV PASS 2026
                  </span>
                </div>
                <div className="w-8 h-6 rounded bg-gradient-to-tr from-amber-600/70 to-amber-300/90 border border-amber-200/50 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2 gap-0.5 opacity-50">
                    <div className="border-r border-b border-amber-900/50" />
                    <div className="border-b border-amber-900/50" />
                  </div>
                </div>
              </div>

              {/* Profile Image with Attached User Photo */}
              <div className="relative mx-auto w-44 h-52 rounded-2xl overflow-hidden bg-neutral-900 border-2 border-neutral-700/80 shadow-2xl group">
                {!imgError ? (
                  <img
                    src="/profile.png"
                    alt="Tharanishvaran R"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-b from-neutral-800 to-black flex flex-col items-center justify-center relative">
                    <div className="w-20 h-20 rounded-full bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-4xl font-display font-black text-white">
                      T
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 mt-2 font-medium tracking-wider">
                      VERIFIED DEVELOPER
                    </span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-[#ff2a2a] text-white shadow-lg flex items-center gap-1 border border-white/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="text-[9px] font-mono font-bold uppercase pr-1">Verified</span>
                </div>
              </div>

              {/* Badge Credentials */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold font-display tracking-tight text-white uppercase">
                  THARANISHVARAN R
                </h3>
                <p className="text-xs font-mono font-semibold text-[#ff2a2a] uppercase tracking-wider mt-1">
                  MCA STUDENT &bull; AI/ML &amp; SOFTWARE DEVELOPER
                </p>
                <div className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                  <MapPin className="w-3 h-3 text-[#ff2a2a]" />
                  <span>Villupuram, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Institution / Quick Specs - CGPA 9.33 */}
              <div className="mt-4 pt-3 border-t border-neutral-800/80 grid grid-cols-2 gap-2 text-left">
                <div className="bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">Education</span>
                  <span className="text-xs font-semibold text-neutral-200">MCA (Pursuing)</span>
                  <span className="text-[10px] text-[#ff2a2a] block font-mono font-bold">CGPA: 9.33 / 10</span>
                </div>
                <div className="bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                  <span className="text-[9px] font-mono text-neutral-500 uppercase block">Institution</span>
                  <span className="text-xs font-semibold text-neutral-200">SMVEC Pondicherry</span>
                  <span className="text-[10px] text-neutral-400 block font-mono">2025 - 2027</span>
                </div>
              </div>

              {/* Barcode & ID */}
              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex gap-1 h-6 items-center opacity-75">
                  {[2, 4, 1, 3, 5, 2, 1, 4, 3, 2, 5, 1, 2, 4, 2].map((w, i) => (
                    <div key={i} className="bg-white h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">#THAR-2026-MCA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Bio & Core Technology Stack */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Attractive Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 border border-black/20 backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-black animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-black/90">
                About Me &bull; Profile Story
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.h2
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl font-black font-display tracking-tight text-black select-none"
            >
              Hello!
            </motion.h2>

            {/* Name & Role Highlight with Attractive Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="space-y-2.5"
            >
              <h3 className="text-2xl sm:text-4xl md:text-4xl font-extrabold font-outfit tracking-tight text-white uppercase flex flex-wrap items-center gap-2 sm:gap-3">
                <span>I am</span>
                <span className="text-black bg-white px-3.5 py-1 rounded-xl shadow-lg border border-black/10 tracking-normal font-black">
                  THARANISHVARAN R
                </span>
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-black/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono tracking-widest text-white font-bold uppercase">
                  MCA Student &bull; AI/ML &amp; Software Developer
                </span>
              </div>
            </motion.div>

            {/* Bio Story with Attractive Font & Styled Cards */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="p-6 sm:p-7 rounded-3xl bg-black/25 backdrop-blur-xl border border-black/20 shadow-2xl space-y-4"
            >
              <p className="text-white text-base sm:text-lg leading-relaxed font-outfit font-normal">
                Currently pursuing my <strong className="text-white font-bold">Master of Computer Applications (MCA)</strong> at{' '}
                <span className="font-bold text-white underline decoration-white/40 underline-offset-4">Sri Manakula Vinayagar Engineering College</span>{' '}
                with an outstanding academic standing of{' '}
                <span className="inline-block px-2.5 py-0.5 rounded-lg bg-white text-black font-black text-sm tracking-wide shadow-md">
                  CGPA: 9.33 / 10
                </span>, following my{' '}
                <strong className="text-white font-bold">Bachelor of Computer Applications (BCA)</strong> at{' '}
                <span className="font-bold text-white">St. Joseph's College of Arts and Science</span>.
              </p>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed font-outfit font-light">
                I engineer robust, production-ready software systems, solve intricate algorithmic problems, and build intelligent AI architectures. With foundational mastery in{' '}
                <span className="font-semibold text-white">Java, Python, C, and Object-Oriented Programming</span>,
                I architect desktop enterprise tools in .NET, dynamic database applications with MySQL, and high-accuracy Retrieval-Augmented Generation (RAG) pipelines with LangChain and ChromaDB.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs font-mono flex items-center gap-2 shadow-inner">
                  <Terminal className="w-4 h-4 text-white" />
                  <span>40+ LeetCode Challenges Solved</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-black/40 border border-white/20 text-white text-xs font-mono flex items-center gap-2 shadow-inner">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Python &amp; Java Certified</span>
                </div>
              </div>
            </motion.div>

            {/* Core Technology Stack: Java, Python / AI, and C Language */}
            <div className="pt-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-black/80 block mb-4">
                Core Technology Stack
              </span>

              <div className="grid grid-cols-3 gap-4 max-w-lg">
                {/* 1. Official Authentic Java Coffee Cup Logo */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-black/20 flex flex-col items-center justify-center gap-2 shadow-xl hover:bg-black/35 transition-all text-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg
                      className="w-11 h-11 text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Java Steaming Waves */}
                      <path
                        d="M13.8 2.5C13.8 2.5 16.5 5 13.5 8C10.5 11 11.5 13.5 11.5 13.5C11.5 13.5 9 11 12 8C15 5 13.8 2.5 13.8 2.5Z"
                        fill="#ff4444"
                      />
                      <path
                        d="M18.5 4.5C18.5 4.5 20.8 6.8 18.5 9.5C16.2 12.2 17 14.5 17 14.5C17 14.5 15 12.5 17.2 9.8C19.5 7.2 18.5 4.5 18.5 4.5Z"
                        fill="#ff8888"
                      />
                      {/* Java Cup Body */}
                      <path
                        d="M7 16C7 16 6.5 22.5 16 22.5C25.5 22.5 25 16 25 16H7Z"
                        fill="white"
                      />
                      {/* Java Cup Handle */}
                      <path
                        d="M23 17.5C24.5 17.5 26.5 18.5 26.5 20C26.5 21.5 24.5 22.5 23 22.5V20.8C23.8 20.8 24.8 20.4 24.8 20C24.8 19.6 23.8 19.2 23 19.2V17.5Z"
                        fill="white"
                      />
                      {/* Java Saucer / Base */}
                      <path
                        d="M5 25C9.5 27 22.5 27 27 25C25 28 7 28 5 25Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-white">Java</span>
                </motion.div>

                {/* 2. Python / AI Logo Card */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-black/20 flex flex-col items-center justify-center gap-2 shadow-xl hover:bg-black/35 transition-all text-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.914 0C5.82 0 6.2 2.64 6.2 2.64l.006 2.736h5.814v.828H3.882s-3.882.44-3.882 5.868c0 5.428 3.39 5.244 3.39 5.244h2.025v-2.842s-.11-3.39 3.33-3.39h5.753s3.21.054 3.21-3.155V2.64S18.01 0 11.914 0zm-3.23 1.706a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12.086 24c6.094 0 5.714-2.64 5.714-2.64l-.006-2.736H11.98v-.828h8.138s3.882-.44 3.882-5.868c0-5.428-3.39-5.244-3.39-5.244h-2.025v2.842s.11 3.39-3.33 3.39H9.492s-3.21-.054-3.21 3.155V21.36S5.99 24 12.086 24zm3.23-1.706a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
                    </svg>
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-white">Python / AI</span>
                </motion.div>

                {/* 3. C Language Logo Card */}
                <motion.div
                  whileHover={{ scale: 1.06, y: -4 }}
                  className="p-5 rounded-2xl bg-black/25 backdrop-blur-md border border-black/20 flex flex-col items-center justify-center gap-2 shadow-xl hover:bg-black/35 transition-all text-center group"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-white font-mono font-black text-3xl border-2 border-white/40 rounded-xl bg-black/20 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                    C
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-white">C Language</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Torn-Paper Organic SVG Transition */}
      <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 sm:h-24 md:h-28 text-white preserve-3d"
        >
          <path
            d="M0 120L48 102C96 84 192 48 288 38C384 28 480 44 576 56C672 68 768 76 864 68C960 60 1056 36 1152 28C1248 20 1344 28 1392 32L1440 36V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#ffffff"
          />
          <path
            d="M0 120L60 110C120 100 240 80 360 84C480 88 600 116 720 112C840 108 960 72 1080 64C1200 56 1320 76 1380 86L1440 96V120H0Z"
            fill="#ffffff"
            fillOpacity="0.4"
          />
        </svg>
      </div>
    </section>
  );
}
