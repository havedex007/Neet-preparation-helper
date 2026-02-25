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
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} />
            <span>Study Notes</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
            {chapter.title}
          </h1>

          <p className="text-slate-600 text-sm mb-6 italic leading-relaxed border-l-4 border-indigo-200 pl-4">
            {chapter.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>High Yield Topic</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
                <Share2 size={18} />
              </button>
              <button 
                onClick={onToggleBookmark}
                className={cn(
                  "p-2 rounded-lg transition-all",
                  isBookmarked ? "text-indigo-600 bg-indigo-50" : "text-slate-500 hover:bg-slate-100"
                )}
              >
                <Bookmark size={18} className={cn(isBookmarked && "fill-indigo-600")} />
              </button>
            </div>
          </div>

          <div className="flex flex-nowrap gap-1 p-1 bg-slate-100 rounded-xl w-full overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('notes')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all flex-shrink-0",
                activeTab === 'notes' 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
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
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
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
                    ? "bg-white text-indigo-600 shadow-sm" 
                    : "text-slate-500 hover:text-slate-700"
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
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              <HelpCircle size={16} />
              Practice
            </button>
          </div>
        </div>
        
        <div className="p-6 sm:p-12">
          <div className="markdown-body prose prose-slate max-w-none text-sm sm:text-base">
            {activeTab === 'notes' && (
              <Markdown>{chapter.content}</Markdown>
            )}
            {activeTab === 'revision' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h3>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-2xl">
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
              <div className="bg-slate-900 text-slate-100 p-8 rounded-3xl font-mono text-sm leading-relaxed overflow-x-auto">
                <Markdown>{chapter.formulas}</Markdown>
              </div>
            )}
            {activeTab === 'questions' && (
              <div className="space-y-6">
                {chapter.questions ? (
                  <Markdown>{chapter.questions}</Markdown>
                ) : (
                  <div className="text-center py-12 text-slate-500">
                    <HelpCircle size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Practice questions for this chapter are coming soon!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Was this helpful?
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 transition-colors">
              Yes, thanks!
            </button>
            <button className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium hover:bg-slate-50 transition-colors">
              Not really
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
