import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const SchedulePage: React.FC = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const slots = [
    { time: '08:00 AM', program: 'Private Lessons', color: 'bg-clay/10 text-clay border-clay/20' },
    { time: '09:00 AM', program: 'Group Clinic (Intermediate)', color: 'bg-forest/10 text-forest border-forest/20' },
    { time: '10:30 AM', program: 'Junior Intensive', color: 'bg-gold/10 text-gold border-gold/20' },
    { time: '12:00 PM', program: 'Lunch Break / Court Rental', color: 'bg-light/10 text-light border-light/20' },
    { time: '02:00 PM', program: 'Private Lessons', color: 'bg-clay/10 text-clay border-clay/20' },
    { time: '04:00 PM', program: 'Adult Social Play', color: 'bg-dark/10 text-dark border-dark/20' },
    { time: '06:00 PM', program: 'Sunset Singles Match', color: 'bg-forest/10 text-forest border-forest/20' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rewritten Schedule Hero */}
      <section 
        className="pt-48 pb-32 text-center relative overflow-hidden flex items-center justify-center px-10"
        style={{ backgroundColor: '#163020' }}
      >
        <div 
           className="absolute inset-0 z-0 opacity-40" 
           style={{ background: 'linear-gradient(135deg, rgba(13,31,22,1) 0%, rgba(26,58,42,0.8) 50%, rgba(181,108,77,0.3) 100%)' }}
        />
        <div className="container relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-6 block">THE SEASON'S RHYTHM</span>
            <h1 className="serif text-[clamp(48px,8vw,92px)] font-light text-white leading-[1.05] mb-8 select-none">
              Find Your <em className="italic text-gold font-normal">Moment</em> on the <em className="italic text-gold font-normal">Court</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-lg max-w-2xl mx-auto mb-12">
               Our clinics and social matches follow the unhurried pace of island life. Explore our weekly schedule and discovery your next game.
            </p>
            <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream px-4">
        <div className="container max-w-[1240px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-1 border border-forest/10 bg-white shadow-2xl overflow-hidden">
            {/* Calendar Sidebar */}
            <div className="lg:w-1/3 p-12 lg:p-14 bg-cream/50">
              <h3 className="serif text-3xl font-light text-forest mb-8">Quick Booking</h3>
              <p className="text-sm font-light text-light mb-12 leading-relaxed">Select your preferred slot and we'll take you directly to Kim on WhatsApp for confirmation.</p>
              
              <div className="space-y-4">
                {['Private Lessons', 'Group Clinics', 'Junior Program', 'Court Rental'].map((item, i) => (
                  <a 
                    key={i}
                    href={`https://wa.me/15089393030?text=Hi Kim, I'd like to book a ${item}!`} 
                    target="_blank"
                    className="flex items-center justify-between p-6 bg-white border border-clay/5 rounded-sm hover:border-gold hover:-translate-x-2 transition-all duration-300 no-underline group shadow-sm hover:shadow-xl"
                  >
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-forest/70 group-hover:text-gold transition-all">{item}</span>
                    <ChevronRight size={14} className="text-clay group-hover:text-gold" />
                  </a>
                ))}
              </div>
            </div>

            {/* Weekly Grid */}
            <div className="lg:w-2/3 p-12 lg:p-14">
              <div className="flex gap-4 mb-14 overflow-x-auto pb-6 scrollbar-hide">
                {days.map((day, i) => (
                  <button 
                    key={i} 
                    className={`px-10 py-4 text-[10px] font-bold tracking-[3px] uppercase rounded-full transition-all shrink-0 ${
                      i === 0 ? 'bg-forest text-gold shadow-2xl scale-105' : 'bg-transparent text-light border border-clay/10 hover:border-clay'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                {slots.map((slot, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-center gap-8 p-8 border-b border-forest/5 last:border-0 group hover:bg-forest/5 transition-colors"
                  >
                    <div className="flex items-center gap-4 md:w-36 shrink-0">
                      <Clock size={16} className="text-clay" />
                      <span className="text-[11px] font-bold tracking-[2px] uppercase text-forest">{slot.time}</span>
                    </div>
                    <div className="flex-grow">
                      <div className={`inline-block px-5 py-2 text-[9px] font-bold tracking-[2px] uppercase rounded-sm border mb-2 group-hover:scale-105 transition-all ${slot.color}`}>
                        {slot.program}
                      </div>
                      <div className="text-[13px] font-light text-light">Professional instruction at Court 1</div>
                    </div>
                    <a 
                      href={`https://wa.me/15089393030?text=Hi Kim, I'd like to join the ${slot.program} at ${slot.time}!`}
                      target="_blank"
                      className="text-[10px] font-bold tracking-[3px] uppercase text-clay hover:text-gold no-underline transition-colors flex items-center gap-3 py-2"
                    >
                      Book Slot <ArrowRight size={16} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ArrowRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default SchedulePage;
