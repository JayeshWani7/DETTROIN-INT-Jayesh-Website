import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, Menu, X, ArrowUpRight, GraduationCap, Phone, Mail, 
  Sparkles, BookOpen, Award, Cpu, Home, Camera, ShieldCheck, 
  FileText, CreditCard, HelpCircle, Compass
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAcademicsOpen, setMobileAcademicsOpen] = useState(true);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);
  const [mobileCampusOpen, setMobileCampusOpen] = useState(false);
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

  const campusLinks = [
    { name: 'Infrastructure & Facilities', href: '/infrastructure' },
    { name: 'Campus Photo Gallery', href: '/campus' },
    { name: 'News & Campus Events', href: '/news-events' },
  ];

  const admissionsLinks = [
    { name: 'Admission Process', href: '/admissions/process' },
    { name: 'Apply Online 2026-27', action: onOpenApplyModal },
    { name: 'Fee Structure & Policy', href: '/admissions/fees' },
    { name: 'CBSE Disclosure', href: '/cbse-disclosure' },
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

              {/* Campus Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('campus')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/campus"
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors font-semibold focus:outline-none ${
                    location.pathname.startsWith('/campus') || location.pathname === '/infrastructure'
                      ? 'bg-gold-500/20 text-gold-600 font-bold'
                      : isScrolled
                      ? 'text-charcoal-900 hover:text-forest-800 hover:bg-forest-50'
                      : 'text-ivory-100 hover:text-gold-300 hover:bg-white/10'
                  }`}
                >
                  <span>Campus</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'campus' ? 'rotate-180 text-gold-500' : ''}`} />
                </Link>

                {activeDropdown === 'campus' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-ivory-100 rounded-2xl shadow-editorial-hover border border-forest-800/10 p-2 py-3 z-50 animate-fadeIn">
                    {campusLinks.map((item, idx) => (
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

              {/* Admissions Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('admissions')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/admissions"
                  className={`px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors font-semibold focus:outline-none ${
                    location.pathname.startsWith('/admissions') || location.pathname === '/cbse-disclosure'
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

      {/* Modern Luxury Full Screen Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-forest-950/98 backdrop-blur-xl text-ivory-100 flex flex-col justify-between p-5 sm:p-7 animate-fadeIn overflow-y-auto">
          
          {/* Drawer Header */}
          <div>
            <div className="flex items-center justify-between border-b border-gold-500/20 pb-5 mb-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-forest-950 font-serif font-bold text-xl flex items-center justify-center shadow-md">
                  P
                </div>
                <div>
                  <h2 className="font-serif font-bold text-xl leading-none text-ivory-100">PAVNA SCHOOL</h2>
                  <p className="text-[10px] text-gold-400 font-bold uppercase tracking-widest mt-1">Aligarh • Est. 1998</p>
                </div>
              </Link>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-forest-900 border border-gold-500/30 text-gold-400 flex items-center justify-center hover:bg-gold-500 hover:text-forest-950 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categorized & Interactive Menu Accordions */}
            <div className="space-y-3 font-sans">
              
              {/* Primary Direct Links */}
              <div className="grid grid-cols-2 gap-2.5">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                    location.pathname === '/'
                      ? 'bg-forest-900 border-gold-500/40 text-gold-400 font-bold shadow-md'
                      : 'bg-forest-900/60 border-forest-800 text-ivory-100 hover:bg-forest-900'
                  }`}
                >
                  <Home className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-semibold">Home</span>
                </Link>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-3 ${
                    location.pathname === '/about'
                      ? 'bg-forest-900 border-gold-500/40 text-gold-400 font-bold shadow-md'
                      : 'bg-forest-900/60 border-forest-800 text-ivory-100 hover:bg-forest-900'
                  }`}
                >
                  <Compass className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-semibold">About Pavna</span>
                </Link>
              </div>

              {/* 1. Academics Accordion Group */}
              <div className="rounded-2xl border border-forest-800 bg-forest-900/50 overflow-hidden">
                <button
                  onClick={() => setMobileAcademicsOpen(!mobileAcademicsOpen)}
                  className="w-full p-4 flex items-center justify-between text-left text-ivory-100 font-semibold text-base focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-gold-400" />
                    <span>Academics & Pedagogy</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform ${mobileAcademicsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileAcademicsOpen && (
                  <div className="px-4 pb-3 space-y-1.5 border-t border-forest-800/60 pt-2 bg-forest-950/40">
                    {academicsLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                          location.pathname === item.href
                            ? 'bg-gold-500/20 text-gold-400 font-bold'
                            : 'text-ivory-200 hover:bg-forest-900 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 2. Campus & Infrastructure Group */}
              <div className="rounded-2xl border border-forest-800 bg-forest-900/50 overflow-hidden">
                <button
                  onClick={() => setMobileCampusOpen(!mobileCampusOpen)}
                  className="w-full p-4 flex items-center justify-between text-left text-ivory-100 font-semibold text-base focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Camera className="w-4 h-4 text-gold-400" />
                    <span>Campus & Facilities</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform ${mobileCampusOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileCampusOpen && (
                  <div className="px-4 pb-3 space-y-1.5 border-t border-forest-800/60 pt-2 bg-forest-950/40">
                    {campusLinks.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                          location.pathname === item.href
                            ? 'bg-gold-500/20 text-gold-400 font-bold'
                            : 'text-ivory-200 hover:bg-forest-900 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. Admissions Accordion Group */}
              <div className="rounded-2xl border border-forest-800 bg-forest-900/50 overflow-hidden">
                <button
                  onClick={() => setMobileAdmissionsOpen(!mobileAdmissionsOpen)}
                  className="w-full p-4 flex items-center justify-between text-left text-ivory-100 font-semibold text-base focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-gold-400" />
                    <span>Admissions 2026–27</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform ${mobileAdmissionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileAdmissionsOpen && (
                  <div className="px-4 pb-3 space-y-1.5 border-t border-forest-800/60 pt-2 bg-forest-950/40">
                    {admissionsLinks.map((item, idx) => (
                      item.action ? (
                        <button
                          key={idx}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            item.action!();
                          }}
                          className="w-full text-left block px-3.5 py-2.5 rounded-xl text-xs font-bold text-gold-400 hover:bg-gold-500/20 transition-colors flex items-center justify-between"
                        >
                          <span>{item.name}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <Link
                          key={idx}
                          to={item.href!}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                            location.pathname === item.href
                              ? 'bg-gold-500/20 text-gold-400 font-bold'
                              : 'text-ivory-200 hover:bg-forest-900 hover:text-white'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Direct Co-curricular & Boarding Links */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <Link
                  to="/beyond-academics"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-2.5 ${
                    location.pathname === '/beyond-academics'
                      ? 'bg-forest-900 border-gold-500/40 text-gold-400 font-bold shadow-md'
                      : 'bg-forest-900/60 border-forest-800 text-ivory-100 hover:bg-forest-900'
                  }`}
                >
                  <Award className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-xs font-semibold">Beyond Academics</span>
                </Link>

                <Link
                  to="/boarding"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-3.5 rounded-2xl border transition-all flex items-center gap-2.5 ${
                    location.pathname === '/boarding'
                      ? 'bg-forest-900 border-gold-500/40 text-gold-400 font-bold shadow-md'
                      : 'bg-forest-900/60 border-forest-800 text-ivory-100 hover:bg-forest-900'
                  }`}
                >
                  <Home className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="text-xs font-semibold">Boarding Life</span>
                </Link>
              </div>

              {/* Contact Us Direct Bar */}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                  location.pathname === '/contact'
                    ? 'bg-forest-900 border-gold-500/40 text-gold-400 font-bold shadow-md'
                    : 'bg-forest-900/60 border-forest-800 text-ivory-100 hover:bg-forest-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span className="text-sm font-semibold">Contact & Campus Tour</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </Link>

            </div>
          </div>

          {/* Drawer Footer Action Area */}
          <div className="pt-5 border-t border-gold-500/20 space-y-3 mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <GraduationCap className="w-5 h-5 text-forest-950" />
              <span>Apply Online — Session 2026–27</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a
                href={`tel:${SCHOOL_INFO.phones[0]}`}
                className="py-2.5 rounded-xl bg-forest-900/80 border border-forest-800 text-ivory-200 hover:text-gold-400 flex items-center justify-center gap-1.5 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call Us</span>
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="py-2.5 rounded-xl bg-forest-900/80 border border-forest-800 text-ivory-200 hover:text-gold-400 flex items-center justify-center gap-1.5 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-gold-400" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
