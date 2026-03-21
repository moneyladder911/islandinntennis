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
                className={`group relative p-8 lg:p-10 border border-forest/5 cursor-pointer transition-all duration-300 overflow-hidden ${
                  selected === i ? 'bg-[#1a3a2a] text-white' : 'bg-white text-forest'
                }`}
              >
                {/* Top Border on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-clay origin-left transition-transform duration-500 ${
                  selected === i ? 'scale-x-100' : 'scale-x-0'
                }`} />
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl transition-all duration-300 ${
                  selected === i ? 'bg-white/10' : 'bg-[#e8efe9]'
                }`}>
                  {prog.icon}
                </div>
                <h3 className={`serif text-xl font-semibold mb-3 transition-all duration-300 ${
                  selected === i ? 'text-white' : 'text-forest'
                }`}>
                  {prog.title}
                </h3>
                <p className={`text-[12px] leading-[1.6] font-light mb-6 transition-all duration-300 ${
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
  // Render full page view
  return (
    <div className="bg-cream min-h-screen pt-24 pb-32">
       <div className="container px-8 max-w-[1200px] mx-auto text-center mb-20">
            <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4">OUR COMPLETE LIST</div>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-6">Expertise for Every <em className="italic text-clay">Level</em></h2>
       </div>
       <div className="container px-8 max-w-[1000px] mx-auto space-y-6">
         {programs.map((prog, i) => (
           <div key={i} className="flex flex-col md:flex-row md:items-center gap-8 bg-white border border-forest/10 p-8 md:p-10 shadow-sm hover:shadow-premium transition-all duration-300 group rounded-sm">
             
             <div className="w-20 h-20 rounded-full bg-forest shrink-0 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-inner">
               <span className="grayscale group-hover:grayscale-0 transition-all duration-500">{prog.icon}</span>
             </div>
             
             <div className="flex-1 text-left">
               <span className="text-[10px] font-bold tracking-[3px] uppercase text-clay mb-2 block">{prog.meta}</span>
               <h3 className="serif text-3xl font-light text-forest mb-3 leading-tight">{prog.title}</h3>
               <p className="text-[14px] font-light text-light leading-[1.8] max-w-2xl">{prog.desc}</p>
             </div>
             
             <div className="mt-4 md:mt-0 md:ml-auto">
               <a 
                 href={`sms:+15089393030&body=Hi Kim, I'm interested in the ${prog.title} program.`}
                 className="btn bg-transparent border border-clay text-clay hover:bg-clay hover:text-white whitespace-nowrap px-8 py-4 w-full md:w-auto text-center"
               >
                 INQUIRE
               </a>
             </div>
             
           </div>
         ))}
       </div>
    </div>
  );
};

export default Programs;
