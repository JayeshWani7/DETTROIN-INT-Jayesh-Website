export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface LearningCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  gridSpan: string; // Tailwind grid span class
  isDark?: boolean;
}

export interface SEELPillar {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  iconName: string;
  bullets: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Academics' | 'Technology' | 'Sports' | 'Arts' | 'Campus Life';
  imageUrl: string;
  caption: string;
  aspect: 'square' | 'portrait' | 'landscape' | 'wide';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface VisitorItem {
  name: string;
  role: string;
  imageUrl: string;
  quote: string;
  year?: string;
}

export interface LeadershipMember {
  name: string;
  title: string;
  role: string;
  imageUrl: string;
  quote: string;
  fullMessage: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  batchOrClass: string;
  avatarUrl: string;
}
