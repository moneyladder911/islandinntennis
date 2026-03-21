import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Users, Trophy, Clock, MapPin, Phone, MessageCircle } from 'lucide-react';

const SchedulePage: React.FC = () => {
  const offerings = [
    { icon: <Users size={24} className="text-gold" />, title: 'Social Doubles', desc: 'Organized doubles matches for all levels. Kim pairs you with the right partners for competitive, fun play.' },
    { icon: <Trophy size={24} className="text-gold" />, title: 'Group Clinics', desc: 'High-energy drills and skill-building sessions led by Kim. Perfect for improving your game in a social setting.' },
    { icon: <Sun size={24} className="text-gold" />, title: 'Open Match Play', desc: 'Drop in for singles or doubles. Morning, afternoon, and evening slots available throughout the week.' },
    { icon: <Clock size={24} className="text-gold" />, title: 'Private Lessons', desc: 'One-on-one instruction tailored to your level. Flexible scheduling — text Kim to arrange a time that works.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Schedule Hero */}
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">DAILY PLAY</span>
            <h1 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Matches Run <em className="italic text-gold font-normal">All Day</em>, Every Day
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              From morning clinics to evening social play — we have something for every level. Text Kim to find your next game.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 md:py-32 bg-cream px-4">
        <div className="container max-w-[1100px] mx-auto">

          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">What We Offer</span>
            <h2 className="serif text-[clamp(28px,4vw,44px)] font-light text-forest leading-tight mb-6">
              All Levels. All Day. <em className="italic text-clay">All Summer.</em>
            </h2>
            <p className="text-light text-sm font-light max-w-lg mx-auto leading-[1.8]">
              Our courts are active from sunrise to sunset. Kim organizes clinics, social matches, and open play daily — times rotate based on demand and weather.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white p-10 border border-forest/5 rounded-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="serif text-2xl font-light text-forest mb-3">{item.title}</h3>
                <p className="text-[13px] font-light text-light leading-[1.8]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* How It Works */}
          <div className="bg-white p-10 md:p-16 border border-forest/10 rounded-sm shadow-premium text-center mb-20">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">How It Works</span>
            <h3 className="serif text-3xl font-light text-forest mb-10">Three Simple Steps</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">1</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Text Kim</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Send a text to +1 (508) 939-3030 with your level and when you'd like to play.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">2</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Get Matched</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Kim will pair you with the right group, clinic, or partner based on your skill level.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">3</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Show Up & Play</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Arrive at the courts, grab your racket, and enjoy. Balls and equipment available on-site.</p>
              </div>
            </div>
          </div>

          {/* Contact Kim CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto"
          >
            <div className="bg-forest text-white p-10 md:p-14 rounded-sm text-center shadow-premium">
              <span className="text-[10px] font-bold tracking-[5px] uppercase text-gold mb-4 block">Ready to Play?</span>
              <h3 className="serif text-[clamp(24px,4vw,36px)] font-light mb-4">
                Text <em className="italic text-gold">Kim</em> to Get Started
              </h3>
              <p className="text-white/60 text-sm font-light leading-[1.8] max-w-md mx-auto mb-8">
                Whether it's your first match or your hundredth — just text Kim your level and preferred time. She handles the rest.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="sms:+15089393030"
                  className="flex items-center gap-3 px-8 py-4 bg-gold/20 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-forest transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <MessageCircle size={16} />
                  Text Kim
                </a>
                <a
                  href="tel:+15089393030"
                  className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white/80 rounded-sm hover:bg-white/10 transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <Phone size={16} />
                  Call Kim
                </a>
              </div>

              <p className="text-white/30 text-[11px] font-light mt-8">
                <MapPin size={12} className="inline mr-1" />
                30 Island Inn Road - Oak Bluffs, MA 02557
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default SchedulePage;
