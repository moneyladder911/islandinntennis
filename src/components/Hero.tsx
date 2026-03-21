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

      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center min-h-[80vh]"
        >
          {/* Tagline */}
          <div 
            style={{ 
              border: '1px solid rgba(179, 147, 89, 0.9)', 
              padding: '8px 24px', 
              marginTop: '15px',
              marginBottom: '40px',
              backgroundColor: 'rgba(22, 48, 32, 0.4)'
            }}
          >
            <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '4px', color: '#b39359', textTransform: 'uppercase', lineHeight: '1.8' }} className="block sm:inline text-center">
              The Best Tennis Club on Martha's Vineyard
            </span>
          </div>

          {/* Main Heading (H1) */}
          <h1 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif", 
              fontSize: 'clamp(38px, 6.5vw, 76px)', 
              fontWeight: 300, 
              lineHeight: 1.1, 
              marginBottom: '32px',
              maxWidth: '900px',
              color: '#fff'
            }}
          >
            Your Match. <br className="hidden sm:block" />
            Your Court. Your Island.
          </h1>

          {/* Sub-Heading (H2) */}
          <h2 
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(24px, 4vw, 36px)', 
              fontWeight: 300, 
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '64px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px'
            }}
          >
            Play the 
            <span style={{ 
              fontFamily: "'Pinyon Script', cursive", 
              fontSize: '1.45em', 
              color: '#b39359', 
              textTransform: 'none',
              marginTop: '-8px'
            }}>Island Inn</span> 
            way on Martha's Vineyard.
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-24">
            <a 
              href="sms:+14079239047" 
              className="bg-white text-[#163020] px-12 py-5 text-[11px] font-bold tracking-[4px] uppercase border border-white hover:bg-transparent hover:text-white transition-all duration-300 no-underline"
              style={{ minWidth: '280px' }}
            >
              Text Kim To Play
            </a>
            <Link 
              to="/pricing" 
              className="bg-transparent text-white px-12 py-5 text-[11px] font-bold tracking-[4px] uppercase border border-white/30 hover:bg-white hover:text-[#163020] transition-all duration-300 no-underline"
              style={{ minWidth: '280px' }}
            >
              View Memberships
            </Link>
          </div>

          {/* The Bottom Line */}
          <div 
            style={{ 
              fontSize: '11px', 
              fontWeight: 500, 
              letterSpacing: '5px', 
              color: 'rgba(255, 255, 255, 0.4)', 
              textTransform: 'uppercase',
            }}
          >
            30 Island Inn Road · Oak Bluffs, MA 02557
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
