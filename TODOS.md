# TODOS

## Remaining Indonesian Translations

1,309 topics (800,280 characters) need proper LLM translation.
Dictionary-based approaches produce unusable mixed English/Indonesian text.

| Subject | Topics | Characters | Status |
|---|---|---|---|
| English | 259 | 173,040 | Pending |
| Mathematics | 503 | 263,952 | Pending |
| Science | 547 | 363,288 | Pending |

### Completed

| Subject | Topics | Status |
|---|---|---|
| Computing | 21 | Done |
| History | 90 | Done |
| Learning to Learn | 18 | Done |
| Life Skills | 37 | Done |
| Personal & Social Development | 88 | Done |

### Notes

- Translations live in `src/data/content-translations.ts`
- `getTranslatedTopic()` falls back to English when no translation exists
- Each entry needs: name, description, evidence[], assessmentPrompt (with `{{name}}` placeholder)
- Use an external translation API (Google Translate, DeepL) or generate topic-by-topic
