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
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[300px]">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-indigo-600" />
          <h3 className="font-bold text-slate-900 text-sm">Quick Flashcards</h3>
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
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
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 backface-hidden bg-indigo-50 rounded-2xl border border-indigo-100">
              <span className="text-[10px] font-bold text-indigo-400 uppercase mb-2">{currentCard.subject}</span>
              <p className="text-slate-800 font-medium text-lg">{currentCard.question}</p>
              <p className="text-[10px] text-indigo-400 mt-4 font-medium">Click to flip</p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 backface-hidden bg-indigo-600 rounded-2xl border border-indigo-500 text-white rotate-y-180">
              <span className="text-[10px] font-bold text-indigo-200 uppercase mb-2">Answer</span>
              <p className="text-white font-bold text-xl">{currentCard.answer}</p>
              <p className="text-[10px] text-indigo-200 mt-4 font-medium">Click to flip back</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="p-4 border-t border-slate-100 flex items-center justify-between">
        <button onClick={prevCard} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => setIsFlipped(!isFlipped)} className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-700">
          <RotateCcw size={14} />
          Flip Card
        </button>
        <button onClick={nextCard} className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
