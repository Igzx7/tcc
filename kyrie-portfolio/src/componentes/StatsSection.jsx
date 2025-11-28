import React from 'react';
import { TrendingUp, Users, Award, Trophy } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: 'Pontos por Jogo', value: '27.1', icon: <TrendingUp className="text-blue-400" /> },
    { label: 'Assistências', value: '5.7', icon: <Users className="text-purple-400" /> },
    { label: 'Rebotes', value: '4.4', icon: <Award className="text-pink-400" /> },
    { label: 'FG%', value: '47.4%', icon: <Trophy className="text-yellow-400" /> },
    { label: '3P%', value: '39.3%', icon: <Trophy className="text-green-400" /> },
    { label: 'FT%', value: '87.3%', icon: <Trophy className="text-red-400" /> }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Estatísticas da Carreira
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <div className="text-4xl font-bold text-white">{stat.value}</div>
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6">Temporada 2023-24</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-3xl font-bold text-blue-400">25.6</div>
              <div className="text-sm text-gray-400">PPG</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">5.2</div>
              <div className="text-sm text-gray-400">APG</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400">5.0</div>
              <div className="text-sm text-gray-400">RPG</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">41.1%</div>
              <div className="text-sm text-gray-400">3P%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;