import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './features.css';

// The carousel and its dots exist below this width only. Above it the cards
// stay in the fanned desktop stack and the dots are never rendered.
const MOBILE_QUERY = '(max-width: 899px)';

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

const MODEL_SRC =
  'https://xmwekpuaorzqlvkcfeyu.supabase.co/storage/v1/object/public/ar-models/a1111111-1111-4111-8111-111111111111/2886bb3d-500a-4534-9c11-97f886d0c263.glb';

const CARDS = [
  {
    id: 'menu',
    image: '/images/feature-menu.jpg',
    titleKey: 'features.menu.title',
    bodyKey: 'features.menu.body',
  },
  {
    id: 'ingredients',
    image: '/images/feature-ingredients.jpg',
    titleKey: 'features.ingredients.title',
    bodyKey: 'features.ingredients.body',
  },
  {
    id: 'language',
    image: '/images/feature-language.jpg',
    titleKey: 'features.language.title',
    bodyKey: 'features.language.body',
  },
  {
    id: 'selection',
    image: '/images/feature-selection.jpg',
    titleKey: 'features.selection.title',
    bodyKey: 'features.selection.body',
  },
];

// Fan rotations (deg) for the four screenshot cards, unchanged from the
// original five card fan now that the AR card has its own zone.
const ROTATIONS = [-2, 0, 2, 4];

export default function Features() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);

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
      // 0.75 guarantees only one card can qualify at a time: two cards at 82vw
      // cannot each show 75% of themselves inside a 100vw track.
      { root, threshold: 0.75 }
    );

    cards.forEach((card) => io.observe(card));
    return () => io.disconnect();
  }, [isMobile]);

  const stackMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section id="the-menu" className="features">
      <img
        className="features__deco"
        src="/images/vitamin-c.svg"
        alt=""
        aria-hidden="true"
      />

      <div className="features__inner">
        <p className="features__label">{t('features.eyebrow')}</p>
        <h2 className="features__title">{t('features.title')}</h2>

        <motion.div className="features__layout" {...stackMotion}>
          <div className="features__ar">
            <div className="ar-card__tile">
              <model-viewer
                class="ar-card__model"
                src={MODEL_SRC}
                auto-rotate=""
                auto-rotate-delay="1000"
                rotation-per-second="12deg"
                touch-action="pan-y"
                ar={true}
                ar-modes="webxr scene-viewer quick-look"
                camera-orbit="10deg 72deg 0.94m"
                camera-target="0m 0m 0m"
                field-of-view="28deg"
                interaction-prompt="none"
                shadow-intensity="1"
                exposure="1"
                alt={t('features.ar.modelAlt')}
              ></model-viewer>
            </div>
            <div className="ar-card__caption">
              <p className="ar-card__eyebrow">{t('features.ar.eyebrow')}</p>
              <p className="ar-card__line">{t('features.ar.line')}</p>
            </div>
          </div>

          <div className="features__stack" ref={scrollerRef}>
            {CARDS.map((card, i) => {
              const style = {
                '--rot': `${ROTATIONS[i]}deg`,
                '--ty': '0px',
                '--z': `${i + 1}`,
              };
              return (
                <div
                  key={card.id}
                  className="feat-card"
                  style={style}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                >
                  <div className="feat-card__tile">
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      style={{ objectPosition: 'top' }}
                    />
                  </div>
                  <div className="feat-card__text">
                    <h3 className="feat-card__title">{t(card.titleKey)}</h3>
                    <p className="feat-card__body">{t(card.bodyKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {isMobile && (
            <div className="features__dots" aria-hidden="true">
              {CARDS.map((card, i) => (
                <span
                  key={card.id}
                  className={
                    i === active
                      ? 'features__dot features__dot--active'
                      : 'features__dot'
                  }
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
