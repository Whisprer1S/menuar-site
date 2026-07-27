import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './proof.css';

const EASE = [0.22, 1, 0.36, 1];

// stat1, stat2, stat3, looped rather than written out by hand.
const STATS = ['proof.stat1', 'proof.stat2', 'proof.stat3'];

export default function Proof() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: EASE },
      };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  const gridMotion = reduce
    ? {}
    : {
        variants: container,
        initial: 'hidden',
        whileInView: 'show',
        viewport: { once: true, amount: 0.2 },
      };

  const cardMotion = reduce ? {} : { variants: item };

  return (
    <section id="proof" className="proof">
      <div className="proof__inner">
        <motion.div className="proof__header" {...headerMotion}>
          <p className="proof__label">{t('proof.eyebrow')}</p>
          <h2 className="proof__title">{t('proof.title')}</h2>
          <p className="proof__intro">{t('proof.intro')}</p>
        </motion.div>

        <motion.div className="proof__grid" {...gridMotion}>
          {STATS.map((key) => (
            <motion.div key={key} className="proof__card" {...cardMotion}>
              <p className="proof__figure">{t(`${key}.figure`)}</p>
              <p className="proof__stat-label">{t(`${key}.label`)}</p>
              <p className="proof__body">{t(`${key}.body`)}</p>
              <p className="proof__source">{t(`${key}.source`)}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="proof__footnote">{t('proof.footnote')}</p>
      </div>
    </section>
  );
}
