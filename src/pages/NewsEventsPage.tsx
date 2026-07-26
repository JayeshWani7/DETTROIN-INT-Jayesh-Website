import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AdmissionCTA } from '../components/AdmissionCTA';
import { Calendar, Bell, Award, Sparkles, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface NewsEventsPageProps {
  onOpenApplyModal: () => void;
}

export const NewsEventsPage: React.FC<NewsEventsPageProps> = ({ onOpenApplyModal }) => {
  const announcements = [
    {
      date: "Session 2026-27",
      category: "ADMISSIONS",
      title: "Admissions Open for Nursery to Class XII",
      description: "Online applications and prospectus requests are now live for the upcoming academic session at Pavna School, Aligarh."
    },
    {
      date: "Annual STEM Expo",
      category: "ACADEMICS",
      title: "Robotics & AI Student Innovation Fair",
      description: "Students from Primary to Senior classes presented autonomous IoT prototypes and AI software solutions."
    },
    {
      date: "Sports Championship",
      category: "ATHLETICS",
      title: "Inter-School Swimming & Track Athletic Meet",
      description: "Pavna hosted over 15 schools across UP for regional swimming, basketball, and track sprint finals."
    },
    {
      date: "SEEL Workshop",
      category: "CAMPUS ETHOS",
      title: "Parent-Teacher SEEL Mindfulness Circle",
      description: "Faculty and parent community gathered to discuss Social, Emotional & Ethical Learning strategies for children."
    }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="CAMPUS ANNOUNCEMENTS & EVENTS"
        title="News, Events & Academic Updates."
        subtitle="Stay updated with recent campus celebrations, Olympiad results, CBSE board announcements, and student achievements."
        backgroundImageUrl="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-forest-700 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <Bell className="w-4 h-4 text-gold-500" />
              PAVNA CAMPUS BULLETINS
            </span>
            <h2 className="heading-section font-serif text-forest-900 font-normal">
              Latest Highlights & Happenings.
            </h2>
            <p className="text-charcoal-700 text-base font-light">
              Celebrating student achievements, academic milestones, and upcoming campus events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {announcements.map((news, idx) => (
              <div key={idx} className="bg-ivory-200 rounded-3xl p-8 shadow-editorial border border-forest-800/10 space-y-4 flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 uppercase bg-gold-500/10 px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-charcoal-700 font-semibold flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-forest-700" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-forest-900">{news.title}</h3>
                  <p className="text-xs text-charcoal-700 font-light leading-relaxed">{news.description}</p>
                </div>

                <div className="pt-4 border-t border-forest-800/10">
                  <button
                    onClick={onOpenApplyModal}
                    className="text-xs font-bold text-forest-900 hover:text-gold-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Details & Enquiry</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
