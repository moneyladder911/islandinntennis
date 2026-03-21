import React from 'react';
import { motion } from 'framer-motion';

const GalleryPage: React.FC = () => {
  const images = [
    { span: 'md:row-span-2', title: 'Seasonal Mixer at Island Inn', url: '/gallery/gallery-1.jpg', color: '#1a3a2a', pos: 'center 20%' },
    { span: 'md:col-span-2', title: 'Summer Family Tennis', url: '/gallery/gallery-2.jpg', color: '#c96b3a', pos: 'top' },
    { span: '', title: 'Private Instruction Support', url: '/gallery/gallery-3.jpg', color: '#b89a5e', pos: 'center 15%' },
    { span: '', title: 'Morning Drills with the Girls', url: '/gallery/gallery-4.jpg', color: '#0d1f16', pos: 'center 20%' },
    { span: 'md:col-span-2', title: 'Tennis Community under the Oaks', url: '/gallery/gallery-5.jpg', color: '#1e5c38', pos: 'center 10%' },
    { span: '', title: 'Island Inn Pool Side', url: '/gallery/pool-side.jpg', color: '#1a3a5a', pos: 'center' },
    { span: 'md:row-span-2', title: 'Nomans Garden View', url: '/gallery/nomans-garden.jpg', color: '#153d20', pos: 'center' },
    { span: '', title: 'Tennis Pro Shop', icon: '\u{1F3EA}', color: '#2a5a3a' },
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
            <span className="text-[10px] font-bold tracking-[6px] uppercase text-gold mb-4 inline-block text-center w-full">THE EXPERIENCE</span>
            <h1 className="serif text-[clamp(32px,5vw,48px)] font-light text-white leading-[1.2] mb-6 select-none text-center w-full flex-shrink-0">
              Island <em className="italic text-gold font-normal">Spirit in Focus</em>
            </h1>
            <p className="text-white/60 font-light leading-[1.8] text-sm max-w-2xl mx-auto mb-8 text-center w-full">
              A visual journey through the courts and coastlines of Martha's Vineyard. All programs and sessions active through <em className="text-gold italic font-normal">November 1st, 2026</em>.
            </p>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:auto-rows-[250px]">
            {images.map((img, i) => {
              const classes = "relative group bg-white overflow-hidden rounded-sm shadow-premium " + (img.span || "");
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={classes}
                >
                  {img.url ? (
                    <img
                      src={img.url}
                      alt={img.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      style={{ objectPosition: img.pos || 'center' }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center text-7xl transition-transform duration-1000 group-hover:scale-125"
                      style={{ backgroundColor: img.color }}
                    >
                      <span className="opacity-40">{(img as any).icon}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-forest/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-[8px] font-bold tracking-[3px] uppercase text-gold mb-2">Featured Shot</span>
                    <h3 className="serif text-xl font-light text-white">{img.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GalleryPage;
