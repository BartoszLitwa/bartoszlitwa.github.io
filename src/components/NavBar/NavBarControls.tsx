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
    // Focus first option when opening dropdown
    if (!isLanguageDropdownOpen) {
      setTimeout(() => {
        const firstOption = document.querySelector('.language-option') as HTMLElement;
        firstOption?.focus();
      }, 100);
    }
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

  // Close dropdown on escape key and handle arrow navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLanguageDropdownOpen(false);
      }
      // Add arrow key navigation for accessibility
      if (isLanguageDropdownOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
        event.preventDefault();
        const options = document.querySelectorAll('.language-option');
        const currentFocus = document.activeElement;
        const currentIndex = Array.from(options).indexOf(currentFocus as Element);
        
        let nextIndex = 0;
        if (event.key === 'ArrowDown') {
          nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
        }
        
        (options[nextIndex] as HTMLElement)?.focus();
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
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
          aria-label={`Select language, currently ${currentLanguage.label}`}
          aria-expanded={isLanguageDropdownOpen}
          aria-haspopup="listbox"
          aria-owns={isLanguageDropdownOpen ? "language-dropdown-menu" : undefined}
        >
          <span className="control-icon">{currentLanguage.flag}</span>
          <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
          <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>
            ▼
          </span>
        </button>

        {isLanguageDropdownOpen && (
          <div 
            className="language-dropdown-menu" 
            role="listbox"
            aria-label="Language selection options"
            id="language-dropdown-menu"
          >
            {languages.map((lang, index) => (
              <button
                key={lang.code}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageSelect(lang.code)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleLanguageSelect(lang.code);
                  }
                }}
                role="option"
                aria-selected={language === lang.code}
                tabIndex={isLanguageDropdownOpen ? 0 : -1}
                id={`language-option-${lang.code}`}
              >
                <span className="option-flag" aria-hidden="true">{lang.flag}</span>
                <span className="option-label">{lang.label}</span>
                {language === lang.code && (
                  <span className="option-check" aria-label="Selected">✓</span>
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