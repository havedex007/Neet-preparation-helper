/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Sidebar } from './components/Sidebar';
import { NotesViewer } from './components/NotesViewer';
import { AIDoubtSolver } from './components/AIDoubtSolver';
import { Flashcards } from './components/Flashcards';
import { NEET_NOTES } from './data/notes';
import { cn } from './utils/cn';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Bell, 
  User, 
  TrendingUp, 
  Calendar, 
  Award,
  BookOpen,
  MessageSquare,
  Sparkles,
  Menu,
  X,
  Sun,
  Moon,
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  GraduationCap,
  AlertCircle
} from 'lucide-react';

import { calculateMetrics, getPriorityBadgeClass, getPriorityColor } from './services/intelligence';

export default function App() {
  const [activeSubject, setActiveSubject] = useState('biology');
  const [activeClass, setActiveClass] = useState<'class11' | 'class12'>('class11');
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [showSolver, setShowSolver] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Helper to get all chapters sorted by priority
  const allChapters = useMemo(() => {
    return Object.values(NEET_NOTES)
      .flatMap(s => [...s.class11, ...s.class12])
      .map(c => ({ ...c, metrics: calculateMetrics(c) }))
      .sort((a, b) => b.metrics.priorityScore - a.metrics.priorityScore);
  }, []);

  const highPriorityChapters = allChapters.filter(c => c.metrics.priorityLevel === 'High').slice(0, 3);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('neet_dark_mode');
    return saved ? JSON.parse(saved) : false;
  });
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('neet_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('neet_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const next = prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id];
      localStorage.setItem('neet_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const currentSubject = NEET_NOTES[activeSubject];
  const activeChapter = activeChapterId 
    ? Object.values(NEET_NOTES).flatMap(s => [...s.class11, ...s.class12]).find(c => c.id === activeChapterId)
    : null;

  return (
    <div className="flex h-screen bg-bg dark:bg-dark-bg overflow-hidden transition-colors duration-300">
      <Sidebar 
        activeSubject={activeSubject}
        activeClass={activeClass}
        activeChapterId={activeChapterId}
        bookmarks={bookmarks}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onSelectSubject={setActiveSubject}
        onSelectClass={setActiveClass}
        onSelectChapter={setActiveChapterId}
        onShowDashboard={() => setActiveChapterId(null)}
      />

      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-surface dark:bg-dark-surface border-b border-border dark:border-dark-border flex items-center justify-between px-4 lg:px-8 flex-shrink-0 z-30 transition-colors duration-300">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="relative w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search chapters, topics, formulas..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-dark-surface2 border border-border dark:border-dark-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:text-dark-text"
              />
            </div>
            <div className="sm:hidden font-bold text-slate-900 dark:text-dark-text truncate">
              {!activeChapterId ? 'Dashboard' : activeChapterId === 'exam-mode' ? 'Exam Mode' : activeChapterId === 'all-notes' ? 'Study Notes' : activeChapter?.title}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2 rounded-lg transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="p-2 text-slate-500 dark:text-dark-text-muted hover:bg-slate-50 dark:hover:bg-dark-surface2 rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-dark-surface" />
            </button>
            <div className="h-8 w-px bg-border dark:border-dark-border mx-1 sm:mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-900 dark:text-dark-text">Aman Sharma</p>
                <p className="text-[10px] text-slate-500 dark:text-dark-text-muted font-medium uppercase tracking-wider">NEET Aspirant</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border-2 border-white dark:border-dark-surface shadow-sm">
                <User size={18} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-bg dark:bg-dark-bg transition-colors duration-300">
          <AnimatePresence mode="wait">
            {!activeChapterId ? (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-8 space-y-8 max-w-7xl mx-auto w-full"
              >
                {/* Hero / Welcome */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-indigo-600 p-6 sm:p-12 text-white shadow-2xl shadow-indigo-200 dark:shadow-none">
                  <div className="relative z-10 max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">NEET 2025</span>
                      <span className="flex items-center gap-1 px-3 py-1 bg-orange-500 rounded-full text-[10px] font-bold uppercase tracking-widest">🔥 7 Day Streak</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4 leading-tight">Welcome back, Champ! 👋</h2>
                    <p className="text-indigo-100 text-sm sm:text-xl mb-8 leading-relaxed opacity-90">
                      You're on a roll. Keep revising daily to ace NEET 2025. Today's focus: Cell Biology & Optics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => setActiveChapterId(currentSubject[activeClass][0].id)}
                        className="px-8 py-4 bg-white text-indigo-600 rounded-2xl font-bold shadow-xl hover:bg-indigo-50 transition-all text-sm sm:text-base active:scale-95"
                      >
                        Resume Learning
                      </button>
                      <button 
                        onClick={() => setShowSolver(true)}
                        className="px-8 py-4 bg-indigo-500/30 backdrop-blur-md text-white rounded-2xl font-bold border border-white/20 hover:bg-indigo-500/50 transition-all flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
                      >
                        <Sparkles size={20} />
                        Ask AI Doubt
                      </button>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-[-20%] right-[-10%] w-64 sm:w-96 h-64 sm:h-96 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-[-20%] right-[10%] w-48 sm:w-64 h-48 sm:h-64 bg-indigo-400/20 rounded-full blur-2xl" />
                  <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block opacity-20">
                    <GraduationCap size={240} />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { label: 'Accuracy', value: '84%', icon: TrendingUp, color: 'emerald' },
                    { label: 'Chapters', value: '180+', icon: BookOpen, color: 'blue' },
                    { label: 'Streak', value: '7d', icon: Calendar, color: 'orange' },
                    { label: 'Rank', value: '#1,240', icon: Award, color: 'purple' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-surface dark:bg-dark-surface p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-border dark:border-dark-border shadow-sm flex items-center gap-3 sm:gap-4 transition-colors duration-300">
                      <div className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0",
                        `bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 dark:text-${stat.color}-400`
                      )}>
                        <stat.icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-dark-text-muted uppercase tracking-wider truncate">{stat.label}</p>
                        <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-dark-text">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* High Priority Chapters */}
                {highPriorityChapters.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text font-serif flex items-center gap-2">
                        <AlertCircle className="text-red-500" size={20} />
                        High Priority Revision
                      </h3>
                      <button 
                        onClick={() => setActiveChapterId('all-notes')}
                        className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        View All
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {highPriorityChapters.map((chapter) => (
                        <div 
                          key={chapter.id}
                          onClick={() => setActiveChapterId(chapter.id)}
                          className="group bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl p-6 cursor-pointer hover:border-red-500 dark:hover:border-red-500 transition-all hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 relative overflow-hidden"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <div className={cn(
                              "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest border",
                              getPriorityBadgeClass(chapter.metrics.priorityLevel)
                            )}>
                              {chapter.metrics.priorityLevel}
                            </div>
                            <span className="text-xs font-bold text-slate-400">Score: {chapter.metrics.priorityScore}</span>
                          </div>
                          <h4 className="font-bold text-slate-900 dark:text-dark-text mb-1 group-hover:text-red-600 transition-colors">{chapter.title}</h4>
                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 dark:text-dark-text-muted uppercase font-bold">Accuracy</span>
                              <span className="text-sm font-bold text-slate-900 dark:text-dark-text">{chapter.metrics.accuracy.toFixed(0)}%</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[10px] text-slate-500 dark:text-dark-text-muted uppercase font-bold">PYQs</span>
                              <span className="text-sm font-bold text-slate-900 dark:text-dark-text">{chapter.pyqWeight || 0}</span>
                            </div>
                          </div>
                          <button className="w-full mt-6 py-2 bg-red-500 text-white rounded-xl text-xs font-bold hover:bg-red-600 transition-all active:scale-95">
                            Revise Now
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Access Grid */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-6 font-serif">Quick Access</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: 'Continue Reading', desc: 'Cell Structure & Function', icon: '📖', tag: 'Biology', color: 'emerald', action: () => setActiveChapterId('p12-1') },
                      { title: 'AI Doubt Solver', desc: 'Ask anything instantly', icon: '🤖', tag: 'AI Powered', color: 'blue', action: () => setShowSolver(true) },
                      { title: 'Daily Quiz', desc: '10 questions for today', icon: '🎯', tag: 'Practice', color: 'orange', action: () => setActiveChapterId('exam-mode') },
                      { title: 'Flashcards', desc: 'Quick-fire revision', icon: '⚡', tag: 'Biology', color: 'emerald', action: () => setActiveChapterId('flashcards') },
                      { title: 'Formula Sheets', desc: 'All formulas at a glance', icon: '🔬', tag: 'Reference', color: 'blue', action: () => setActiveChapterId('all-notes') },
                      { title: 'My Progress', desc: 'Track your journey', icon: '📈', tag: 'Analytics', color: 'purple', action: () => setActiveChapterId('exam-mode') },
                    ].map((card, i) => (
                      <div 
                        key={i} 
                        onClick={card.action}
                        className="group bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl p-6 cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 relative overflow-hidden"
                      >
                        <div className="text-3xl mb-4">{card.icon}</div>
                        <h3 className="font-bold text-slate-900 dark:text-dark-text mb-1">{card.title}</h3>
                        <p className="text-xs text-slate-500 dark:text-dark-text-muted mb-4">{card.desc}</p>
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                          `bg-${card.color}-50 dark:bg-${card.color}-900/20 text-${card.color}-600 dark:text-${card.color}-400`
                        )}>
                          {card.tag}
                        </span>
                        <div className={cn(
                          "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-transparent group-hover:from-indigo-500 transition-all duration-500",
                          `group-hover:to-${card.color}-500`
                        )} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Activity / Weak Areas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-surface dark:bg-dark-surface rounded-3xl border border-border dark:border-dark-border p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text flex items-center gap-2">
                        <Target className="text-red-500" size={20} />
                        Weak Areas
                      </h3>
                      <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Full Analysis</button>
                    </div>
                    <div className="space-y-4">
                      {[
                        { topic: 'Organic Chemistry', accuracy: 42, color: 'red' },
                        { topic: 'Modern Physics', accuracy: 58, color: 'orange' },
                        { topic: 'Genetics', accuracy: 61, color: 'yellow' },
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium text-slate-700 dark:text-dark-text">{item.topic}</span>
                            <span className={cn("font-bold", `text-${item.color}-500`)}>{item.accuracy}%</span>
                          </div>
                          <div className="h-2 bg-slate-100 dark:bg-dark-surface2 rounded-full overflow-hidden">
                            <div 
                              className={cn("h-full rounded-full transition-all duration-1000", `bg-${item.color}-500`)} 
                              style={{ width: `${item.accuracy}%` }} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-surface dark:bg-dark-surface rounded-3xl border border-border dark:border-dark-border p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text flex items-center gap-2">
                        <BarChart3 className="text-indigo-500" size={20} />
                        Subject Progress
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Biology', value: 68, color: 'emerald' },
                        { label: 'Physics', value: 41, color: 'blue' },
                        { label: 'Chemistry', value: 55, color: 'orange' },
                      ].map((sub, i) => (
                        <div key={i} className="text-center space-y-3">
                          <div className="relative inline-flex items-center justify-center">
                            <svg className="w-20 h-20 transform -rotate-90">
                              <circle cx="40" cy="40" r="34" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-slate-100 dark:text-dark-surface2" />
                              <circle 
                                cx="40" 
                                cy="40" 
                                r="34" 
                                stroke="currentColor" 
                                strokeWidth="6" 
                                fill="transparent" 
                                strokeDasharray={2 * Math.PI * 34}
                                strokeDashoffset={2 * Math.PI * 34 * (1 - sub.value / 100)}
                                className={cn("transition-all duration-1000", `text-${sub.color}-500`)} 
                              />
                            </svg>
                            <span className="absolute text-sm font-bold text-slate-900 dark:text-dark-text">{sub.value}%</span>
                          </div>
                          <p className="text-xs font-bold text-slate-500 dark:text-dark-text-muted uppercase tracking-widest">{sub.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : activeChapterId === 'flashcards' ? (
              <motion.div 
                key="flashcards"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 sm:p-8 max-w-2xl mx-auto w-full h-full flex flex-col justify-center"
              >
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-dark-text mb-2">Quick Revision</h2>
                  <p className="text-slate-500 dark:text-dark-text-muted">Master key concepts with active recall.</p>
                </div>
                <Flashcards />
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-surface dark:bg-dark-surface p-4 rounded-2xl border border-border dark:border-dark-border text-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-dark-text">12</p>
                    <p className="text-[10px] text-slate-500 dark:text-dark-text-muted uppercase font-bold tracking-widest">Mastered</p>
                  </div>
                  <div className="bg-surface dark:bg-dark-surface p-4 rounded-2xl border border-border dark:border-dark-border text-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-dark-text">5</p>
                    <p className="text-[10px] text-slate-500 dark:text-dark-text-muted uppercase font-bold tracking-widest">Learning</p>
                  </div>
                  <div className="bg-surface dark:bg-dark-surface p-4 rounded-2xl border border-border dark:border-dark-border text-center">
                    <p className="text-xl font-bold text-slate-900 dark:text-dark-text">24</p>
                    <p className="text-[10px] text-slate-500 dark:text-dark-text-muted uppercase font-bold tracking-widest">To Review</p>
                  </div>
                </div>
              </motion.div>
            ) : activeChapterId === 'exam-mode' ? (
              <motion.div 
                key="exam"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
                  <Zap size={48} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-dark-text">Full NEET Simulation</h2>
                <p className="text-slate-500 dark:text-dark-text-muted max-w-md mx-auto">
                  180 questions · 3 hours · +4/−1 marking · Biology + Physics + Chemistry. Ready to test your limits?
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl hover:bg-indigo-700 transition-all active:scale-95">
                    Start Full Exam
                  </button>
                  <button className="px-8 py-4 bg-surface dark:bg-dark-surface border border-border dark:border-dark-border text-slate-700 dark:text-dark-text rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-dark-surface2 transition-all active:scale-95">
                    Quick 45Q Test
                  </button>
                </div>
              </motion.div>
            ) : activeChapterId === 'all-notes' ? (
              <motion.div 
                key="all-notes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 space-y-8"
              >
                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-dark-text">Study Notes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(NEET_NOTES).map(([key, subject]) => (
                    <div key={key} className="bg-surface dark:bg-dark-surface border border-border dark:border-dark-border rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center text-white",
                          key === 'biology' ? "bg-emerald-500" : key === 'physics' ? "bg-blue-500" : "bg-orange-500"
                        )}>
                          <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text">{subject.name}</h3>
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest mb-2">Class 11</p>
                        {subject.class11.slice(0, 3).map(ch => {
                          const metrics = calculateMetrics(ch);
                          return (
                            <button 
                              key={ch.id} 
                              onClick={() => setActiveChapterId(ch.id)}
                              className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-dark-surface2 text-sm text-slate-600 dark:text-dark-text-muted transition-colors flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3 truncate">
                                <div className={cn("w-2 h-2 rounded-full flex-shrink-0", getPriorityColor(metrics.priorityLevel))} />
                                <span className="truncate">{ch.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold opacity-60">{metrics.accuracy.toFixed(0)}%</span>
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                              </div>
                            </button>
                          );
                        })}
                        <div className="h-px bg-border dark:border-dark-border my-4" />
                        <p className="text-xs font-bold text-slate-400 dark:text-dark-text-muted uppercase tracking-widest mb-2">Class 12</p>
                        {subject.class12.slice(0, 3).map(ch => {
                          const metrics = calculateMetrics(ch);
                          return (
                            <button 
                              key={ch.id} 
                              onClick={() => setActiveChapterId(ch.id)}
                              className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-dark-surface2 text-sm text-slate-600 dark:text-dark-text-muted transition-colors flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3 truncate">
                                <div className={cn("w-2 h-2 rounded-full flex-shrink-0", getPriorityColor(metrics.priorityLevel))} />
                                <span className="truncate">{ch.title}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold opacity-60">{metrics.accuracy.toFixed(0)}%</span>
                                <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="notes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full"
              >
                {activeChapter && (
                  <NotesViewer 
                    chapter={activeChapter} 
                    isBookmarked={bookmarks.includes(activeChapter.id)}
                    onToggleBookmark={() => toggleBookmark(activeChapter.id)}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Floating AI Solver Toggle */}
        <button 
          onClick={() => setShowSolver(!showSolver)}
          className={cn(
            "fixed bottom-8 right-8 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all z-50",
            showSolver ? "bg-slate-900 text-white rotate-90" : "bg-indigo-600 text-white hover:scale-110 active:scale-95"
          )}
        >
          {showSolver ? (
            <span className="text-2xl font-light">×</span>
          ) : (
            <Sparkles size={28} />
          )}
        </button>

        {/* AI Solver Overlay */}
        <AnimatePresence>
          {showSolver && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              className="fixed inset-y-0 right-0 w-full sm:w-[450px] z-[60] bg-surface dark:bg-dark-surface shadow-2xl flex flex-col border-l border-border dark:border-dark-border transition-colors duration-300"
            >
              <div className="flex items-center justify-between p-6 bg-indigo-600 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <span className="font-bold block">AI Doubt Solver</span>
                    <span className="text-[10px] opacity-70 uppercase tracking-widest font-medium">Expert NEET Tutor</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowSolver(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <AIDoubtSolver subject={activeSubject} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
