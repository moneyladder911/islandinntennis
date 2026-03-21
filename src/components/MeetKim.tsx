import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MeetKim: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white border-b border-forest/5">
      <div className="container px-8 lg:px-12 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[4/5] md:aspect-[3/4] rounded-sm overflow-hidden shadow-2xl border border-forest/5"
          >
            <img 
              src="/kim-portrait.jpg" 
              alt="Kim - Head Tennis Pro at Island Inn Tennis Club"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">WHO WE ARE</span>
            <h2 className="serif text-[clamp(36px,5vw,48px)] font-light text-forest leading-tight mb-8">Meet <em className="italic text-clay">Kim</em></h2>
            
            <div className="space-y-6 text-light font-light leading-[1.8] text-[15px] mb-10">
              <p>
                At the heart of Island Inn Tennis is Kim — the CEO, organizer, and driving force behind everything that happens on and off the courts. Kim manages the entire complex, from scheduling matches and organizing clinics to coordinating memberships and running events.
              </p>
              <p>
                Whether you're looking to get into a social doubles game, sign your kids up for junior programs, or plan a private event — Kim is your single point of contact.
              </p>
            </div>
            
            <button 
              onClick={() => navigate('/about')}
              className="btn btn-outline border-forest text-forest hover:bg-forest hover:text-white px-10"
            >
              READ FULL STORY
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MeetKim;
