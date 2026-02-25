import React from 'react';
import { BookOpen, GraduationCap, ChevronRight, Layout } from 'lucide-react';
import { NEET_NOTES, Subject, Chapter } from '../data/notes';
import { cn } from '../utils/cn';

interface SidebarProps {
  activeSubject: string;
  activeClass: 'class11' | 'class12';
  activeChapterId: string | null;
  onSelectSubject: (subject: string) => void;
  onSelectClass: (cls: 'class11' | 'class12') => void;
  onSelectChapter: (chapterId: string) => void;
  onShowDashboard: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSubject,
  activeClass,
  activeChapterId,
  onSelectSubject,
  onSelectClass,
  onSelectChapter,
  onShowDashboard
}) => {
  const currentSubject = NEET_NOTES[activeSubject];

  return (
    <div className="w-72 h-full bg-white border-r border-slate-200 flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3 text-indigo-600 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="font-bold text-slate-900 text-lg leading-tight">NEET Prep</h1>
            <p className="text-xs text-slate-500 font-medium">MASTER CLASS</p>
          </div>
        </div>

        <button
          onClick={onShowDashboard}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium",
            !activeChapterId ? "bg-indigo-600 text-white shadow-md shadow-indigo-200" : "text-slate-600 hover:bg-slate-50"
          )}
        >
          <Layout size={18} />
          Dashboard
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Subjects */}
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">Subjects</h3>
          <div className="space-y-1">
            {Object.entries(NEET_NOTES).map(([key, subject]) => (
              <button
                key={key}
                onClick={() => onSelectSubject(key)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors",
                  activeSubject === key ? "bg-slate-100 text-indigo-600 font-semibold" : "text-slate-600 hover:bg-slate-50"
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

        {/* Classes */}
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">Level</h3>
          <div className="flex gap-2 px-2">
            {(['class11', 'class12'] as const).map((cls) => (
              <button
                key={cls}
                onClick={() => onSelectClass(cls)}
                className={cn(
                  "flex-1 py-2 rounded-lg text-xs font-bold border transition-all",
                  activeClass === cls 
                    ? "bg-white border-indigo-600 text-indigo-600 shadow-sm" 
                    : "bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100"
                )}
              >
                {cls === 'class11' ? 'Class 11' : 'Class 12'}
              </button>
            ))}
          </div>
        </div>

        {/* Chapters */}
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-3">Chapters</h3>
          <div className="space-y-1">
            {currentSubject[activeClass].map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className={cn(
                  "w-full flex items-start gap-3 px-4 py-2.5 rounded-lg text-sm text-left transition-colors",
                  activeChapterId === chapter.id 
                    ? "bg-indigo-50 text-indigo-700 font-medium" 
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                <BookOpen size={16} className="mt-0.5 flex-shrink-0 opacity-60" />
                <span>{chapter.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-900 rounded-xl p-4 text-white">
          <p className="text-xs font-medium text-slate-400 mb-1">Your Progress</p>
          <div className="flex items-end justify-between mb-2">
            <span className="text-xl font-bold">24%</span>
            <span className="text-[10px] text-slate-400">12/50 Chapters</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-[24%] h-full bg-indigo-500 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
