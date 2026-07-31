import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './tokens.css';
import './hero.css';

const MODEL_SRC =
  'https://xmwekpuaorzqlvkcfeyu.supabase.co/storage/v1/object/public/ar-models/a1111111-1111-4111-8111-111111111111/1ff6a5e5-92e0-44d3-8451-788347f98691.glb';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();
  const modelRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;
    if (el.loaded) {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    el.addEventListener('load', onLoad);
    return () => el.removeEventListener('load', onLoad);
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__text"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.p className="hero__label" variants={item}>
            {t('hero.eyebrow')}
          </motion.p>

          <div className="hero__headline-mask">
            <motion.h1
              className="hero__headline"
              initial={reduce ? false : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {t('hero.headline')}
            </motion.h1>
          </div>

          <motion.p className="hero__para" variants={item}>
            {t('hero.paragraph')}
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a
              className="btn btn--primary"
              href="https://menu.sufraar.com/m/demo"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setArrowHover(true)}
              onMouseLeave={() => setArrowHover(false)}
              onFocus={() => setArrowHover(true)}
              onBlur={() => setArrowHover(false)}
            >
              {t('common.openDemoMenu')}
              <span
                className="btn__arrow"
                aria-hidden="true"
                style={{
                  transform: arrowHover ? 'translateX(5px)' : 'translateX(0)',
                }}
              >
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
            </a>

            <a className="btn btn--secondary" href="#">
              {t('common.talkToUs')}
            </a>
          </motion.div>

          <motion.div className="hero__scan" variants={item}>
            <span className="hero__scan-card">
              <img src="/images/qr-demo.svg.svg" alt={t('common.qrAlt')} />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__model-col"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero__model-stage">
            <div className="hero__phone">
              <img
                src="/images/feature-menu.jpg"
                alt={t('hero.phoneAlt')}
              />
            </div>

            <div className="hero__model-holder">
              <model-viewer
                ref={modelRef}
                class="hero__model"
                src={MODEL_SRC}
                auto-rotate=""
                auto-rotate-delay="0"
                rotation-per-second="20deg"
                camera-orbit="15deg 70deg auto"
                interaction-prompt="none"
                shadow-intensity="1"
                exposure="1"
                alt={t('hero.modelAlt')}
              ></model-viewer>

              {!loaded && (
                <div className="hero__loader">
                  <motion.div
                    className="hero__loader-dot"
                    animate={
                      reduce
                        ? undefined
                        : { scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }
                    }
                    transition={
                      reduce
                        ? undefined
                        : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
                    }
                  />
                  <span className="hero__loader-text">{t('hero.loading')}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
