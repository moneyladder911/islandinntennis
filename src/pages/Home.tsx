import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Programs from '../components/Programs';
import Reviews from '../components/Reviews';
import Memberships from '../components/Memberships';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const showPage = (path: string) => {
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  return (
    <div className="bg-cream">
      <Hero showPage={showPage} />
      
      {/* Core Memberships Offer - Primary Section */}
      <Memberships />

      {/* Stats Bar */}
      <div className="bg-forest py-12 flex justify-center gap-20 flex-wrap px-8 border-t border-white/5">
        <div className="text-center">
          <div className="serif text-[42px] font-semibold text-gold leading-none">4</div>
          <div className="text-[9px] font-bold tracking-[3px] uppercase text-white/50 mt-3">Courts Available</div>
        </div>
        <div className="text-center">
          <div className="serif text-[42px] font-semibold text-gold leading-none">All</div>
          <div className="text-[9px] font-bold tracking-[3px] uppercase text-white/50 mt-3">Skill Levels</div>
        </div>
        <div className="text-center">
          <div className="serif text-[42px] font-semibold text-gold leading-none">Pro</div>
          <div className="text-[9px] font-bold tracking-[3px] uppercase text-white/50 mt-3">Instruction</div>
        </div>
        <div className="text-center">
          <div className="serif text-[42px] font-semibold text-gold leading-none">MV</div>
          <div className="text-[9px] font-bold tracking-[3px] uppercase text-white/50 mt-3">Island Life</div>
        </div>
      </div>

      <Intro showPage={showPage} />
      
      {/* Programs Section - Now on White per user request */}
      <Programs isPreview={true} showPage={showPage} />
      
      <Reviews isPreview={true} showPage={showPage} />

      {/* CTA Band */}
      <div className="bg-[#c96b3a] py-20 text-center text-white px-8">
        <h2 className="serif text-[44px] font-light mb-6">Ready to Hit the Court?</h2>
        <p className="text-[15px] font-light text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">Text Kim directly on WhatsApp - we'll get you playing today.</p>
        <a href="https://wa.me/15089393030" target="_blank" rel="noopener noreferrer" className="btn btn-white !text-[#c96b3a] px-12 py-5 shadow-2xl">
          WhatsApp Kim Now
        </a>
      </div>

      {/* Map Section */}
      <section className="bg-[#e8efe9] py-24 md:py-32">
        <div className="container px-8 max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4">Find Us</div>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-8">Located in <em className="italic text-clay font-normal">Oak Bluffs</em></h2>
            <p className="text-[15px] font-light text-light leading-[1.8] mb-10 max-w-lg">
              Behind Nomans Restaurant at 30 Island Inn Road - along the bicycle path to Edgartown, walking distance to State Beach.
            </p>
            <div className="space-y-4 mb-12">
               <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-forest">30 Island Inn Rd, Oak Bluffs, MA 02557</div>
               <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-forest">(508) 693-2002</div>
               <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-forest text-gold">Fastest: WhatsApp +1 (508) 939-3030</div>
            </div>
            <a href="https://maps.google.com/?q=30+Island+Inn+Road+Oak+Bluffs+MA" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10">
              Get Directions
            </a>
          </div>
          <div className="bg-forest aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/5">
            <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect width="480" height="320" fill="#163020"/>
              <rect x="0" y="200" width="480" height="120" fill="#1a3a5a" opacity="0.8"/>
              <path d="M0 200 Q120 160 240 170 Q360 180 480 160 L480 200 Z" fill="#1e5c38"/>
              <circle cx="210" cy="185" r="16" fill="#c96b3a"/>
              <circle cx="210" cy="185" r="8" fill="white"/>
              <circle cx="210" cy="185" r="4" fill="#c96b3a"/>
              <circle cx="210" cy="185" r="24" fill="none" stroke="rgba(201,107,58,0.4)" strokeWidth="2"/>
              <rect x="128" y="210" width="162" height="32" rx="4" fill="rgba(0,0,0,0.6)"/>
              <text x="209" y="230" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Island Inn Tennis</text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
