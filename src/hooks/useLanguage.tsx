
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { enTranslations } from '@/localization/en';
import { taTranslations } from '@/localization/ta';

type LanguageContextType = {
  currentLanguage: 'en' | 'ta';
  setLanguage: (lang: 'en' | 'ta') => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ta'>('en');
  
  useEffect(() => {
    // Check if there's a saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en' || savedLanguage === 'ta') {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: 'en' | 'ta') => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  // Helper function to get nested keys, e.g., "features.moisture"
  const getNestedTranslation = (obj: any, path: string): string => {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path; // Return the key path if translation not found
      }
    }
    
    return result as string;
  };

  const t = (key: string): string => {
    const translations = currentLanguage === 'en' ? enTranslations : taTranslations;
    return getNestedTranslation(translations, key);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
