import React from 'react';
import AboutContent from '../components/About';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-cream">
        <AboutContent />
      </div>
    </motion.div>
  );
};

export default AboutPage;
