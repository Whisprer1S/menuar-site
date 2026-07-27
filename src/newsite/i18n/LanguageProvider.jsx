import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { translations, FALLBACK_LANGUAGE } from './translations.js';

const STORAGE_KEY = 'menuar-site-language';

// The three letter codes and flag files identify the languages themselves, so
// they stay the same whatever the interface language is. Only the spoken names
// used for accessible labels come from the translations file.
export const LANGUAGES = [
  {
    code: 'en',
    label: 'ENG',
    flag: '/images/flag-gb.svg',
    nameKey: 'nav.language.english',
  },
  {
    code: 'ka',
    label: 'GEO',
    flag: '/images/flag-ge.svg',
    nameKey: 'nav.language.georgian',
  },
  {
    code: 'ru',
    label: 'RUS',
    flag: '/images/flag-ru.svg',
    nameKey: 'nav.language.russian',
  },
];

const SUPPORTED = LANGUAGES.map((l) => l.code);

function readStoredLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved && SUPPORTED.includes(saved) ? saved : null;
  } catch {
    // Private browsing or blocked storage: fall through to detection.
    return null;
  }
}

// A stored choice always wins. Browser detection only applies on a first visit.
function detectLanguage() {
  const stored = readStoredLanguage();
  if (stored) return stored;

  const tag = (
    typeof navigator === 'undefined' ? '' : navigator.language || ''
  ).toLowerCase();
  if (tag.startsWith('ka')) return 'ka';
  if (tag.startsWith('ru')) return 'ru';
  return FALLBACK_LANGUAGE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectLanguage);

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const setLanguage = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return;
    setLanguageState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Choice still applies for this session even if it cannot be saved.
    }
  }, []);

  // Missing or empty falls back to English. Missing everywhere returns the key
  // itself, so a gap shows up on the page instead of rendering as blank.
  const t = useCallback(
    (key) => {
      const active = translations[language]?.[key];
      if (active) return active;
      const fallback = translations[FALLBACK_LANGUAGE]?.[key];
      if (fallback) return fallback;
      return key;
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used inside a LanguageProvider');
  }
  return ctx;
}
