import React from 'react';
import ContactForm from '../components/Contact';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="bg-forest pt-48 pb-24 text-white text-center relative overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag" style={{ color: 'var(--gold)' }}>Reach Out</span>
          <h1 className="section-title text-white">Let's <em>Get Playing</em></h1>
          <p className="mx-auto text-white/50 text-balance font-light leading-relaxed max-w-lg lg:text-lg">
            Ready to book a lesson or match? Text Kim or send us a message below. We're here to help you master the court.
          </p>
        </div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-clay/5 rounded-full blur-[100px] pointer-events-none" />
      </section>
      
      <div className="bg-white">
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default ContactPage;
