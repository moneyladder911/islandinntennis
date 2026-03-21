import React from 'react';
import { motion } from 'framer-motion';

interface ProgramsProps {
  showPage: (name: string) => void;
  isPreview?: boolean;
}

const Programs: React.FC<ProgramsProps> = ({ showPage, isPreview = true }) => {
  const [selected, setSelected] = React.useState<number | null>(null);

  const programs = [
    { icon: '🎾', title: 'Private Lessons', desc: 'One-on-one coaching tailored to your level. Master technique, strategy, and mental game.', meta: 'BEGINNER · INTERMEDIATE · ADVANCED' },
    { icon: '👥', title: 'Group Clinics', desc: 'High-energy clinics for 4-8 players. Build skills, make friends, enjoy the island lifestyle.', meta: 'ALL LEVELS · WEEKLY SESSIONS' },
    { icon: '⚡', title: 'On-Demand Matches', desc: 'Jump in anytime. Match up with players of similar ability for casual games or competitive sets.', meta: 'FLEXIBLE SCHEDULING' },
    { icon: '⭐', title: 'Junior Program', desc: 'Fun-focused development for young players ages 6-17. Build confidence and love of tennis.', meta: 'AGES 6-17 · SUMMER SESSIONS' },
    { icon: '🏆', title: 'Adult Social Play', desc: 'Round-robins, mixers, and socials. Meet fellow tennis lovers on the Vineyard.', meta: 'WEEKLY · OPEN TO ALL MEMBERS' },
    { icon: '🌅', title: 'Vacation Packages', desc: 'Visiting the Vineyard? Curated tennis packages let you play every day of your stay.', meta: 'CUSTOM · MULTI-DAY' }
  ];

  if (isPreview) {
    return (
      <section className="bg-white py-32 border-t border-forest/5">
        <div className="container px-8">
          <div className="text-center mb-16 max-w-[1200px] mx-auto">
            <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4">WHAT WE OFFER</div>
            <h2 className="serif text-[clamp(42px,5vw,58px)] font-light text-forest leading-tight mb-6">Programs for <em className="italic text-clay">Every Player</em></h2>
            <p className="mx-auto text-light font-light text-lg max-w-lg">From your first backhand to tournament-ready play, we have a program for you.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto bg-white shadow-xl border border-forest/5">
            {programs.map((prog, i) => (
              <motion.div 
                key={i} 
                onClick={() => {
                  setSelected(i);
                  // Optional: Small delay before navigation
                  setTimeout(() => showPage('programs'), 200);
                }}
                onMouseEnter={() => setSelected(i)}
                onMouseLeave={() => setSelected(null)}
                className={`group relative p-12 lg:p-14 border border-forest/5 cursor-pointer transition-all duration-300 overflow-hidden ${
                  selected === i ? 'bg-[#1a3a2a] text-white' : 'bg-white text-forest'
                }`}
              >
                {/* Top Border on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-clay origin-left transition-transform duration-500 ${
                  selected === i ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-8 text-2xl transition-all duration-300 ${
                  selected === i ? 'bg-white/10' : 'bg-[#e8efe9]'
                }`}>
                  {prog.icon}
                </div>
                <h3 className={`serif text-2xl font-semibold mb-4 transition-all duration-300 ${
                  selected === i ? 'text-white' : 'text-forest'
                }`}>
                  {prog.title}
                </h3>
                <p className={`text-[13px] leading-[1.7] font-light mb-8 transition-all duration-300 ${
                  selected === i ? 'text-white/70' : 'text-light'
                }`}>
                  {prog.desc}
                </p>
                <div className={`text-[10px] font-bold tracking-[2px] uppercase ${
                  selected === i ? 'text-gold' : 'text-clay'
                }`}>
                  {prog.meta}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => showPage('programs')} className="btn btn-primary px-10">VIEW ALL PROGRAMS</button>
          </div>
        </div>
      </section>
    );
  }

  // Same for sub-page view...
  return (
    <div className="bg-cream min-h-screen pt-24 pb-32">
       <div className="container px-8 max-w-[1200px] mx-auto text-center mb-20">
            <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4">OUR COMPLETE LIST</div>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-6">Expertise for Every <em className="italic text-clay">Level</em></h2>
       </div>
       <div className="container px-8 max-w-[1100px] mx-auto space-y-2">
         {programs.map((prog, i) => (
           <div key={i} className={`grid md:grid-cols-[1fr,1.4fr] bg-white border border-forest/5 group ${i % 2 === 1 ? 'direction-rtl' : ''}`}>
             <div className="h-[320px] bg-[#1a3a2a] flex items-center justify-center text-[80px] grayscale group-hover:grayscale-0 transition-all duration-700">
               {prog.icon}
             </div>
             <div className="p-12 md:p-14 flex flex-col justify-center text-left" style={{ direction: 'ltr' }}>
               <span className="text-[10px] font-bold tracking-[3px] uppercase text-clay mb-3">{prog.meta}</span>
               <h3 className="serif text-3xl font-light text-forest mb-4 leading-tight">{prog.title}</h3>
               <p className="text-[14px] font-light text-light leading-[1.8] mb-8">{prog.desc}</p>
               <ul className="mb-10 space-y-2 text-forest/70 list-none p-0">
                  <li className="flex items-center gap-3 text-sm font-medium"><div className="w-4 h-[1px] bg-clay" /> Professional Instruction</li>
                  <li className="flex items-center gap-3 text-sm font-medium"><div className="w-4 h-[1px] bg-clay" /> On Martha's Vineyard</li>
               </ul>
               <a href="https://wa.me/15089393030" target="_blank" className="btn btn-primary self-start">Book via WhatsApp</a>
             </div>
           </div>
         ))}
       </div>
    </div>
  );
};

export default Programs;
