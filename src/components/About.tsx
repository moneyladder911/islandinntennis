import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const values = [
    { icon: '🌊', title: 'Island Spirit', desc: 'Tennis should feel like the Vineyard itself - unhurried, beautiful, and full of genuine warmth.' },
    { icon: '🎾', title: 'Excellence', desc: 'We hold ourselves to the highest professional standards on and off the court, every day.' },
    { icon: '🤝', title: 'Community', desc: 'The best tennis happens when people connect. We build a club where everyone belongs.' },
  ];

  return (
    <div>
      {/* Rewritten About Hero - More Premium */}
      <section 
        className="pt-48 pb-32 relative overflow-hidden flex items-center justify-center text-center px-10"
        style={{ backgroundColor: '#163020' }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-40" 
          style={{ background: 'linear-gradient(135deg, rgba(13,31,22,1) 0%, rgba(26,58,42,0.8) 50%, rgba(181,108,77,0.3) 100%)' }}
        />
        
        <div className="container relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-6 block">A VINEYARD LEGACY</span>
            <h1 className="serif text-[clamp(48px,8vw,92px)] font-light text-white leading-[1.05] mb-8 select-none">
              A Tradition of <em className="italic text-gold font-normal">Excellence</em> & <br/><em className="italic text-gold font-normal">Ocean Breezes</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-lg max-w-2xl mx-auto mb-12">
              Island Inn Tennis Club is the Vineyard's best-kept secret. More than a facility, we are a gathering place for those who love the game and the unique spirit of Oak Bluffs.
            </p>
            <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
        
        {/* Background Decorative Circles */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-clay/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Setting Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container px-8 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">WHERE WE ARE</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-8">The <em className="italic text-clay">Perfect Setting</em></h2>
            <p className="text-[15px] font-light text-light leading-[1.8] mb-8">
              Set on 5+ acres at the Island Inn on Beach Road in Oak Bluffs, our courts sit adjacent to Farm Neck Golf Course, steps from the bicycle path to Edgartown, and within walking distance of Inkwell Beach and State Beach.
            </p>
            <p className="text-[15px] font-light text-light leading-[1.8]">
              The Island Inn is a 51-suite resort with heated pool, playground, and conference facilities. Tennis is at its heart, with a Pro Shop on-site and professional instruction every day.
            </p>
          </motion.div>
          <div className="bg-forest aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative border border-forest/5">
            <svg viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
              <rect width="460" height="340" fill="#1a3a2a"/>
              <rect x="0" y="0" width="460" height="160" fill="#1a3a5a"/>
              <rect x="60" y="120" width="160" height="100" fill="#2a5a3a" rx="2"/>
              <rect x="0" y="250" width="460" height="90" fill="#0d2a1a"/>
              <ellipse cx="50" cy="240" rx="20" ry="26" fill="#1e5c38"/>
              <ellipse cx="420" cy="235" rx="18" ry="22" fill="#1a5030"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container max-w-4xl mx-auto px-8 text-center">
          <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">WHO WE ARE</span>
          <h2 className="serif text-5xl font-light text-forest leading-tight mb-10">Meet <em className="italic text-clay">Kim</em></h2>
          <div className="space-y-8 text-light font-light leading-[1.8] text-lg max-w-2xl mx-auto">
            <p>
              At the center of Island Inn Tennis is Kim - our head pro, matchmaker, and the heartbeat of the club. Kim brings professional-level coaching with a warm, island-relaxed approach that makes every player feel welcome.
            </p>
            <p>
              Whether you're a guest staying for a week or a local who's played for decades, Kim will find you the right program, the right partner, and the right approach to love this sport even more.
            </p>
          </div>
          <div className="mt-14">
            <a href="https://wa.me/15089393030" target="_blank" className="btn btn-primary px-12 py-5 no-underline">Text Kim Directly</a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-white">
        <div className="container px-8 max-w-[1200px] mx-auto text-center">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">OUR VALUES</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight">What We <em className="italic text-clay">Believe In</em></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-1 bg-forest/5 border border-forest/5 p-1">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-14 group hover:bg-forest transition-colors duration-500">
                <div className="text-4xl mb-8 group-hover:scale-125 transition-transform duration-500">{v.icon}</div>
                <h3 className="serif text-2xl font-semibold mb-6 text-forest group-hover:text-white transition-colors">{v.title}</h3>
                <p className="text-[14px] font-light text-light group-hover:text-white/60 transition-colors leading-[1.8]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-clay py-24 text-center text-white px-8">
        <h2 className="serif text-4xl mb-6 font-light">Come Play With Us</h2>
        <p className="text-white/80 font-light mb-10 max-w-sm mx-auto">Courts are open. Kim is ready. Martha's Vineyard is waiting.</p>
        <a href="https://wa.me/15089393030" target="_blank" className="btn btn-white !text-clay px-12 py-5 no-underline shadow-2xl">Get in Touch Today</a>
      </div>
    </div>
  );
};

export default About;
