import { 
  StatItem, 
  LearningCardItem, 
  SEELPillar, 
  GalleryItem, 
  FAQItem, 
  VisitorItem, 
  LeadershipMember,
  TestimonialItem 
} from '../types';

export const SCHOOL_INFO = {
  name: "Pavna School",
  city: "Aligarh",
  tagline: "Be Yourself. Become More.",
  establishedYear: 1998,
  legacyYears: "28+",
  affiliation: "CBSE Affiliated",
  formerName: "Formerly Delhi Public School (DPS) Aligarh",
  founder: "Shri Pawan Jain",
  address: "Agra Highway, Near Gyan Mahavidyalaya, Aligarh – 202001, Uttar Pradesh, India",
  phones: ["+91 8006409329", "+91 8006409335", "+91 8006409336", "+91 8006409344"],
  email: "info@pavnaschoolaligarh.com",
  admissionsSession: "2026–2027",
};

export const LEGACY_STATS: StatItem[] = [
  {
    number: 28,
    suffix: "+",
    label: "Years of Educational Legacy",
    sublabel: "Est. 1998 in Aligarh"
  },
  {
    number: 250,
    suffix: "+",
    label: "Expert Educators",
    sublabel: "1:15 Teacher-Student Ratio"
  },
  {
    number: 30000,
    suffix: "+",
    label: "Learners Base",
    sublabel: "Nurtured Over Decades"
  },
  {
    number: 20000,
    suffix: "+",
    label: "Happy Parents",
    sublabel: "Trusting Our Pedagogy"
  },
  {
    number: 6000,
    suffix: "+",
    label: "Global Alumni Base",
    sublabel: "Leading Across Industries"
  }
];

export const LEARNING_CARDS: LearningCardItem[] = [
  {
    id: "ai-robotics",
    number: "01",
    title: "AI & Robotics Laboratory",
    description: "Hands-on exposure to computational thinking, STEM coding, IoT, and building intelligent physical systems from early school years.",
    category: "FUTURE READINESS",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    gridSpan: "col-span-12 md:col-span-8 row-span-2",
    isDark: true
  },
  {
    id: "sports-athletics",
    number: "02",
    title: "Sports & Athletics Complex",
    description: "Olympic-standard swimming pool, cricket academy, synthetic basketball courts, and outdoor fields building physical stamina.",
    category: "PHYSICAL EXCELLENCE",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 row-span-1"
  },
  {
    id: "seel-learning",
    number: "03",
    title: "Social, Emotional & Ethical Learning (SEEL)",
    description: "Integrated curriculum building self-awareness, empathy, emotional resilience, and responsible decision-making.",
    category: "HOLISTIC GROWTH",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 row-span-1"
  },
  {
    id: "boarding-life",
    number: "04",
    title: "Modern Residential Boarding",
    description: "Fully air-conditioned, secure residential suites with 24/7 pastoral care, nutritional dining, and structured evening study circles.",
    category: "CAMPUS LIVING",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-6 row-span-1"
  },
  {
    id: "academic-excellence",
    number: "05",
    title: "CBSE Academic Rigor",
    description: "Concept-driven inquiry and rigorous preparation for national competitive assessments with personalized faculty support.",
    category: "CURRICULUM",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-6 row-span-1"
  },
  {
    id: "co-curricular",
    number: "06",
    title: "Holistic Arts & Co-Curricular",
    description: "Dedicated studios for visual arts, classical music, theatrical performance, and environmental conservation projects.",
    category: "CREATIVITY",
    imageUrl: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 row-span-1"
  },
  {
    id: "faculty",
    number: "07",
    title: "Accomplished Educator Mentors",
    description: "Continuous professional development ensuring our faculty employs world-class active learning methodologies.",
    category: "FACULTY",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 row-span-1"
  },
  {
    id: "safe-transport",
    number: "08",
    title: "GPS-Tracked Safe Transport",
    description: "Air-conditioned fleet of buses with real-time GPS tracking, speed governors, female attendants, and CCTV monitoring.",
    category: "SAFETY & SECURITY",
    imageUrl: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=800&q=80",
    gridSpan: "col-span-12 md:col-span-4 row-span-1"
  }
];

