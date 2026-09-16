export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryId: 'all' | 'kitchen' | 'wardrobe' | 'living' | 'bedroom' | 'office';
  location: string;
  year: string;
  image: string;
  description: string;
  materials: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  project: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  highlight: string;
}
