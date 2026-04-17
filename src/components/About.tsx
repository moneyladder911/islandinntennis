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
        className="pt-32 pb-12 text-center relative overflow-hidden flex items-center justify-center px-10"
        style={{ backgroundColor: '#163020' }}
      >
        <div 
          className="absolute inset-0 z-0 opacity-40" 
          style={{ background: 'linear-gradient(135deg, rgba(13,31,22,1) 0%, rgba(26,58,42,0.8) 50%, rgba(181,108,77,0.3) 100%)' }}
        />
        
        <div className="w-full relative z-10 px-6 sm:px-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto"
          >
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">A VINEYARD LEGACY</span>
            <h1 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              A Tradition of <em className="italic text-gold font-normal">Excellence</em> & <br/><em className="italic text-gold font-normal">Ocean Breezes</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              Island Inn Tennis Club is the Vineyard's best-kept secret. More than a facility, we are a gathering place for those who love the game and the unique spirit of Oak Bluffs.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
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
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-gold mb-6 block">WHERE WE ARE</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-8">The <em className="italic text-gold font-normal">Perfect Setting</em></h2>
            <div className="space-y-6 text-light font-light leading-relaxed text-[15px] max-w-lg">
              <p>
                We don't just have the best courts on Martha's Vineyard — we have the best energy. Located in the heart of Oak Bluffs, the Island Inn is where tennis is actually at home. 
              </p>
              <p>
                Just steps away from the iconic Nomans, we are the ultimate pre-lunch match destination. Swing by for a high-intensity session, then head over for live music and a drink.
              </p>
              <p>
                Whether you're coming off the bike path from Edgartown or walking up from Inkwell Beach, you’re coming for the love of the game. With a full Pro Shop and elite instruction every day, this is where the island plays.
              </p>
            </div>
          </motion.div>
          <div className="bg-forest aspect-[4/3] rounded-sm overflow-hidden shadow-2xl relative border border-forest/5 group">
            <img 
              src="/gallery/nomans-garden.jpg" 
              alt="Nomans Restaurant and Garden next to Island Inn" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">WHO WE ARE</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight">Meet <em className="italic text-clay">Kim</em></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-forest/5">
              <img 
                src="/kim-portrait.jpg" 
                alt="Kim - CEO at Island Inn Tennis Club"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
            </div>
            <div>
              <div className="space-y-8 text-light font-light leading-[1.8] text-[16px]">
                <p>
                  At the heart of Island Inn Tennis is Kim — the CEO, organizer, and driving force behind everything that happens on and off the courts. Kim manages the entire complex, from scheduling matches and organizing clinics to coordinating memberships and running events.
                </p>
                <p>
                  Whether you're looking to get into a social doubles game, sign your kids up for junior programs, or plan a private event — Kim is your single point of contact. She knows every player, every court, and every detail that makes this club special.
                </p>
              </div>
              <div className="mt-10">
                <a href="sms:+15089393030" className="btn btn-primary px-12 py-5 no-underline">Text Kim Directly</a>
              </div>
            </div>
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

      <div className="relative py-32 text-center text-white px-8 overflow-hidden bg-clay">
        <div className="absolute inset-0 z-0">
          <img src="/island-inn-real.webp" alt="Island Inn Tennis Club" className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-clay/40 to-clay" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-[10px] font-bold tracking-[4px] uppercase text-gold mb-6 block">YOUR COURT AWAITS</span>
          <h2 className="serif text-5xl md:text-6xl mb-8 font-light leading-tight">Come Play <em className="italic font-normal">With Us</em></h2>
          <p className="text-white/80 font-light text-lg mb-10 max-w-md mx-auto leading-relaxed">
            The courts are open. Kim is ready to match you. Martha's Vineyard is waiting.
          </p>
          <a href="sms:+15089393030" className="inline-block bg-white text-clay hover:bg-forest hover:text-white text-[11px] font-bold tracking-[3px] uppercase px-12 py-5 transition-all duration-300 shadow-2xl no-underline">
            Get in Touch Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
