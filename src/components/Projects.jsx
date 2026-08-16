import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Database, Cpu, Layers, ArrowUpRight, CheckCircle2, Monitor, FileText, Activity } from 'lucide-react';

const PROJECTS = [
  {
    id: 'smartdoc-ai',
    title: 'SmartDoc AI',
    tagline: 'Intelligent RAG Document Question-Answering Engine',
    category: 'AI / Retrieval-Augmented Generation',
    featured: true,
    image: '/smartdoc_preview.jpg',
    description:
      'Engineered a Python-based Retrieval-Augmented Generation (RAG) system that processes complex PDF/DOCX files, converts them into high-dimensional semantic embeddings, and generates accurate, context-aware answers with inline citations.',
    highlights: [
      'Document parsing & chunking via LangChain text splitters',
      'Semantic vector embeddings using sentence-transformers',
      'Vector similarity search & persistence using ChromaDB',
      'Interactive conversational web interface built with Streamlit',
    ],
    tech: ['Python', 'LangChain', 'ChromaDB', 'Sentence Transformers', 'Streamlit'],
    github: 'https://github.com/tharanishvaran',
    metrics: '99.2% Retrieval Accuracy',
    accentColor: '#ff2a2a',
    badge: 'AI & RAG Engine',
  },
  {
    id: 'product-management',
    title: 'Product & Employee Management System',
    tagline: '.NET Desktop Application for Enterprise Resource & Inventory Control',
    category: '.NET Desktop Application',
    featured: true,
    image: null, // Visual representation rendered via interactive dashboard preview
    description:
      'Developed a comprehensive .NET desktop application built in C# to streamline product inventory lifecycle, employee credentials, role-based access management, and automated sales reporting with relational database persistence.',
    highlights: [
      'Robust desktop UI architecture built with C# and .NET Windows Forms',
      'Employee record tracking, shift logs, and department assignments',
      'Real-time product inventory auditing, SKU tracking, and low-stock alerts',
      'Relational database integration with ACID-compliant MySQL / SQL Server queries',
    ],
    tech: ['.NET Framework', 'C#', 'Windows Forms', 'MySQL', 'OOP Principles'],
    github: 'https://github.com/tharanishvaran',
    metrics: 'Automated Stock Auditing',
    accentColor: '#38bdf8',
    badge: '.NET Enterprise System',
  },
  {
    id: 'cricket-scorer',
    title: 'Cricket Scorer Platform',
    tagline: 'Automated Match Scoring & Dynamic Scorecard Engine',
    category: 'Web Database Application',
    featured: true,
    image: null, // Visual representation rendered via interactive scoreboard preview
    description:
      'Developed a full-stack cricket scoring and match analytics web platform that computes real-time match scores, calculates batsman strike rates and bowler economy, and generates downloadable match scorecards with database persistence.',
    highlights: [
      'Real-time ball-by-ball score tracking and dynamic run rate calculation',
      'Automated scorecard generation with detailed player performance tables',
      'Relational match record storage and query optimization with MySQL',
      'Clean, accessible interface designed for match umpires and scorers',
    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/tharanishvaran',
    metrics: 'Instant Scorecard Generation',
    accentColor: '#10b981',
    badge: 'PHP & MySQL Engine',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0d0d0d] text-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#ff2a2a]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#ff2a2a]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a]" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white">
              Selected <span className="text-[#ff2a2a]">Creations</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 font-sans max-w-md">
            Production-tested software applications spanning Generative AI RAG pipelines, .NET enterprise desktop
            systems, and dynamic database engines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between rounded-3xl bg-[#141414] border border-neutral-800 p-6 sm:p-7 hover:border-[#ff2a2a]/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] group relative overflow-hidden"
            >
              <div>
                {/* Visual Representation AI Image / Custom High-End Mockup */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800 shadow-inner group/img">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    />
                  ) : project.id === 'product-management' ? (
                    /* High-Fidelity .NET Desktop System Visual Mockup */
                    <div className="w-full h-full p-4 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] flex flex-col justify-between text-xs font-mono select-none">
                      {/* Window Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                          <span className="text-[10px] text-neutral-400 font-bold ml-1">
                            Enterprise_Manager.exe (.NET / C#)
                          </span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          MySQL Connected
                        </span>
                      </div>

                      {/* Mockup Data Grid */}
                      <div className="grid grid-cols-2 gap-2 my-1">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <span className="text-[9px] text-neutral-400 block uppercase">Active Employees</span>
                          <span className="text-sm font-bold text-white">48 Staff Members</span>
                          <span className="text-[9px] text-emerald-400 block mt-0.5">&bull; Full Shift Sync</span>
                        </div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <span className="text-[9px] text-neutral-400 block uppercase">Product Inventory</span>
                          <span className="text-sm font-bold text-white">1,420 SKUs</span>
                          <span className="text-[9px] text-sky-400 block mt-0.5">&bull; Auto-Audit Live</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
                        <span>Role: Admin / Manager</span>
                        <span className="text-emerald-400 font-bold">Status: Synchronized</span>
                      </div>
                    </div>
                  ) : (
                    /* Cricket Scorer Platform Visual Mockup */
                    <div className="w-full h-full p-4 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0f172a] flex flex-col justify-between text-xs font-mono select-none">
                      {/* Match Header */}
                      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                          <span className="text-[10px] font-bold text-emerald-300">LIVE MATCH SCORING (PHP/MySQL)</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                          INN 2 &bull; 18.4 OVR
                        </span>
                      </div>

                      {/* Score Board */}
                      <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-neutral-400 block uppercase">Target: 178 Runs</span>
                          <span className="text-lg font-black font-display text-white">164 / 4</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-neutral-400 block">Req. Run Rate</span>
                          <span className="text-xs font-bold text-emerald-400">10.50 RPO</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-emerald-200/80 pt-1 border-t border-emerald-500/20">
                        <span>Scorecard: Generated</span>
                        <span className="text-white font-semibold">DB Records: Saved</span>
                      </div>
                    </div>
                  )}

                  {/* Category Pill on Image */}
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                    {project.category}
                  </div>
                </div>

                {/* Top Badge & Links */}
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ff2a2a]">
                    {project.badge}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-white/5 hover:bg-[#ff2a2a] text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-2xl font-extrabold font-display tracking-tight text-white group-hover:text-[#ff2a2a] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-neutral-400 font-medium tracking-wide mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-6">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a2a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack Pills & Metrics */}
              <div className="pt-6 border-t border-neutral-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>
                    Metric: <strong className="text-white font-medium">{project.metrics}</strong>
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#ff2a2a] hover:text-white font-semibold transition-colors"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
