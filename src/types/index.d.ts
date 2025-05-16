import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
};

export type Service = {
  name: string;
  description: string;
  icon: LucideIcon;
};

export type PortfolioItem = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
};

export type Testimonial = {
  name: string;
  quote: string;
  role: string;
  avatar?: string; // Optional: URL to avatar image
};

export type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};
