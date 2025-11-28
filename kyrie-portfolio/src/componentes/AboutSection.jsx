import React from 'react';

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-900 to-slate-900 py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          Sobre Kyrie
        </h2>
        
        <div className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">História</h3>
            <p className="text-gray-300 leading-relaxed">
              Kyrie Andrew Irving nasceu em 23 de março de 1992 em Melbourne, Austrália.
              Filho de um jogador de basquete profissional, Kyrie cresceu respirando o esporte.
              Sua jornada o levou de Duke University direto para o topo do Draft da NBA em 2011.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Estilo de Jogo</h3>
            <p className="text-gray-300 leading-relaxed">
              Conhecido por ter um dos melhores handles da história da NBA, Kyrie é um mestre
              em criar seu próprio arremesso. Sua habilidade de finalização com ambas as mãos,
              movimentos imprevisíveis e clutch gene o tornam um dos armadores mais letais
              da liga.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">Legado</h3>
            <p className="text-gray-300 leading-relaxed">
              A cesta de três pontos sobre Stephen Curry no Jogo 7 das Finais de 2016 é
              considerada uma das jogadas mais importantes da história da NBA. Kyrie continua
              a ser uma força dominante na liga, combinando habilidade técnica excepcional
              com performance clutch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;