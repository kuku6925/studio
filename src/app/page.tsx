import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { Container } from '@/components/shared/container';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <Container className="py-16 lg:py-24 space-y-16 lg:space-y-24">
          <ServicesSection />
          <TestimonialsSection />
        </Container>
      </main>
      <Footer />
    </div>
  );
}
