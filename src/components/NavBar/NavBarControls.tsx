import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../types';
import './NavBarControls.css';

const NavBarControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en' as Language, label: 'English', flag: '🇺🇸' },
    { code: 'pl' as Language, label: 'Polski', flag: '🇵🇱' }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageSelect = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isLanguageDropdownOpen]);

  return (
    <div className="navbar-controls">
      {/* Theme Toggle */}
      <button
        className="control-btn theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        <span className="control-icon">
          {theme === 'light' ? '🌙' : '☀️'}
        </span>
      </button>

      {/* Language Dropdown */}
      <div className="language-dropdown" ref={dropdownRef}>
        <button
          className="control-btn language-toggle-btn"
          onClick={toggleLanguageDropdown}
          aria-label="Select language"
          aria-expanded={isLanguageDropdownOpen}
          aria-haspopup="listbox"
        >
          <span className="control-icon">{currentLanguage.flag}</span>
          <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
          <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>
            ▼
          </span>
        </button>

        {isLanguageDropdownOpen && (
          <div className="language-dropdown-menu" role="listbox">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageSelect(lang.code)}
                role="option"
                aria-selected={language === lang.code}
              >
                <span className="option-flag">{lang.flag}</span>
                <span className="option-label">{lang.label}</span>
                {language === lang.code && (
                  <span className="option-check">✓</span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBarControls; 