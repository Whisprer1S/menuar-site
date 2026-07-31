import { useState, useEffect } from 'react';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import './nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <nav className={scrolled ? 'nav nav--scrolled' : 'nav'}>
      <div className="nav__inner">
        <button type="button" className="nav__logo" onClick={scrollToTop}>
          Menuar
        </button>

        <div className="nav__links">
          <a className="nav__link" href="#inside-menu">
            {t('nav.insideMenu')}
          </a>
          <a className="nav__link" href="#try-it">
            {t('nav.tryMenu')}
          </a>
          <a className="nav__link" href="#pricing">
            {t('nav.pricing')}
          </a>
          <a className="nav__link" href="#faq">
            {t('nav.questions')}
          </a>
        </div>

        <div className="nav__end">
          <LanguageSwitcher />
          <a className="nav__cta" href="#contact">
            {t('common.talkToUs')}
          </a>
        </div>
      </div>
    </nav>
  );
}
