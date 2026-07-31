import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './insidemenu.css';

const EASE = [0.22, 1, 0.36, 1];

// Minimal inline line icons in the accent colour, matching the new site's
// convention (Check, Arrow, Chevron are all inline SVG). One per feature, in
// neutral shapes that suit whatever the six feature strings turn out to be.
const ICONS = [
  // camera
  <>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <circle cx="12" cy="13.5" r="3.5" />
    <path d="M8 7l1.4-2h5.2L20 7" />
  </>,
  // 3D cube
  <>
    <path d="M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5z" />
    <path d="M12 12l8.5-4.75M12 12v9.5M12 12L3.5 7.25" />
  </>,
  // globe / languages
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.8 2.8 2.8 15.2 0 18M12 3c-2.8 2.8-2.8 15.2 0 18" />
  </>,
  // tag / info
  <>
    <path d="M4 4h7l9 9-7 7-9-9z" />
    <circle cx="8.5" cy="8.5" r="1.4" />
  </>,
  // scan / QR
  <>
    <path d="M4 8V5.5a1.5 1.5 0 0 1 1.5-1.5H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
    <path d="M4 12h16" />
  </>,
  // refresh / updates
  <>
    <path d="M20 11a8 8 0 0 0-13.7-5.3L4 8M4 13a8 8 0 0 0 13.7 5.3L20 16" />
    <path d="M4 4.5V8h3.5M20 19.5V16h-3.5" />
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

const FEATURES = Array.from({ length: 6 }, (_, i) => ({
  titleKey: `inside.f${i + 1}Title`,
  bodyKey: `inside.f${i + 1}Body`,
  icon: ICONS[i],
}));

export default function InsideMenu() {
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
            <video
              className="inside__video"
              src="/menu-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <motion.div className="inside__cards" {...gridMotion}>
            {FEATURES.map((f) => (
              <motion.div key={f.titleKey} className="inside__card" {...cardMotion}>
                <span className="inside__icon">
                  <Icon>{f.icon}</Icon>
                </span>
                <h3 className="inside__card-title">{t(f.titleKey)}</h3>
                <p className="inside__card-body">{t(f.bodyKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
