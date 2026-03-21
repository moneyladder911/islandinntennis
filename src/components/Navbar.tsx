import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' ) return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 1000, 
          height: '72px', 
          backgroundColor: '#163020', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 40px', 
          borderBottom: '1px solid rgba(179, 147, 89, 0.15)' 
        }}
      >
        <Link 
          to="/" 
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}
          onClick={() => setIsOpen(false)}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 600, color: '#fff', letterSpacing: '1px' }}>Island Inn Tennis</span>
          <span style={{ fontSize: '8px', fontWeight: 500, color: '#b39359', letterSpacing: '2.5px', textTransform: 'uppercase', marginTop: '4px' }}>Martha's Vineyard</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              style={{ 
                fontSize: '10px', 
                fontWeight: 700, 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                color: isActive(link.path) ? '#b39359' : 'rgba(255, 255, 255, 0.7)', 
                textDecoration: 'none', 
                transition: 'color 0.3s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://wa.me/15089393030" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              backgroundColor: '#b56c4d', 
              color: 'white', 
              padding: '10px 20px', 
              fontSize: '10px', 
              fontWeight: 700, 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              textDecoration: 'none', 
              borderRadius: '2px',
              marginLeft: '10px'
            }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button - ELIMINATED on Desktop by removing inline display style */}
        <button 
          className="lg:hidden flex items-center justify-center"
          style={{ 
            backgroundColor: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            padding: '10px',
            color: '#fff',
            outline: 'none'
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 999, 
          backgroundColor: '#163020', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '32px',
what haop          padding: '60px 40px',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.5s ease-in-out',
          transform: isOpen ? 'translateY(0)' : 'translateY(-20px)'
        }}
        className="lg:hidden"
      >
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            onClick={() => setIsOpen(false)}
            style={{ 
              fontSize: '28px', 
              fontFamily: "'Cormorant Garamond', serif", 
              fontWeight: 300, 
              color: isActive(link.path) ? '#b39359' : '#fff', 
              textDecoration: 'none', 
              letterSpacing: '2px' 
            }}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="https://wa.me/15089393030" 
          style={{ 
            backgroundColor: '#b56c4d', 
            color: 'white', 
            padding: '20px 48px', 
            fontSize: '14px', 
            fontWeight: 700, 
            letterSpacing: '4px', 
            textTransform: 'uppercase', 
            textDecoration: 'none', 
            width: '100%', 
            textAlign: 'center',
            borderRadius: '2px' 
          }}
        >
          Book Now
        </a>
      </div>
    </>
  );
};

export default Navbar;
