import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Sparkles, Linkedin, Github, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#111111] text-[#F4F4F4] pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800/80 min-h-[50vh] flex flex-col justify-between overflow-hidden select-none">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#ff2a2a]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* 1. Top Section: Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-neutral-800/80 pb-16">
          {/* Left Column: Core Disciplines */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#ff2a2a] block font-bold">
              Core Disciplines
            </span>
            <ul className="space-y-1.5 text-xs font-mono tracking-widest text-[#D4D4D4] uppercase">
              <li className="hover:text-white transition-colors">&bull; Full Stack Software Development</li>
              <li className="hover:text-white transition-colors">&bull; Python & AI RAG Systems</li>
              <li className="hover:text-white transition-colors">&bull; .NET Desktop Enterprise Systems</li>
              <li className="hover:text-white transition-colors">&bull; MySQL & Relational DB Architecture</li>
              <li className="hover:text-white transition-colors">&bull; Algorithmic Engineering (Java/C)</li>
            </ul>
          </div>

          {/* Center Column: Academic Standing */}
          <div className="space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#ff2a2a] block font-bold">
              Academic Standing
            </span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">MCA Student (CGPA: 9.33) &bull; SMVEC</p>
              <p className="text-xs font-mono text-neutral-400">BCA Graduate &bull; St. Joseph's College</p>
              <p className="text-xs font-mono text-neutral-400">Villupuram, Tamil Nadu, India</p>
            </div>
            <div className="pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-white underline underline-offset-4 decoration-[#ff2a2a] hover:text-[#ff2a2a] transition-colors group"
              >
                <span>Explore Featured Work</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Availability & Status */}
          <div className="space-y-3 md:text-right">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#ff2a2a] block font-bold">
              Engagement Status
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-pulse" />
              <span className="text-xs font-mono text-white">Available Worldwide</span>
            </div>
            <p className="text-xs font-mono text-neutral-400">Current Year: 2026</p>
            <p className="text-xs font-mono text-neutral-300">+91 9994421390</p>
          </div>
        </div>

        {/* 2. Center Hero Branding: Correctly Sized & Clamped so 'Tharanish' / 'h' is completely visible */}
        <div className="w-full text-center py-4 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-default inline-block max-w-full"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black font-display tracking-normal leading-none text-[#F4F4F4] lowercase select-none transition-all duration-700 group-hover:text-white group-hover:drop-shadow-[0_0_50px_rgba(255,42,42,0.4)] px-2">
              tharanish
            </h2>
          </motion.div>
        </div>

        {/* 3. Bottom Section: Verified Socials & Copyright */}
        <div className="pt-8 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-xs font-mono text-neutral-400">
          {/* Left Column: Copyright */}
          <div>
            <p className="text-neutral-400">
              &copy; 2026 <strong className="text-white">THARANISHVARAN R</strong>.
            </p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Aspiring Software Developer & MCA Student.
            </p>
          </div>

          {/* Center Column: Direct Email */}
          <div className="md:text-center">
            <a
              href="mailto:tharanishvaranr@gmail.com"
              className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-[#ff2a2a] transition-colors"
            >
              tharanishvaranr@gmail.com
            </a>
          </div>

          {/* Right Column: Social Links & Scroll-to-Top */}
          <div className="flex items-center md:justify-end gap-5">
            <a
              href="https://www.linkedin.com/in/tharanishvaran"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#ff2a2a]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/tharanishvaran"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/tharanishvaran/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white hover:underline transition-colors flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5 text-[#ff2a2a]" />
              <span>LeetCode</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-[#ff2a2a] transition-all ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
