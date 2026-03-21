import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section 
      style={{ 
        height: '100vh', 
        width: '100%', 
        backgroundColor: '#163020', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        overflow: 'hidden',
        color: '#fff',
        padding: '0 20px'
      }}
    >
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0 bg-forest overflow-hidden">
        <motion.img 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="/island-inn-real.webp" 
          alt="Island Inn Tennis Courts Aerial View"
          className="w-full h-full object-cover opacity-60"
          fetchPriority="high"
          decoding="sync"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-forest/50 to-[#163020]" />
      </div>

      <div className="container relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Tagline - Closer to title */}
          <div 
            style={{ 
              border: '1px solid rgba(179, 147, 89, 0.3)', 
              padding: '6px 20px', 
              marginBottom: '16px' 
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '4px', color: '#b39359', textTransform: 'uppercase' }}>
              Martha's Vineyard Premier Tennis
            </span>
          </div>

          {/* Main Headline - Tightened line height and margins */}
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(52px, 10vw, 110px)', 
              fontWeight: 300, 
              lineHeight: 0.95, 
              marginBottom: '12px',
              maxWidth: '900px'
            }}
          >
            Play Where the<br />
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#b39359' }}>Island Breathes</em>
          </h1>

          {/* Location Bar - Closer to title */}
          <div 
            style={{ 
              fontSize: '10px', 
              fontWeight: 700, 
              letterSpacing: '5px', 
              color: 'rgba(255, 255, 255, 0.5)', 
              textTransform: 'uppercase', 
              marginBottom: '24px' 
            }}
          >
            30 Island Inn Road • Oak Bluffs, MA 02557
          </div>

          {/* Description - Compacted */}
          <p 
            style={{ 
              fontSize: 'clamp(15px, 2vw, 18px)', 
              fontWeight: 300, 
              lineHeight: 1.6, 
              color: 'rgba(255, 255, 255, 0.7)', 
              maxWidth: '600px', 
              marginBottom: '32px' 
            }}
          >
            On-demand matches, private lessons and clinics set against the natural beauty of Martha's Vineyard.
          </p>

          {/* Buttons - Tightened horizontal and vertical gap */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link 
              to="/schedule" 
              className="btn btn-primary no-underline"
              style={{ 
                padding: '20px 48px', 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '3px',
                minWidth: '240px'
              }}
            >
              START YOUR MATCH
            </Link>
            <Link 
              to="/pricing" 
              className="btn btn-outline no-underline"
              style={{ 
                padding: '20px 48px', 
                fontSize: '11px', 
                fontWeight: 700, 
                letterSpacing: '3px', 
                borderColor: 'rgba(255, 255, 255, 0.3)', 
                color: '#fff',
                minWidth: '240px'
              }}
            >
              VIEW MEMBERSHIPS
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
