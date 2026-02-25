/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  X
} from 'lucide-react';

export default function App() {
  const [activeSubject, setActiveSubject] = useState('biology');
  const [activeClass, setActiveClass] = useState<'class11' | 'class12'>('class11');
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [showSolver, setShowSolver] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('neet_bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

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
    <div className="flex h-screen bg-[#F8F9FA] overflow-hidden">
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
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="relative w-full hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search topics..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div className="sm:hidden font-bold text-slate-900 truncate">
              {!activeChapterId ? 'Dashboard' : activeChapter?.title}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-8 w-px bg-slate-200 mx-1 sm:mx-2" />
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-900">Aman Sharma</p>
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">NEET Aspirant</p>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border-2 border-white shadow-sm">
                <User size={18} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {!activeChapterId ? (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 space-y-8"
              >
                {/* Hero / Welcome */}
                <div className="relative overflow-hidden rounded-[2rem] bg-indigo-600 p-10 text-white shadow-2xl shadow-indigo-200">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-serif font-bold mb-4">Ready to ace your NEET exam?</h2>
                    <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                      Access comprehensive notes, solve your doubts instantly with AI, and track your progress daily.
                    </p>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => setActiveChapterId(currentSubject[activeClass][0].id)}
                        className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition-all"
                      >
                        Resume Learning
                      </button>
                      <button 
                        onClick={() => setShowSolver(true)}
                        className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-bold border border-indigo-400 hover:bg-indigo-400 transition-all flex items-center gap-2"
                      >
                        <Sparkles size={18} />
                        Ask AI Doubt
                      </button>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-[-20%] right-[10%] w-64 h-64 bg-indigo-400/20 rounded-full blur-2xl" />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Accuracy</p>
                      <p className="text-2xl font-bold text-slate-900">84%</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Study Streak</p>
                      <p className="text-2xl font-bold text-slate-900">12 Days</p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Rank</p>
                      <p className="text-2xl font-bold text-slate-900">#1,240</p>
                    </div>
                  </div>
                </div>

                {/* Quick Access */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">Continue Reading</h3>
                      <button className="text-sm font-bold text-indigo-600 hover:underline">View All</button>
                    </div>
                    <div className="space-y-4">
                      {Object.values(NEET_NOTES).map((subject) => (
                        <div 
                          key={subject.name}
                          className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-all cursor-pointer group"
                          onClick={() => {
                            setActiveSubject(subject.name.toLowerCase());
                            setActiveChapterId(subject.class11[0].id);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center text-white",
                                subject.name === 'Biology' ? "bg-emerald-500" : subject.name === 'Physics' ? "bg-blue-500" : "bg-orange-500"
                              )}>
                                <BookOpen size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-900">{subject.name}</h4>
                                <p className="text-xs text-slate-500">{subject.class11[0].title}</p>
                              </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all">
                              <ChevronRight size={18} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-slate-900">Recent Doubts</h3>
                      <button className="text-sm font-bold text-indigo-600 hover:underline">History</button>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                            <MessageSquare size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">Ask AI anything</p>
                            <p className="text-xs text-slate-500">Instant expert explanations</p>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="p-4 bg-slate-50 rounded-2xl text-sm text-slate-600 italic">
                            "What is the difference between Mitosis and Meiosis?"
                          </div>
                          <button 
                            onClick={() => setShowSolver(true)}
                            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-md hover:bg-indigo-700 transition-all"
                          >
                            New Doubt
                          </button>
                        </div>
                      </div>
                      
                      <Flashcards />
                    </div>
                  </section>
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
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] z-[60] bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 bg-indigo-600 text-white">
                <div className="flex items-center gap-2">
                  <Sparkles size={20} />
                  <span className="font-bold">AI Doubt Solver</span>
                </div>
                <button 
                  onClick={() => setShowSolver(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
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

function ChevronRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
