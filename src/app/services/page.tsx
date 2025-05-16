import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ServicesSection } from '@/components/sections/services-section';

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
