import { useState, useCallback } from 'react';
import { Language, translations, TranslationKey } from '../data/translations';

const STORAGE_KEY = 'skill-tree-language';

function loadLanguage(): Language {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === 'en' || raw === 'id') return raw;
  } catch {}
  return 'id';
}

function saveLanguage(lang: Language) {
  localStorage.setItem(STORAGE_KEY, lang);
}

export function useLanguage() {
  const [lang, setLang] = useState<Language>(loadLanguage);

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === 'id' ? 'en' : 'id';
      saveLanguage(next);
      return next;
    });
  }, []);

  const t = useCallback((key: TranslationKey, params?: Record<string, string | number>): string => {
    const translationsObj = translations[lang];
    let text = (translationsObj as Record<string, string>)[key];
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  }, [lang]);

  return { lang, toggleLanguage, t };
}
