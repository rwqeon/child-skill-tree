# Skill Tree Tracker

A gaming-style skill tree app for tracking a child's learning progress based on Marble's open curriculum taxonomy.

## Features

- 1,590 topics across 8 subjects (Computing, English, History, Learning to Learn, Life Skills, Mathematics, Personal & Social Development, Science)
- 3,221 prerequisite edges with unlock propagation
- Dependency-based skill tree (root topics always unlocked, others unlock when prerequisites are met)
- Topics sorted by dependency level (basic → advanced)
- Checklist progress with localStorage persistence
- Prerequisites and "Unlocks Next" items are clickable to navigate between topics
- Indonesian/English language toggle (Indonesian is default)
- Child name inserted into assessment prompts
- Mobile-friendly responsive design (Tailwind CSS)

## Tech Stack

- React + Vite + TypeScript
- Tailwind CSS v4 + shadcn/ui
- No backend (client-side only, localStorage)

## Getting Started

```bash
nvm use 20
yarn install
yarn dev
```

## Data Files

| File | Description |
|---|---|
| `src/data/topics.ts` | 1,590 topics (English source) |
| `src/data/dependencies.ts` | 3,221 prerequisite edges |
| `src/data/content-translations.ts` | Indonesian translations |
| `src/data/translations.ts` | UI string translations |
| `src/data/types.ts` | TypeScript types, subject colors, type icons |
| `src/data/tree.ts` | `computeTopicLevels()` and `buildTree()` |

## Translation Status

| Subject | Status |
|---|---|
| Computing | ✅ Complete |
| English | ✅ Complete |
| History | ✅ Complete |
| Learning to Learn | ✅ Complete |
| Life Skills | ✅ Complete |
| Mathematics | ✅ Complete |
| Personal & Social Development | ✅ Complete |
| Science | ✅ Complete |

## Build

```bash
yarn build
```

Output in `dist/`.
