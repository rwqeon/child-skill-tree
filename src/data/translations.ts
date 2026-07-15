export type Language = 'id' | 'en';

export const translations = {
  id: {
    // App
    appTitle: '🌳 Skill Tree Tracker',
    noName: 'Nama belum diisi',

    // Child Profile
    childName: 'Nama Anak',
    childAge: 'Usia',
    namePlaceholder: 'Masukkan nama...',

    // Subject Tabs
    all: 'Semua',

    // Topic States
    locked: 'Terkunci',
    unlocked: 'Tidak Terkunci',
    achieved: 'Tercapai',

    // Topic Types
    conceptual: 'Konseptual',
    procedural: 'Prosedural',
    representational: 'Representasional',
    language: 'Bahasa',
    meta: 'Meta',

    // Modal
    description: 'Deskripsi',
    masteryEvidence: 'Bukti Penguasaan',
    assessmentPrompt: 'Pertanyaan Penilaian',
    prerequisites: 'Prasyarat',
    unlocksNext: 'Membuka Selanjutnya',
    markAsAchieved: '✓ Tandai Tercapai',
    prerequisitesNotMet: '🔒 Prasyarat belum terpenuhi',

    // Age display
    ageRange: 'Usia {start}-{end}',

    // Progress
    progress: '{done}/{total} ({percent}%)',

    // Language toggle
    langLabel: 'Bahasa',
  },
  en: {
    // App
    appTitle: '🌳 Skill Tree Tracker',
    noName: 'No name',

    // Child Profile
    childName: "Child's Name",
    childAge: 'Age',
    namePlaceholder: 'Enter name...',

    // Subject Tabs
    all: 'All',

    // Topic States
    locked: 'Locked',
    unlocked: 'Unlocked',
    achieved: 'Achieved',

    // Topic Types
    conceptual: 'Conceptual',
    procedural: 'Procedural',
    representational: 'Representational',
    language: 'Language',
    meta: 'Meta',

    // Modal
    description: 'Description',
    masteryEvidence: 'Mastery Evidence',
    assessmentPrompt: 'Assessment Prompt',
    prerequisites: 'Prerequisites',
    unlocksNext: 'Unlocks Next',
    markAsAchieved: '✓ Mark as Achieved',
    prerequisitesNotMet: '🔒 Prerequisites not met',

    // Age display
    ageRange: 'Age {start}-{end}',

    // Progress
    progress: '{done}/{total} ({percent}%)',

    // Language toggle
    langLabel: 'Language',
  },
} as const;

export type TranslationKey = keyof typeof translations.id;
