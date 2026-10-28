import { createContext, useContext, useEffect, useState } from 'react';
import { content } from '../data/content';

const LangContext = createContext(null);
const STORAGE_KEY = 'suarma-lang';

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'id' ? 'id' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode */
    }
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
