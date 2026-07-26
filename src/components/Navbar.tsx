import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowUpRight, GraduationCap, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const academicsLinks = [
    { name: 'CBSE Curriculum', href: '#academics' },
    { name: 'Assessment & Pedagogy', href: '#academics' },
    { name: 'Expert Faculty', href: '#academics' },
    { name: 'AI & STEM Labs', href: '#future-ready' },
  ];

  const admissionsLinks = [
    { name: 'Admission Process', href: '#admissions-journey' },
    { name: 'Apply Online 2026-27', action: onOpenApplyModal },
    { name: 'Fee Structure & Policy', href: '#faq' },
    { name: 'Enquiry & Prospectus', action: onOpenApplyModal },
    { name: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <>
      {/* Top Utility Bar (Desktop only) */}
      <div className={`w-full bg-forest-900 text-ivory-200 text-xs py-2 px-6 transition-all duration-300 ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Admissions Open for Session {SCHOOL_INFO.admissionsSession}
            </span>
            <span className="hidden md:inline text-forest-300">|</span>
            <span className="hidden md:inline text-ivory-300">{SCHOOL_INFO.affiliation}</span>
          </div>
          <div className="flex items-center space-x-5 text-ivory-300">
            <a href={`tel:${SCHOOL_INFO.phones[0]}`} className="hover:text-gold-500 transition-colors flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <span>{SCHOOL_INFO.phones[0]}</span>
            </a>
            <span>•</span>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-gold-500 transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <span>{SCHOOL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-header shadow-editorial py-3 border-b border-forest-800/10'
            : 'bg-gradient-to-b from-forest-950/80 via-forest-900/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-lg p-1">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-serif font-bold text-xl border transition-all duration-300 ${
                isScrolled 
                  ? 'bg-forest-900 text-gold-500 border-gold-500/40' 
                  : 'bg-ivory-100/10 text-gold-500 border-gold-500/30 backdrop-blur-md'
              }`}>
                P
              </div>
              <div className="flex flex-col">
                <span className={`font-serif tracking-tight font-bold text-xl leading-none ${
                  isScrolled ? 'text-forest-900' : 'text-ivory-100'
                }`}>
                  PAVNA SCHOOL
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className={`text-[10px] tracking-widest font-semibold uppercase ${
                    isScrolled ? 'text-forest-700' : 'text-gold-400'
                  }`}>
                    ALIGARH • EST. 1998
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
              <a
                href="#about"
                className={`px-4 py-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </a>

              {/* Academics Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors focus:outline-none ${
                    isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={activeDropdown === 'academics'}
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'academics' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-ivory-100 rounded-2xl shadow-editorial-hover border border-forest-800/10 p-2 py-3 z-50 animate-fadeIn">
                    {academicsLinks.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-charcoal-900 hover:bg-forest-50 hover:text-forest-800 rounded-xl transition-colors font-medium"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#beyond-academics"
                className={`px-4 py-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Beyond Academics
              </a>

              <a
                href="#boarding"
                className={`px-4 py-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Boarding
              </a>

              <a
                href="#gallery"
                className={`px-4 py-2 rounded-full transition-colors ${
                  isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                }`}
              >
                Campus
              </a>

              {/* Admissions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors focus:outline-none ${
                    isScrolled ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50' : 'text-ivory-200 hover:text-white hover:bg-white/10'
                  }`}
                  aria-expanded={activeDropdown === 'admissions'}
                >
                  <span>Admissions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'admissions' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'admissions' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-ivory-100 rounded-2xl shadow-editorial-hover border border-forest-800/10 p-2 py-3 z-50 animate-fadeIn">
                    {admissionsLinks.map((item, idx) => (
                      item.action ? (
                        <button
                          key={idx}
                          onClick={item.action}
                          className="w-full text-left block px-4 py-2.5 text-sm text-forest-900 hover:bg-gold-500/15 rounded-xl transition-colors font-semibold flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-4 h-4 text-gold-600" />
                        </button>
                      ) : (
                        <a
                          key={idx}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-charcoal-900 hover:bg-forest-50 hover:text-forest-800 rounded-xl transition-colors font-medium"
                        >
                          {item.name}
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenApplyModal}
                className="relative group overflow-hidden px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md bg-gold-500 hover:bg-gold-600 text-forest-950 flex items-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenApplyModal}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gold-500 text-forest-950 mr-1"
              >
                Apply
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2.5 rounded-full transition-colors focus:outline-none ${
                  isScrolled ? 'text-forest-900 hover:bg-forest-50' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-forest-950 text-ivory-100 flex flex-col justify-between p-6 animate-fadeIn overflow-y-auto">
          <div>
            <div className="flex items-center justify-between border-b border-forest-800 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500 text-forest-950 font-serif font-bold text-xl flex items-center justify-center">
                  P
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl leading-none text-white">PAVNA SCHOOL</h2>
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest mt-1">Aligarh • Est. 1998</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-forest-900 text-ivory-200 focus:outline-none"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links stack */}
            <nav className="space-y-4 font-serif text-2xl">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                About Pavna
              </a>
              <a
                href="#academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Academics & CBSE
              </a>
              <a
                href="#future-ready"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                AI & Robotics Labs
              </a>
              <a
                href="#seel"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                SEEL Curriculum
              </a>
              <a
                href="#beyond-academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Beyond Academics
              </a>
              <a
                href="#boarding"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Residential Boarding
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Campus Gallery
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Admissions FAQ
              </a>
            </nav>
          </div>

          <div className="pt-8 border-t border-forest-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-4 rounded-2xl bg-gold-500 text-forest-950 font-sans font-bold text-base flex items-center justify-center gap-2 shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Apply Online 2026–27</span>
            </button>
            <div className="text-center text-xs text-forest-300">
              <p>Agra Highway, Aligarh • {SCHOOL_INFO.phones[0]}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
