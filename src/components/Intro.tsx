import React from 'react';
import { motion } from 'framer-motion';

const Intro: React.FC<{ showPage: (name: string) => void }> = ({ showPage }) => {
  const features = [
    'On-Demand Matches',
    'Private Lessons',
    'Group Clinics',
    'Junior Programs',
    'All Skill Levels',
    'Pro Shop On-Site',
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
          <div className="bg-[#1a3a2a] rounded-sm overflow-hidden shadow-2xl relative aspect-[4/3]">
            <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
              <rect width="480" height="360" fill="#163020"/>
              <rect x="60" y="40" width="360" height="280" fill="#1e5c38" rx="2"/>
              <rect x="60" y="40" width="360" height="280" fill="none" stroke="white" strokeWidth="2.5"/>
              <line x1="240" y1="40" x2="240" y2="320" stroke="white" strokeWidth="2.5"/>
              <line x1="60" y1="180" x2="420" y2="180" stroke="white" strokeWidth="2.5"/>
              <rect x="100" y="100" width="140" height="160" fill="none" stroke="white" strokeWidth="1.5"/>
              <rect x="240" y="100" width="140" height="160" fill="none" stroke="white" strokeWidth="1.5"/>
              <circle cx="310" cy="130" r="10" fill="#c5e84b" />
              <rect x="0" y="0" width="60" height="360" fill="#0d2a1a"/>
              <rect x="420" y="0" width="60" height="360" fill="#0d2a1a"/>
              <rect x="0" y="0" width="480" height="40" fill="#0d2a1a"/>
              <rect x="0" y="320" width="480" height="40" fill="#0d2a1a"/>
              <ellipse cx="30" cy="150" rx="18" ry="22" fill="#153d20" />
              <ellipse cx="450" cy="220" rx="18" ry="22" fill="#153d20" />
            </svg>
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
          <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-8">ABOUT THE CLUB</div>
          
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
