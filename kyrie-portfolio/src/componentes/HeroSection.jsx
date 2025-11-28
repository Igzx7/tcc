import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-6xl font-bold">
              KI
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Kyrie Irving
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Point Guard • Dallas Mavericks • #11
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-blue-400">8x</div>
            <div className="text-sm text-gray-400">All-Star</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-purple-400">1x</div>
            <div className="text-sm text-gray-400">NBA Champion</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur px-6 py-3 rounded-lg border border-slate-700">
            <div className="text-3xl font-bold text-pink-400">27.1</div>
            <div className="text-sm text-gray-400">PPG Career</div>
          </div>
        </div>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Um dos armadores mais habilidosos da NBA, conhecido por seu handle excepcional,
          finalização criativa e momentos decisivos em grandes jogos.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;