import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { Chapter } from '../data/notes';
import { Book, Clock, Share2, Bookmark, HelpCircle, FileText, Zap, Calculator } from 'lucide-react';
import { cn } from '../utils/cn';

interface NotesViewerProps {
  chapter: Chapter;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
}

export const NotesViewer: React.FC<NotesViewerProps> = ({ 
  chapter, 
  isBookmarked, 
  onToggleBookmark 
}) => {
  const [activeTab, setActiveTab] = useState<'notes' | 'questions' | 'formulas' | 'revision'>('notes');

  return (
    <div className="max-w-4xl mx-auto py-4 sm:py-8 px-4 sm:px-6">
      <div className="bg-surface dark:bg-dark-surface rounded-2xl sm:rounded-3xl shadow-sm border border-border dark:border-dark-border overflow-hidden transition-colors duration-300">
        <div className="p-6 sm:p-8 border-b border-border dark:border-dark-border bg-slate-50/50 dark:bg-dark-surface2/30">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} />
            <span>Study Notes</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-dark-text mb-4 leading-tight">
            {chapter.title}
          </h1>

          <p className="text-slate-600 dark:text-dark-text-muted text-xs sm:text-sm mb-6 italic leading-relaxed border-l-4 border-indigo-200 dark:border-indigo-900/50 pl-4">
            {chapter.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-500 dark:text-dark-text-muted text-[10px] sm:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock size={14} className="sm:w-4 sm:h-4" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500" />
                <span>High Yield Topic</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-dark-surface2 rounded-lg transition-colors text-slate-500 dark:text-dark-text-muted">
                <Share2 size={18} />
              </button>
              <button 
                onClick={onToggleBookmark}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  isBookmarked ? "text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30" : "text-slate-500 dark:text-dark-text-muted hover:bg-slate-100 dark:hover:bg-dark-surface2"
                )}
              >
                <Bookmark size={18} className={cn(isBookmarked && "fill-indigo-600 dark:fill-indigo-400")} />
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap gap-1 p-1 bg-slate-100 dark:bg-dark-surface2 rounded-xl w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('notes')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0",
                activeTab === 'notes' 
                  ? "bg-white dark:bg-dark-surface text-indigo-600 dark:text-indigo-400 shadow-sm" 
                  : "text-slate-500 dark:text-dark-text-muted hover:text-slate-700 dark:hover:text-dark-text"
              )}
            >
              <FileText size={16} />
              Notes
            </button>
            <button
              onClick={() => setActiveTab('revision')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0",
                activeTab === 'revision' 
                  ? "bg-white dark:bg-dark-surface text-indigo-600 dark:text-indigo-400 shadow-sm" 
                  : "text-slate-500 dark:text-dark-text-muted hover:text-slate-700 dark:hover:text-dark-text"
              )}
            >
              <Zap size={16} />
              Revision
            </button>
            {chapter.formulas && (
              <button
                onClick={() => setActiveTab('formulas')}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0",
                  activeTab === 'formulas' 
                    ? "bg-white dark:bg-dark-surface text-indigo-600 dark:text-indigo-400 shadow-sm" 
                    : "text-slate-500 dark:text-dark-text-muted hover:text-slate-700 dark:hover:text-dark-text"
                )}
              >
                <Calculator size={16} />
                Formulas
              </button>
            )}
            <button
              onClick={() => setActiveTab('questions')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0",
                activeTab === 'questions' 
                  ? "bg-white dark:bg-dark-surface text-indigo-600 dark:text-indigo-400 shadow-sm" 
                  : "text-slate-500 dark:text-dark-text-muted hover:text-slate-700 dark:hover:text-dark-text"
              )}
            >
              <HelpCircle size={16} />
              Practice
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-12">
          <div className="markdown-body prose prose-slate dark:prose-invert max-w-none text-xs sm:text-base">
            {activeTab === 'notes' && (
              <Markdown>{chapter.content}</Markdown>
            )}
            {activeTab === 'revision' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text mb-4">Key Takeaways</h3>
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-6 rounded-r-2xl">
                  <ul className="space-y-3 list-none ml-0">
                    {chapter.content.split('\n').filter(line => line.startsWith('- **') || line.startsWith('> **')).map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-indigo-500 font-bold">•</span>
                        <Markdown>{point.replace(/^[->]\s*/, '')}</Markdown>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeTab === 'formulas' && chapter.formulas && (
              <div className="bg-slate-900 dark:bg-dark-surface2 text-slate-100 p-8 rounded-3xl font-mono text-sm leading-relaxed overflow-x-auto">
                <Markdown>{chapter.formulas}</Markdown>
              </div>
            )}
            {activeTab === 'questions' && (
              <div className="space-y-6">
                {chapter.questions ? (
                  <Markdown>{chapter.questions}</Markdown>
                ) : (
                  <div className="text-center py-12 text-slate-500 dark:text-dark-text-muted">
                    <HelpCircle size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Practice questions for this chapter are coming soon!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8 bg-slate-50 dark:bg-dark-surface2/30 border-t border-border dark:border-dark-border flex items-center justify-between">
          <div className="text-sm text-slate-500 dark:text-dark-text-muted">
            Was this helpful?
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface text-sm font-medium hover:bg-slate-50 dark:hover:bg-dark-surface2 transition-colors dark:text-dark-text">
              Yes, thanks!
            </button>
            <button className="px-4 py-2 rounded-lg border border-border dark:border-dark-border bg-surface dark:bg-dark-surface text-sm font-medium hover:bg-slate-50 dark:hover:bg-dark-surface2 transition-colors dark:text-dark-text">
              Not really
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
