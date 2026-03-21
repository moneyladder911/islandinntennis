import React from 'react';
import { Star, Instagram, Facebook, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewsProps {
  isPreview?: boolean;
  showPage: (name: string) => void;
}

const reviewsData = [
  { text: "Best tennis experience I've had on any vacation. Kim is an outstanding coach and made every session feel personal and fun. The courts are gorgeous.", author: "SARAH M.", date: "Summer 2024", tag: "PRIVATE LESSONS", stars: 5 },
  { text: "My kids went from never holding a racket to rallying confidently in one week. We'll be booking again next summer without question.", author: "THE RODRIGUEZ FAMILY", date: "July 2024", tag: "JUNIOR PROGRAM", stars: 5 },
  { text: "Texted Kim, had a match set up within the hour. The courts are well-maintained and the setting next to the Inn is just beautiful.", author: "JAMES T.", date: "August 2024", tag: "ON-DEMAND MATCH", stars: 5 },
  { text: "Best tennis atmosphere in Oak Bluffs. Just behind Nomans so you can grab a drink after play!", author: "MIKE T.", date: "Sept 2024", tag: "ISLAND LIFE", stars: 5 },
  { text: "My daughter loved the junior program. Fun, positive and she actually learned proper technique.", author: "ELENA R.", date: "July 2024", tag: "JUNIOR PROGRAM", stars: 5 },
  { text: "We book session packages every summer. The convenience and quality of coaching is unmatched.", author: "DAVID L.", date: "August 2024", tag: "MULTI-SESSION", stars: 5 },
  { text: "Incredible value for the Vineyard. Clean courts, great coaches, and a very friendly community.", author: "ANETTE S.", date: "June 2024", tag: "COMMUNITY", stars: 5 },
  { text: "Kim's attention to detail on my serve was a game changer. Can't wait for next season!", author: "ROBERT K.", date: "July 2024", tag: "PRIVATE LESSONS", stars: 5 },
  { text: "Great matchmaking! Found players at my exact level every time I texted. Super easy.", author: "LISA M.", date: "Aug 2024", tag: "ON-DEMAND", stars: 4 },
];

const Reviews: React.FC<ReviewsProps> = ({ isPreview = false, showPage }) => {
  const displayReviews = isPreview ? reviewsData.slice(0, 3) : reviewsData;

  return (
    <section className={`section-padding ${isPreview ? 'bg-forest text-white' : 'bg-cream'}`}>
      <div className="container px-8">
        <div className="text-center mb-16 px-4">
          <span className="section-tag" style={{ color: isPreview ? 'var(--gold)' : 'var(--clay)', letterSpacing: '4px', fontWeight: 700, fontSize: '10px' }}>WHAT PLAYERS SAY</span>
          <h2 className={`section-title text-[clamp(42px,5vw,72px)] font-light leading-[1.1] ${isPreview ? 'text-white' : 'text-forest'}`}>
            Loved by the <em className={`italic ${isPreview ? 'text-gold' : 'text-clay'}`}>Vineyard Community</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayReviews.map((rev, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 md:p-14 shadow-premium border rounded-sm flex flex-col min-h-[400px] ${
                isPreview ? 'bg-white/5 border-white/5' : 'bg-white border-clay/5'
              }`}
            >
              <Quote size={24} className={`mb-10 opacity-30 ${isPreview ? 'text-gold' : 'text-clay'}`} strokeWidth={1} />
              <p className={`text-base font-light italic leading-[2] flex-grow mb-12 ${isPreview ? 'text-white/80' : 'text-text/80'}`}>
                "{rev.text}"
              </p>
              
              <div className={`mt-auto pt-10 border-t ${isPreview ? 'border-white/10' : 'border-clay/5'}`}>
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.stars)].map((_, idx) => (
                    <Star key={idx} size={10} fill={isPreview ? 'var(--gold)' : 'var(--clay)'} className={isPreview ? 'text-gold' : 'text-clay'} />
                  ))}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className={`text-[10px] font-extrabold tracking-[2.5px] uppercase mb-1 ${isPreview ? 'text-gold' : 'text-forest'}`}>{rev.author}</h4>
                    <span className={`text-[9px] font-medium tracking-[1.5px] uppercase ${isPreview ? 'text-white/40' : 'text-light'}`}>{rev.date}</span>
                  </div>
                  <span className={`text-[9px] font-bold tracking-[2px] uppercase whitespace-nowrap overflow-hidden text-ellipsis px-4 py-1 rounded-full ${
                    isPreview ? 'bg-white/10 text-gold' : 'bg-mist text-clay'
                  }`}>
                    {rev.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isPreview && (
          <div className="text-center mt-20">
            <button 
              onClick={() => showPage('/reviews')} 
              className="btn btn-outline border-gold text-gold hover:bg-gold hover:text-forest px-12"
            >
              READ ALL TESTIMONIALS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
