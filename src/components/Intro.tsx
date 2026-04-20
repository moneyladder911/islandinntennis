import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC<{ showPage: (name: string) => void }> = ({ showPage }) => {
  const features = [
    'Monday Mix Plays',
    'Wednesday All Men',
    'Inter-Club Matches',
    'On-Demand Matches',
    'Group Clinics',
    'All Skill Levels',
  ];

  return (
    <section className="py-24 md:py-32 bg-cream noise-bg">
      <div className="container px-8 lg:px-12 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Exact Court SVG from Claude Original UI */}
        <motion.div 
          className="relative group order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1a3a2a] rounded-sm overflow-hidden shadow-2xl relative aspect-[4/3] border border-forest/10">
            <img 
              src="/tennis-heart.jpg" 
              alt="Aerial sunset view of Island Inn Tennis Club" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="order-1 lg:order-2"
        >
          {/* Swapped Title and Tag as requested: Title first, Subtitle second */}
          <h2 className="serif text-[clamp(36px,5vw,58px)] font-light text-forest leading-tight mb-4">Tennis at the Heart of <br/><em className="italic text-clay font-normal">Martha's Vineyard</em></h2>
          <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-6">ABOUT THE CLUB</div>

          <div className="mb-8 p-5 border border-clay/30 bg-forest/5 rounded-sm">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
              2026 Season Update
            </div>
            <p className="text-[13px] font-light leading-[1.6] text-forest/80">
              We're expanding our weekly schedule! Join us for <strong>Monday Mix Plays</strong> and <strong>Wednesday All Men's</strong> sessions. Additionally, we are thrilled to start playing competitive <strong>Inter-Club Matches</strong> across the island.
            </p>
          </div>
          
          <p className="text-[15px] font-light leading-[1.8] text-light mb-10 max-w-lg">
            Nestled behind Nomans Restaurant at the Island Inn on Beach Road, we're Oak Bluffs' favorite social tennis club. As much about community as competition — join us for matches, mixers, and the best island connections on and off the court.
          </p>
          
          <div className="grid grid-cols-2 gap-y-4 mb-14">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-clay text-sm font-bold">+</span>
                <span className="text-[12px] font-medium text-forest/90">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button onClick={() => showPage('about')} className="btn btn-primary px-10">
            OUR STORY
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
