import React, { useState } from 'react';
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import StatsSection from './componentes/StatsSection';
import AchievementsSection from './componentes/AchievementsSection';
import CareerSection from './componentes/CareerSection';
import AboutSection from './componentes/AboutSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="stats">
        <StatsSection />
      </div>
      
      <div id="achievements">
        <AchievementsSection />
      </div>
      
      <div id="career">
        <CareerSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>

      <footer className="bg-slate-950 py-8 text-center text-gray-400 border-t border-slate-800">
        <p>© 2024 Kyrie Irving Portfolio • Desenvolvido por fã</p>
      </footer>
    </div>
  );
}