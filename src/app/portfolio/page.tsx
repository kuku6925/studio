import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PortfolioSection } from '@/components/sections/portfolio-section';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
}
