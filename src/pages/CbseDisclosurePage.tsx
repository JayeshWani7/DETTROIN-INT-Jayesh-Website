import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AdmissionCTA } from '../components/AdmissionCTA';
import { SCHOOL_INFO } from '../data/schoolData';
import { CheckCircle2 } from 'lucide-react';

interface CbseDisclosurePageProps {
  onOpenApplyModal: () => void;
}

export const CbseDisclosurePage: React.FC<CbseDisclosurePageProps> = ({ onOpenApplyModal }) => {
  const generalInfo = [
    { key: "School Name", value: "Pavna School, Aligarh" },
    { key: "Affiliation Board", value: "Central Board of Secondary Education (CBSE), New Delhi" },
    { key: "Former Name", value: "Formerly Delhi Public School (DPS) Aligarh" },
    { key: "Year of Establishment", value: "1998 (28+ Years Legacy)" },
    { key: "Founder & Group", value: "Shri Pawan Jain (Pavna Group)" },
    { key: "Chairperson / Director", value: "Ms. Priya Jain" },
    { key: "Principal", value: "Ms. Arti Jha" },
    { key: "Complete Campus Address", value: SCHOOL_INFO.address },
    { key: "Contact Phone Numbers", value: SCHOOL_INFO.phones.join(", ") },
    { key: "Official Email", value: SCHOOL_INFO.email }
  ];

  const documents = [
    { title: "Copies of Affiliation / Extension Letter", status: "Verified & Uploaded", date: "2026-27" },
    { title: "Trust / Society Registration Certificate", status: "Verified & Uploaded", date: "Valid" },
    { title: "No Objection Certificate (NOC) from State Govt.", status: "Verified & Uploaded", date: "Valid" },
    { title: "Building Safety Certificate (PWD / Competent Authority)", status: "Verified & Uploaded", date: "Valid" },
    { title: "Fire Safety Certificate issued by Fire Department", status: "Verified & Uploaded", date: "Valid" },
    { title: "Water, Health & Sanitation Safety Certificate", status: "Verified & Uploaded", date: "Valid" },
    { title: "School Fee Structure & Payment Policy", status: "Verified & Uploaded", date: "Session 2026-27" },
    { title: "Annual Academic Calendar & Holiday List", status: "Verified & Uploaded", date: "Session 2026-27" },
    { title: "School Management Committee (SMC) List", status: "Verified & Uploaded", date: "Active" }
  ];

  const staffInfrastructure = [
    { metric: "Total Campus Area", value: "25 Acres (Lush Green Grounds)" },
    { metric: "Total No. of Classrooms", value: "75+ Smart Digital Classrooms" },
    { metric: "Laboratories", value: "AI & Robotics, Physics, Chemistry, Biology, Math, Computer" },
    { metric: "Teacher - Student Ratio", value: "1 : 15 (Individual Care)" },
    { metric: "Total Teaching Staff", value: "250+ Post-Graduate Educators" },
    { metric: "Special Educator & Counselor", value: "Full-Time Resident Specialists" },
    { metric: "Internet & Digital Facilities", value: "100 Mbps Fiber Campus Wi-Fi" },
    { metric: "Safety & Transport", value: "GPS AC Buses, Speed Governors, CCTV 24/7" }
  ];

  return (
    <div className="w-full">
      <PageHeader
        badge="STATUTORY COMPLIANCE • CBSE DISCLOSURE"
        title="CBSE Mandatory Public Disclosure."
        subtitle="In compliance with Central Board of Secondary Education (CBSE) directives, Pavna School publishes official administrative, safety, academic, and infrastructure records."
        backgroundImageUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80"
        breadcrumbs={[{ label: 'CBSE Disclosure' }]}
      />

      <section className="py-24 bg-ivory-100 text-charcoal-900">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-16">
          
          {/* Section 1: General Information Table */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">SECTION A</span>
                <h2 className="font-serif font-bold text-2xl text-forest-900">General Institutional Information</h2>
              </div>
            </div>

            <div className="bg-ivory-200 rounded-3xl overflow-hidden shadow-editorial border border-forest-800/10">
              <div className="divide-y divide-forest-800/10">
                {generalInfo.map((info, idx) => (
                  <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 hover:bg-forest-50/50 transition-colors">
                    <div className="md:col-span-4 font-bold text-sm text-forest-900">{info.key}</div>
                    <div className="md:col-span-8 text-sm text-charcoal-800 font-light mt-1 md:mt-0">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Statutory Certificates & Documents */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold">
                B
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">SECTION B</span>
                <h2 className="font-serif font-bold text-2xl text-forest-900">Statutory Certificates & Approvals</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {documents.map((doc, idx) => (
                <div key={idx} className="bg-ivory-200 rounded-2xl p-6 shadow-editorial border border-forest-800/10 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-gold-600 uppercase bg-gold-500/10 px-2.5 py-1 rounded-full">
                        DOC 0{idx + 1}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-forest-700" />
                    </div>
                    <h3 className="font-serif font-bold text-base text-forest-900">{doc.title}</h3>
                  </div>

                  <div className="pt-3 border-t border-forest-800/10 flex items-center justify-between text-xs text-charcoal-700">
                    <span>{doc.status}</span>
                    <span className="font-semibold text-gold-600">{doc.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Staff & Campus Infrastructure Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center font-bold">
                C
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">SECTION C</span>
                <h2 className="font-serif font-bold text-2xl text-forest-900">Staff & Infrastructure Metrics</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffInfrastructure.map((item, idx) => (
                <div key={idx} className="bg-forest-950 text-ivory-100 rounded-3xl p-6 shadow-xl border border-gold-500/20 space-y-2">
                  <span className="text-[10px] font-mono text-gold-400 uppercase font-bold tracking-widest">{item.metric}</span>
                  <h3 className="font-serif font-bold text-xl text-ivory-100">{item.value}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <AdmissionCTA onOpenApplyModal={onOpenApplyModal} />
    </div>
  );
};
