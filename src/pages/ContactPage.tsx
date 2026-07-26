import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onOpenApplyModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="w-full">
      <PageHeader
        badge="CAMPUS CONTACT & LOCATION"
        title="We Are Here to Guide You."
        subtitle="Schedule a personal campus tour, connect with our admissions desk, or make an academic inquiry."
        backgroundImageUrl="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details & Office Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-500" />
                  VISIT US IN ALIGARH
                </span>
                <h2 className="heading-section font-serif text-forest-900 font-normal">
                  Connect With Pavna School.
                </h2>
                <p className="text-charcoal-700 text-base font-light">
                  Our admissions office is open Monday through Saturday for campus walkthroughs and counseling sessions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-ivory-200 border border-forest-800/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest-900">School Address</h3>
                    <p className="text-sm text-charcoal-700 font-light mt-1">{SCHOOL_INFO.address}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-200 border border-forest-800/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest-900">Phone Contacts</h3>
                    <div className="text-sm text-charcoal-700 font-light mt-1 space-y-1">
                      {SCHOOL_INFO.phones.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-200 border border-forest-800/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest-900">Email Address</h3>
                    <p className="text-sm text-charcoal-700 font-light mt-1">{SCHOOL_INFO.email}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-ivory-200 border border-forest-800/10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-forest-900">Office Hours</h3>
                    <p className="text-sm text-charcoal-700 font-light mt-1">Monday – Saturday: 8:30 AM – 4:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Inquiry Form */}
            <div className="lg:col-span-7 bg-ivory-200 rounded-3xl p-8 sm:p-12 shadow-editorial border border-forest-800/10">
              <h3 className="font-serif font-bold text-2xl text-forest-900 mb-2">
                Send an Online Message
              </h3>
              <p className="text-xs text-charcoal-700 font-light mb-8">
                Have a question regarding admissions, CBSE curriculum, transport, or boarding? Send us a direct message.
              </p>

              <form onSubmit={(e) => { e.preventDefault(); onOpenApplyModal(); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Your Name *</label>
                    <input type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-xl bg-white border border-forest-800/20 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl bg-white border border-forest-800/20 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-white border border-forest-800/20 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-2">Message or Inquiry</label>
                  <textarea rows={4} placeholder="How can our team assist you?" className="w-full px-4 py-3 rounded-xl bg-white border border-forest-800/20 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500" />
                </div>

                <button type="submit" className="px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-base transition-colors flex items-center justify-center gap-2 shadow-md">
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