export const SEEL_PILLARS: SEELPillar[] = [
  {
    title: "SOCIAL",
    subtitle: "Connecting With Compassion",
    description: "Learn to understand and work with others, build meaningful relationships, and appreciate diverse perspectives in a collaborative setting.",
    color: "#0D3B28",
    iconName: "Users",
    bullets: [
      "Collaborative teamwork & group problem solving",
      "Active listening & empathetic dialogue",
      "Conflict resolution & active citizenship"
    ]
  },
  {
    title: "EMOTIONAL",
    subtitle: "Inner Strength & Awareness",
    description: "Develop resilience, emotional regulation, and authentic self-confidence to navigate academic challenges and life's complexities.",
    color: "#C5A059",
    iconName: "Heart",
    bullets: [
      "Self-awareness & mindfulness practices",
      "Stress management & emotional balance",
      "Growth mindset & courage to innovate"
    ]
  },
  {
    title: "ETHICAL",
    subtitle: "Integrity In Action",
    description: "Grow with empathy, responsibility, and moral clarity, empowering students to make values-based decisions for societal good.",
    color: "#4A7C59",
    iconName: "ShieldCheck",
    bullets: [
      "Ethical decision-making frameworks",
      "Environmental stewardship & sustainability",
      "Community service & moral responsibility"
    ]
  }
];

export const BEYOND_ACADEMICS_CATEGORIES = [
  {
    id: "music",
    title: "Music & Performing Arts",
    tagline: "Unleashing Harmonic Expression",
    description: "Dedicated acoustic rooms for Indian classical, vocal ensemble, keyboard, guitar, and rhythm instruments guided by veteran musicians.",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "drama",
    title: "Drama & Theatre Studio",
    tagline: "Stagecraft & Public Presence",
    description: "An amphitheatre and black-box theater studio where students explore scriptwriting, characterization, public speaking, and confidence.",
    imageUrl: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "debate",
    title: "Debate & Model UN",
    tagline: "Critical Thinking & Global Policy",
    description: "Rigorous parliamentary debating, Model United Nations conferences, and oratorical forums training tomorrow's articulate leaders.",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "art",
    title: "Visual Arts & Pottery",
    tagline: "Form, Color & Creative Courage",
    description: "Spacious fine art galleries, pottery wheels, sculpture studios, and digital illustration workshops fostering original artistic voice.",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "environmental",
    title: "Environmental Science & Eco Club",
    tagline: "Hands-on Sustainability",
    description: "Organic farming gardens, solar energy audit units, rainwater harvesting projects, and biodiversity mapping on campus grounds.",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "robotics",
    title: "Robotics & Innovation Lab",
    tagline: "Building Tomorrow's Machines",
    description: "Arduino microcontrollers, 3D printing stations, sensor kits, and competitive robotics team preparation for national expos.",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "sports",
    title: "Sports Academies",
    tagline: "Discipline, Athleticism & Grit",
    description: "Professional coaching in cricket, lawn tennis, basketball, badminton, chess, and track events with regional tournament hosting.",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "creative",
    title: "Creative Writing & Campus Journal",
    tagline: "Storytelling & Editorial Craft",
    description: "Student-edited school magazine, poetry slams, digital journalism, and creative writing circles published biannually.",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80"
  }
];

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    name: "Ms. Priya Jain",
    title: "Chairperson & Director, Pavna Group",
    role: "Chairperson",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    quote: "Our vision is to nurture thinkers and empathetic human beings who do not merely adapt to the future, but actively shape it with courage and integrity.",
    fullMessage: "Welcome to Pavna School, Aligarh. Since our inception in 1998, we have remained steadfastly committed to holistic human development. Education at Pavna goes far beyond competitive test scores; it is an uplifting journey of self-discovery, ethical clarity, and boundless curiosity. We provide an ecosystem where every student feels valued, heard, and inspired to excel in their chosen paths."
  },
  {
    name: "Ms. Arti Jha",
    title: "Principal, Pavna School Aligarh",
    role: "Principal",
    imageUrl: "https://images.unsplash.com/photo-1580894732413-a705b4528148?auto=format&fit=crop&w=600&q=80",
    quote: "When students are encouraged to be authentic to who they are, learning transforms into a joyful life-long adventure of excellence.",
    fullMessage: "At Pavna School, we strike a harmonious balance between rigorous academic fundamentals and social-emotional intelligence. Our dedicated faculty works tirelessly to create inquiry-driven classrooms where students ask bold questions, experiment without fear of failure, and cultivate essential 21st-century skills."
  }
];

