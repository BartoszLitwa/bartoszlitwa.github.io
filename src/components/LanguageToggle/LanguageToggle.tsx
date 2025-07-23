import React from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../types';
import './LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-toggle" role="group" aria-label="Language selection">
      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
      >
        <span className="flag-icon">🇺🇸</span>
        <span className="language-text">EN</span>
      </button>
      <button
        className={`language-btn ${language === 'pl' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('pl')}
        aria-label="Przełącz na polski"
        aria-pressed={language === 'pl'}
      >
        <span className="flag-icon">🇵🇱</span>
        <span className="language-text">PL</span>
      </button>
    </div>
  );
};

export default LanguageToggle; 