import type { NavItem, Service, PortfolioItem, Testimonial } from '@/types';
import { Lightbulb, Users, Presentation, BarChart3, ShieldCheck, ClipboardList, DatabaseBackup, Shield, CloudCog, HomeIcon, Blocks, LockKeyhole, Palette, Smartphone, Globe, Hexagon, Brain, Briefcase } from 'lucide-react';

export const SiteConfig = {
  name: "Devansh Digital",
  description: "Expert IT Consultancy and Solutions",
  longDescription: "Devansh Digital offers comprehensive IT services including business strategy, project management, cybersecurity, and web/app development to drive your business forward.",
  url: "https://devansh.digital", // Replace with actual URL
  ogImage: "https://devansh.digital/og.jpg", // Replace with actual OG image URL
  keywords: ["IT consultancy", "business strategy", "cybersecurity", "web development", "app development", "Devansh Digital"],
  navItems: [
    { title: "Services", href: "#services" },
    { title: "Portfolio", href: "#portfolio" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Consult-a-Bot", href: "#chatbot" },
    { title: "Contact", href: "#contact" },
  ] as NavItem[],
  services: [
    { name: "Business Strategies", description: "Crafting innovative strategies to drive growth and efficiency.", icon: Brain },
    { name: "Business Consultancies", description: "Expert advice to navigate complex business challenges.", icon: Users },
    { name: "PPT for Projects", description: "Professional presentations to showcase your project's value.", icon: Presentation },
    { name: "Business Analysis", description: "In-depth analysis to identify opportunities and optimize performance.", icon: BarChart3 },
    { name: "Risk Management", description: "Identifying and mitigating risks to protect your assets.", icon: ShieldCheck },
    { name: "Project Management", description: "Ensuring your projects are delivered on time and within budget.", icon: ClipboardList },
    { name: "Data Recovery", description: "Reliable solutions to recover lost data and ensure business continuity.", icon: DatabaseBackup },
    { name: "Antivirus Security", description: "Protecting your systems from malware and cyber threats.", icon: Shield },
    { name: "Cloud/Remote Access Security", description: "Secure solutions for cloud infrastructure and remote work.", icon: CloudCog },
    { name: "Residential Security System", description: "Advanced security systems for peace of mind at home.", icon: HomeIcon },
    { name: "ERP Solutions", description: "Implementing integrated ERP systems for streamlined operations.", icon: Blocks },
    { name: "Cyber Security Service", description: "Comprehensive cybersecurity services to safeguard your digital assets.", icon: LockKeyhole },
    { name: "UI/UX Design", description: "Creating intuitive and engaging user experiences.", icon: Palette },
    { name: "App Development", description: "Building custom mobile applications for iOS and Android.", icon: Smartphone },
    { name: "Website Development", description: "Developing responsive and high-performing websites.", icon: Globe },
    { name: "Web3 Services", description: "Exploring and building solutions for the decentralized web.", icon: Hexagon },
  ] as Service[],
  portfolioItems: [
    {
      title: "Enterprise CRM Solution",
      description: "Developed a custom CRM platform for a leading retail client, improving sales tracking and customer engagement.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "business software",
      tags: ["CRM", "Web Development", "Business Analysis"],
    },
    {
      title: "E-commerce Web Presence",
      description: "Launched a high-performance e-commerce website with integrated payment gateways and inventory management.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "online store",
      tags: ["E-commerce", "Website Development", "UI/UX Design"],
    },
    {
      title: "Secure Mobile Banking App",
      description: "Designed and built a secure mobile banking application with a focus on user experience and accessibility.",
      imageUrl: "https://placehold.co/600x400.png",
      imageHint: "mobile app finance",
      tags: ["Mobile App", "Cybersecurity", "UI/UX Design"],
    },
  ] as PortfolioItem[],
  testimonials: [
    { name: "Vinay Kumar", quote: "Devansh Digital transformed our business strategy. Their insights were invaluable and led to significant growth.", role: "CEO, FutureTech Solutions" },
    { name: "Sagar Patel", quote: "The project management expertise from Devansh Digital kept our complex project on track and within budget. Highly recommended!", role: "Project Lead, Innovate Corp" },
    { name: "Azim Khan", quote: "Their cybersecurity services are top-notch. We feel much more secure knowing our data is protected by Devansh Digital.", role: "IT Manager, SecureNet" },
    { name: "Nirupam Verma", quote: "The UI/UX design for our new app exceeded all expectations. It's beautiful, intuitive, and our users love it.", role: "Product Owner, AppFirst" },
    { name: "Gunjan Sharma", quote: "Devansh Digital's team is professional, knowledgeable, and delivered a fantastic website that has boosted our online presence.", role: "Marketing Head, ConnectZ" },
    { name: "Ruchi Chauhan", quote: "From data recovery to cloud security, Devansh Digital has been our go-to partner for all IT needs. Exceptional service!", role: "Operations Director, DataSafe Ltd." },
  ] as Testimonial[],
};
