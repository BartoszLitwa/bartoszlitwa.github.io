import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, MoonStarsFill, SunFill, Translate } from 'react-bootstrap-icons';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../hooks/useLanguage';
import { Language } from '../../types';
import './NavBarControls.css';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' }
];

const NavBarControls: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const languageToggleRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Partial<Record<Language, HTMLButtonElement | null>>>({});

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageSelect = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsLanguageDropdownOpen(false);
    languageToggleRef.current?.focus();
  };

  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen((isOpen) => !isOpen);

  useEffect(() => {
    if (isLanguageDropdownOpen) optionRefs.current[language]?.focus();
  }, [isLanguageDropdownOpen, language]);

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

  const handleDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!isLanguageDropdownOpen) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      setIsLanguageDropdownOpen(false);
      languageToggleRef.current?.focus();
      return;
    }
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const options = languages.map(({ code }) => optionRefs.current[code]);
    const currentIndex = options.indexOf(document.activeElement as HTMLButtonElement);
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? options.length - 1
          : (currentIndex + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
    options[nextIndex]?.focus();
  };

  return (
    <div className="navbar-controls">
      {/* Theme Toggle */}
      <button
        className="control-btn theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={
          theme === 'light'
            ? t('navigation.controls.themeDark')
            : t('navigation.controls.themeLight')
        }
        title={
          theme === 'light'
            ? t('navigation.controls.themeDark')
            : t('navigation.controls.themeLight')
        }
      >
        <span className="control-icon" aria-hidden="true">
          {theme === 'light' ? <MoonStarsFill size={14} /> : <SunFill size={14} />}
        </span>
      </button>

      {/* Language Dropdown */}
      <div
        className="language-dropdown"
        ref={dropdownRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsLanguageDropdownOpen(false);
        }}
      >
        <button
          ref={languageToggleRef}
          className="control-btn language-toggle-btn"
          onClick={toggleLanguageDropdown}
          aria-label={`${t('navigation.controls.selectLanguage')} ${currentLanguage.label}`}
          aria-expanded={isLanguageDropdownOpen}
          aria-haspopup="listbox"
          aria-controls={isLanguageDropdownOpen ? 'language-dropdown-menu' : undefined}
        >
          <span className="control-icon" aria-hidden="true">
            <Translate size={14} />
          </span>
          <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
          <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>
            <ChevronDown size={12} />
          </span>
        </button>

        {isLanguageDropdownOpen && (
          <div
            className="language-dropdown-menu"
            role="listbox"
            tabIndex={-1}
            onKeyDown={handleDropdownKeyDown}
            aria-label={t('navigation.controls.languageOptions')}
            id="language-dropdown-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                ref={(element) => {
                  optionRefs.current[lang.code] = element;
                }}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
                onClick={() => handleLanguageSelect(lang.code)}
                role="option"
                aria-selected={language === lang.code}
                tabIndex={isLanguageDropdownOpen ? 0 : -1}
                id={`language-option-${lang.code}`}
              >
                <span className="option-code">{lang.code.toUpperCase()}</span>
                <span className="option-label">{lang.label}</span>
                {language === lang.code && (
                  <span className="option-check" aria-hidden="true">
                    ✓
                  </span>
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
