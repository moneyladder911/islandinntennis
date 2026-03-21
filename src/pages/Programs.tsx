import React from 'react';
import ProgramsGrid from '../components/Programs';
import { motion } from 'framer-motion';

const ProgramsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section 
        className="pt-40 pb-20 text-center relative overflow-hidden flex items-center justify-center px-10"
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">OUR OFFERINGS</span>
            <h1 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Programs for <em className="italic text-gold font-normal">Every Game</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              From first timers to seasoned players - find the perfect course for your Martha's Vineyard stay.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>
      
      <div className="bg-cream">
        <ProgramsGrid isPreview={false} showPage={() => {}} />
      </div>
    </motion.div>
  );
};

export default ProgramsPage;
