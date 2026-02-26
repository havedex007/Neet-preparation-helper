import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Flashcard {
  question: string;
  answer: string;
  subject: string;
}

const FLASHCARDS: Flashcard[] = [
  { question: "What is the powerhouse of the cell?", answer: "Mitochondria", subject: "Biology" },
  { question: "What is the SI unit of Force?", answer: "Newton (N)", subject: "Physics" },
  { question: "What is the value of Avogadro's number?", answer: "6.022 × 10²³", subject: "Chemistry" },
  { question: "Which hormone is known as the 'emergency hormone'?", answer: "Adrenaline", subject: "Biology" },
  { question: "What is the formula for Centripetal Force?", answer: "F = mv²/r", subject: "Physics" },
  { question: "What is the pH of a neutral solution?", answer: "7", subject: "Chemistry" },
];

export const Flashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 150);
  };

  const currentCard = FLASHCARDS[currentIndex];

  return (
    <div className="bg-surface dark:bg-dark-surface rounded-3xl border border-border dark:border-dark-border shadow-sm overflow-hidden flex flex-col h-[320px] transition-colors duration-300">
      <div className="p-4 border-b border-border dark:border-dark-border flex items-center justify-between bg-slate-50/50 dark:bg-dark-surface2/30">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-slate-900 dark:text-dark-text text-sm">Quick Flashcards</h3>
        </div>
        <span className="text-[10px] font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest">
          {currentIndex + 1} / {FLASHCARDS.length}
        </span>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center justify-center relative perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex + (isFlipped ? '-flipped' : '')}
            initial={{ opacity: 0, scale: 0.9, rotateY: isFlipped ? 180 : 0 }}
            animate={{ opacity: 1, scale: 1, rotateY: isFlipped ? 180 : 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full h-full cursor-pointer preserve-3d relative"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 backface-hidden bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-900/30 shadow-inner">
              <span className="text-[10px] font-bold text-indigo-400 dark:text-indigo-300 uppercase mb-3 tracking-widest">{currentCard.subject}</span>
              <p className="text-slate-800 dark:text-dark-text font-bold text-lg sm:text-xl leading-tight">{currentCard.question}</p>
              <p className="text-[10px] text-indigo-400 dark:text-indigo-300 mt-6 font-medium uppercase tracking-widest opacity-60">Click to reveal</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 backface-hidden bg-indigo-600 dark:bg-indigo-500 rounded-2xl border border-indigo-500 dark:border-indigo-400 text-white rotate-y-180 shadow-xl shadow-indigo-500/20">
              <span className="text-[10px] font-bold text-indigo-200 uppercase mb-3 tracking-widest">Answer</span>
              <p className="text-white font-bold text-xl sm:text-2xl leading-tight">{currentCard.answer}</p>
              <p className="text-[10px] text-indigo-200 mt-6 font-medium uppercase tracking-widest opacity-60">Click to flip back</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-border dark:border-dark-border flex items-center justify-between bg-slate-50/30 dark:bg-dark-surface2/10">
        <button onClick={prevCard} className="p-2 hover:bg-slate-100 dark:hover:bg-dark-surface2 rounded-xl transition-colors text-slate-500 dark:text-dark-text-muted">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => setIsFlipped(!isFlipped)} className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
          <RotateCcw size={14} />
          Flip Card
        </button>
        <button onClick={nextCard} className="p-2 hover:bg-slate-100 dark:hover:bg-dark-surface2 rounded-xl transition-colors text-slate-500 dark:text-dark-text-muted">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
