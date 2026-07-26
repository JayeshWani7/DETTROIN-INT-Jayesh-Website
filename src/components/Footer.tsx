import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApplyModal }) => {
  return (
    <footer className="bg-forest-950 text-ivory-200 border-t border-forest-800 text-sm">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500 text-forest-950 font-serif font-bold text-xl flex items-center justify-center">
                P
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl leading-none text-ivory-100">PAVNA SCHOOL</h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest mt-1">Aligarh • Est. 1998</p>
              </div>
            </Link>

            <p className="text-xs text-forest-300 font-light leading-relaxed max-w-sm">
              An environment built around individuality, exploration, academic excellence, and future readiness. Formerly Delhi Public School (DPS) Aligarh, affiliated with CBSE.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-semibold text-xs transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Apply Online {SCHOOL_INFO.admissionsSession}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-ivory-100 text-base">Explore Pages</h4>
            <ul className="space-y-2 text-xs text-forest-300 font-light">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Pavna</Link></li>
              <li><Link to="/academics" className="hover:text-gold-400 transition-colors">CBSE Academics</Link></li>
              <li><Link to="/beyond-academics" className="hover:text-gold-400 transition-colors">Beyond Academics</Link></li>
              <li><Link to="/boarding" className="hover:text-gold-400 transition-colors">Residential Boarding</Link></li>
              <li><Link to="/campus" className="hover:text-gold-400 transition-colors">Campus Facilities</Link></li>
            </ul>
          </div>

          {/* Admissions Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-ivory-100 text-base">Admissions</h4>
            <ul className="space-y-2 text-xs text-forest-300 font-light">
              <li><Link to="/admissions" className="hover:text-gold-400 transition-colors">Admission Process</Link></li>
              <li><button onClick={onOpenApplyModal} className="hover:text-gold-400 transition-colors text-left cursor-pointer">Apply Online</button></li>
              <li><Link to="/admissions" className="hover:text-gold-400 transition-colors">Fee Structure & Policy</Link></li>
              <li><button onClick={onOpenApplyModal} className="hover:text-gold-400 transition-colors text-left cursor-pointer">Request Prospectus</button></li>
              <li><Link to="/admissions" className="hover:text-gold-400 transition-colors">Admissions FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-ivory-100 text-base">Campus Address</h4>
            <ul className="space-y-3 text-xs text-forest-300 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{SCHOOL_INFO.phones[0]}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-forest-300 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Pavna School, Aligarh. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/admissions" className="hover:text-gold-400 transition-colors">CBSE Mandatory Disclosure</Link>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
