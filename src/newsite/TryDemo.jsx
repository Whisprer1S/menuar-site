import { motion, useReducedMotion } from 'framer-motion';
import './trydemo.css';

const EASE = [0.22, 1, 0.36, 1];

const DEMO_HREF = 'https://menu.sufraar.com/m/demo';

function Arrow() {
  return (
    <span className="trydemo__arrow" aria-hidden="true">
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

export default function TryDemo() {
  const reduce = useReducedMotion();

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.6, ease: EASE },
      };

  const rowMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.55, ease: EASE },
      };

  return (
    <section id="try-it" className="trydemo">
      <div className="trydemo__inner">
        <motion.div className="trydemo__header" {...headerMotion}>
          <p className="trydemo__label">TRY IT</p>
          <h2 className="trydemo__title">Scan it the way your guests will</h2>
          <p className="trydemo__sub">
            Point your phone at the code, or open the demo menu here. This is a
            real menu, running live, with real dishes in 3D
          </p>
        </motion.div>

        <motion.div className="trydemo__row" {...rowMotion}>
          <div className="trydemo__qr-card">
            <img
              src="/images/qr-demo.svg.svg"
              alt="QR code for the demo menu"
            />
          </div>

          <a
            className="trydemo__cta"
            href={DEMO_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open the demo menu
            <Arrow />
          </a>
        </motion.div>

        <p className="trydemo__note">
          Every code we make is designed to match the venue it belongs to
        </p>
      </div>
    </section>
  );
}
