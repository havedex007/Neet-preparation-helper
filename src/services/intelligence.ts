import { Chapter } from '../data/notes';

export interface ChapterStats {
  id: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  lastRevised: string;
}

export type PriorityLevel = 'High' | 'Medium' | 'Low';

export interface IntelligenceMetrics {
  accuracy: number;
  priorityScore: number;
  priorityLevel: PriorityLevel;
}

const STORAGE_KEY = 'neet_chapter_stats';

export const getChapterStats = (): Record<string, ChapterStats> => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : {};
};

export const saveChapterStats = (stats: Record<string, ChapterStats>) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
};

export const updateChapterProgress = (
  chapterId: string, 
  correct: number, 
  wrong: number
) => {
  const allStats = getChapterStats();
  const current = allStats[chapterId] || {
    id: chapterId,
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    lastRevised: new Date().toISOString().split('T')[0]
  };

  allStats[chapterId] = {
    ...current,
    totalQuestions: current.totalQuestions + correct + wrong,
    correctAnswers: current.correctAnswers + correct,
    wrongAnswers: current.wrongAnswers + wrong,
    lastRevised: new Date().toISOString().split('T')[0]
  };

  saveChapterStats(allStats);
};

export const markAsRevised = (chapterId: string) => {
  const allStats = getChapterStats();
  const current = allStats[chapterId] || {
    id: chapterId,
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    lastRevised: ''
  };

  allStats[chapterId] = {
    ...current,
    lastRevised: new Date().toISOString().split('T')[0]
  };

  saveChapterStats(allStats);
};

export const calculateMetrics = (chapter: Chapter): IntelligenceMetrics => {
  const allStats = getChapterStats();
  const stats = allStats[chapter.id] || {
    totalQuestions: chapter.totalQuestions || 0,
    correctAnswers: chapter.correctAnswers || 0,
    wrongAnswers: chapter.wrongAnswers || 0,
  };

  const total = stats.totalQuestions || 0;
  const correct = stats.correctAnswers || 0;
  const wrong = stats.wrongAnswers || 0;

  const accuracy = total > 0 ? (correct / total) * 100 : 0;
  
  // priorityScore = (pyqWeight * 2) + wrongAnswers + difficulty
  const pyqWeight = chapter.pyqWeight || 0;
  const difficulty = chapter.difficulty || 1;
  const priorityScore = (pyqWeight * 2) + wrong + difficulty;

  let priorityLevel: PriorityLevel = 'Low';
  if (priorityScore > 40) {
    priorityLevel = 'High';
  } else if (priorityScore >= 20) {
    priorityLevel = 'Medium';
  }

  return {
    accuracy,
    priorityScore,
    priorityLevel
  };
};

export const getPriorityColor = (level: PriorityLevel): string => {
  switch (level) {
    case 'High': return 'bg-red-500';
    case 'Medium': return 'bg-yellow-500';
    case 'Low': return 'bg-emerald-500';
  }
};

export const getPriorityBadgeClass = (level: PriorityLevel): string => {
  switch (level) {
    case 'High': return 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-900/30';
    case 'Medium': return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-100 dark:border-yellow-900/30';
    case 'Low': return 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30';
  }
};
