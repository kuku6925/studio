'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { consultABot, type ConsultABotInput } from '@/ai/flows/consult-a-bot';
import type { ChatMessage } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ConsultABotClient() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  // Add initial greeting message from bot
  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        role: 'assistant',
        content: "Hello! I'm Consult-a-Bot from Devansh Enterprises. How can I help you with our IT services today?"
      }
    ]);
  }, []);


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botInput: ConsultABotInput = { question: input };
      const response = await consultABot(botInput);
      const botMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: response.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error consulting bot:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again later.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-card border rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-center text-card-foreground">Consult-a-Bot</h3>
      </div>
      <ScrollArea className="flex-grow p-4 space-y-4" ref={scrollAreaRef}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex items-end space-x-2',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <Bot size={18} />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                'p-3 rounded-lg max-w-[70%]',
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-br-none'
                  : 'bg-muted text-muted-foreground rounded-bl-none'
              )}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
            {message.role === 'user' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-accent text-accent-foreground">
                  <User size={18} />
                </AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end space-x-2 justify-start">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                <Bot size={18} />
              </AvatarFallback>
            </Avatar>
            <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
            </div>
          </div>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4 border-t flex items-center space-x-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about our IT services..."
          className="flex-grow"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <Button type="submit" disabled={isLoading || !input.trim()} size="icon" aria-label="Send message">
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
