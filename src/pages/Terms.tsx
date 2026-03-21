import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, AlertCircle, FileText } from 'lucide-react';

const Terms: React.FC = () => {
  const policies = [
    {
      icon: <Clock className="text-gold" />,
      title: "Booking & Cancellations",
      content: "All court bookings and private lessons must be confirmed via text message to Kim. We require a 24-hour notice for cancellations. Late cancellations or no-shows may be subject to a 50% fee. Seasonal memberships provide unlimited booking, but are subject to fair-use availability."
    },
    {
      icon: <Shield className="text-gold" />,
      title: "Club Etiquette",
      content: "Proper tennis attire and non-marking tennis shoes are mandatory on all courts. We maintain a family-friendly coastal atmosphere; please respect fellow players and the quiet luxury of the Island Inn grounds."
    },
    {
      icon: <AlertCircle className="text-gold" />,
      title: "Weather & Court Safety",
      content: "Island Tennis reserves the right to close courts due to adverse weather or maintenance. Safety is our priority. If a session is rained out, we will proactively reschedule or provide a credit for future play."
    },
    {
      icon: <FileText className="text-gold" />,
      title: "Membership Terms",
      content: "2026 Summer Memberships are valid from May 1st through November 1st, 2026. Memberships are individual or family-specific and non-transferable. Resort access at the Island Inn is provided as a courtesy to regular season members."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">LEGAL & POLICIES</span>
            <h1 className="serif text-[clamp(40px,6vw,60px)] font-light text-white leading-[1.1] mb-6 select-none text-center w-full flex-shrink-0">
              Club <em className="italic text-gold font-normal">Terms</em> & Guidelines
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-base max-w-2xl mx-auto mb-8 text-center w-full">
              Ensuring a premium experience for every player at the Island's most welcoming club. These terms govern your play for the 2026 season.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container px-8 max-w-[1000px] mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {policies.map((policy, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-cream/40 p-10 border border-forest/5 rounded-sm"
              >
                <div className="mb-6">{policy.icon}</div>
                <h3 className="serif text-2xl text-forest mb-4 font-normal">{policy.title}</h3>
                <p className="text-light text-[15px] font-light leading-relaxed">{policy.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-forest text-white rounded-sm text-center">
            <h4 className="serif text-3xl mb-6 font-light">Questions regarding our policies?</h4>
            <p className="text-white/60 mb-8 max-w-lg mx-auto font-light">We value transparency. If you need clarification on any terms, please reach out to Kim directly.</p>
            <a href="sms:+14079239047" className="btn btn-primary px-10 border-none">Text Kim Directly</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Terms;
