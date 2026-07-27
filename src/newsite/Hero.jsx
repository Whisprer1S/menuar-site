import { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './tokens.css';
import './hero.css';

const MODEL_SRC =
  'https://xmwekpuaorzqlvkcfeyu.supabase.co/storage/v1/object/public/ar-models/a1111111-1111-4111-8111-111111111111/1ff6a5e5-92e0-44d3-8451-788347f98691.glb';

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
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
            Digital menus for restaurants
          </motion.p>

          <div className="hero__headline-mask">
            <motion.h1
              className="hero__headline"
              initial={reduce ? false : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              A digital menu your guests will actually enjoy using
            </motion.h1>
          </div>

          <motion.p className="hero__para" variants={item}>
            Beautiful on every phone, in three languages, with your signature
            dishes in photorealistic 3D. Guests scan a QR code at the table and
            the menu opens instantly
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
              Open the demo menu
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
              Talk to us
            </a>
          </motion.div>

          <motion.div className="hero__scan" variants={item}>
            <span className="hero__scan-card">
              <img src="/images/qr-demo.svg.svg" alt="QR code for the demo menu" />
            </span>
            <span className="hero__scan-text">
              <span className="hero__scan-line">Scan to try it</span>
              <span className="hero__scan-line">
                This is the same code that sits on the table
              </span>
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
                alt="The Menuar menu open on a phone"
              />
            </div>

            <div className="hero__model-holder">
              <model-viewer
                ref={modelRef}
                class="hero__model"
                src={MODEL_SRC}
                camera-controls=""
                auto-rotate=""
                auto-rotate-delay="1000"
                rotation-per-second="18deg"
                ar={true}
                ar-modes="webxr scene-viewer quick-look"
                min-camera-orbit="auto 25deg auto"
                max-camera-orbit="auto 85deg auto"
                camera-orbit="15deg 70deg auto"
                interaction-prompt="none"
                shadow-intensity="1"
                exposure="1"
                alt="A dish shown in 3D"
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
                  <span className="hero__loader-text">Loading dish&hellip;</span>
                </div>
              )}
            </div>
          </div>

          <p className="hero__hint">Drag to rotate</p>
        </motion.div>
      </div>
    </section>
  );
}
