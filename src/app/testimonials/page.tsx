import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
