import React from 'react';
import { motion } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const images = [
    { span: 'md:row-span-2', title: 'Morning Mist on Court 1', icon: '☁️', color: '#1a3a2a' },
    { span: 'md:col-span-2', title: 'Summer Junior Camp', icon: '🎾', color: '#c96b3a' },
    { span: '', title: 'Oak Bluffs Sunset', icon: '🌅', color: '#b89a5e' },
    { span: '', title: 'Beach Road Entrance', icon: '🏤', color: '#0d1f16' },
    { span: 'md:col-span-2', title: 'Pro Clinic Action', icon: '👥', color: '#1e5c38' },
    { span: '', title: 'Island Inn Pool Side', icon: '🏊', color: '#1a3a5a' },
    { span: 'md:row-span-2', title: 'Nomans Garden View', icon: '🌿', color: '#153d20' },
    { span: '', title: 'Tennis Pro Shop', icon: '🏪', color: '#2a5a3a' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="bg-forest pt-48 pb-24 text-white text-center relative overflow-hidden">
        <div className="container relative z-10">
          <span className="section-tag" style={{ color: 'var(--gold)' }}>The Club Experience</span>
          <h1 className="section-title text-white">Island <em>Spirit in Focus</em></h1>
          <p className="mx-auto text-white/50 text-balance font-light leading-relaxed max-w-lg lg:text-lg">
            A visual journey through the courts and coastlines of Martha's Vineyard.
          </p>
        </div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-clay/5 rounded-full blur-[100px] pointer-events-none" />
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:auto-rows-[250px]">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative group bg-white overflow-hidden rounded-sm shadow-premium ${img.span}`}
              >
                <div 
                  className="absolute inset-0 flex items-center justify-center text-7xl transition-transform duration-1000 group-hover:scale-125"
                  style={{ backgroundColor: img.color }}
                >
                  <span className="opacity-40">{img.icon}</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[8px] font-bold tracking-[3px] uppercase text-gold mb-2">Featured Shot</span>
                  <h3 className="serif text-xl font-light text-white">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;
