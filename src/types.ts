export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  details?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  highlight?: boolean;
  image?: string;
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
  link?: string;
  github?: string;
  image: string;
  highlight?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  highlight?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}