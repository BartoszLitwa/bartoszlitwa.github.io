import React, { useState, useEffect, ReactNode } from 'react';
import { LanguageContext, getNestedValue } from '../../hooks/useLanguage';
import { Language, Translations } from '../../types';
import translationsData from '../../data/translations.json';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [translations, setTranslations] = useState<Translations>(translationsData);

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pl')) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('pl')) {
        setLanguage('pl');
      }
    }
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem('preferred-language', language);
    
    // Update document language
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const currentTranslations = translations[language];
    if (!currentTranslations) {
      console.warn(`Language "${language}" not found in translations`);
      return key;
    }
    
    const value = getNestedValue(currentTranslations, key);
    if (value === key) {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
    }
    
    return value;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const contextValue = {
    language,
    setLanguage: handleSetLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}; 