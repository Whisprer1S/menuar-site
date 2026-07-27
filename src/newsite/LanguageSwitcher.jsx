import { useEffect, useRef, useState } from 'react';
import { LANGUAGES, useTranslation } from './i18n/LanguageProvider.jsx';
import './languageswitcher.css';

function Chevron({ open }) {
  return (
    <span
      className={open ? 'langsw__chevron langsw__chevron--open' : 'langsw__chevron'}
      aria-hidden="true"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const toggleRef = useRef(null);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  // Close on a click outside the switcher, and on Escape from anywhere in it.
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const choose = (code) => {
    setLanguage(code);
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <div className="langsw" ref={rootRef}>
      <button
        type="button"
        ref={toggleRef}
        className="langsw__toggle"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t('nav.language.switcher')}: ${t(current.nameKey)}`}
        onClick={() => setOpen((v) => !v)}
      >
        <img className="langsw__flag" src={current.flag} alt="" />
        <span className="langsw__code">{current.label}</span>
        <Chevron open={open} />
      </button>

      {open && (
        <ul className="langsw__menu" role="listbox" aria-label={t('nav.language.switcher')}>
          {LANGUAGES.map((lang) => {
            const active = lang.code === language;
            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  aria-label={t(lang.nameKey)}
                  className={
                    active
                      ? 'langsw__option langsw__option--active'
                      : 'langsw__option'
                  }
                  onClick={() => choose(lang.code)}
                >
                  <img className="langsw__flag" src={lang.flag} alt="" />
                  <span className="langsw__code">{lang.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
