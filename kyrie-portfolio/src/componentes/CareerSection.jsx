import React from 'react';

const CareerSection = () => {
  const timeline = [
    {
      years: '2011-2017',
      team: 'Cleveland Cavaliers',
      description: 'Início da carreira, #1 pick, Rookie of the Year, Campeão em 2016'
    },
    {
      years: '2017-2019',
      team: 'Boston Celtics',
      description: 'All-Star, líder ofensivo dos Celtics'
    },
    {
      years: '2019-2023',
      team: 'Brooklyn Nets',
      description: 'Formou big three com KD e Harden'
    },
    {
      years: '2023-Presente',
      team: 'Dallas Mavericks',
      description: 'Parceria com Luka Dončić rumo ao título'
    }
  ];

  return (
    <section className="min-h-screen bg-slate-900 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Trajetória na NBA
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {timeline.map((period, idx) => (
            <div key={idx} className="relative pl-8 pb-12 border-l-2 border-blue-500 last:pb-0">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-slate-900"></div>
              <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
                <div className="text-blue-400 font-bold mb-2">{period.years}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{period.team}</h3>
                <p className="text-gray-400">{period.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;