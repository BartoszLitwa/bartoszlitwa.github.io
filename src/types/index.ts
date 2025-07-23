// Project related types
export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  url: string;
  metrics?: string;
}

// Experience related types
export interface Experience {
  title: string;
  company: string;
  companyLogo: string;
  city: string;
  description: string;
  achievements: string[];
  startDate: string;
  endDate: string;
}

// Skills related types
export interface Skill {
  percentage: number;
  text: string[];
  images: string[];
}

// Certification related types
export interface Certification {
  id: string;
  name: string;
  code: string;
  provider: string;
  status: 'completed' | 'in-progress' | 'planned';
  completedDate?: string;
  expectedDate?: string;
  progress?: number;
  description: string;
  skills: string[];
  credentialUrl: string;
  badgeUrl: string;
  level: 'Fundamentals' | 'Associate' | 'Expert';
  category: string;
}

// Language related types
export type Language = 'en' | 'pl';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export interface Translations {
  [key: string]: any;
}

// Contact form types
export interface ContactFormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  [key: string]: string; // Allow EmailJS to access properties dynamically
}

export interface ContactStatus {
  message: string;
  success: boolean;
}

// 3D Model types
export interface ModelProps {
  url?: string;
  children?: React.ReactNode;
}

export interface SkillCircleProps {
  percentage: number;
  text: string[];
  images: string[];
  isMobile: boolean;
}

// Component props types
export interface ProjectCardProps {
  card: Project;
}

export interface ExperienceCardProps {
  experience: Experience;
}

export interface CertificationCardProps {
  certification: Certification;
} 