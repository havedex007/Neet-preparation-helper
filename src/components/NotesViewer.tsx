import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { Chapter } from '../data/notes';
import { Book, Clock, Share2, Bookmark, HelpCircle, FileText } from 'lucide-react';
import { cn } from '../utils/cn';

interface NotesViewerProps {
  chapter: Chapter;
}

export const NotesViewer: React.FC<NotesViewerProps> = ({ chapter }) => {
  const [activeTab, setActiveTab] = useState<'notes' | 'questions'>('notes');

  return (
    <div className="max-w-4xl mx-auto py-8 px-6">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
            <Book size={14} />
            <span>Study Notes</span>
          </div>
          <h1 className="text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            {chapter.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6 text-slate-500 text-sm">
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
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-500">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

          <div className="flex gap-1 p-1 bg-slate-100 rounded-xl w-fit">
            <button
              onClick={() => setActiveTab('notes')}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'notes' 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              <FileText size={16} />
              Notes
            </button>
            <button
              onClick={() => setActiveTab('questions')}
              className={cn(
                "flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === 'questions' 
                  ? "bg-white text-indigo-600 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              <HelpCircle size={16} />
              Practice Questions
            </button>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="markdown-body prose prose-slate max-w-none">
            {activeTab === 'notes' ? (
              <Markdown>{chapter.content}</Markdown>
            ) : (
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
