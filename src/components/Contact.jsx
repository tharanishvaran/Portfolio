import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Check, Copy, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff2a2a', '#ffffff', '#111111'],
    });
  };

  return (
    <section id="contact" className="relative w-full bg-[#0a0a0a] text-white py-28 px-6 md:px-12 border-t border-neutral-900 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a]" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                  Initiate Dialogue
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
                Let's Build Something <span className="text-[#ff2a2a]">Extraordinary</span>
              </h2>
              <p className="mt-4 text-neutral-400 font-sans text-base leading-relaxed">
                Whether you're looking to hire a dedicated full-stack engineer, collaborate on an AI RAG architecture,
                or discuss high-scale systems, I'm always open to meaningful opportunities.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 flex items-center justify-between group hover:border-[#ff2a2a]/60 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">Direct Email</span>
                    <a
                      href="mailto:tharanishvaranr@gmail.com"
                      className="text-sm font-semibold text-white group-hover:text-[#ff2a2a] transition-colors"
                    >
                      tharanishvaranr@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('tharanishvaranr@gmail.com', 'email')}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-xl bg-neutral-900 hover:bg-[#ff2a2a] text-neutral-400 hover:text-white transition-colors"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 flex items-center justify-between group hover:border-[#ff2a2a]/60 transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">Telephone / WhatsApp</span>
                    <a
                      href="tel:+919994421390"
                      className="text-sm font-semibold text-white group-hover:text-[#ff2a2a] transition-colors"
                    >
                      +91 9994421390
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy('+919994421390', 'phone')}
                  title="Copy phone to clipboard"
                  className="p-2.5 rounded-xl bg-neutral-900 hover:bg-[#ff2a2a] text-neutral-400 hover:text-white transition-colors"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#141414] border border-neutral-800 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#ff2a2a]/10 text-[#ff2a2a] border border-[#ff2a2a]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Location</span>
                  <span className="text-sm font-semibold text-white">Villupuram, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Verified Social Connect Buttons */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
                Verified Social Channels
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/tharanishvaran"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#141414] border border-neutral-800 hover:border-[#ff2a2a] text-xs font-mono font-semibold text-white flex items-center gap-2 hover:bg-[#ff2a2a] transition-all hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/tharanishvaran"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#141414] border border-neutral-800 hover:border-[#ff2a2a] text-xs font-mono font-semibold text-white flex items-center gap-2 hover:bg-[#ff2a2a] transition-all hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact / Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-neutral-800 shadow-2xl relative">
              <h3 className="text-2xl font-bold font-display text-white mb-2">Send a Message</h3>
              <p className="text-xs font-mono text-neutral-400 mb-8">
                Response guaranteed within 24 business hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-neutral-900/80 border border-[#ff2a2a]/50 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ff2a2a]/20 border border-[#ff2a2a] text-[#ff2a2a] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-display text-white">Message Dispatched!</h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'Friend'}. I have received your note and will get back
                    to you at <span className="text-[#ff2a2a] font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-colors text-sm font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-colors text-sm font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Project or Message Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, role, timeline, or query..."
                      className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 focus:outline-none focus:border-[#ff2a2a] focus:ring-1 focus:ring-[#ff2a2a] transition-colors text-sm font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,42,42,0.4)] hover:shadow-[0_0_35px_rgba(255,42,42,0.7)] active:scale-[0.98]"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
