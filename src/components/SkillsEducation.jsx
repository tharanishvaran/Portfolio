import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code2, Terminal, Database, ExternalLink, Sparkles, Monitor, CheckCircle2 } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 'Proficient', highlight: 'OOP & Data Structures' },
      { name: 'Python', level: 'Advanced', highlight: 'AI, RAG & Data Processing' },
      { name: 'C Language', level: 'Fundamental', highlight: 'Pointers, Algorithms & Memory' },
      { name: 'JavaScript', level: 'Intermediate', highlight: 'Dynamic Web Development' },
    ],
  },
  {
    title: 'Web & Desktop Technologies',
    skills: [
      { name: '.NET Desktop Apps', level: 'Proficient', highlight: 'C#, Windows Forms, Inventory' },
      { name: 'PHP', level: 'Proficient', highlight: 'Server-side Scripting & MySQL' },
      { name: 'HTML5 & CSS3', level: 'Expert', highlight: 'Semantic & Responsive Design' },
      { name: 'LangChain & Streamlit', level: 'Proficient', highlight: 'AI Document RAG Systems' },
    ],
  },
  {
    title: 'Databases & Vector Storage',
    skills: [
      { name: 'MySQL', level: 'Advanced', highlight: 'Relational Schemas & Queries' },
      { name: 'ChromaDB', level: 'Proficient', highlight: 'Vector Embeddings / RAG' },
      { name: 'SQL Server', level: 'Proficient', highlight: 'Enterprise DB Integration' },
      { name: 'DBMS Principles', level: 'Advanced', highlight: 'Normalization, ACID, Indexing' },
    ],
  },
  {
    title: 'Core Computer Science',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced' },
      { name: 'Data Structures & Algorithms', level: '40+ LeetCode Solved' },
      { name: 'Git & Version Control', level: 'Proficient' },
      { name: 'Software Lifecycle & Testing', level: 'Proficient' },
    ],
  },
];

const EDUCATION_HISTORY = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Sri Manakula Vinayagar Engineering College, Pondicherry',
    duration: '2025 – 2027 (Pursuing)',
    score: 'CGPA: 9.33 / 10',
    current: true,
    desc: 'Advanced software engineering, database management systems, algorithms, distributed computing, and emerging AI architectures.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: "St. Joseph's College of Arts and Science, Cuddalore",
    duration: '2022 – 2025',
    score: 'CGPA: 7.38 / 10',
    current: false,
    desc: 'Comprehensive computer science foundation, C & Java programming, web systems, database design, and mathematics.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) — Tamil Nadu State Board',
    institution: 'Holy Flowers Higher Secondary School, Pondicherry',
    duration: '2020 – 2022',
    score: 'Marks: 85%',
    current: false,
    desc: 'Mathematics and Computer Science discipline with high academic standing.',
  },
];

const CERTIFICATIONS = [
  {
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    badge: 'Python Certified',
    desc: 'Comprehensive Python programming, data structures, modular logic, and application development.',
  },
  {
    title: 'Java Programming Certification',
    issuer: 'CSE Institute',
    year: '2024',
    badge: 'Java Certified',
    desc: 'Object-Oriented paradigms, exception handling, multithreading, and core Java engineering.',
  },
];

