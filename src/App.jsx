import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProcessTimeline from './components/ProcessTimeline';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isIntroFinished, setIsIntroFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#ff2a2a] selection:text-white relative">
      {/* 1. Fullscreen Luxury Water-Fill Preloader */}
      <AnimatePresence mode="wait" onExitComplete={() => setIsIntroFinished(true)}>
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Viewport */}
      <Navbar />

      <main>
        {/* 2. Hero Section with AI Video Background & Synchronized Audio Playback */}
        <Hero isReady={isIntroFinished} />

        {/* 3. About Section with Hanging Lanyard ID Badge & Red Branding */}
        <About />

        {/* 4. "How We Work" / Process Timeline with Dashed S-Curve & Tag Cards */}
        <ProcessTimeline />

        {/* 5. Projects Showcase featuring PondyTechFix, SmartDoc AI, .NET Desktop App & Cricket Scorer */}
        <Projects />

        {/* 6. Technical Matrix, Education Timeline & Verified Certifications */}
        <SkillsEducation />

        {/* 7. Direct Contact & Dispatch Form */}
        <Contact />
      </main>

      {/* 8. Luxury Editorial Footer */}
      <Footer />
    </div>
  );
}
