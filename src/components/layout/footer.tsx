import { SiteConfig } from '@/config/site';
import { Rocket, Mail } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/shared/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary mb-4">
              <Rocket className="h-7 w-7" />
              <span>{SiteConfig.name}</span>
            </Link>
            <p className="text-sm">{SiteConfig.longDescription}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {SiteConfig.navItems.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm mt-4">
              123 Tech Avenue, Innovation City, TX 75001
            </p>
            <div className="flex items-center space-x-2 text-sm mt-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:devansh@enterprises.in" className="hover:text-primary transition-colors">
                devansh@enterprises.in
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border text-center text-sm">
          <p>&copy; {currentYear} {SiteConfig.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
