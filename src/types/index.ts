// Project related types
export interface Project {
  title: string;
  description: string;
  imgUrl: string;
  type: string;
  url: string;
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