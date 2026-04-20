import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users } from 'lucide-react';
import Memberships from '../components/Memberships';

const PricingPage: React.FC = () => {
  const tiers = [
    {
      title: 'Private Lessons',
      price: '$100-$150',
      period: 'per hour',
      desc: 'One-on-one coaching tailored to your level.',
      features: [
        'Customized drills',
        'Video analysis included',
        'Equipment provided',
        'Flexible scheduling',
      ],
      popular: false,
      cta: 'Book Private'
    },
    {
      title: 'Group Clinics',
      price: '$35',
      period: 'starting from',
      desc: 'High-energy drills with 4-8 players typically held weekday mornings.',
      features: [
        'Skills development',
        'Drill-based learning',
        'Social atmosphere',
        'Standard equipment',
      ],
      popular: true,
      cta: 'Join Clinic'
    },
    {
      title: 'Vacation Packages',
      price: '$299',
      period: '3-day intensive',
      desc: 'Make tennis the heart of your stay.',
      features: [
        'Daily court time',
        'Daily private lesson',
        'Unlimited court rental',
        'Racket rental included',
      ],
      popular: false,
      cta: 'Plan Package'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rewritten Pricing Hero */}
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">VALUE & PLAY</span>
            <h1 className="serif text-[clamp(28px,4vw,36px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Invest in Your <em className="italic text-gold font-normal">Summer</em> of <em className="italic text-gold font-normal">Tennis</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              Simple, transparent rates for the Vineyard's most welcoming club. Join us for a single set or a whole season—all offers available through <em className="text-gold italic font-normal">November 1st, 2026</em>.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Main Core Offer: Memberships */}
      <Memberships />

      {/* Individual Rates Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container px-8 max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">INDIVIDUAL TIERS</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-6">Rates for <em className="italic text-clay">Every Style</em></h2>
            <p className="text-light text-lg font-light max-w-xl mx-auto">For guests, transients, and those perfecting their game one lesson at a time.</p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-1 p-1 bg-forest/5 border border-forest/5 shadow-2xl max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col p-12 bg-white rounded-sm relative transition-all duration-300 ${
                  tier.popular ? 'z-10 bg-cream/30' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gold text-[#163020] text-[8px] font-bold tracking-[3px] uppercase py-2 text-center rounded-t-sm">
                    Most Popular
                  </div>
                )}
                
                <h3 className="serif text-2xl font-semibold text-forest mb-4 mt-2">{tier.title}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-[clamp(24px,3.5vw,40px)] font-light text-clay tracking-tighter leading-none">{tier.price}</span>
                  <span className="text-[9px] font-bold text-light uppercase tracking-[2px]">{tier.period}</span>
                </div>
                <p className="text-[13px] font-light text-light leading-relaxed mb-10 min-h-[3rem]">{tier.desc}</p>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-xs font-light text-forest/70">
                      <Check size={14} className="text-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href={`sms:+14079239047&body=Hi Kim, I'm interested in the ${tier.title}!`}
                  className={`btn w-full leading-none no-underline ${
                    tier.popular ? 'bg-gold text-forest hover:bg-white' : 'bg-transparent border border-forest/10 text-forest hover:bg-forest hover:text-white'
                  }`}
                  style={{ padding: '16px 20px', fontSize: '10px' }}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
          
          {/* Drop-in Rates Section */}
          <div className="mt-20 grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-forest/5 p-10 rounded-sm border border-forest/10">
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold mb-3 block">Guest Play</span>
              <h3 className="serif text-3xl text-forest mb-4 font-light">Walk-in Court Rental</h3>
              <p className="text-forest/60 text-[14px] font-light leading-relaxed mb-8 text-left">Available between clinic hours. Perfect for guests and locals looking for a quick set.</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-forest/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-forest/70">Island Inn Hotel Guests</span>
                  <span className="serif text-2xl text-clay">$25<small className="text-[10px] uppercase ml-1">/hr</small></span>
                </div>
                <div className="flex justify-between items-center border-b border-forest/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-forest/70">Public / Outsiders</span>
                  <span className="serif text-2xl text-clay">$35<small className="text-[10px] uppercase ml-1">/hr</small></span>
                </div>
              </div>
            </div>

            <div className="bg-forest p-10 rounded-sm border border-forest/10 text-white">
              <span className="text-[10px] font-bold tracking-[3px] uppercase text-gold/60 mb-3 block">Social Play</span>
              <h3 className="serif text-3xl text-white mb-4 font-light text-left">Social Match Play</h3>
              <p className="text-white/60 text-[14px] font-light leading-relaxed mb-8 text-left">Join our organized round-robins and ladders. Perfect for solo players looking for a game.</p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">Members</span>
                  <span className="serif text-2xl text-gold">FREE</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50">Non-Members Drop-in</span>
                  <span className="serif text-2xl text-gold">$20<small className="text-[10px] uppercase ml-1">/1.5h</small></span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center bg-[#fdfaf5] p-14 lg:p-20 rounded-sm border border-forest/5 max-w-4xl mx-auto shadow-sm">
            <h4 className="serif text-4xl text-forest mb-6 font-light">Looking for something specific?</h4>
            <p className="text-light text-lg font-light mb-12 max-w-sm mx-auto">Custom multi-family packages and season-long rates are available upon request.</p>
            <a href="sms:+14079239047" className="btn btn-outline !border-forest !text-forest px-12 py-5 hover:bg-forest hover:!text-white no-underline text-xs tracking-[3px]">Inquire for Custom Quote</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PricingPage;
