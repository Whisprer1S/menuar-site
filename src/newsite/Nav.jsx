import { useState, useEffect } from 'react';
import './nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
          <a className="nav__link" href="#how-it-works">
            How it works
          </a>
          <a className="nav__link" href="#the-menu">
            The menu
          </a>
          <a className="nav__link" href="#pricing">
            Pricing
          </a>
        </div>

        <a className="nav__cta" href="#contact">
          Talk to us
        </a>
      </div>
    </nav>
  );
}
