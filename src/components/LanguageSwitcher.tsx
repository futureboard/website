'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'th' | 'ja' | 'zh';
  cleanPath: string;
}

const LANGUAGES = {
  en: { name: 'English', flag: 'EN' },
  th: { name: 'ไทย', flag: 'TH' },
  ja: { name: '日本語', flag: 'JA' },
  zh: { name: '中文', flag: 'ZH' },
};

export default function LanguageSwitcher({ currentLang, cleanPath }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const getPathForLang = (targetLang: string) => {
    const prefix = targetLang === 'en' ? '' : `/${targetLang}`;
    const path = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    const finalPath = `${prefix}${path}`;
    return finalPath === '' ? '/' : finalPath;
  };

  const activeLang = LANGUAGES[currentLang] || LANGUAGES.en;

  return (
    <div ref={containerRef} className="lang-switcher-container">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lang-trigger-btn ${isOpen ? 'lang-trigger-btn--active' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="lang-globe-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
        <span className="lang-active-flag">{activeLang.flag}</span>
        <svg
          className={`lang-chevron-icon ${isOpen ? 'lang-chevron-icon--rotated' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lang-dropdown-panel"
            role="listbox"
          >
            {Object.entries(LANGUAGES).map(([key, value]) => (
              <a
                key={key}
                href={getPathForLang(key)}
                className={`lang-dropdown-option ${currentLang === key ? 'lang-dropdown-option--active' : ''}`}
                role="option"
                aria-selected={currentLang === key}
                onClick={() => setIsOpen(false)}
              >
                <span className="lang-option-flag">{value.flag}</span>
                <span className="lang-option-label">{value.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
