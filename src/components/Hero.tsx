import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  showPage: (name: string) => void;
}

const Hero: React.FC<HeroProps> = ({ showPage }) => {
  return (
    <section 
      style={{ 
        height: '100vh', 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#0d1f16',
        paddingTop: '72px'
      }}
    >
      {/* Background Gradient */}
      <div 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0,
          background: 'linear-gradient(165deg, rgba(13,31,22,1) 0%, rgba(26,58,42,0.95) 50%, rgba(181,108,77,0.1) 100%)' 
        }} 
      />
      
      {/* Court SVG Removed per user request - "erase this at the home page too" */}

      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          padding: '0 32px', 
          textAlign: 'center', 
          maxWidth: '960px',
          margin: '0 auto' 
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            display: 'inline-block', 
            padding: '8px 24px', 
            border: '1px solid rgba(179, 147, 89, 0.4)', 
            color: '#b39359', 
            fontSize: '10px', 
            fontWeight: 700, 
            letterSpacing: '5px', 
            textTransform: 'uppercase', 
            marginBottom: '48px' 
          }}
        >
          Martha's Vineyard Premier Tennis
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontFamily: "'Cormorant Garamond', serif", 
            fontSize: 'clamp(54px, 10vw, 110px)', 
            fontWeight: 300, 
            color: '#fff', 
            lineHeight: 1, 
            marginBottom: '40px',
            letterSpacing: '-0.01em'
          }}
        >
          Play Where the<br/><em style={{ fontStyle: 'italic', color: '#b39359', fontWeight: 'normal' }}>Island Breathes</em>
        </motion.h1>

        <div 
          style={{ 
            color: 'rgba(255, 255, 255, 0.5)', 
            fontSize: '11px', 
            fontWeight: 600,
            letterSpacing: '5px', 
            textTransform: 'uppercase', 
            marginBottom: '56px' 
          }}
        >
          30 Island Inn Road · Oak Bluffs, MA 02557
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ 
            color: 'rgba(255, 255, 255, 0.8)', 
            fontSize: '19px', 
            fontWeight: 300, 
            lineHeight: 1.8, 
            marginBottom: '64px', 
            maxWidth: '600px', 
            margin: '0 auto 64px' 
          }}
        >
          On-demand matches, private lessons and clinics set against the natural beauty of Martha's Vineyard.
        </motion.p>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://wa.me/15089393030" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: '#b56c4d', 
              color: '#fff', 
              padding: '20px 56px', 
              fontSize: '12px', 
              fontWeight: 700, 
              letterSpacing: '3px', 
              textTransform: 'uppercase', 
              textDecoration: 'none', 
              borderRadius: '2px',
              boxShadow: '0 10px 30px rgba(181, 108, 77, 0.3)' 
            }}
          >
            TEXT KIM TO PLAY
          </a>
          <button 
            onClick={() => showPage('/memberships')} 
            style={{ 
              backgroundColor: 'transparent', 
              color: '#fff', 
              padding: '20px 56px', 
              fontSize: '12px', 
              fontWeight: 700, 
              letterSpacing: '3px', 
              textTransform: 'uppercase', 
              border: '1px solid rgba(255, 255, 255, 0.4)', 
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          >
            VIEW MEMBERSHIPS
          </button>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/10 select-none pb-safe"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1px] h-12 bg-white/10 mx-auto mb-4" />
        <span style={{ fontSize: '9px', tracking: '4px', textTransform: 'uppercase' }}>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
