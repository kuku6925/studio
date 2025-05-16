import { ConsultABotClient } from '@/components/chatbot/consult-a-bot-client';
import { Container } from '@/components/shared/container';

export function AiChatbotSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need Quick Answers?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try our AI-powered "Consult-a-Bot" for instant information about Devansh Enterprises' IT services.
          </p>
        </div>
        <ConsultABotClient />
      </Container>
    </section>
  );
}
