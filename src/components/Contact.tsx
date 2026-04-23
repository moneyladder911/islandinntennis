import React from 'react';
import { Phone, Instagram, Facebook, MapPin, MessageSquare, ChevronDown, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    { icon: <MessageSquare size={20} />, title: 'Text Kim - Fastest Way', value: '+1 (407) 923-9047', note: 'Text Kim directly - fast response', link: 'sms:+14079239047' },
    { icon: <Mail size={20} />, title: 'Email Us', value: 'islandinntennismv@gmail.com', note: 'For general inquiries and info', link: 'mailto:islandinntennismv@gmail.com' },
    { icon: <Instagram size={20} />, title: 'Instagram', value: '@islandinntennismv', note: 'Photos, updates and island vibes', link: 'https://www.instagram.com/islandinntennismv/' },
    { icon: <Facebook size={20} />, title: 'Facebook', value: 'Island Inn Tennis Club', note: 'Events, community and news', link: 'https://www.facebook.com/people/Island-Inn-Tennis-Club/61560318390721/' },
    { icon: <MapPin size={20} />, title: 'Location', value: '30 Island Inn Road', note: 'Oak Bluffs, MA 02557 - Behind Nomans Restaurant', link: "https://www.google.com/maps/place/The+Island+Inn+on+Martha's+Vineyard/@41.4401016,-70.5577774,17z/data=!4m9!3m8!1s0x89e5293c44f30697:0x629a4dbe946e01c2!5m2!4m1!1i2!8m2!3d41.4401016!4d-70.5577774!16s%2Fg%2F1tczlhg9" },
  ];

  const faqs = [
    { q: "Do I need to bring my own racket?", a: "No! We have high-quality Head and Wilson rackets available for rental. However, you're always welcome to bring your own." },
    { q: "What skill level do I need?", a: "All skill levels are welcome! From your very first backhand to tournament-ready play, Kim will match you with the right program and partners." },
    { q: "How do I book a court or lesson?", a: "The fastest way is to text Kim directly at +1 (508) 939-3030. You can also call the Island Inn main line or send us a message below." },
    { q: "Is there parking available?", a: "Yes, there is ample free parking available behind Nomans Restaurant, directly adjacent to the tennis courts." },
    { q: "Are lessons available year-round?", a: "Our main season runs from May through October. For off-season play, please contact us directly as availability varies based on island weather." },
    { q: "What should I wear?", a: "Comfortable athletic wear and proper tennis shoes (non-marking soles) are required on the courts. Please no sandals or smooth-soled street shoes." },
  ];

  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 shadow-2xl rounded-2xl overflow-hidden">
          {/* Info Side */}
          <div className="bg-forest p-12 md:p-20 text-white">
            <h3 className="serif text-4xl mb-12 font-light">Contact and Find Us</h3>
            <div className="space-y-12">
              {contactMethods.map((method, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${
                    i === 0 ? 'bg-clay border-transparent' : 'bg-white/5 border-gold/20'
                  }`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">{method.title}</div>
                    <div className="serif text-[clamp(16px,4vw,20px)] mb-1 pr-4">
                      <a href={method.link} target="_blank" className="text-white hover:text-gold no-underline transition-colors break-all sm:break-normal">{method.value}</a>
                    </div>
                    <div className="text-xs text-white/40">{method.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 md:p-20">
            <h3 className="serif text-4xl mb-12 font-light text-forest">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">First Name</label>
                  <input type="text" className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">Last Name</label>
                  <input type="text" className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">Email Address</label>
                <input type="email" className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">Program Interest</label>
                <select className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all appearance-none cursor-pointer">
                  <option>Select a program...</option>
                  <option>Private Lessons</option>
                  <option>Group Clinics</option>
                  <option>On-Demand Match</option>
                  <option>Adult Social Play</option>
                  <option>Vacation Package</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">Message</label>
                <textarea className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all min-h-[120px]" placeholder="Tell us about your experience level..."></textarea>
              </div>
              <a href="sms:+15089393030" className="btn btn-primary w-full shadow-lg shadow-clay/20">Text Kim to Book</a>
              <p className="text-[11px] text-light text-center">Texting Kim is the fastest way to reach us and book your session.</p>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-24 mb-10 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Find Us</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight mb-6">Getting to <em className="italic text-clay">Island Inn</em></h2>
            <p className="text-light font-light leading-[1.8] text-[15px] mb-8 max-w-md">Just over a mile from the Oak Bluffs ferry terminal. On the bus route, next to the bicycle path to Edgartown, and walking distance to State Beach.</p>
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> 1.2 miles from OB ferry terminal</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> On the MVTA bus route</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> On the bike path to Edgartown</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> Adjacent to Nomans Restaurant</div>
            </div>
            <a href="https://www.google.com/maps/place/The+Island+Inn+on+Martha's+Vineyard/@41.4401016,-70.5577774,17z/data=!4m9!3m8!1s0x89e5293c44f30697:0x629a4dbe946e01c2!5m2!4m1!1i2!8m2!3d41.4401016!4d-70.5577774!16s%2Fg%2F1tczlhg9" target="_blank" className="btn bg-transparent border border-clay text-clay hover:bg-clay hover:text-white">Open in Google Maps</a>
          </div>
          <a 
            href="https://www.google.com/maps/place/The+Island+Inn+on+Martha's+Vineyard/@41.4401016,-70.5577774,17z/data=!4m9!3m8!1s0x89e5293c44f30697:0x629a4dbe946e01c2!5m2!4m1!1i2!8m2!3d41.4401016!4d-70.5577774!16s%2Fg%2F1tczlhg9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block cursor-pointer hover:opacity-90 transition-opacity aspect-[4/3] bg-forest rounded-sm overflow-hidden shadow-2xl relative p-8 flex items-center justify-center border border-forest/10"
            title="Open Island Inn in Google Maps"
          >
            {/* Real Tennis Court Layout SVG */}
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
              {/* Green Court Outer */}
              <rect x="0" y="0" width="400" height="300" fill="#1a3a2a" rx="4" />
              
              {/* Outer Boundary (Doubles) */}
              <rect x="40" y="40" width="320" height="220" fill="none" stroke="white" strokeWidth="1.5" />
              
              {/* Singles Sidelines */}
              <line x1="40" y1="70" x2="360" y2="70" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
              <line x1="40" y1="230" x2="360" y2="230" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
              
              {/* Net Line (Center) */}
              <line x1="200" y1="40" x2="200" y2="260" stroke="#b39359" strokeWidth="2" />
              
              {/* Service Lines */}
              <line x1="90" y1="70" x2="90" y2="230" stroke="white" strokeWidth="1" />
              <line x1="310" y1="70" x2="310" y2="230" stroke="white" strokeWidth="1" />
              
              {/* Center Service Line */}
              <line x1="90" y1="150" x2="310" y2="150" stroke="white" strokeWidth="1" />
              
              {/* Center Mark */}
              <line x1="40" y1="150" x2="50" y2="150" stroke="white" strokeWidth="1.5" />
              <line x1="350" y1="150" x2="360" y2="150" stroke="white" strokeWidth="1.5" />

              {/* Location Pointer */}
              <circle cx="200" cy="150" r="10" fill="#c96b3a" className="animate-pulse" />
              <circle cx="200" cy="150" r="4" fill="white" />
              
              <text x="200" y="285" textAnchor="middle" fill="white" fontSize="10" fontFamily="serif" letterSpacing="2">ISLAND INN COURTS</text>
            </svg>
          </a>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-24 bg-cream/50 mt-10 border-t border-clay/5">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[4px] uppercase text-clay mb-4 block">Common Inquiries</span>
            <h2 className="serif text-5xl font-light text-forest leading-tight">Frequently Asked <em className="italic text-clay">Questions</em></h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white border border-clay/10 shadow-sm rounded-sm">
            {faqs.map((faq, i) => (
              <details key={i} className="group border-b border-clay/10 last:border-b-0">
                <summary className="flex items-center justify-between cursor-pointer list-none appearance-none outline-none p-6 md:p-8">
                  <h4 className="serif text-2xl font-light text-forest group-hover:text-clay transition-colors pr-8 leading-tight">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <ChevronDown size={14} className="text-forest" />
                  </div>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-sm font-light text-light leading-[1.8] text-balance">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
