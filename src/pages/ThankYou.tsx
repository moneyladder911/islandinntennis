import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, MessageSquare, ArrowLeft, Instagram, Facebook, Calendar } from 'lucide-react';
import SEO from '../components/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 },
  }),
};

const steps = [
  {
    number: '01',
    title: 'We review your message',
    body: 'Every submission goes straight to Kim. Nothing gets lost — guaranteed.',
    icon: '✉️',
  },
  {
    number: '02',
    title: 'Kim reaches out',
    body: 'Expect a text or email reply within 24 hours. Usually much sooner.',
    icon: '📲',
  },
  {
    number: '03',
    title: 'Book your first session',
    body: 'Get matched to the perfect program and step on the court.',
    icon: '🎾',
  },
];

const ThankYou: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <SEO
        title="Message Received — Island Inn Tennis"
        description="Thanks for reaching out to Island Inn Tennis Club. Kim will be in touch within 24 hours."
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#163020' }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(179,147,89,0.12) 0%, transparent 65%), linear-gradient(160deg, rgba(13,31,22,0.9) 0%, rgba(26,58,42,0.7) 100%)',
          }}
        />

        {/* Background tennis court SVG */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06]">
          <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl">
            <rect x="40" y="40" width="520" height="320" fill="none" stroke="white" strokeWidth="2" />
            <line x1="40" y1="100" x2="560" y2="100" stroke="white" strokeWidth="1.5" />
            <line x1="40" y1="300" x2="560" y2="300" stroke="white" strokeWidth="1.5" />
            <line x1="300" y1="40" x2="300" y2="360" stroke="#b39359" strokeWidth="2.5" />
            <line x1="130" y1="100" x2="130" y2="300" stroke="white" strokeWidth="1.5" />
            <line x1="470" y1="100" x2="470" y2="300" stroke="white" strokeWidth="1.5" />
            <line x1="130" y1="200" x2="470" y2="200" stroke="white" strokeWidth="1.5" />
            <line x1="40" y1="200" x2="55" y2="200" stroke="white" strokeWidth="2" />
            <line x1="545" y1="200" x2="560" y2="200" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 text-center max-w-2xl mx-auto">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                <CheckCircle size={44} className="text-gold" strokeWidth={1.5} />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '2s' }} />
            </div>
          </motion.div>

          <motion.span
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block"
          >
            Message Received
          </motion.span>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="serif text-[clamp(36px,7vw,72px)] font-light text-white leading-[1.1] mb-6"
          >
            We Got Your{' '}
            <em className="italic text-gold font-normal">Message!</em>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-white/60 font-light leading-[1.9] text-[15px] max-w-lg mx-auto mb-10"
          >
            Kim will be in touch within 24 hours — usually sooner. Can't wait to
            see you on the{' '}
            <em className="text-gold/80 italic font-normal">island courts</em>.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="w-12 h-[1px] bg-gold/40 mx-auto"
          />
        </div>
      </section>

      {/* ── What Happens Next ── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">
              What's Next
            </span>
            <h2 className="serif text-[clamp(32px,5vw,52px)] font-light text-forest leading-tight">
              Here's What <em className="italic text-clay font-normal">Happens</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white rounded-sm p-10 shadow-sm border border-clay/8 relative group hover:shadow-lg transition-shadow duration-500"
              >
                {/* Step number */}
                <div className="text-[42px] font-light serif text-clay/20 leading-none mb-6 select-none">
                  {step.number}
                </div>
                {/* Icon */}
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="serif text-xl font-light text-forest mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-light leading-[1.8]">{step.body}</p>
                {/* Connector line (between cards) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-clay/20 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Actions ── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: '#163020' }}
      >
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background:
              'linear-gradient(135deg, rgba(179,147,89,0.15) 0%, transparent 60%)',
          }}
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
              Can't Wait?
            </span>
            <h2 className="serif text-[clamp(28px,4vw,48px)] font-light text-white leading-tight mb-4">
              Text Kim <em className="italic text-gold font-normal">Directly</em>
            </h2>
            <p className="text-white/50 font-light text-sm mb-12 max-w-sm mx-auto leading-[1.8]">
              Fastest way to book a court or ask a quick question.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <a
              href="sms:+14079239047"
              className="btn btn-primary shadow-xl shadow-gold/10 gap-3"
            >
              <MessageSquare size={16} />
              Text Kim Now
            </a>
            <Link
              to="/schedule"
              className="btn border border-white/20 text-white hover:bg-white hover:text-forest gap-3"
            >
              <Calendar size={16} />
              View Schedule
            </Link>
          </motion.div>

          {/* Divider */}
          <div className="w-px h-12 bg-gold/20 mx-auto mb-10" />

          {/* Nav + Social */}
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

export default ThankYou;
