import React from 'react';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenApplyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApplyModal }) => {
  return (
    <footer className="bg-forest-950 text-ivory-200 border-t border-forest-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-forest-900">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-500 text-forest-950 font-serif font-bold text-xl flex items-center justify-center">
                P
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl leading-none text-ivory-100">PAVNA SCHOOL</h3>
                <p className="text-[10px] text-gold-400 uppercase tracking-widest mt-1">Aligarh • Est. 1998</p>
              </div>
            </div>

            <p className="text-xs text-forest-300 font-light leading-relaxed max-w-sm">
              An environment built around individuality, exploration, academic excellence, and future readiness. Formerly Delhi Public School (DPS) Aligarh, affiliated with CBSE.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="px-5 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-semibold text-xs transition-colors inline-flex items-center gap-2"
              >
                <span>Apply Online {SCHOOL_INFO.admissionsSession}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Explore Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-ivory-100 text-base">Explore</h4>
            <ul className="space-y-2 text-xs text-forest-300 font-light">
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Pavna</a></li>
              <li><a href="#academics" className="hover:text-gold-400 transition-colors">CBSE Academics</a></li>
              <li><a href="#beyond-academics" className="hover:text-gold-400 transition-colors">Beyond Academics</a></li>
              <li><a href="#boarding" className="hover:text-gold-400 transition-colors">Residential Boarding</a></li>
              <li><a href="#sports" className="hover:text-gold-400 transition-colors">Sports Infrastructure</a></li>
              <li><a href="#seel" className="hover:text-gold-400 transition-colors">SEEL Pedagogy</a></li>
            </ul>
          </div>

          {/* Admissions Column */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-ivory-100 text-base">Admissions</h4>
            <ul className="space-y-2 text-xs text-forest-300 font-light">
              <li><a href="#admissions-journey" className="hover:text-gold-400 transition-colors">Admission Process</a></li>
              <li><button onClick={onOpenApplyModal} className="hover:text-gold-400 transition-colors text-left">Apply Online</button></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Fee Structure & Policy</a></li>
              <li><button onClick={onOpenApplyModal} className="hover:text-gold-400 transition-colors text-left">Request Prospectus</button></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Admissions FAQ</a></li>
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
            <a href="#" className="hover:text-gold-400 transition-colors">CBSE Mandatory Disclosure</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Use</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
