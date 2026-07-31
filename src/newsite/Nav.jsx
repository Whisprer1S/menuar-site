import { useState, useEffect } from 'react';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './nav.css';

// Shared by the desktop link row and the mobile drawer so they never drift.
const LINKS = [
  { href: '#inside-menu', key: 'nav.insideMenu' },
  { href: '#try-it', key: 'nav.tryMenu' },
  { href: '#pricing', key: 'nav.pricing' },
  { href: '#faq', key: 'nav.questions' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  // The bar goes solid on scroll, and also while the mobile menu is open so the
  // bar and drawer read as one dark panel. On desktop menuOpen is always false
  // (the toggle is hidden), so this matches the previous behaviour exactly.
  const barSolid = scrolled || menuOpen;

  return (
    <nav className={barSolid ? 'nav nav--scrolled' : 'nav'}>
      <div className="nav__inner">
        <button type="button" className="nav__logo" onClick={scrollToTop}>
          Menuar
        </button>

        <div className="nav__links">
          {LINKS.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>
              {t(l.key)}
            </a>
          ))}
        </div>

        <div className="nav__end">
          <LanguageSwitcher />
          <a className="nav__cta" href="#contact">
            {t('common.talkToUs')}
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-label={t('nav.theMenu')}
            aria-controls="nav-mobile"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="nav-mobile"
        className={menuOpen ? 'nav__mobile nav__mobile--open' : 'nav__mobile'}
      >
        <div className="nav__mobile-inner">
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav__mobile-link"
              href={l.href}
              onClick={closeMenu}
            >
              {t(l.key)}
            </a>
          ))}
          <a className="nav__mobile-cta" href="#contact" onClick={closeMenu}>
            {t('common.talkToUs')}
          </a>
        </div>
      </div>
    </nav>
  );
}
