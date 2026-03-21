import React from 'react';
import { Phone, Instagram, Facebook, MapPin, MessageSquare, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    { icon: <MessageSquare size={20} />, title: 'WhatsApp - Fastest Way', value: '+1 (508) 939-3030', note: 'Text Kim directly - fast response', link: 'https://wa.me/15089393030' },
    { icon: <Phone size={20} />, title: 'Phone', value: '(508) 693-2002', note: 'Island Inn main line', link: 'tel:+15086932002' },
    { icon: <Instagram size={20} />, title: 'Instagram', value: '@islandinntennismv', note: 'Photos, updates and island vibes', link: 'https://www.instagram.com/islandinntennismv/' },
    { icon: <Facebook size={20} />, title: 'Facebook', value: 'Island Inn Tennis Club', note: 'Events, community and news', link: 'https://www.facebook.com/people/Island-Inn-Tennis-Club/61560318390721/' },
    { icon: <MapPin size={20} />, title: 'Location', value: '30 Island Inn Road', note: 'Oak Bluffs, MA 02557 - Behind Nomans Restaurant', link: 'https://maps.google.com/?q=30+Island+Inn+Road+Oak+Bluffs+MA' },
  ];

  const faqs = [
    { q: "Do I need to bring my own racket?", a: "No! We have high-quality Head and Wilson rackets available for rental, and junior rackets are included in program fees. However, you're always welcome to bring your own." },
    { q: "What skill level do I need?", a: "All skill levels are welcome! From your very first backhand to tournament-ready play, Kim will match you with the right program and partners." },
    { q: "How do I book a court or lesson?", a: "The fastest way is to text Kim directly on WhatsApp at +1 (508) 939-3030. You can also use our booking forms on the website." },
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
                    i === 0 ? 'bg-[#25D366] border-transparent' : 'bg-white/5 border-gold/20'
                  }`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[2px] uppercase text-gold mb-2">{method.title}</div>
                    <div className="serif text-xl mb-1">
                      <a href={method.link} target="_blank" className="text-white hover:text-gold no-underline transition-colors">{method.value}</a>
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
                  <option>Junior Program</option>
                  <option>Adult Social Play</option>
                  <option>Vacation Package</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[2px] uppercase text-forest mb-2 block">Message</label>
                <textarea className="w-full p-4 bg-cream border-none focus:ring-1 focus:ring-clay outline-none transition-all min-h-[120px]" placeholder="Tell us about your experience level..."></textarea>
              </div>
              <a href="https://wa.me/15089393030" target="_blank" className="btn btn-primary w-full shadow-lg shadow-clay/20">Message Kim on WhatsApp</a>
              <p className="text-[11px] text-light text-center">WhatsApp is the fastest way to reach us and book your session.</p>
            </form>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">Getting to <em>Island Inn</em></h2>
            <p className="section-sub mb-8">Just over a mile from the Oak Bluffs ferry terminal. On the bus route, next to the bicycle path to Edgartown, and walking distance to State Beach.</p>
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> 1.2 miles from OB ferry terminal</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> On the MVTA bus route</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> On the bike path to Edgartown</div>
              <div className="flex items-center gap-3 text-sm font-light text-forest"><div className="w-2 h-2 rounded-full bg-clay" /> Adjacent to Nomans Restaurant</div>
            </div>
            <a href="https://maps.google.com/?q=30+Island+Inn+Road+Oak+Bluffs+MA" target="_blank" className="btn btn-outline border-clay text-clay hover:bg-clay hover:text-white">Open in Google Maps</a>
          </div>
          <div className="aspect-[4/3] bg-forest rounded-xl overflow-hidden shadow-2xl relative">
            <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
              <rect width="480" height="320" fill="#1a3a2a"/>
              <rect x="0" y="200" width="480" height="120" fill="#1a3a5a" opacity="0.8"/>
              <path d="M0 200 Q120 160 240 170 Q360 180 480 160 L480 200 Z" fill="#1e5c38"/>
              <circle cx="210" cy="185" r="16" fill="#c96b3a"/>
              <circle cx="210" cy="185" r="8" fill="white"/>
              <circle cx="210" cy="185" r="4" fill="#c96b3a"/>
              <circle cx="210" cy="185" r="24" fill="none" stroke="rgba(201,107,58,0.4)" stroke-width="2"/>
              <rect x="128" y="210" width="162" height="32" rx="4" fill="rgba(0,0,0,0.6)"/>
              <text x="209" y="230" text-anchor="middle" fill="white" font-size="11" font-family="Montserrat,sans-serif" font-weight="600">Island Inn Tennis</text>
            </svg>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="section-padding bg-cream/50 mt-20 border-t border-clay/5">
        <div className="container px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-clay/10 p-4 md:p-8 rounded-sm shadow-sm transition-all duration-300 open:shadow-premium">
                <summary className="flex items-center justify-between cursor-pointer list-none appearance-none outline-none">
                  <h4 className="serif text-xl font-light text-forest group-hover:text-clay transition-colors pr-8 leading-tight">
                    {faq.q}
                  </h4>
                  <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform">
                    <ChevronDown size={14} className="text-forest" />
                  </div>
                </summary>
                <div className="mt-8 pt-8 border-t border-clay/5 text-sm font-light text-light leading-[1.8] text-balance">
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
