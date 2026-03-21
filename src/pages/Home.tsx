import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Programs from '../components/Programs';
import Reviews from '../components/Reviews';
import Memberships from '../components/Memberships';
import SchedulePreview from '../components/SchedulePreview';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const showPage = (path: string) => {
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  return (
    <div className="bg-cream">
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Intro: Tennis at the Heart */}
      <Intro showPage={showPage} />



      {/* 4. Schedule Little Section (Value) */}
      <SchedulePreview />

      {/* 5. Summer Memberships (Costs) */}
      <Memberships />

      {/* 6. Programs Section */}
      <Programs isPreview={true} showPage={showPage} />
      
      {/* 7. Testimonials */}
      <Reviews isPreview={true} showPage={showPage} />

      {/* 8. Find Us (Map) */}
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
               <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-forest text-gold">Fastest: Text +1 (508) 939-3030</div>
            </div>
            <a href="https://www.google.com/maps/place/The+Island+Inn+on+Martha's+Vineyard/@41.4401016,-70.5577774,17z/data=!4m9!3m8!1s0x89e5293c44f30697:0x629a4dbe946e01c2!5m2!4m1!1i2!8m2!3d41.4401016!4d-70.5577774!16s%2Fg%2F1tczlhg9" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10">
              Get Directions
            </a>
          </div>
          <a 
            href="https://www.google.com/maps/place/The+Island+Inn+on+Martha's+Vineyard/@41.4401016,-70.5577774,17z/data=!4m9!3m8!1s0x89e5293c44f30697:0x629a4dbe946e01c2!5m2!4m1!1i2!8m2!3d41.4401016!4d-70.5577774!16s%2Fg%2F1tczlhg9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block cursor-pointer hover:opacity-90 transition-opacity aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border border-white/5"
            title="Open Island Inn in Google Maps"
          >
            <img 
              src="/marthas-vineyard-sunset.jpg" 
              alt="Martha's Vineyard sunset view with harbor and lighthouse"
              className="w-full h-full object-cover"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
