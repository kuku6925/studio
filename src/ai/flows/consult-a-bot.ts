// Consult-a-Bot flow provides AI-powered answers to user questions about IT services.
// It takes a question as input and returns an answer.
// The consultABot function is the exported entrypoint for querying the flow.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConsultABotInputSchema = z.object({
  question: z.string().describe('The question to ask about IT services.'),
});
export type ConsultABotInput = z.infer<typeof ConsultABotInputSchema>;

const ConsultABotOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about IT services.'),
});
export type ConsultABotOutput = z.infer<typeof ConsultABotOutputSchema>;

export async function consultABot(input: ConsultABotInput): Promise<ConsultABotOutput> {
  return consultABotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'consultABotPrompt',
  input: {schema: ConsultABotInputSchema},
  output: {schema: ConsultABotOutputSchema},
  prompt: `You are a helpful AI assistant providing information about IT services offered by Devansh Enterprises.

  The company provides business strategies, business consultances, PPTs for projects, business analysis, risk management, project management, all types of projects, data recovery, Antivirus security, Cloud/remote access security, Residential security system, ERP, Cyber security service, UI/UX, app, website, and web3 services.

  Please answer the following question:
  {{{question}}}`,
});

const consultABotFlow = ai.defineFlow(
  {
    name: 'consultABotFlow',
    inputSchema: ConsultABotInputSchema,
    outputSchema: ConsultABotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
