import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users } from 'lucide-react';

const news = [
  {
    icon: <Trophy size={18} className="text-gold" />,
    tag: 'Tournament Results',
    title: 'Third Annual Father\'s Day Tournament 🎾',
    body: 'Four teams tied for the win! Congratulations to Keith & Ben Murphy, Gary & Quadri, Nick & Ivy, and Skip & Miles. See Kim for your prizes!',
    color: 'border-gold/20 bg-gold/5',
  },
  {
    icon: <Calendar size={18} className="text-clay" />,
    tag: 'Upcoming',
    title: 'July 4th Week — Book Early!',
    body: 'This is always one of the busiest weeks at IITC. Text Kim ASAP to get on the schedule. Light afternoon schedule on the 4th itself.',
    color: 'border-clay/20 bg-clay/5',
  },
  {
    icon: <Users size={18} className="text-forest" />,
    tag: 'Ladies Interclub',
    title: 'Interclub Matches — Dates Locked',
    body: 'July 29th @ Field Club & Aug 12th @ West Chop — both at 9:30am. Tennis whites required. Text Kim to sign up!',
    color: 'border-forest/20 bg-forest/5',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Community</span>
            <h2 className="serif text-[clamp(28px,4vw,44px)] font-light text-forest leading-tight">
              Latest from <em className="italic text-clay font-normal">IITC</em>
            </h2>
          </div>
          <a
            href="sms:+14079239047"
            className="btn bg-transparent border border-forest/10 text-forest hover:bg-forest hover:text-white text-[10px] shrink-0"
          >
            Text Kim for Updates
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-sm border p-8 ${item.color} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center gap-2 mb-4">
                {item.icon}
                <span className="text-[9px] font-bold tracking-[3px] uppercase text-forest/50">{item.tag}</span>
              </div>
              <h3 className="serif text-xl font-light text-forest mb-3 leading-snug">{item.title}</h3>
              <p className="text-[13px] font-light text-light leading-[1.8]">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
