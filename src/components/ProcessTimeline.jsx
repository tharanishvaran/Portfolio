import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, Sparkles, Check } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Define',
    tagline: 'Requirements Analysis & Architecture Strategy',
    description:
      'Deep dive into business logic, relational schemas (MySQL / SQL Server), algorithmic workflows (Java / C), and AI RAG pipelines (Python, LangChain, ChromaDB) for clean execution.',
    icon: Search,
    rotation: 'rotate-2 md:rotate-3',
    position: 'md:translate-x-12 lg:translate-x-20',
    align: 'right',
    deliverables: ['System Architecture', 'DB Schema (MySQL / ChromaDB)', 'Functional Scope & Logic'],
  },
  {
    step: '02',
    title: 'Design',
    tagline: 'System Design & Modular Blueprinting',
    description:
      'Architecting clean class diagrams, OOP hierarchies, database normalization, responsive layout wireframes, and intuitive user workflows.',
    icon: PenTool,
    rotation: '-rotate-2 md:-rotate-3',
    position: 'md:-translate-x-12 lg:-translate-x-20',
    align: 'left',
    deliverables: ['OOP Architecture', 'Database Normalization', 'Workflow Wireframes'],
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Software Engineering & AI Integration',
    description:
      'Writing clean, maintainable, and high-performance code across Python RAG systems, .NET enterprise desktop applications, PHP web engines, and optimized SQL queries.',
    icon: Code2,
    rotation: 'rotate-1 md:rotate-2',
    position: 'md:translate-x-12 lg:translate-x-20',
    align: 'right',
    deliverables: ['.NET & C# Desktop Apps', 'LangChain / ChromaDB RAG', 'ACID-Compliant MySQL'],
  },
  {
    step: '04',
    title: 'Launch',
    tagline: 'Testing, Debugging & Production Delivery',
    description:
      'Rigorous unit testing, memory optimization, edge-case validation, comprehensive technical documentation, and production delivery.',
    icon: Rocket,
    rotation: '-rotate-1 md:-rotate-2',
    position: 'md:-translate-x-12 lg:-translate-x-20',
    align: 'left',
    deliverables: ['Automated Unit Tests', 'Performance Profiling', 'Production Delivery & Docs'],
  },
];

export default function ProcessTimeline() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section id="process" className="relative w-full bg-white text-black py-28 px-6 md:px-12 bg-subtle-grid overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-24">
        {/* Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/15 bg-neutral-50 shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a]" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-800">
            How we work
          </span>
        </motion.div>

        {/* Main Editorial Headline */}
        <div className="relative inline-block">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-neutral-900 leading-[1.15]"
          >
            Let us show you how we drive your brand to{' '}
            <span className="text-[#ff2a2a] relative inline-block underline decoration-wavy decoration-[#ff2a2a]/30 decoration-2">
              new heights
            </span>
          </motion.h2>

          {/* Hand-drawn Sketch Arrow Beside Headline */}
          <div className="hidden lg:block absolute -right-24 top-2 pointer-events-none">
            <svg width="90" height="70" viewBox="0 0 100 80" fill="none" className="text-[#ff2a2a]">
              <path
                d="M10 60 C 30 10, 70 15, 85 45"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M75 48 L 85 45 L 88 33"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="text-[11px] font-mono font-bold text-[#ff2a2a] -rotate-12 block mt-1">
              smooth flow
            </span>
          </div>
        </div>

        {/* Sub-paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          A methodical, structured software engineering workflow designed for resilient execution — from initial
          architecture scoping to robust production delivery.
        </motion.p>
      </div>

      {/* Main Timeline & S-Curve Container */}
      <div className="max-w-6xl mx-auto relative">
        {/* Giant Curved Dashed S-Curve SVG Timeline for Desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1400"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 500 0 
                 C 800 200, 850 400, 500 550 
                 C 150 700, 200 900, 500 1050 
                 C 750 1200, 700 1350, 500 1400"
              stroke="#111111"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              fill="none"
              className="opacity-70 animate-dash"
            />
          </svg>
        </div>

        {/* Process Cards Grid */}
        <div className="space-y-16 md:space-y-24 relative z-10">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === index;

            return (
              <div
                key={item.step}
                className={`flex flex-col ${
                  item.align === 'right' ? 'md:items-end' : 'md:items-start'
                } items-center`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`w-full max-w-lg cursor-pointer transition-all duration-500 transform ${item.rotation} ${item.position} group`}
                >
                  {/* Luggage Tag / Conference Badge Card Container */}
                  <div
                    className={`relative rounded-[2rem] p-8 md:p-10 border transition-all duration-500 shadow-xl overflow-hidden ${
                      isActive
                        ? 'bg-[#FF2A2A] text-white border-[#FF2A2A] shadow-[0_20px_50px_rgba(255,42,42,0.4)] scale-105'
                        : 'bg-white text-neutral-900 border-neutral-200/80 hover:border-neutral-400 hover:shadow-2xl'
                    }`}
                  >
                    {/* Hole Punch Detail with Metal Grommet at Top Center */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div
                        className={`w-5 h-5 rounded-full border-2 shadow-inner transition-colors duration-500 ${
                          isActive
                            ? 'bg-[#b81818] border-white/40'
                            : 'bg-neutral-100 border-neutral-300'
                        }`}
                      />
                    </div>

                    {/* Card Header: Big Italic Serif Step & Icon */}
                    <div className="flex items-center justify-between pt-3 mb-6">
                      <span
                        className={`text-4xl md:text-5xl font-serif italic font-bold tracking-tighter transition-colors ${
                          isActive ? 'text-white' : 'text-neutral-400 group-hover:text-black'
                        }`}
                      >
                        {item.step}
                      </span>
                      <div
                        className={`p-3 rounded-2xl border transition-all duration-500 ${
                          isActive
                            ? 'bg-white/20 border-white/40 text-white'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-800 group-hover:bg-[#FF2A2A] group-hover:text-white group-hover:border-[#FF2A2A]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Title & Tagline */}
                    <h3
                      className={`text-2xl md:text-3xl font-extrabold font-display tracking-tight transition-colors ${
                        isActive ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs font-mono font-semibold uppercase tracking-wider mt-1 mb-4 transition-colors ${
                        isActive ? 'text-white/80' : 'text-[#ff2a2a]'
                      }`}
                    >
                      {item.tagline}
                    </p>

                    {/* Description Body */}
                    <p
                      className={`text-sm md:text-base leading-relaxed transition-colors ${
                        isActive ? 'text-white/90' : 'text-neutral-600'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Key Deliverables Pills */}
                    <div className="mt-6 pt-5 border-t border-black/10 flex flex-wrap gap-2">
                      {item.deliverables.map((deliv) => (
                        <span
                          key={deliv}
                          className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-3 py-1 rounded-full transition-colors ${
                            isActive
                              ? 'bg-black/20 text-white'
                              : 'bg-neutral-100 text-neutral-700'
                          }`}
                        >
                          <Check className="w-3 h-3 text-[#ff2a2a] group-hover:text-white" />
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sketchbook Aesthetic Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center relative z-10"
        >
          <div className="inline-block p-6 rounded-3xl bg-neutral-900 text-white shadow-2xl rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 border border-neutral-800">
            <p className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white flex items-center justify-center gap-3">
              <span>Ready to be delivered!</span>
              <span className="text-[#ff2a2a]">&#x2728;</span>
            </p>
            <p className="text-xs font-mono text-neutral-400 mt-2 uppercase tracking-widest">
              From requirement specifications to reliable production software
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
