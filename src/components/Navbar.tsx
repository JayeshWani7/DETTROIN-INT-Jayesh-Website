import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, GraduationCap, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown & mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const academicsLinks = [
    { name: 'CBSE Curriculum', href: '/academics/cbse' },
    { name: 'Assessment & Pedagogy', href: '/academics/assessment' },
    { name: 'Expert Faculty', href: '/academics/faculty' },
    { name: 'AI & STEM Labs', href: '/academics/ai-robotics' },
  ];

  const admissionsLinks = [
    { name: 'Admission Process', href: '/admissions/process' },
    { name: 'Apply Online 2026-27', action: onOpenApplyModal },
    { name: 'Fee Structure & Policy', href: '/admissions/fees' },
    { name: 'Enquiry & Prospectus', action: onOpenApplyModal },
    { name: 'Frequently Asked Questions', href: '/admissions/faq' },
  ];

  return (
    <>
      {/* Combined Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-editorial py-2.5 sm:py-3 border-b border-forest-800/10 text-charcoal-900'
            : 'bg-gradient-to-b from-forest-950/95 via-forest-950/80 to-transparent py-0 text-white'
        }`}
      >
        {/* Top Utility Bar (Desktop only: hidden md:block, collapses on scroll) */}
        <div
          className={`w-full border-b border-gold-500/20 text-xs py-2 px-6 sm:px-10 lg:px-16 transition-all duration-300 ${
            isScrolled ? 'hidden' : 'hidden md:block bg-forest-950/90 text-ivory-100'
          }`}
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center gap-2 font-medium text-ivory-100">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                Admissions Open for Session {SCHOOL_INFO.admissionsSession}
              </span>
              <span className="hidden lg:inline text-gold-500/40">|</span>
              <span className="hidden lg:inline text-gold-400 font-semibold">{SCHOOL_INFO.affiliation}</span>
            </div>
            <div className="flex items-center space-x-6 text-ivory-200">
              <a href={`tel:${SCHOOL_INFO.phones[0]}`} className="hover:text-gold-400 transition-colors flex items-center gap-1.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{SCHOOL_INFO.phones[0]}</span>
              </a>
              <span className="text-gold-500/40">•</span>
              <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-gold-400 transition-colors flex items-center gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>{SCHOOL_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar Container - Responsive Full Width */}
        <div className={`w-full px-4 sm:px-8 lg:px-16 ${isScrolled ? '' : 'py-2.5 sm:py-3.5'}`}>
          <div className="flex items-center justify-between">
            
            {/* Logo Link to Home */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none rounded-lg p-1">
              <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-serif font-bold text-xl sm:text-2xl border transition-all duration-300 ${
                isScrolled
                  ? 'bg-forest-900 text-gold-400 border-gold-500/40 shadow-sm' 
                  : 'bg-forest-900/90 text-gold-400 border-gold-500/40 shadow-md'
              }`}>
                P
              </div>
              <div className="flex flex-col">
                <span className={`font-serif tracking-tight font-bold text-lg sm:text-2xl leading-none transition-colors ${
                  isScrolled ? 'text-forest-900' : 'text-ivory-100'
                }`}>
                  PAVNA SCHOOL
                </span>
                <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
                  <span className={`text-[9px] sm:text-[11px] tracking-widest font-bold uppercase ${
                    isScrolled ? 'text-forest-700' : 'text-gold-400'
                  }`}>
                    ALIGARH • EST. 1998
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-2 font-medium text-sm">
              <Link
                to="/"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/about'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                About
              </Link>

              {/* Academics Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('academics')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/academics"
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors font-semibold focus:outline-none ${
                    location.pathname.startsWith('/academics')
                      ? 'bg-gold-500/20 text-gold-600 font-bold'
                      : isScrolled
                      ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                      : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                  }`}
                >
                  <span>Academics</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'academics' ? 'rotate-180 text-gold-500' : ''}`} />
                </Link>

                {activeDropdown === 'academics' && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-ivory-100 rounded-2xl shadow-editorial-hover border border-forest-800/10 p-2 py-3 z-50 animate-fadeIn">
                    {academicsLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        className="block px-4 py-2.5 text-sm text-charcoal-900 hover:bg-forest-50 hover:text-forest-800 rounded-xl transition-colors font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/beyond-academics"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/beyond-academics'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                Beyond Academics
              </Link>

              <Link
                to="/boarding"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/boarding'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                Boarding
              </Link>

              <Link
                to="/campus"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/campus'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                Campus
              </Link>

              {/* Admissions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/admissions"
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors font-semibold focus:outline-none ${
                    location.pathname.startsWith('/admissions')
                      ? 'bg-gold-500/20 text-gold-600 font-bold'
                      : isScrolled
                      ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                      : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                  }`}
                >
                  <span>Admissions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'admissions' ? 'rotate-180 text-gold-500' : ''}`} />
                </Link>

                {activeDropdown === 'admissions' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-ivory-100 rounded-2xl shadow-editorial-hover border border-forest-800/10 p-2 py-3 z-50 animate-fadeIn">
                    {admissionsLinks.map((item, idx) => (
                      item.action ? (
                        <button
                          key={idx}
                          onClick={item.action}
                          className="w-full text-left block px-4 py-2.5 text-sm text-forest-900 hover:bg-gold-500/15 rounded-xl transition-colors font-semibold flex items-center justify-between cursor-pointer"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-4 h-4 text-gold-600" />
                        </button>
                      ) : (
                        <Link
                          key={idx}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm text-charcoal-900 hover:bg-forest-50 hover:text-forest-800 rounded-xl transition-colors font-medium"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full transition-colors font-semibold ${
                  location.pathname === '/contact'
                    ? 'bg-gold-500/20 text-gold-600 font-bold'
                    : isScrolled
                    ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                    : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={onOpenApplyModal}
                className="relative group overflow-hidden px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-md bg-gold-500 hover:bg-gold-600 text-forest-950 flex items-center gap-2 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle & Apply button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenApplyModal}
                className="px-4 py-2 rounded-full text-xs font-bold bg-gold-500 text-forest-950 shadow-sm cursor-pointer"
              >
                Apply
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-full transition-colors focus:outline-none ${
                  isScrolled ? 'text-forest-900 hover:bg-forest-50' : 'text-ivory-100 hover:bg-white/10'
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
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500 text-forest-950 font-serif font-bold text-xl flex items-center justify-center">
                  P
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl leading-none text-white">PAVNA SCHOOL</h2>
                  <p className="text-[10px] text-gold-400 uppercase tracking-widest mt-1">Aligarh • Est. 1998</p>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-forest-900 text-ivory-200 focus:outline-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile navigation links */}
            <nav className="space-y-4 font-serif text-2xl">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                About Pavna
              </Link>
              <Link
                to="/academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Academics & CBSE
              </Link>
              <Link
                to="/beyond-academics"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Beyond Academics
              </Link>
              <Link
                to="/boarding"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Residential Boarding
              </Link>
              <Link
                to="/campus"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Campus & Facilities
              </Link>
              <Link
                to="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Admissions 2026-27
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-ivory-100 hover:text-gold-400 transition-colors"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="pt-8 border-t border-forest-800 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-4 rounded-2xl bg-gold-500 text-forest-950 font-sans font-bold text-base flex items-center justify-center gap-2 shadow-lg cursor-pointer"
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
