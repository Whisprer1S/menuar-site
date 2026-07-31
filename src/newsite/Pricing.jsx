import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './pricing.css';

const EASE = [0.22, 1, 0.36, 1];

const WHATSAPP_HREF = 'https://wa.me/995598119981';

// The carousel and its dots exist below this width only. Above it the cards
// stay in the three column grid and the dots are never rendered.
const MOBILE_QUERY = '(max-width: 899px)';

// Signature, the middle card, is where the carousel opens.
const INITIAL_INDEX = 1;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}

// Tier names, prices and the lari symbol stay in English in every language.
const TIERS = [
  {
    name: 'Essential',
    featured: false,
    blurbKey: 'pricing.essential.blurb',
    monthly: '₾99',
    arDishes: 3,
    featureKeys: [
      'pricing.essential.feature1',
      'pricing.essential.feature2',
      'pricing.essential.feature3',
      'pricing.essential.feature4',
      'pricing.essential.feature5',
    ],
  },
  {
    name: 'Signature',
    featured: true,
    blurbKey: 'pricing.signature.blurb',
    monthly: '₾149',
    arDishes: 6,
    featureKeys: [
      'pricing.signature.feature1',
      'pricing.signature.feature2',
      'pricing.signature.feature3',
      'pricing.signature.feature4',
      'pricing.signature.feature5',
    ],
  },
  {
    name: 'Bespoke',
    featured: false,
    blurbKey: 'pricing.bespoke.blurb',
    monthly: '₾199',
    arDishes: 10,
    featureKeys: [
      'pricing.bespoke.feature1',
      'pricing.bespoke.feature2',
      'pricing.bespoke.feature3',
      'pricing.bespoke.feature4',
      'pricing.bespoke.feature5',
    ],
  },
];

function Check() {
  return (
    <svg
      className="tier__check"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Arrow() {
  return (
    <span className="tier__arrow" aria-hidden="true">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(INITIAL_INDEX);

  // Open on Signature. Setting scrollLeft on the track directly is deliberate:
  // it is instant, it cannot move the page vertically and it cannot take focus,
  // unlike scrollIntoView. Runs before paint so nothing appears to jump.
  useLayoutEffect(() => {
    if (!isMobile) return;
    const root = scrollerRef.current;
    const card = cardRefs.current[INITIAL_INDEX];
    if (!root || !card) return;

    const rootBox = root.getBoundingClientRect();
    const cardBox = card.getBoundingClientRect();
    const offset = cardBox.left - rootBox.left + root.scrollLeft;
    root.scrollLeft = offset - (root.clientWidth - cardBox.width) / 2;
  }, [isMobile]);

  // Track which card is centred in the carousel so the dots can follow.
  useEffect(() => {
    if (!isMobile) return undefined;
    const root = scrollerRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!root || cards.length === 0) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = cards.indexOf(entry.target);
          if (i !== -1) setActive(i);
        });
      },
      // 0.75 guarantees only one card can qualify at a time: two cards at 85vw
      // cannot each show 75% of themselves inside a 100vw track.
      { root, threshold: 0.75 }
    );

    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [isMobile]);

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
    <section id="pricing" className="pricing">
      <div className="pricing__inner">
        <motion.div className="pricing__header" {...headerMotion}>
          <p className="pricing__label">{t('pricing.eyebrow')}</p>
        </motion.div>

        <motion.div className="pricing__grid" ref={scrollerRef} {...gridMotion}>
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={tier.featured ? 'tier tier--featured' : 'tier'}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              {...cardMotion}
            >
              {tier.featured && (
                <span className="tier__pill">{t('pricing.mostPopular')}</span>
              )}

              <h3 className="tier__name">{tier.name}</h3>
              <p className="tier__blurb">{t(tier.blurbKey)}</p>

              <div className="tier__price">
                <p className="tier__price-value">
                  {tier.monthly}
                  <span className="tier__price-monthly">
                    {t('pricing.perMonth')}
                  </span>
                </p>
              </div>

              <hr className="tier__divider" />

              <ul className="tier__features">
                {tier.featureKeys.map((key) => (
                  <li key={key} className="tier__feature">
                    <Check />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>

              <a
                className={
                  tier.featured
                    ? 'tier__cta tier__cta--filled'
                    : 'tier__cta tier__cta--outline'
                }
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('common.talkToUs')}
                <Arrow />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {isMobile && (
          <div className="pricing__dots" aria-hidden="true">
            {TIERS.map((tier, i) => (
              <span
                key={tier.name}
                className={
                  i === active
                    ? 'pricing__dot pricing__dot--active'
                    : 'pricing__dot'
                }
              />
            ))}
          </div>
        )}

        <p className="pricing__footnote">{t('pricing.footnote')}</p>
      </div>
    </section>
  );
}
