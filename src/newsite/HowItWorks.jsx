import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './howitworks.css';

const EASE = [0.22, 1, 0.36, 1];

const STEPS = [
  { num: '01', titleKey: 'howItWorks.step1.title', bodyKey: 'howItWorks.step1.body' },
  { num: '02', titleKey: 'howItWorks.step2.title', bodyKey: 'howItWorks.step2.body' },
  { num: '03', titleKey: 'howItWorks.step3.title', bodyKey: 'howItWorks.step3.body' },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
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
        viewport: { once: true, amount: 0.25 },
      };

  const cardMotion = reduce ? {} : { variants: item };

  return (
    <section id="how-it-works" className="how">
      <div className="how__inner">
        <motion.div {...headerMotion}>
          <p className="how__label">{t('howItWorks.eyebrow')}</p>
          <h2 className="how__title">{t('howItWorks.title')}</h2>
          <p className="how__intro">{t('howItWorks.intro')}</p>
        </motion.div>

        <motion.div className="how__steps" {...gridMotion}>
          {STEPS.map((step) => (
            <motion.div key={step.num} className="how__card" {...cardMotion}>
              <div className="how__num">{step.num}</div>
              <h3 className="how__card-title">{t(step.titleKey)}</h3>
              <p className="how__card-body">{t(step.bodyKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
