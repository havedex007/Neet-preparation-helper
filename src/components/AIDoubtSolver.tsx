import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import Markdown from 'react-markdown';
import { generateDoubtResponse } from '../services/gemini';
import { cn } from '../utils/cn';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export const AIDoubtSolver: React.FC<{ subject?: string }> = ({ subject }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponse = await generateDoubtResponse(userMessage, subject);
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse || 'No response' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-surface dark:bg-dark-surface overflow-hidden transition-colors duration-300">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 scroll-smooth no-scrollbar"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">
              <Sparkles size={32} className="sm:w-10 sm:h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 dark:text-dark-text">Ask your doubts</h4>
              <p className="text-sm text-slate-500 dark:text-dark-text-muted max-w-xs mx-auto">
                Stuck on a concept? Ask me anything about Physics, Chemistry, or Biology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 w-full max-w-sm">
              {[
                "Explain the Krebs cycle simply",
                "What is Lenz's Law?",
                "How to calculate molarity?"
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setInput(suggestion)}
                  className="text-left text-xs p-4 rounded-2xl border border-border dark:border-dark-border hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-dark-surface2 transition-all text-slate-600 dark:text-dark-text-muted group"
                >
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">"</span>
                  {suggestion}
                  <span className="opacity-60 group-hover:opacity-100 transition-opacity">"</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-3 sm:gap-4 max-w-[90%] sm:max-w-[85%]",
              msg.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
            )}
          >
            <div className={cn(
              "w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-sm",
              msg.role === 'user' ? "bg-slate-100 dark:bg-dark-surface2 text-slate-600 dark:text-dark-text-muted" : "bg-indigo-600 text-white"
            )}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={cn(
              "p-4 sm:p-5 rounded-2xl text-sm sm:text-base leading-relaxed",
              msg.role === 'user' 
                ? "bg-indigo-600 text-white rounded-tr-none shadow-lg shadow-indigo-500/10" 
                : "bg-white dark:bg-dark-surface2 border border-border dark:border-dark-border text-slate-800 dark:text-dark-text rounded-tl-none shadow-sm"
            )}>
              <div className={cn("markdown-body", msg.role === 'user' && "text-white")}>
                <Markdown>{msg.content}</Markdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 sm:gap-4 mr-auto">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Loader2 size={16} className="animate-spin" />
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-dark-surface2 border border-border dark:border-dark-border shadow-sm">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6 border-t border-border dark:border-dark-border bg-surface dark:bg-dark-surface transition-colors duration-300">
        <div className="relative flex items-center max-w-3xl mx-auto w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a doubt..."
            className="w-full pl-6 pr-14 py-4 bg-slate-50 dark:bg-dark-surface2 border border-border dark:border-dark-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm sm:text-base dark:text-dark-text"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-indigo-500/20"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
