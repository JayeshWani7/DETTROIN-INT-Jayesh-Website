import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, GraduationCap, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: 'Class I',
    phone: '',
    email: '',
    type: 'Day Scholar',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      parentName: '',
      grade: 'Class I',
      phone: '',
      email: '',
      type: 'Day Scholar',
      message: ''
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-950/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-ivory-100 text-charcoal-900 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-gold-500/30 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-ivory-200 text-charcoal-900 hover:bg-forest-900 hover:text-ivory-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">
                    <GraduationCap className="w-4 h-4 text-gold-600" />
                    <span>SESSION {SCHOOL_INFO.admissionsSession}</span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-forest-900">
                    Apply For Admission
                  </h3>
                  <p className="text-xs text-charcoal-700 font-light mt-1">
                    Fill out the form below to receive prospectus details and schedule a campus meeting.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="e.g. Dr. R. Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                        Grade Seeking Admission *
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option>Nursery / LKG / UKG</option>
                        <option>Class I - V</option>
                        <option>Class VI - VIII</option>
                        <option>Class IX - X</option>
                        <option>Class XI - XII (Science)</option>
                        <option>Class XI - XII (Commerce / Arts)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                        Option Type
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                      >
                        <option>Day Scholar (Bus Transport)</option>
                        <option>Residential Boarding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-forest-900 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-forest-800/20 bg-ivory-50 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gold-500 hover:bg-gold-600 text-forest-950 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors mt-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Enquiry</span>
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-forest-900">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-sm text-charcoal-700 font-light max-w-md mx-auto">
                  Thank you, <strong>{formData.parentName}</strong>. Our admissions office will contact you at <strong>{formData.phone}</strong> shortly to guide you through the prospectus and campus visit.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full bg-forest-900 text-ivory-100 font-semibold text-xs hover:bg-gold-500 hover:text-forest-950 transition-colors"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
