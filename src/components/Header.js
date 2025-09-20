import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#hero" className="logo-link">
              <span className="logo-bracket">{'<'}</span>
              <span className="logo-name">Eli</span>
              <span className="logo-bracket">{'/>'}</span>
            </a>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="nav-number">0{navItems.indexOf(item) + 1}.</span>
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a 
                  href="/PerezEli_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link resume-link"
                >
                  Download My Resume
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;