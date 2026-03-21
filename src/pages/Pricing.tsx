import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users } from 'lucide-react';
import Memberships from '../components/Memberships';

const PricingPage: React.FC = () => {
  const tiers = [
    {
      title: 'Private Lessons',
      price: '$120',
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
      price: '$45',
      period: 'per session',
      desc: 'High-energy drills with 4-8 players.',
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
      title: 'Junior Program',
      price: '$180',
      period: 'weekly',
      desc: 'Focused fun for players ages 6-17.',
      features: [
        'Age-specific tracks',
        'Daily sessions',
        'Progress tracking',
        'Summer camp vibe',
      ],
      popular: false,
      cta: 'Enroll Junior'
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-6 block">VALUE & PLAY</span>
            <h1 className="serif text-[clamp(48px,8vw,92px)] font-light text-white leading-[1.05] mb-8 select-none">
              Invest in Your <em className="italic text-gold font-normal">Summer</em> of <em className="italic text-gold font-normal">Tennis</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-lg max-w-2xl mx-auto mb-12">
               Simple, transparent rates for the Vineyard's most welcoming club. Join us for a single set or a whole season—we've crafted our tiers to fit every island journey.
            </p>
            <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 p-1 bg-forest/5 border border-forest/5 shadow-2xl">
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
                  <span className="text-5xl font-light text-clay tracking-tighter">{tier.price}</span>
                  <span className="text-[9px] font-bold text-light uppercase tracking-[2px]">{tier.period}</span>
                </div>
                <p className="text-[13px] font-light text-light leading-relaxed mb-10 h-14 overflow-hidden">{tier.desc}</p>
                
                <div className="space-y-4 mb-12 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-xs font-light text-forest/70">
                      <Check size={14} className="text-gold shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/15089393030?text=Hi Kim, I'm interested in the ${tier.title}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full leading-none no-underline ${
                    tier.popular ? 'btn-primary' : 'bg-transparent border border-forest/10 text-forest hover:bg-forest hover:text-white'
                  }`}
                  style={{ padding: '16px 20px', fontSize: '10px' }}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-[#fdfaf5] p-14 lg:p-20 rounded-sm border border-forest/5 max-w-4xl mx-auto shadow-sm">
            <h4 className="serif text-4xl text-forest mb-6 font-light">Looking for something specific?</h4>
            <p className="text-light text-lg font-light mb-12 max-w-sm mx-auto">Custom multi-family packages and season-long rates are available upon request.</p>
            <a href="https://wa.me/15089393030" target="_blank" className="btn btn-outline !border-forest !text-forest px-12 py-5 hover:bg-forest hover:!text-white no-underline text-xs tracking-[3px]">Inquire for Custom Quote</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PricingPage;
