import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './insidemenu.css';

const EASE = [0.22, 1, 0.36, 1];

// Inline line icons in the accent colour, matching the site's inline-SVG style.
// One per card: speed, info list, eye, languages, sparkle, then the 3D cube for
// the steps card.
const ICONS = [
  // 1 - lightning bolt (faster service)
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  // 2 - clipboard / list (calories, ingredients, allergens)
  <>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3.2A1.2 1.2 0 0 1 10.2 2h3.6A1.2 1.2 0 0 1 15 3.2V4" />
    <path d="M8.5 10.5h7M8.5 14h7M8.5 17.5h4.5" />
  </>,
  // 3 - eye (understand, visualise)
  <>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </>,
  // 4 - globe (updated, 3 languages)
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.8 2.8 2.8 15.2 0 18M12 3c-2.8 2.8-2.8 15.2 0 18" />
  </>,
  // 5 - sparkle (engaging, modern)
  <path d="M12 3l1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6z" />,
  // 6 - 3D cube (scan, explore, 3D)
  <>
    <path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z" />
    <path d="M12 12l8.5-4.75M12 12v9.5M12 12L3.5 7.25" />
  </>,
];

function Icon({ children }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// Cards 1 to 5 are single statements.
const STATEMENTS = [
  'inside.f1',
  'inside.f2',
  'inside.f3',
  'inside.f4',
  'inside.f5',
];

export default function InsideMenu() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const videoRef = useRef(null);
  const fillRef = useRef(null);

  // Drive the progress fill straight from the real video via refs, so it stays
  // in sync with the actual loop (including the reset to 0 on restart). Setting
  // the width imperatively avoids a React re-render on every timeupdate.
  useEffect(() => {
    const video = videoRef.current;
    const fill = fillRef.current;
    if (!video || !fill) return undefined;
    const onTimeUpdate = () => {
      const pct = video.duration
        ? (video.currentTime / video.duration) * 100
        : 0;
      fill.style.width = `${pct}%`;
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

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
    show: { transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
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
    <section id="inside-menu" className="inside">
      <div className="inside__inner">
        <motion.div className="inside__header" {...headerMotion}>
          <p className="inside__label">{t('inside.eyebrow')}</p>
          <h2 className="inside__title">{t('inside.heading')}</h2>
          <p className="inside__sub">{t('inside.subhead')}</p>
        </motion.div>

        <div className="inside__row">
          <div className="inside__video-col">
            <div className="inside__video-frame">
              <video
                ref={videoRef}
                className="inside__video"
                src="/menu-demo.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="inside__progress" aria-hidden="true">
                <div className="inside__progress-fill" ref={fillRef} />
              </div>
            </div>
          </div>

          <motion.div className="inside__cards" {...gridMotion}>
            {STATEMENTS.map((key, i) => (
              <motion.div key={key} className="inside__card" {...cardMotion}>
                <span className="inside__icon">
                  <Icon>{ICONS[i]}</Icon>
                </span>
                <p className="inside__card-text">{t(key)}</p>
              </motion.div>
            ))}

            <motion.div
              className="inside__card inside__card--steps"
              {...cardMotion}
            >
              <span className="inside__icon">
                <Icon>{ICONS[5]}</Icon>
              </span>
              <h3 className="inside__card-title">{t('inside.f6Title')}</h3>
              <ol className="inside__steps">
                <li>{t('inside.f6Step1')}</li>
                <li>{t('inside.f6Step2')}</li>
                <li>{t('inside.f6Step3')}</li>
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