export const DISTINGUISHED_VISITORS: VisitorItem[] = [
  {
    name: "Eminent Scientists & Technologists",
    role: "National Research Mentors",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    quote: "The curiosity and analytical sharpness of Pavna students in science and technology is truly remarkable.",
    year: "2024"
  },
  {
    name: "Renowned Literary Personalities",
    role: "Authors & Orators",
    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    quote: "A campus that truly respects original thought, creative expression, and intellectual freedom.",
    year: "2023"
  },
  {
    name: "International Sports Champions",
    role: "Athletic Mentors",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=600&q=80",
    quote: "The sports infrastructure and discipline at Pavna reflects the spirit of true sportsmanship.",
    year: "2023"
  },
  {
    name: "Thought Leaders in Education",
    role: "Pedagogy Consultants",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80",
    quote: "Pavna's integration of SEEL curriculum sets a gold standard for holistic school education in India.",
    year: "2022"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Robotics & AI Innovation Expo",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    caption: "Students showcasing autonomous rover prototypes created in the STEM lab.",
    aspect: "landscape"
  },
  {
    id: "g2",
    title: "Annual Sports Athletic Meet",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    caption: "Track and field sprint finals at Pavna's athletic complex.",
    aspect: "portrait"
  },
  {
    id: "g3",
    title: "Inquiry-Led Classroom Session",
    category: "Academics",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    caption: "Interactive science inquiry guided by senior faculty mentors.",
    aspect: "square"
  },
  {
    id: "g4",
    title: "Classical & Contemporary Orchestra",
    category: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80",
    caption: "Students performing during the annual cultural celebration.",
    aspect: "landscape"
  },
  {
    id: "g5",
    title: "Lush Green 25-Acre Campus",
    category: "Campus Life",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80",
    caption: "Morning view of the iconic architectural facade and open lawns.",
    aspect: "wide"
  },
  {
    id: "g6",
    title: "Pottery & Fine Arts Studio",
    category: "Arts",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80",
    caption: "Creative hands-on sculpting and color theory workshops.",
    aspect: "portrait"
  },
  {
    id: "g7",
    title: "Residential House Evening Circle",
    category: "Campus Life",
    imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
    caption: "Boarding house study lounge and peer collaborative learning.",
    aspect: "square"
  },
  {
    id: "g8",
    title: "Olympic-Standard Swimming Pool",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1000&q=80",
    caption: "Swimming academy training under certified aquatic coaches.",
    aspect: "landscape"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Pavna School gave my daughter the exact environment she needed to bloom. She transformed from a hesitant reader into an outspoken debate champion and robotics enthusiast.",
    author: "Dr. Rajesh Sharma",
    role: "Parent of Class X Student",
    batchOrClass: "Parent Community",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The SEEL program and boarding house atmosphere made Pavna feel like my second home. The teachers don't just teach subjects—they guide your character.",
    author: "Ananya Gupta",
    role: "Alumna (Batch of 2023)",
    batchOrClass: "Pursuing Engineering at IIT",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Having studied in top institutions across India, I find Pavna's balance of academic rigor, modern sports facilities, and individual care unmatched in the region.",
    author: "Sunil Verma",
    role: "Parent of Boarding Student",
    batchOrClass: "Class XII Science",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What curriculum does Pavna School follow?",
    answer: "Pavna School is affiliated with the Central Board of Secondary Education (CBSE), New Delhi. We deliver a modern, inquiry-driven CBSE curriculum integrated with global best practices, STEM hands-on learning, and SEEL (Social, Emotional & Ethical Learning).",
    category: "Academics"
  },
  {
    question: "What is the student-teacher ratio at Pavna School?",
    answer: "We maintain an optimal 1:15 teacher-student ratio to ensure every child receives personalized attention, individualized learning plans, and close academic mentorship.",
    category: "Academics"
  },
  {
    question: "Is boarding mandatory at Pavna School?",
    answer: "No, boarding is optional. Pavna offers both Day Scholar facilities (with GPS-tracked AC bus transport across Aligarh) and world-class Residential Boarding for boys and girls from Class IV onwards.",
    category: "Boarding"
  },
  {
    question: "What safety measures are present in the residential boarding house?",
    answer: "Our boarding house features 24/7 CCTV surveillance, biometric access, resident housemasters, full-time medical nurses, emergency doctor-on-call, and dedicated pastoral wardens ensuring complete safety and emotional wellbeing.",
    category: "Boarding"
  },
  {
    question: "How does the admission process work for the 2026–27 session?",
    answer: "The admission journey involves 5 simple steps: (1) Submit an online or campus enquiry, (2) Interaction with the admissions team, (3) Campus & Facility Walkthrough, (4) Formal Application Form & Documentation, and (5) Confirmation & Orientation.",
    category: "Admissions"
  },
  {
    question: "Does Pavna School offer transport facility across Aligarh?",
    answer: "Yes, our air-conditioned bus fleet covers all major routes across Aligarh and neighboring regions. All vehicles are equipped with real-time GPS tracking, speed governors, CCTV cameras, and trained female attendants.",
    category: "Infrastructure"
  }
];
