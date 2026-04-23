import React, { useState, useEffect, Suspense } from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import { useNavigate } from 'react-router-dom';

const Intro = React.lazy(() => import('../components/Intro'));
const Programs = React.lazy(() => import('../components/Programs'));
const Reviews = React.lazy(() => import('../components/Reviews'));
const Memberships = React.lazy(() => import('../components/Memberships'));
const SchedulePreview = React.lazy(() => import('../components/SchedulePreview'));

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Delay rendering below-the-fold components until after initial critical paint
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const showPage = (path: string) => {
    navigate(path.startsWith('/') ? path : `/${path}`);
  };

  return (
    <div className="bg-cream">
      <SEO 
        title="Your Match. Your Court. Your Island."
        description="Experience the best tennis on Martha's Vineyard. High-performance clinics, private lessons, and the island's premier courts in Oak Bluffs."
      />
      {/* 1. Hero */}
      <Hero />
      {/* Below the fold content - Lazily Loaded to dramatically reduce DOM size and Unused JS on initial mount */}
      {isMounted && (
        <Suspense fallback={<div className="h-96" />}>
          <Intro showPage={showPage} />
          <SchedulePreview />
          <Memberships isPreview={true} />
          <Programs isPreview={true} showPage={showPage} />
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
                   <div className="flex gap-3 text-xs font-bold uppercase tracking-widest text-forest text-gold">Text or Call Kim: +1 (407) 923-9047</div>
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
                  src="/marthas-vineyard-sunset.avif" 
                  alt="Martha's Vineyard sunset view with harbor and lighthouse"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            </div>
          </section>
        </Suspense>
      )}
    </div>
  );
};

export default Home;
