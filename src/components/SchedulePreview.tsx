import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SchedulePreview: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-forest py-24 border-y border-white/5 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('/island-inn-real.webp')] opacity-10 mix-blend-overlay bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
      
      <div className="container relative z-10 px-8 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] font-bold tracking-[4px] uppercase text-gold mb-6 block">DAILY PLAY</span>
          <h2 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-tight mb-6">
            Matches Run <em className="italic text-gold font-normal">All Day</em>, Every Day
          </h2>
          <p className="text-white/60 font-light text-[15px] leading-[1.8] mb-10 mx-auto max-w-lg">
            From morning clinics to evening social play — we have something for every level. There's always a match waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="sms:+15089393030" className="btn bg-gold text-forest hover:bg-white px-10 border-none">
              Text Kim To Play
            </a>
            <button onClick={() => navigate('/schedule')} className="btn bg-transparent border border-white/20 text-white hover:bg-white/10 px-10">
              Full Schedule
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulePreview;
