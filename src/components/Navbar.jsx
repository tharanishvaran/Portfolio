import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills & Education', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-0.5 text-2xl md:text-3xl font-black font-display tracking-tight text-white transition-transform duration-300 hover:scale-105"
          >
            <span>Tharanish</span>
            <span className="text-[#ff2a2a] group-hover:animate-ping inline-block">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors duration-300 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff2a2a] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] group"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Down Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden p-4"
          >
            <div className="bg-[#111111]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl overflow-hidden">
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between py-3 px-4 rounded-2xl text-lg font-semibold text-white/90 hover:text-white hover:bg-[#ff2a2a] transition-all duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-70" />
                  </a>
                ))}

                <div className="pt-4 border-t border-white/10 mt-2">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,42,42,0.5)] transition-colors"
                  >
                    <span>Get In Touch</span>
                    <Sparkles className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
