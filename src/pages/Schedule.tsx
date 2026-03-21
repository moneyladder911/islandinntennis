import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ChevronDown, MapPin, Phone, MessageCircle } from 'lucide-react';

const SchedulePage: React.FC = () => {
  // Generate 7 days starting from May 1st
  const scheduleStartDate = new Date(2026, 4, 1); // May 1st, 2026
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(scheduleStartDate);
    date.setDate(scheduleStartDate.getDate() + i);
    
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const shortDate = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }).toUpperCase();
    
    return { label: dayName, fullDate: shortDate, id: `${dayName}-${shortDate}` };
  });

  const [activeDay, setActiveDay] = useState(days[0].id);

  const levels = [
    { name: '2.0/2.5 Level', desc: 'Learning the game, basic strokes, and court positioning. Perfect for beginners.' },
    { name: '3.0 Level', desc: 'Developing consistency and directional control. Great for intermediate social play.' },
    { name: '3.5 Level', desc: 'Dependable strokes and improved court coverage. The most popular level.' },
    { name: '4.0 Level', desc: 'Reliable power, spin, and strong teamwork in competitive doubles.' },
    { name: '4.5/5.0 Level', desc: 'Advanced play, high-intensity competition, and aggressive net skills.' }
  ];

  const [activeLevelName, setActiveLevelName] = useState('3.5 Level');
  const activeLevel = levels.find(l => l.name === activeLevelName) || levels[2];

  const times = ['8:00 AM', '9:30 AM', '11:00 AM', '4:00 PM', '5:30 PM', '7:00 PM'];
  
  const getCourtForLevel = (levelIndex: number, timeIndex: number) => {
    const courts = ['Court 1', 'Court 2', 'Court 3'];
    return courts[(levelIndex + timeIndex) % 3];
  };

  const selectedDay = days.find(d => d.id === activeDay);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Schedule Hero */}
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">WEEKLY MATCH SCHEDULE</span>
            <h1 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Find Your <em className="italic text-gold font-normal">Level</em>, Find Your <em className="italic text-gold font-normal">Game</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              We run organized matches and clinics throughout the week for all skill levels. Browse our schedule below, then text Kim to confirm your spot.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream px-4">
        <div className="container max-w-[1240px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Select Your Day</span>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {days.map((day, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveDay(day.id)}
                  className={`flex flex-col items-center justify-center px-8 py-3 rounded-full transition-all shrink-0 min-w-[120px] ${
                    activeDay === day.id ? 'bg-forest text-gold shadow-lg scale-105' : 'bg-transparent text-light border border-clay/10 hover:border-clay hover:text-clay'
                  }`}
                >
                  <span className="text-[7px] tracking-[2px] opacity-70 mb-0.5">{day.fullDate}</span>
                  <span className="text-[9px] font-bold tracking-[2px] uppercase">{day.label}</span>
                </button>
              ))}
            </div>

            <div className="max-w-sm mx-auto">
              <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Select Your Level</span>
              <div className="relative">
                <select 
                  value={activeLevelName}
                  onChange={(e) => setActiveLevelName(e.target.value)}
                  className="w-full appearance-none bg-white border border-clay/15 text-forest font-bold tracking-[1px] text-sm py-4 px-6 rounded-sm outline-none focus:border-clay focus:ring-1 focus:ring-clay cursor-pointer shadow-sm hover:border-clay/40 transition-colors"
                >
                  {levels.map((level, i) => (
                    <option key={i} value={level.name}>{level.name}</option>
                  ))}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown size={18} className="text-clay" />
                </div>
              </div>
            </div>
            
            <p className="text-light text-sm font-light mt-8">Showing available match times for <strong className="font-semibold text-forest">{selectedDay?.label} {selectedDay?.fullDate}</strong>.</p>
          </div>

          <div className="max-w-[1000px] mx-auto">
            <div className="bg-white p-8 md:p-12 border border-forest/10 shadow-premium rounded-sm">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-forest/5 pb-8">
                <div>
                  <h2 className="serif text-4xl font-light text-forest mb-2">{activeLevel.name} Matches</h2>
                  <p className="text-light text-sm font-light">{activeLevel.desc}</p>
                </div>
                <div className="mt-4 md:mt-0 text-[10px] font-bold text-clay tracking-[2px] uppercase">
                  Informational Schedule
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {times.map((time, tIdx) => {
                   const lIdx = levels.findIndex(l => l.name === activeLevelName);
                   const court = getCourtForLevel(lIdx === -1 ? 0 : lIdx, tIdx);
                   return (
                     <motion.div 
                       key={`${activeDay}-${activeLevelName}-${time}`}
                       initial={{ opacity: 0, scale: 0.98 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.4, delay: tIdx * 0.05 }}
                       className="p-6 bg-cream/40 border border-clay/10 rounded-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                     >
                       <div className="flex justify-between items-start mb-4">
                         <div className="flex items-center gap-3 text-forest">
                           <Clock size={16} className="text-clay" />
                           <span className="text-[14px] font-bold tracking-[1px]">{time}</span>
                         </div>
                         <span className="text-[10px] font-bold tracking-[2px] uppercase bg-forest/5 text-forest px-3 py-1 rounded-sm border border-forest/10">{court}</span>
                       </div>
                       <p className="text-xs font-light text-light mb-3">4-Player Doubles · Balls Provided</p>
                       <div className="text-[9px] font-semibold tracking-[1px] uppercase text-clay/80">
                         Contact Kim to join
                       </div>
                     </motion.div>
                   );
                })}
              </div>
            </div>
          </div>

          {/* Contact Kim CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[700px] mx-auto mt-20"
          >
            <div className="bg-forest text-white p-10 md:p-14 rounded-sm text-center shadow-premium">
              <span className="text-[10px] font-bold tracking-[5px] uppercase text-gold mb-4 block">Ready to Play?</span>
              <h3 className="serif text-[clamp(24px,4vw,36px)] font-light mb-4">
                Text <em className="italic text-gold">Kim</em> to Confirm Your Spot
              </h3>
              <p className="text-white/60 text-sm font-light leading-[1.8] max-w-md mx-auto mb-8">
                All match bookings are confirmed directly through Kim. Simply text or call with your preferred day, time, and level — she'll take care of the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="sms:+15085551234"
                  className="flex items-center gap-3 px-8 py-4 bg-gold/20 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-forest transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <MessageCircle size={16} />
                  Text Kim
                </a>
                <a 
                  href="tel:+15085551234"
                  className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white/80 rounded-sm hover:bg-white/10 transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <Phone size={16} />
                  Call Kim
                </a>
              </div>

              <p className="text-white/30 text-[11px] font-light mt-8">
                <MapPin size={12} className="inline mr-1" />
                30 Island Inn Road · Oak Bluffs, MA 02557
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default SchedulePage;
