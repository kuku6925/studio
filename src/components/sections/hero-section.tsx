import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { SiteConfig } from '@/config/site';
import { Container } from '@/components/shared/container';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-background to-secondary">
      <Container>
        <div className="space-y-6 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block mb-2">Empowering Your</span>
            <span className="block text-primary">Digital Transformation</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            {SiteConfig.description}. We deliver cutting-edge IT solutions tailored to your business needs, helping you achieve unparalleled success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/contact">
                Get a Free Consultation <Zap className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
    </section>
  );
}
