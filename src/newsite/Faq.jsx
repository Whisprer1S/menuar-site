import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './faq.css';

const EASE = [0.22, 1, 0.36, 1];

// q1 through q7, looped rather than written out by hand.
const QUESTIONS = Array.from({ length: 7 }, (_, i) => `faq.q${i + 1}`);

function Chevron() {
  return (
    <span className="faq__icon" aria-hidden="true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </span>
  );
}

export default function Faq() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  // Index of the single open row, or null when everything is closed.
  const [openIndex, setOpenIndex] = useState(null);

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: EASE },
      };

  return (
    <section id="faq" className="faq">
      <div className="faq__inner">
        <motion.div className="faq__header" {...headerMotion}>
          <p className="faq__label">{t('faq.eyebrow')}</p>
          <h2 className="faq__title">{t('faq.title')}</h2>
        </motion.div>

        <div className="faq__list">
          {QUESTIONS.map((key, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${key}-button`;
            const panelId = `${key}-panel`;
            return (
              <div
                key={key}
                className={isOpen ? 'faq__item faq__item--open' : 'faq__item'}
              >
                <h3 className="faq__q-heading">
                  <button
                    type="button"
                    id={buttonId}
                    className={
                      isOpen
                        ? 'faq__question faq__question--open'
                        : 'faq__question'
                    }
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="faq__q-text">{t(`${key}.question`)}</span>
                    <Chevron />
                  </button>
                </h3>

                <div
                  id={panelId}
                  className="faq__panel"
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{t(`${key}.answer`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
