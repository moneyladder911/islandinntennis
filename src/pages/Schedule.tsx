import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Trophy, Phone, MessageCircle, MapPin, Star, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const weeklySchedule = [
  {
    day: 'Monday',
    label: 'Mixed Monday',
    times: 'All Day — starting at 9:30am',
    desc: 'Mixed doubles matches for all levels. A great way to kick off the week and meet new players.',
    icon: '🎾',
    color: 'bg-gold/10 border-gold/20',
    badgeColor: 'bg-gold/20 text-forest',
  },
  {
    day: 'Wednesday',
    label: "Wednesday Night Men's",
    times: '3:30pm · 5:00pm · 6:30pm',
    desc: "Mid-week men's competitive sets. Three sessions to choose from — drop in for your preferred slot.",
    icon: '🌆',
    color: 'bg-forest/5 border-forest/10',
    badgeColor: 'bg-forest/10 text-forest',
  },
  {
    day: 'Thursday',
    label: 'Thursday Clinic — Eddie from Chilmark',
    times: '5:30pm',
    desc: 'Special clinic with Eddie from Chilmark. Sign up via Team Reach — see details below.',
    icon: '⭐',
    color: 'bg-clay/10 border-clay/20',
    badgeColor: 'bg-clay/20 text-white',
    special: true,
  },
  {
    day: 'Saturday',
    label: 'Saturday Mixed Doubles',
    times: 'All Day!',
    desc: 'The biggest day of the week. Mixed doubles all day long — social, competitive, and everything in between.',
    icon: '☀️',
    color: 'bg-gold/10 border-gold/20',
    badgeColor: 'bg-gold/20 text-forest',
  },
  {
    day: 'Sunday',
    label: "Sunday Morning Men's",
    times: '9:30am & 11:00am',
    desc: "High-level men's play to close out the weekend. Two sessions available — 9:30am and 11:00am.",
    icon: '🌅',
    color: 'bg-forest/5 border-forest/10',
    badgeColor: 'bg-forest/10 text-forest',
  },
];

const clinics = [
  { name: 'Beginner to Intermediate', when: 'Mon, Wed & Sun · 8:00am – 9:30am', emoji: '🏃' },
  { name: 'Serving Clinic', when: 'Thursdays · 4:30pm – 5:30pm', emoji: '🎯' },
  { name: 'Intermediate Cardio Clinic', when: 'Fridays · 8:00am – 9:30am', emoji: '💪' },
  { name: 'Basic Doubles Clinic', when: 'Saturdays · 2:00pm – 3:30pm', emoji: '🤝' },
  { name: 'Advanced Doubles Clinic', when: 'TBD — text Kim if interested!', emoji: '🏆' },
  { name: 'Kids Clinics', when: 'By Request', emoji: '👦' },
];

const interclubDates = [
  { date: 'Wednesday, July 29th', time: '9:30am', venue: 'The Field Club', locked: true },
  { date: 'Wednesday, August 12th', time: '9:30am', venue: 'West Chop', locked: true },
];

const SchedulePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero */}
      <section
        className="pt-28 pb-10 text-center relative overflow-hidden flex items-center justify-center px-10"
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">2026 SEASON</span>
            <h1 className="serif text-[clamp(28px,4vw,36px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Live Schedule — <em className="italic text-gold font-normal">Summer 2026</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              From morning clinics to evening social play — something every day. Season runs May 16 to November 7. Text Kim to get on the schedule.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-24 md:py-32 bg-cream px-4">
        <div className="container max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">This Week</span>
            <h2 className="serif text-[clamp(28px,4vw,44px)] font-light text-forest leading-tight">
              Weekly <em className="italic text-clay">Schedule</em>
            </h2>
          </div>

          <div className="space-y-4 mb-20">
            {weeklySchedule.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`bg-white border ${item.color} rounded-sm p-8 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="text-4xl shrink-0">{item.icon}</div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className={`text-[9px] font-bold tracking-[3px] uppercase px-3 py-1 rounded-full ${item.badgeColor}`}>{item.day}</span>
                    {item.special && <span className="text-[9px] font-bold tracking-[3px] uppercase px-3 py-1 rounded-full bg-clay text-white">Special Guest</span>}
                  </div>
                  <h3 className="serif text-2xl font-light text-forest mb-1">{item.label}</h3>
                  <p className="text-sm font-light text-light">{item.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[10px] font-bold tracking-[2px] uppercase text-gold mb-1">Time</div>
                  <div className="serif text-xl text-forest font-light whitespace-nowrap">{item.times}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Eddie's Clinic Special Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-clay/10 border border-clay/20 rounded-sm p-10 md:p-14 mb-20"
          >
            <div className="flex items-start gap-4 mb-6">
              <Star size={22} className="text-clay shrink-0 mt-1" />
              <div>
                <span className="text-[10px] font-bold tracking-[3px] uppercase text-clay mb-2 block">Special Thursday Clinic</span>
                <h3 className="serif text-3xl font-light text-forest">Eddie from Chilmark — 5:30pm Thursdays</h3>
              </div>
            </div>
            <p className="text-sm font-light text-light leading-[1.8] mb-8 max-w-2xl">
              Eddie's Thursday evening clinic runs at Island Inn. Sign up through <strong className="text-forest">Team Reach</strong> — make sure to select the Island Inn Clinic specifically as all his clinics are listed there.
            </p>
            <div className="bg-white rounded-sm p-6 border border-clay/10 max-w-md">
              <div className="text-[10px] font-bold tracking-[3px] uppercase text-gold mb-4">Team Reach Sign-Up Details</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-forest/60 uppercase tracking-wider text-[11px]">Group Name</span>
                  <span className="font-light text-forest">Eddie's Summer Tour Once More</span>
                </div>
                <div className="flex justify-between text-sm border-t border-clay/10 pt-3">
                  <span className="font-bold text-forest/60 uppercase tracking-wider text-[11px]">Group Code</span>
                  <span className="font-bold text-clay tracking-widest">EDST2026</span>
                </div>
                <div className="flex justify-between text-sm border-t border-clay/10 pt-3">
                  <span className="font-bold text-forest/60 uppercase tracking-wider text-[11px]">Select</span>
                  <span className="font-light text-forest">Island Inn Clinic</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clinics Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Clinics</span>
              <h2 className="serif text-[clamp(24px,3vw,40px)] font-light text-forest leading-tight mb-4">
                Clinic <em className="italic text-clay">Schedule</em>
              </h2>
              <div className="flex items-center justify-center gap-6 mt-4">
                <div className="bg-gold/10 border border-gold/20 rounded-sm px-5 py-3 text-center">
                  <div className="text-[9px] font-bold tracking-[3px] uppercase text-gold mb-1">Members</div>
                  <div className="serif text-2xl text-forest">$35</div>
                </div>
                <div className="text-forest/30 text-2xl font-light">/</div>
                <div className="bg-forest/5 border border-forest/10 rounded-sm px-5 py-3 text-center">
                  <div className="text-[9px] font-bold tracking-[3px] uppercase text-forest/50 mb-1">Non-Members</div>
                  <div className="serif text-2xl text-forest">$40</div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {clinics.map((clinic, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="bg-white border border-forest/8 rounded-sm p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{clinic.emoji}</div>
                  <h4 className="serif text-xl font-light text-forest mb-2">{clinic.name}</h4>
                  <p className="text-[12px] font-bold uppercase tracking-[1px] text-clay/80">{clinic.when}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ladies Interclub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-forest text-white rounded-sm p-10 md:p-14 mb-20"
          >
            <div className="flex items-start gap-4 mb-8">
              <Trophy size={22} className="text-gold shrink-0 mt-1" />
              <div>
                <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold mb-2 block">Ladies Doubles</span>
                <h3 className="serif text-3xl font-light text-white">Interclub Matches — 2026</h3>
              </div>
            </div>
            <p className="text-white/60 text-sm font-light leading-[1.8] mb-8 max-w-2xl">
              Wednesday morning matches against the Boat House, Field Club, West Chop, East Chop, Vineyard Haven Yacht Club, Edgartown Yacht Club, and more. <strong className="text-gold">Tennis whites required</strong> for all interclub matches.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {interclubDates.map((d, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-sm p-6">
                  <div className="text-[9px] font-bold tracking-[3px] uppercase text-gold mb-2">🔒 Confirmed Date</div>
                  <div className="serif text-xl text-white mb-1">{d.date}</div>
                  <div className="text-sm text-white/60">{d.time} · <span className="text-gold/80">{d.venue}</span></div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-sm p-5">
              <AlertCircle size={16} className="text-gold shrink-0" />
              <p className="text-white/60 text-[13px] font-light">More dates being finalized. <strong className="text-white">Text Kim to sign up</strong> — (407) 923-9047</p>
            </div>
          </motion.div>

          {/* How It Works */}
          <div className="bg-white p-10 md:p-16 border border-forest/10 rounded-sm shadow-sm text-center mb-20">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">How It Works</span>
            <h3 className="serif text-3xl font-light text-forest mb-10">Three Simple Steps</h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">1</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Text Kim</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Send a text to +1 (407) 923-9047 with your level and when you'd like to play.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">2</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Get Matched</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Kim will pair you with the right group, clinic, or partner based on your skill level.</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-forest/5 text-forest flex items-center justify-center mx-auto mb-5 text-lg font-bold">3</div>
                <h4 className="font-bold text-sm text-forest mb-2 uppercase tracking-[1px]">Show Up & Play</h4>
                <p className="text-[13px] font-light text-light leading-relaxed">Arrive at the courts, grab your racket, and enjoy. Balls and equipment available on-site.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[700px] mx-auto"
          >
            <div className="bg-forest text-white p-10 md:p-14 rounded-sm text-center shadow-premium">
              <span className="text-[10px] font-bold tracking-[5px] uppercase text-gold mb-4 block">Ready to Play?</span>
              <h3 className="serif text-[clamp(24px,4vw,36px)] font-light mb-4">
                Text <em className="italic text-gold">Kim</em> to Get Started
              </h3>
              <p className="text-white/60 text-sm font-light leading-[1.8] max-w-md mx-auto mb-4">
                Kim responds between 6:00am – 8:00pm. Please be patient — she'll always get back to you!
              </p>
              <p className="text-white/30 text-[11px] font-light mb-8">Note: this email inbox is not checked regularly. Text is always best.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="sms:+14079239047"
                  className="flex items-center gap-3 px-8 py-4 bg-gold/20 border border-gold/40 text-gold rounded-sm hover:bg-gold hover:text-forest transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <MessageCircle size={16} />
                  Text Kim
                </a>
                <a
                  href="tel:+14079239047"
                  className="flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white/80 rounded-sm hover:bg-white/10 transition-all text-[11px] font-bold tracking-[2px] uppercase"
                >
                  <Phone size={16} />
                  Call Kim
                </a>
              </div>
              <p className="text-white/30 text-[11px] font-light mt-8">
                <MapPin size={12} className="inline mr-1" />
                30 Island Inn Road - Oak Bluffs, MA 02557
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default SchedulePage;
