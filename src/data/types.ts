export interface Topic {
  id: string;
  type: 'CONCEPTUAL' | 'PROCEDURAL' | 'REPRESENTATIONAL' | 'LANGUAGE' | 'META';
  subject: string;
  domain: string;
  name: string;
  description: string;
  ageRangeStart: number;
  ageRangeEnd: number;
  centrality: number;
  evidence: string[];
  assessmentPrompt: string;
  standards: string[];
}

export interface Dependency {
  topicId: string;
  prerequisiteId: string;
  strength: 'hard' | 'soft';
  reason: string;
}

export interface DomainGroup {
  domain: string;
  topics: Topic[];
}

export interface SubjectGroup {
  subject: string;
  domains: DomainGroup[];
}

export interface ProgressState {
  childName: string;
  childAge: number;
  achieved: Record<string, boolean>;
}

export const SUBJECT_COLORS: Record<string, string> = {
  'Science': '#22c55e',
  'Mathematics': '#3b82f6',
  'English': '#a855f7',
  'History': '#f59e0b',
  'Personal & Social Development': '#f43f5e',
  'Life Skills': '#14b8a6',
  'Computing': '#06b6d4',
  'Learning to Learn': '#6366f1',
};

export const TYPE_ICONS: Record<string, string> = {
  'CONCEPTUAL': '💡',
  'PROCEDURAL': '🔧',
  'REPRESENTATIONAL': '🔍',
  'LANGUAGE': '📝',
  'META': '🧠',
};
