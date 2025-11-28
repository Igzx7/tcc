import React from 'react';

const AchievementsSection = () => {
  const achievements = [
    {
      year: '2016',
      title: 'Campeão da NBA',
      description: 'Cleveland Cavaliers - Finals MVP candidato com a cesta decisiva no Jogo 7'
    },
    {
      year: '2012',
      title: 'Rookie of the Year',
      description: 'Cleveland Cavaliers - #1 Pick do Draft'
    },
    {
      year: '2014',
      title: 'All-Star MVP',
      description: 'MVP do All-Star Game em Nova Orleans'
    },
    {
      year: '2019',
      title: '50-40-90 Club',
      description: 'Juntou-se ao clube de elite de eficiência'
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Conquistas & Prêmios
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-purple-500 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xl w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  {achievement.year}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            Seleções All-Star
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['2013', '2014', '2015', '2017', '2018', '2019', '2021', '2023'].map(year => (
              <div
                key={year}
                className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg"
              >
                {year}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;