import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  GraduationCap, 
  ChevronRight, 
  Layout, 
  Bookmark, 
  X, 
  Beaker, 
  Zap,
  Sparkles
} from 'lucide-react';
import { NEET_NOTES, Subject, Chapter } from '../data/notes';
import { cn } from '../utils/cn';

interface SidebarProps {
  activeSubject: string;
  activeClass: 'class11' | 'class12';
  activeChapterId: string | null;
  bookmarks: string[];
  isOpen: boolean;
  onClose: () => void;
  onSelectSubject: (subject: string) => void;
  onSelectClass: (cls: 'class11' | 'class12') => void;
  onSelectChapter: (chapterId: string) => void;
  onShowDashboard: () => void;
}

import { calculateMetrics, getPriorityColor } from '../services/intelligence';

export const Sidebar: React.FC<SidebarProps> = ({
  activeSubject,
  activeClass,
  activeChapterId,
  bookmarks,
  isOpen,
  onClose,
  onSelectSubject,
  onSelectClass,
  onSelectChapter,
  onShowDashboard
}) => {
  const currentSubject = NEET_NOTES[activeSubject];
  const bookmarkedChapters = Object.values(NEET_NOTES).flatMap(s => [...s.class11, ...s.class12]).filter(c => bookmarks.includes(c.id));

  const handleChapterSelect = (id: string) => {
    onSelectChapter(id);
    onClose();
  };

  const handleDashboardSelect = () => {
    onShowDashboard();
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <div className={cn(
        "fixed inset-y-0 left-0 w-72 bg-surface dark:bg-dark-surface border-r border-border dark:border-dark-border flex flex-col z-50 transition-transform duration-300 lg:relative lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-border dark:border-dark-border flex items-center justify-between">
          <div className="flex items-center gap-3 text-indigo-600">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 dark:text-dark-text text-lg leading-tight font-serif">NEET Prep Pro</h1>
              <p className="text-[10px] text-slate-500 dark:text-dark-text-muted font-medium uppercase tracking-widest">Study Smarter</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:text-slate-600 dark:hover:text-dark-text">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6 no-scrollbar">
          {/* Main Nav */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest px-4 mb-3">Main</h3>
            <div className="space-y-1">
              <button
                onClick={handleDashboardSelect}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-medium",
                  !activeChapterId ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none" : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                )}
              >
                <Layout size={18} />
                Dashboard
              </button>
              <button
                onClick={() => { onSelectChapter('all-notes'); onClose(); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-medium",
                  activeChapterId === 'all-notes' ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none" : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                )}
              >
                <BookOpen size={18} />
                Study Notes
              </button>
              <button
                onClick={() => { onSelectChapter('exam-mode'); onClose(); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-medium",
                  activeChapterId === 'exam-mode' ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none" : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                )}
              >
                <Zap size={18} />
                Exam Mode
              </button>
              <button
                onClick={() => { onSelectChapter('flashcards'); onClose(); }}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-medium",
                  activeChapterId === 'flashcards' ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none" : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                )}
              >
                <Sparkles size={18} />
                Flashcards
              </button>
            </div>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest px-4 mb-3">Subjects</h3>
            <div className="space-y-1">
              {Object.entries(NEET_NOTES).map(([key, subject]) => (
                <button
                  key={key}
                  onClick={() => onSelectSubject(key)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors",
                    activeSubject === key ? "bg-slate-100 dark:bg-dark-surface2 text-indigo-600 dark:text-indigo-400 font-semibold" : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      key === 'biology' ? "bg-emerald-500" : key === 'physics' ? "bg-blue-500" : "bg-orange-500"
                    )} />
                    {subject.name}
                  </div>
                  {activeSubject === key && <ChevronRight size={14} />}
                </button>
              ))}
            </div>
          </div>

          {/* Level */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest px-4 mb-3">Level</h3>
            <div className="flex gap-2 px-2">
              {(['class11', 'class12'] as const).map((cls) => (
                <button
                  key={cls}
                  onClick={() => onSelectClass(cls)}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-xs font-bold border transition-all",
                    activeClass === cls 
                      ? "bg-white dark:bg-dark-surface border-indigo-600 text-indigo-600 dark:text-indigo-400 shadow-sm" 
                      : "bg-slate-50 dark:bg-dark-surface2 border-transparent text-slate-500 dark:text-dark-text-muted hover:bg-slate-100 dark:hover:bg-dark-surface"
                  )}
                >
                  {cls === 'class11' ? 'Class 11' : 'Class 12'}
                </button>
              ))}
            </div>
          </div>
          {/* Chapters */}
          <div>
            <h3 className="text-[10px] font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest px-4 mb-3">Chapters</h3>
            <div className="space-y-1">
              {currentSubject[activeClass].map((chapter) => {
                const metrics = calculateMetrics(chapter);
                return (
                  <button
                    key={chapter.id}
                    onClick={() => handleChapterSelect(chapter.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2 rounded-lg text-xs text-left transition-colors group",
                      activeChapterId === chapter.id 
                        ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 font-medium" 
                        : "text-slate-600 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2"
                    )}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", getPriorityColor(metrics.priorityLevel))} />
                      <span className="truncate">{chapter.title}</span>
                    </div>
                    {activeChapterId === chapter.id && <ChevronRight size={12} className="flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border dark:border-dark-border">
          <div className="bg-slate-900 dark:bg-dark-surface2 rounded-xl p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-orange-400">🔥</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">7 Day Streak</p>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-xl font-bold">24%</span>
              <span className="text-[10px] text-slate-400">12/50 Done</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-[24%] h-full bg-indigo-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
