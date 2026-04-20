import React from 'react';
import { Star, Instagram, Facebook, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface ReviewsProps {
  isPreview?: boolean;
  showPage: (name: string) => void;
}

const reviewsData = [
  { text: "I play every day and have been a member since the beginning of the summer. As Kim's biggest supporter, I'm definitely biased, but hitting with the boys and taking private classes here is the best part of my day.", author: "DAVID", date: "Summer 2025", tag: "MEMBERSHIP", stars: 5 },
  { text: "As a local resident, I've known Kim forever. We always hit up the courts for matches, and the group clinics are fantastic. It's the perfect setup for the whole community.", author: "MEGAN", date: "July 2025", tag: "LOCAL RESIDENT", stars: 5 },
  { text: "We live on the island and basically live at these courts. From organizing great matches to running top-tier adult clinics, Kim just knows how to make it happen.", author: "SHAWN", date: "August 2025", tag: "MATCH PLAY", stars: 5 },
  { text: "Being a resident means we get to enjoy this spot constantly. The match play is always competitive but fun, and the group sessions have been amazing for improving my game.", author: "PAULA", date: "August 2025", tag: "ISLAND RESIDENT", stars: 5 },
  { text: "I've known Kim forever, and there's no better place for locals to play. Great matches with great people, plus awesome group clinics if you need them. Unbeatable vibe.", author: "MIKE", date: "Sept 2025", tag: "COMMUNITY", stars: 5 },
  { text: "Every summer, I come down just to play matches with my friends. We all absolutely love Kim and the incredible energy she brings to the courts.", author: "MIKA", date: "Summer 2025", tag: "SUMMER MATCHES", stars: 5 },
  { text: "I help manage the place and take care of a lot of the behind-the-scenes stuff. Seeing players come in every day and leaving with a smile makes all the hard work worth it. The positive vibe here is contagious!", author: "KELLEY", date: "July 2025", tag: "MANAGEMENT", stars: 5 },
  { text: "I buy a membership every single year and play almost every day. The level of play here is fantastic if you're looking for challenging, competitive matches.", author: "ROB", date: "Summer 2025", tag: "ANNUAL MEMBER", stars: 5 },
  { text: "I play a lot of matches and Kim always finds great fits for me. Coming back and getting a membership every year is a no-brainer.", author: "MACDONALD", date: "Summer 2025", tag: "COMPETITIVE MATCHES", stars: 5 },
  { text: "The match play here is top-notch, but what really keeps me coming back is the incredible atmosphere. It's just a fun, welcoming place to spend the afternoon.", author: "ROBYN", date: "Aug 2025", tag: "ON-DEMAND MATCH", stars: 5 },
  { text: "I love taking group classes with Oskar and the other coaches. The instruction is great, and then directly applying it in match play right after is super rewarding.", author: "JOHN", date: "Summer 2025", tag: "GROUP CLASSES", stars: 5 },
  { text: "The group clinics are a blast! Oskar and the team make it so fun while keeping it engaging. Setting up matches afterwards is always seamless and easy.", author: "BECKY", date: "July 2025", tag: "CLINICS & MATCHES", stars: 5 },
  { text: "I balance my time between playing fun matches and taking private lessons to keep my game sharp. The organization by Kim and quality of coaching from the team is perfect.", author: "JUNE", date: "Summer 2025", tag: "PRIVATE LESSONS", stars: 5 },
  { text: "Finding a consistent, high-quality tennis community on the island was tough until I started playing at Island Inn. Solid matches and great people.", author: "ANDY", date: "August 2025", tag: "MATCH PLAY", stars: 5 },
  { text: "The adult programming is exceptional. I've learned so much, and the resident community vibe just makes the summers that much better. Highly recommend.", author: "SARAH", date: "Summer 2025", tag: "CLINICS", stars: 5 },
  { text: "I've been friends with Kim for a long time, and her courts are my absolute favorite spot. The match play here is incredible and the energy is unmatched!", author: "CECE", date: "Summer 2025", tag: "FRIENDS & MATCHES", stars: 5 },
  { text: "We love playing matches together here. The organization is perfect and we're just enjoying every second we get on the courts!", author: "KATHY & JEFF", date: "Summer 2025", tag: "MATCH PLAY", stars: 5 },
  { text: "Taking lessons with the team and then jumping right into competitive matches is exactly what I needed. Highly recommend it to anyone!", author: "GRACE", date: "Summer 2025", tag: "LESSONS & MATCHES", stars: 5 },
  { text: "The private lessons really sharpened our skills, and the organized match play gives us the perfect place to use them. It's an amazing community.", author: "MARCIA & HARRY", date: "Summer 2025", tag: "LESSONS & MATCHES", stars: 5 },
  { text: "Every match we play here is perfectly arranged. Kim has created such a wonderful, welcoming environment for players of all levels.", author: "RJ & COLLEEN", date: "Summer 2025", tag: "COMPETITIVE MATCHES", stars: 5 },
  { text: "We can't say enough good things about the community here. The matches are engaging, the people are kind, and we look forward to it every week.", author: "MARY ELLEN & DAVID", date: "Summer 2025", tag: "COMMUNITY MATCHES", stars: 5 },
  { text: "The level of match play here is fantastic. Kim always sets up great hits and makes sure everyone has a great time on the court.", author: "KEITH", date: "Summer 2025", tag: "MATCH PLAY", stars: 5 },
  { text: "It's so easy to drop in and play a great match here. The club has an amazing vibe and everyone is incredibly friendly and welcoming.", author: "LORI", date: "Summer 2025", tag: "MATCH PLAY", stars: 5 }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1050px] mx-auto">
          {displayReviews.map((rev, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 shadow-premium border rounded-sm flex flex-col h-auto md:aspect-square ${
                isPreview ? 'bg-white/5 border-white/5' : 'bg-white border-clay/5'
              }`}
            >
              <Quote size={20} className={`mb-6 opacity-30 ${isPreview ? 'text-gold' : 'text-clay'}`} strokeWidth={1} />
              <p className={`text-[14px] font-light italic leading-[1.8] flex-grow mb-8 ${isPreview ? 'text-white/80' : 'text-text/80'}`}>
                "{rev.text}"
              </p>
              
              <div className={`mt-auto pt-8 border-t ${isPreview ? 'border-white/10' : 'border-clay/5'}`}>
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