export default function SkillsEducation() {
  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] text-white py-32 px-6 md:px-12 border-t border-neutral-900 overflow-hidden">
      {/* Floating Animated Ambient Glow Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-28 w-96 h-96 bg-[#ff2a2a]/20 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 35, 0],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 -right-28 w-96 h-96 bg-[#ff2a2a]/15 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Staggered Fade Up */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a2a] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/80">
              Technical Matrix & Milestones
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white"
          >
            Skills & <span className="text-[#ff2a2a]">Education</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-neutral-400 font-sans text-base sm:text-lg leading-relaxed"
          >
            Strong academic credentials (MCA CGPA 9.33) backed by solid programming foundations in Java, Python, C,
            and practical software systems.
          </motion.p>
        </div>

        {/* LeetCode Special Callout Banner with Interactive Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 70, damping: 15 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className="mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#161616] via-[#1f1414] to-[#161616] border border-neutral-800 hover:border-[#ff2a2a]/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl transition-all duration-300 relative overflow-hidden group"
        >
          {/* Subtle animated light sweep */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-14 h-14 rounded-2xl bg-[#ff2a2a]/20 border border-[#ff2a2a]/50 flex items-center justify-center text-[#ff2a2a] shrink-0 shadow-lg shadow-[#ff2a2a]/20"
            >
              <Terminal className="w-7 h-7" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#ff2a2a] font-bold">
                  Coding Profile
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-ping" />
                <span className="text-xs font-mono text-neutral-300 font-semibold">40+ Problems Solved</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-0.5">
                LeetCode Algorithmic Problem Solving
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Active practice across arrays, strings, searching, sorting, and core object-oriented logic.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://leetcode.com/u/tharanishvaran/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-white hover:bg-[#ff2a2a] text-black hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(255,42,42,0.5)] cursor-pointer relative z-10"
          >
            <span>View LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

        {/* Technical Capabilities Grid with Interactive Progress Bars & Animations */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-extrabold font-display tracking-tight text-white mb-8 flex items-center gap-2"
          >
            <Code2 className="w-6 h-6 text-[#ff2a2a] animate-pulse" />
            <span>Technical Capabilities</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 60,
                  damping: 14,
                  delay: idx * 0.1,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-3xl bg-[#141414] border border-neutral-800/90 hover:border-[#ff2a2a]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_40px_rgba(255,42,42,0.18)] group relative overflow-hidden"
              >
                {/* Top Subtle Shimmer Border */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a2a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <h4 className="text-base font-bold font-display text-white border-b border-neutral-800 pb-3 mb-4 group-hover:text-[#ff2a2a] transition-colors flex items-center justify-between">
                    <span>{cat.title}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <div className="space-y-3.5">
                    {cat.skills.map((s, i) => {
                      const proficiency =
                        s.level === 'Expert'
                          ? 96
                          : s.level === 'Advanced'
                          ? 90
                          : s.level === 'Proficient'
                          ? 84
                          : s.level === 'Intermediate'
                          ? 78
                          : 72;

                      return (
                        <motion.div
                          key={s.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.04 * i + 0.1 }}
                          className="flex flex-col gap-1"
                        >
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-semibold text-neutral-200 group-hover:text-white transition-colors">
                              {s.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#ff2a2a] font-bold px-2 py-0.5 rounded bg-[#ff2a2a]/10 border border-[#ff2a2a]/20">
                              {s.level}
                            </span>
                          </div>

                          {/* Animated Proficiency Bar */}
                          <div className="w-full h-1 bg-neutral-800/80 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${proficiency}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.15 + i * 0.05, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-[#ff2a2a] to-[#ff6666] rounded-full"
                            />
                          </div>

                          {s.highlight && (
                            <span className="text-[10px] font-mono text-neutral-400">{s.highlight}</span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Timeline (Col 7) */}
          <div className="lg:col-span-7">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold font-display tracking-tight text-white mb-8 flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6 text-[#ff2a2a]" />
              <span>Academic Timeline</span>
            </motion.h3>

            <div className="space-y-6 relative border-l-2 border-neutral-800 pl-6 ml-3">
              {/* Animated Timeline Line Sweep */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute -left-[2px] top-0 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-[#ff5555] to-transparent pointer-events-none"
              />

              {EDUCATION_HISTORY.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  whileHover={{ x: 6 }}
                  className="relative group transition-transform"
                >
                  {/* Timeline Glowing Dot */}
                  <div
                    className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                      edu.current
                        ? 'bg-[#ff2a2a] border-white shadow-[0_0_20px_#ff2a2a] animate-pulse scale-110'
                        : 'bg-neutral-900 border-neutral-600 group-hover:border-[#ff2a2a] group-hover:bg-[#ff2a2a]'
                    }`}
                  />

                  <div className="p-6 rounded-2xl bg-[#141414] border border-neutral-800/90 group-hover:border-[#ff2a2a]/50 transition-all shadow-lg group-hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-bold text-[#ff2a2a] uppercase tracking-wider flex items-center gap-1.5">
                        {edu.current && <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-ping" />}
                        <span>{edu.duration}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-mono font-semibold text-white border border-white/10">
                        {edu.score}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold font-display text-white group-hover:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-mono text-neutral-400 mt-1 mb-2">{edu.institution}</p>
                    <p className="text-xs text-neutral-300 font-sans leading-relaxed">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications (Col 5) */}
          <div className="lg:col-span-5">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-extrabold font-display tracking-tight text-white mb-8 flex items-center gap-2"
            >
              <Award className="w-6 h-6 text-[#ff2a2a] animate-bounce" />
              <span>Verified Certifications</span>
            </motion.h3>

            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="p-6 rounded-2xl bg-[#141414] border border-neutral-800/90 hover:border-[#ff2a2a]/60 transition-all shadow-lg hover:shadow-[0_12px_35px_rgba(255,42,42,0.18)] relative overflow-hidden group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#ff2a2a] font-bold uppercase">{cert.year}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#ff2a2a]/20 text-[#ff2a2a] border border-[#ff2a2a]/30">
                      {cert.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-display text-white">{cert.title}</h4>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">{cert.desc}</p>
                </motion.div>
              ))}

              {/* Quick Contact Card with Glowing Border */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#1a1313] to-[#121212] border border-[#ff2a2a]/40 text-center shadow-xl"
              >
                <h4 className="text-base font-bold font-display text-white">Looking for Full Resume / Details?</h4>
                <p className="text-xs text-neutral-400 mt-1 mb-4">
                  Academic transcripts & project repositories available for review.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-full bg-[#ff2a2a] hover:bg-[#d91e1e] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_20px_rgba(255,42,42,0.4)]"
                >
                  Connect Directly
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
