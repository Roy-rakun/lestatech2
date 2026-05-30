export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  stats?: { label: string; value: string };
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  impact: string;
  challenge: string;
  solution: string;
  results: string[];
  imageUrl: string;
  background?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}
