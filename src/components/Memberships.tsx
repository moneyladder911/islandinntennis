import React from 'react';
import { Check, Star, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Memberships: React.FC = () => {
  const plans = [
    {
      name: "Early Bird",
      price: "600",
      tag: "Seasonal Opening Special",
      icon: <Zap className="text-gold" />,
      features: [
        "Play FREE until November 1st",
        "Up to 3 sessions per week",
        "Preferred Booking Times",
        "Invitation to Member Mixers",
        "Seasonal Membership Offer"
      ],
      cta: "Grab Early Bird",
      highlight: false
    },
    {
      name: "Regular Season",
      price: "999",
      tag: "The Island Choice",
      icon: <Star className="text-gold fill-gold" />,
      features: [
        "Play FREE until November 1st",
        "Play unlimited times",
        "10% Off Private Lessons",
        "Invite to Season Finals",
        "Full Resort Access (Island Inn)"
      ],
      cta: "Become a Member",
      highlight: true
    },
    {
      name: "Family All-Access",
      price: "1299",
      tag: "Covers up to 4 Members",
      icon: <Users className="text-gold" />,
      features: [
        "Whole Family Plays FREE",
        "Unlimited Family Bookings",
        "Priority Junior Clinic Entry",
        "Family Mixer Invites",
        "Available until November 1st"
      ],
      cta: "Join as Family",
      highlight: false
    }
  ];

  return (
    <section className="py-32 bg-[#fdfaf5] text-forest relative overflow-hidden border-b border-forest/5">
      <div className="container px-8 max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[5px] uppercase text-gold mb-6 block">CORE OFFER</span>
          <h2 className="serif text-5xl md:text-6xl font-light leading-tight mb-8">2026 Summer <em className="italic text-clay font-normal">Memberships</em></h2>
          <p className="text-forest/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            The heart of Island Tennis. All seasonal offers are available through <em className="text-clay italic font-normal">November 1st, 2026</em>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-12 md:p-14 border rounded-sm flex flex-col items-center text-center transition-all duration-500 overflow-hidden ${
                plan.highlight ? 'bg-forest text-white shadow-[0_40px_100px_rgba(0,0,0,0.2)] scale-105 z-20 border-forest' : 'bg-white border-forest/5 hover:bg-forest/5 hover:border-gold/30'
              }`}
            >
              <div className="mb-8">{plan.icon}</div>
              <h3 className={`text-[10px] font-bold tracking-[3px] uppercase mb-1 ${plan.highlight ? 'text-clay' : 'text-gold'}`}>{plan.name}</h3>
              <div className="serif text-[56px] font-light leading-none mb-4">
                <span className="text-[28px] align-top mr-1">$</span>{plan.price}
              </div>
              <p className={`text-[11px] font-bold tracking-[1px] uppercase mb-10 ${plan.highlight ? 'text-white/30' : 'text-forest/30'}`}>{plan.tag}</p>
              
              <ul className="w-full space-y-5 mb-12 text-left p-0 list-none">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-4 items-center text-sm font-medium">
                    <Check size={14} className={plan.highlight ? 'text-gold' : 'text-clay'} />
                    <span className={plan.highlight ? 'text-white/80' : 'text-forest/80'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="sms:+15089393030"
                className={`w-full py-5 text-[11px] font-bold tracking-[3px] uppercase no-underline rounded-sm transition-all duration-300 font-body ${
                  plan.highlight ? 'bg-[#163020] text-white hover:bg-[#c96b3a] shadow-xl' : 'bg-gold/90 text-forest hover:bg-white hover:text-forest'
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-forest/5 border border-forest/5 text-center flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="text-left max-w-sm">
             <h4 className="serif text-2xl font-light mb-2">Member Benefit No. 1</h4>
             <p className="text-forest/60 text-sm font-light leading-relaxed">Members always <em className="text-clay italic">Play for Free</em>. Text Kim and walk on court.</p>
          </div>
          <div className="w-[1px] h-12 bg-forest/10 hidden md:block" />
          <div className="text-left max-w-sm">
             <h4 className="serif text-2xl font-light mb-2">Member Benefit No. 2</h4>
             <p className="text-forest/60 text-sm font-light leading-relaxed">Rent the court for <em className="text-clay italic font-normal">Your Private Game</em> any time our Pro clinics aren't in session.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
