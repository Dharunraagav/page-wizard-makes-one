
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
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'ta'>(() => {
    // Check if there's a saved language preference on initial mount
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'ta') ? savedLanguage : 'en';
  });
  
  const setLanguage = (lang: 'en' | 'ta') => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
    // Force a re-render of components that use the translation hook
    document.documentElement.setAttribute('lang', lang);
    // Dispatch an event that components can listen for
    window.dispatchEvent(new CustomEvent('language-changed'));
  };

  // Helper function to get nested keys, e.g., "features.moisture"
  const getNestedTranslation = (obj: any, path: string): string => {
    const keys = path.split('.');
    let result = obj;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        console.warn(`Translation missing for key: ${path}`);
        return path; // Return the key path if translation not found
      }
    }
    
    return result as string;
  };

  const t = (key: string): string => {
    const translations = currentLanguage === 'en' ? enTranslations : taTranslations;
    return getNestedTranslation(translations, key);
  };

  // Initialize language attribute on document
  useEffect(() => {
    document.documentElement.setAttribute('lang', currentLanguage);
  }, [currentLanguage]);

  // Force re-render when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      // This is just to force components to re-render when language changes
      console.log("Language changed to:", currentLanguage);
    };
    
    window.addEventListener('language-changed', handleLanguageChange);
    return () => {
      window.removeEventListener('language-changed', handleLanguageChange);
    };
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
