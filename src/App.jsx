import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import About from './components/About';
import BackgroundVideoSection from './components/BackgroundVideoSection';
import ProcessTimeline from './components/ProcessTimeline';
import Hero from './components/Hero';
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

      {/* Main Website Viewport (Foreground Content) */}
      <div className="relative z-10">
        <Navbar />

        <main>
          {/* 2. Hero Section with AI Video Background & Synchronized Audio Playback */}
          <Hero isReady={isIntroFinished} />

          {/* 3. About Section */}
          <About />

          {/* 4. Dedicated Background Video / Frame Sequence Section */}
          <BackgroundVideoSection />

          {/* 5. Process Timeline Section */}
          <ProcessTimeline />

        {/* 5. Projects Showcase featuring SMRMS Portal, PondyTechFix, SmartDoc AI, EPMS, .NET Desktop App & Cricket Scorer */}
        <Projects />

        {/* 6. Technical Matrix, Education Timeline & Verified Certifications */}
        <SkillsEducation />

        {/* 7. Direct Contact & Dispatch Form */}
        <Contact />
      </main>

      {/* 8. Luxury Editorial Footer */}
      <Footer />
      </div>
    </div>
  );
}
