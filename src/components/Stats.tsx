import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: '4', label: 'Courts Available' },
    { number: 'All', label: 'Skill Levels' },
    { number: 'Pro', label: 'Instruction' },
    { number: 'MV', label: 'Island Life' },
  ];

  return (
    <section className="bg-forest py-10 px-6">
      <div className="container flex justify-center gap-10 md:gap-20 flex-wrap">
        {stats.map((stat, i) => (
          <div key={i} className="text-center group">
            <div className="serif text-4xl md:text-5xl font-semibold text-gold leading-none group-hover:scale-110 transition-transform">
              {stat.number}
            </div>
            <div className="text-[9px] font-bold tracking-[2.5px] uppercase text-white/50 mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
