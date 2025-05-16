import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AiChatbotSection } from '@/components/sections/ai-chatbot-section';

export default function ChatbotPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <AiChatbotSection />
      </main>
      <Footer />
    </div>
  );
}
