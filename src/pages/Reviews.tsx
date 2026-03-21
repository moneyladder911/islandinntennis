import React from 'react';
import ReviewsContent from '../components/Reviews';
import { motion } from 'framer-motion';

const ReviewsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="bg-forest pt-48 pb-24 text-white text-center relative overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag" style={{ color: 'var(--gold)' }}>Player Testimonials</span>
          <h1 className="section-title text-white">Love from the <em>Baseline</em></h1>
          <p className="mx-auto text-white/50 text-balance font-light leading-relaxed max-w-lg lg:text-lg">
            Hear from our community of residents and visitors who make the Island Inn their home for tennis.
          </p>
        </div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-clay/5 rounded-full blur-[100px] pointer-events-none" />
      </section>
      
      <div className="bg-cream">
        <ReviewsContent isPreview={false} showPage={() => {}} />
      </div>
    </motion.div>
  );
};

export default ReviewsPage;
