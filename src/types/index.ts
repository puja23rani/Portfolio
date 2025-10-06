export interface Experience {
  company: string;
  position: string;
  period: string;
  details: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
}

export interface NavItem {
  label: string;
  href: string;
  number: string;
}