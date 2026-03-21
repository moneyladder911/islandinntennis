import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <>
      <div className="min-h-screen flex flex-col noise-bg overflow-x-hidden bg-cream">
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        
        {/* Desktop WhatsApp Float - Muted Clay to fit premium aesthetic per user request */}
        <div className="hidden md:block fixed bottom-10 right-10 z-[1001]">
          <a 
            href="https://wa.me/15089393030" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white px-6 py-4 rounded-full font-bold shadow-2xl hover:-translate-y-2 transition-transform group no-underline"
            style={{ backgroundColor: '#b56c4d' }}
          >
            <MessageSquare size={20} fill="white" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold tracking-[2.5px] uppercase group-hover:text-white transition-colors leading-none mb-1">Text Kim to Play</span>
              <span className="text-[8px] font-medium opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-[1px]">Martha's Vineyard</span>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile Sticky Action Bar - Extra Hardcoded Stability */}
      <div 
        className="md:hidden fixed z-[9999] p-4 flex gap-4 shadow-[0_-15px_45px_rgba(0,0,0,0.6)] border-t border-white/10"
        style={{ 
          bottom: 0, 
          left: 0, 
          right: 0,
          backgroundColor: '#163020',
          position: 'fixed' as 'fixed',
          paddingBottom: 'calc(1.2rem + env(safe-area-inset-bottom))'
        }}
      >
        <a 
          href="tel:15086932002" 
          className="flex-grow flex items-center justify-center gap-3 text-white text-[11px] tracking-[3px] font-bold py-5 rounded-sm no-underline uppercase outline-none"
          style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Phone size={14} className="text-gold" fill="rgba(179, 147, 89, 0.5)" /> Call
        </a>
        <a 
          href="https://wa.me/15089393030" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-3 text-white text-[11px] tracking-[3px] font-bold py-5 rounded-sm shadow-xl no-underline uppercase outline-none"
          style={{ backgroundColor: '#b56c4d' }}
        >
          <MessageSquare size={14} fill="white" /> WhatsApp Kim
        </a>
      </div>
    </>
  );
};

export default Layout;
