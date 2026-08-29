import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Database, Cpu, Layers, ArrowUpRight, CheckCircle2, Monitor, FileText, Activity, Wrench } from 'lucide-react';

const PROJECTS = [
  {
    id: 'pondy-techfix',
    title: 'PondyTechFix',
    tagline: 'Full-Stack PC Hardware Repair & Custom Rig Management Platform (Client Project)',
    category: 'Full-Stack Web App / Client Solution',
    featured: true,
    image: null,
    description:
      'Architected and built a production-grade full-stack computer repair and custom rig management platform for a client in Puducherry. Features online booking, real-time 11-stage repair tracking, live PC component compatibility checker, AI diagnostic troubleshooter, digital GST invoicing, and role-based administrative command center.',
    highlights: [
      'Real-time 11-stage repair tracking system with unique tracking IDs (PTF-YYYY-XXXXX)',
      'Custom PC builder with live socket (AM5/LGA1700), RAM & wattage compatibility engine',
      'AI diagnostic troubleshooter for hardware symptom analysis & safe solutions',
      'Full RBAC administrative command center with revenue analytics & work order management',
    ],
    tech: ['React', 'Node.js', 'Express', 'SQLite', 'Prisma', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/tharanishvaran/PondyTechFix',
    liveUrl: 'https://pondy-techfix.onrender.com/',
    metrics: 'Production Client Platform',
    accentColor: '#f59e0b',
    badge: 'Client Project / Full Stack',
  },
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
    liveUrl: 'https://smartdoc-frontend.onrender.com',
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
    image: null,
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
    image: null,
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
    liveUrl: 'https://cricketscorertharanish.netlify.app',
    metrics: 'Instant Scorecard Generation',
    accentColor: '#10b981',
    badge: 'PHP & MySQL Engine',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#0d0d0d] text-white py-32 px-6 md:px-12 overflow-hidden">
      {/* Dynamic Animated Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-[#ff2a2a]/15 blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 -right-48 w-96 h-96 rounded-full bg-[#ff2a2a]/15 blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Scroll Animation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white">
              Selected <span className="text-[#ff2a2a]">Creations</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm md:text-base text-neutral-400 font-sans max-w-md leading-relaxed"
          >
            Production-tested software applications spanning full-stack client solutions, Generative AI RAG pipelines,
            .NET enterprise desktop systems, and dynamic database engines.
          </motion.p>
        </div>

        {/* Projects Grid with Staggered 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 14,
                delay: idx * 0.14,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              className="flex flex-col justify-between rounded-3xl bg-[#141414] border border-neutral-800 p-6 sm:p-7 hover:border-[#ff2a2a]/70 transition-colors duration-500 shadow-xl hover:shadow-[0_25px_60px_rgba(255,42,42,0.22)] group relative overflow-hidden"
            >
              {/* Subtle Card Corner Highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-tr-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Visual Representation AI Image / Interactive Mockup with Zoom Effect */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800 shadow-inner group/img">
                  {project.image ? (
                    <a
                      href={project.liveUrl || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative cursor-pointer group/link"
                      title={project.liveUrl ? "Launch Live Demo" : "View Source"}
                    >
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      {project.liveUrl && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-[2px]">
                          <ExternalLink className="w-4 h-4 text-[#ff2a2a]" />
                          <span>Launch Live Demo</span>
                        </div>
                      )}
                    </a>
                  ) : project.id === 'pondy-techfix' ? (
                    /* PondyTechFix Client Service Platform Mockup */
                    <a
                      href={project.liveUrl || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative cursor-pointer group/link"
                      title="Launch PondyTechFix Live Platform"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full p-4 bg-gradient-to-br from-[#1c1917] via-[#0f172a] to-[#0a0a0a] flex flex-col justify-between text-xs font-mono select-none"
                      >
                        {/* Platform Header */}
                        <div className="flex items-center justify-between border-b border-amber-500/30 pb-2">
                          <div className="flex items-center gap-1.5">
                            <Wrench className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-[10px] text-amber-300 font-bold ml-1">
                              PondyTechFix &bull; Client Service Platform
                            </span>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                            LIVE DEMO
                          </span>
                        </div>

                        {/* Mockup Data Grid */}
                        <div className="grid grid-cols-2 gap-2 my-1">
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                            <span className="text-[9px] text-neutral-400 block uppercase">Tracking ID</span>
                            <span className="text-xs font-bold text-amber-400">PTF-2026-0891</span>
                            <span className="text-[9px] text-emerald-400 block mt-0.5">&bull; 11-Stage Workflow</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-amber-500/50 transition-colors">
                            <span className="text-[9px] text-neutral-400 block uppercase">Rig Configurator</span>
                            <span className="text-xs font-bold text-white">AM5 &bull; DDR5 &bull; 850W</span>
                            <span className="text-[9px] text-sky-400 block mt-0.5">&bull; 100% Compatible</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-amber-500/20">
                          <span className="text-neutral-300">RBAC Admin &amp; GST Invoicing</span>
                          <span className="text-emerald-400 font-bold">Service: Live</span>
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-[2px]">
                        <ExternalLink className="w-4 h-4 text-[#ff2a2a]" />
                        <span>Launch Live Demo</span>
                      </div>
                    </a>
                  ) : project.id === 'product-management' ? (
                    /* High-Fidelity .NET Desktop System Visual Mockup */
                    <a
                      href={project.liveUrl || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative cursor-pointer group/link"
                      title="View Source Code"
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full p-4 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#020617] flex flex-col justify-between text-xs font-mono select-none"
                      >
                        {/* Window Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse" />
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
                          <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-blue-500/40 transition-colors">
                            <span className="text-[9px] text-neutral-400 block uppercase">Active Employees</span>
                            <span className="text-sm font-bold text-white">48 Staff Members</span>
                            <span className="text-[9px] text-emerald-400 block mt-0.5">&bull; Full Shift Sync</span>
                          </div>
                          <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-blue-500/40 transition-colors">
                            <span className="text-[9px] text-neutral-400 block uppercase">Product Inventory</span>
                            <span className="text-sm font-bold text-white">1,420 SKUs</span>
                            <span className="text-[9px] text-sky-400 block mt-0.5">&bull; Auto-Audit Live</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-1 border-t border-white/10">
                          <span>Role: Admin / Manager</span>
                          <span className="text-emerald-400 font-bold">Status: Synchronized</span>
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-[2px]">
                        <Github className="w-4 h-4 text-white" />
                        <span>View Repository</span>
                      </div>
                    </a>
                  ) : (
                    /* Cricket Scorer Platform Visual Mockup */
                    <a
                      href={project.liveUrl || project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative cursor-pointer group/link"
                      title={project.liveUrl ? "Launch Live Demo" : "View Source"}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full p-4 bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#0f172a] flex flex-col justify-between text-xs font-mono select-none"
                      >
                        {/* Match Header */}
                        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-bold text-emerald-300">LIVE MATCH SCORING (PHP/MySQL)</span>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                            LIVE DEMO
                          </span>
                        </div>

                        {/* Score Board */}
                        <div className="p-2.5 rounded-xl bg-black/40 border border-emerald-500/30 flex items-center justify-between group-hover:border-emerald-400/50 transition-colors">
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
                      </motion.div>
                      {project.liveUrl && (
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-bold backdrop-blur-[2px]">
                          <ExternalLink className="w-4 h-4 text-[#10b981]" />
                          <span>Launch Live Demo</span>
                        </div>
                      )}
                    </a>
                  )}

                  {/* Category Pill on Image */}
                  <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white">
                    {project.category}
                  </div>
                </div>

                {/* Top Badge & Action Links */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#ff2a2a] group-hover:border-[#ff2a2a]/40 transition-colors">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-white text-xs font-mono font-bold transition-all duration-300 hover:scale-105"
                        title="Launch Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-full bg-white/5 hover:bg-[#ff2a2a] text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
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

                {/* Highlights List with Staggered Visual Appearance */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 * i + 0.2 }}
                      className="flex items-start gap-2 text-xs text-neutral-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2a2a] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack Pills & Metrics */}
              <div className="pt-6 border-t border-neutral-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 group-hover:border-neutral-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>
                    Metric: <strong className="text-white font-medium">{project.metrics}</strong>
                  </span>
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[#ff2a2a] hover:text-white font-semibold transition-colors group-hover:translate-x-0.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-400 hover:text-white font-semibold transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
