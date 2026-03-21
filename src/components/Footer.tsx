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
      {/* Newsletter Section - Smaller & More Compact */}
      <div className="container mb-16 px-6">
        <div className="bg-[#1a3a2a] p-10 md:p-12 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <span className="text-[9px] font-bold tracking-[4px] uppercase text-gold mb-3 block">Newsletter</span>
            <h3 className="serif text-3xl mb-3 font-light leading-tight">Stay in the loop.</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">Join our inner circle for seasonal opening dates and island clinics.</p>
          </div>
          <div className="relative z-10 w-full lg:w-auto min-w-[300px] md:min-w-[360px]">
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address..." 
                className="flex-grow p-4 bg-white/5 border border-white/10 text-white outline-none text-sm placeholder:text-white/20"
              />
              <button 
                type="submit"
                className="btn btn-primary !py-4 px-8 text-[11px] flex items-center justify-center gap-2 group"
              >
                JOIN <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 px-6">
        {/* Brand */}
        <div>
          <span className="serif text-2xl font-semibold tracking-wide block text-white/90">Island Inn Tennis</span>
          <span className="text-[8px] font-bold text-gold/60 tracking-[3px] uppercase mt-2 block">Oak Bluffs · Martha's Vineyard</span>
          <div className="flex gap-4 mt-8">
            <a href="https://www.instagram.com/islandinntennismv/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold transition-colors"><Instagram size={16} /></a>
            <a href="https://www.facebook.com/people/Island-Inn-Tennis-Club/61560318390721/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold transition-colors"><Facebook size={16} /></a>
            <a href="https://wa.me/15089393030" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-gold transition-colors"><MessageSquare size={16} /></a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-gold/80 mb-6">Navigate</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            {['Home', 'Programs', 'Pricing', 'Schedule', 'About', 'Gallery', 'Contact', 'Terms'].map((item) => (
              <li key={item}>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-xs font-light text-white/40 hover:text-gold transition-colors no-underline">
                  {item === 'Terms' ? 'Club Terms' : item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-gold/80 mb-6">Connect</h4>
          <ul className="space-y-3 list-none p-0 m-0">
            {['Private Lessons', 'Membership', 'Junior Program', 'On-Demand'].map((item) => (
              <li key={item}>
                <Link to="/programs" className="text-xs font-light text-white/40 hover:text-gold no-underline">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-gold/80 mb-6">Find Us</h4>
          <ul className="space-y-4 list-none p-0 m-0">
            <li className="flex gap-3 text-xs font-light text-white/40 leading-relaxed">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>30 Island Inn Road, Oak Bluffs</span>
            </li>
            <li className="flex gap-3 text-xs font-light text-white/40">
              <Phone size={14} className="text-gold shrink-0" />
              <a href="tel:15086932002" className="hover:text-gold no-underline color-inherit text-white/40">(508) 693-2002</a>
            </li>
            <li className="flex gap-3 text-xs font-bold text-white/90">
              <MessageSquare size={14} className="text-[#25D366] shrink-0" />
              <a href="https://wa.me/15089393030" target="_blank" rel="noopener noreferrer" className="hover:text-gold no-underline uppercase tracking-widest text-[#25D366]">WhatsApp Kim</a>
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
