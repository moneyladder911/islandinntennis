import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Facebook, Calendar, Bell } from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 },
  }),
};

const perks = [
  { emoji: '📅', title: '2026 Season Dates', body: 'Be the first to know when the courts open each spring.' },
  { emoji: '🎾', title: 'Clinic Schedules', body: 'Early access to group clinics before they fill up.' },
  { emoji: '🌊', title: 'Island Updates', body: 'News, events and what\'s happening at Island Inn.' },
];

const NewsletterThanks: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SEO
        title="You're On The List — Island Inn Tennis"
        description="Thanks for joining the Island Inn Tennis newsletter. You'll be first to hear about the 2026 season."
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[65vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#163020' }}
      >
        {/* Gradient */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(181,108,77,0.1) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(179,147,89,0.08) 0%, transparent 55%)',
          }}
        />

        {/* Floating tennis ball dots */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[
            { top: '15%', left: '8%', size: 6, opacity: 0.08 },
            { top: '70%', left: '5%', size: 10, opacity: 0.05 },
            { top: '25%', right: '10%', size: 8, opacity: 0.07 },
            { top: '75%', right: '8%', size: 5, opacity: 0.06 },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold"
              style={{ top: dot.top, left: dot.left, right: dot.right, width: dot.size, height: dot.size, opacity: dot.opacity }}
            />
          ))}
        </div>

        <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
          {/* Bell icon */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-clay/20 border border-clay/30 flex items-center justify-center">
                <Bell size={40} className="text-clay" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 rounded-full border border-clay/20 animate-ping" style={{ animationDuration: '2.5s' }} />
            </div>
          </motion.div>

          <motion.span
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block"
          >
            You're On The List
          </motion.span>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="serif text-[clamp(36px,7vw,72px)] font-light text-white leading-[1.1] mb-6"
          >
            Welcome to the{' '}
            <em className="italic text-clay font-normal">Island.</em>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/60 font-light leading-[1.9] text-[15px] max-w-md mx-auto mb-10"
          >
            You'll be the first to hear about the{' '}
            <em className="text-gold/80 italic font-normal">2026 season</em>, 
            {' '}clinic schedules and everything happening at Island Inn Tennis.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="w-12 h-[1px] bg-clay/40 mx-auto"
          />
        </div>
      </section>

      {/* ── What You'll Get ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">
              What To Expect
            </span>
            <h2 className="serif text-[clamp(28px,4vw,48px)] font-light text-forest leading-tight">
              Your <em className="italic text-clay font-normal">Island Inn</em> Insider Access
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white rounded-sm p-10 shadow-sm border border-clay/8 text-center hover:shadow-lg transition-shadow duration-500"
              >
                <div className="text-4xl mb-5">{perk.emoji}</div>
                <h3 className="serif text-xl font-light text-forest mb-3">{perk.title}</h3>
                <p className="text-sm font-light text-light leading-[1.8]">{perk.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-24 md:py-28 relative overflow-hidden"
        style={{ backgroundColor: '#163020' }}
      >
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, rgba(181,108,77,0.2) 0%, transparent 60%)' }}
        />
        <div className="container relative z-10 text-center">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-gold mb-4 block">
              Ready To Play?
            </span>
            <h2 className="serif text-[clamp(28px,4vw,44px)] font-light text-white leading-tight mb-10">
              Don't wait for the <em className="italic text-clay font-normal">newsletter</em>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/contact"
              className="btn btn-primary shadow-xl shadow-gold/10 gap-3"
            >
              Book a Session
            </Link>
            <Link
              to="/schedule"
              className="btn border border-white/20 text-white hover:bg-white hover:text-forest gap-3"
            >
              <Calendar size={16} />
              View Schedule
            </Link>
          </motion.div>

          <div className="w-px h-10 bg-gold/20 mx-auto mb-10" />

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-[11px] font-bold tracking-[3px] uppercase"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <span className="text-white/20 hidden sm:block">·</span>
            <a
              href="https://www.instagram.com/islandinntennismv/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-[11px] font-bold tracking-[3px] uppercase"
            >
              <Instagram size={14} />
              Instagram
            </a>
            <span className="text-white/20 hidden sm:block">·</span>
            <a
              href="https://www.facebook.com/people/Island-Inn-Tennis-Club/61560318390721/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors text-[11px] font-bold tracking-[3px] uppercase"
            >
              <Facebook size={14} />
              Facebook
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default NewsletterThanks;
