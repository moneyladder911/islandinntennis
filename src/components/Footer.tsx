import React from 'react';
import { Instagram, Facebook, MapPin, Phone, ArrowUp, Send, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d1a12] text-white pt-16 pb-24 md:pb-10 relative overflow-hidden border-t border-white/5">
      {/* Newsletter Section - Refined to match image */}
      <div className="container mb-24 px-6 md:px-12">
        <div className="bg-[#12261b] p-10 md:p-14 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden border border-white/5">
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <span className="text-[10px] font-bold tracking-[6em] uppercase text-gold/60 mb-5 block scale-[0.9] origin-left">NEWSLETTER</span>
            <h3 className="serif text-4xl mb-4 font-light leading-tight text-white/95">Stay in the loop.</h3>
            <p className="text-white/40 text-[15px] font-light leading-relaxed">Join our inner circle for seasonal opening dates and island clinics.</p>
          </div>
          <div className="relative z-10 w-full lg:w-auto min-w-[320px] md:min-w-[420px]">
            <form className="flex flex-col sm:flex-row gap-0 group border border-white/10 overflow-hidden rounded-sm" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address..." 
                className="flex-grow p-5 bg-white/[0.03] text-white outline-none text-sm placeholder:text-white/20 border-none transition-all focus:bg-white/[0.07]"
              />
              <button 
                type="submit"
                className="bg-[#b56c4d] hover:bg-[#c96b3a] text-white px-10 py-5 text-[11px] font-bold tracking-[3px] flex items-center justify-center gap-3 transition-colors uppercase border-none cursor-pointer"
              >
                JOIN <Send size={14} className="opacity-80" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-6">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="mb-6">
            <span className="serif text-2xl font-light tracking-wide block text-white/95">Island Inn Tennis</span>
            <span className="text-[9px] font-bold text-gold/40 tracking-[4px] uppercase mt-3 block">Oak Bluffs · Martha's Vineyard</span>
          </div>
          <p className="text-[13px] font-light text-white/30 leading-relaxed max-w-[240px] mb-8">
            The premier tennis destination on Martha's Vineyard. High-performance instruction in a luxury resort setting.
          </p>
          <div className="flex gap-6 mt-2">
            <a href="https://www.instagram.com/islandinntennismv/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#b56c4d] transition-all duration-300 transform hover:-translate-y-1"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/people/Island-Inn-Tennis-Club/61560318390721/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#b56c4d] transition-all duration-300 transform hover:-translate-y-1"><Facebook size={18} /></a>
            <a href="sms:+15089393030" className="text-white/20 hover:text-[#b56c4d] transition-all duration-300 transform hover:-translate-y-1"><MessageSquare size={18} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="lg:pl-8">
          <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-gold/60 mb-8 pt-1">Navigation</h4>
          <ul className="space-y-4 list-none p-0 m-0">
            {['Home', 'About', 'Pricing', 'Schedule', 'Programs', 'Gallery', 'Contact', 'Terms'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-[13px] font-light text-white/40 hover:text-white transition-all duration-300 no-underline inline-block">
                  {item === 'Terms' ? 'Club Terms' : item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div className="lg:pl-4">
          <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-gold/60 mb-8 pt-1">Experiences</h4>
          <ul className="space-y-4 list-none p-0 m-0">
            {[
              { name: 'Private Lessons', path: '/programs' },
              { name: 'Seasonal Membership', path: '/pricing' },
              { name: 'Junior Academy', path: '/programs' },
              { name: 'On-Demand Play', path: '/schedule' }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-[13px] font-light text-white/40 hover:text-white transition-all duration-300 no-underline inline-block">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:pl-4">
          <h4 className="text-[10px] font-bold tracking-[4px] uppercase text-gold/60 mb-8 pt-1">Location</h4>
          <ul className="space-y-6 list-none p-0 m-0">
            <li className="flex gap-4 text-[13px] font-light text-white/40 leading-relaxed group">
              <MapPin size={16} className="text-gold/60 shrink-0 mt-0.5 group-hover:text-gold transition-colors" />
              <span>30 Island Inn Road,<br />Oak Bluffs, MA 02557</span>
            </li>
            <li className="flex gap-4 text-[13px] font-light text-white/40 group">
              <Phone size={16} className="text-gold/60 shrink-0 group-hover:text-gold transition-colors" />
              <a href="tel:15086932002" className="hover:text-white no-underline color-inherit transition-all">(508) 693-2002</a>
            </li>
            <li className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-full bg-clay/10 flex items-center justify-center">
                <MessageSquare size={14} className="text-clay" />
              </div>
              <a href="sms:+15089393030" className="text-[11px] font-bold uppercase tracking-[2px] text-clay hover:text-white transition-all no-underline">Text Kim</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        <p className="text-[9px] font-medium tracking-[2px] uppercase text-white/20 text-center md:text-left">
          &copy; {currentYear} Island Inn Tennis Club · <Link to="/terms" className="hover:text-gold text-white/20 no-underline">Terms & Policies</Link>
        </p>
        <button 
          onClick={scrollToTop}
          className="bg-white/5 p-3 rounded-full text-white/20 hover:text-gold hover:bg-white/10 transition-all cursor-pointer border-none"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
