import { motion, useReducedMotion } from 'framer-motion';
import './pricing.css';

const EASE = [0.22, 1, 0.36, 1];

const TIERS = [
  {
    name: 'Essential',
    featured: false,
    blurb: 'A beautiful menu for a focused offering',
    monthly: '₾99',
    arDishes: 3,
    features: [
      'Your full menu, designed to match the venue',
      '3 signature dishes in photorealistic 3D',
      'Georgian, English and Russian',
      'QR codes for your tables',
      'Price and text updates handled by us',
    ],
  },
  {
    name: 'Signature',
    featured: true,
    blurb: 'For venues that want their table to stop people mid scroll',
    monthly: '₾149',
    arDishes: 6,
    features: [
      'Everything in Essential',
      '6 signature dishes in photorealistic 3D',
      'Deeper custom design around your brand',
      'Seasonal dish swaps included',
      'Priority on changes',
    ],
  },
  {
    name: 'Bespoke',
    featured: false,
    blurb: 'A one of a kind menu built from a blank page',
    monthly: '₾199',
    arDishes: 10,
    features: [
      'Everything in Signature',
      '10 signature dishes in photorealistic 3D',
      'A design built for you, not themed from a base',
      'Extra AR dishes at a reduced rate',
      'First in line for new features',
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
          <p className="pricing__label">Pricing</p>
          <h2 className="pricing__title">One build, then we keep it running</h2>
          <p className="pricing__sub">
            Every menu is built by hand, so each one starts with a one-off build
            fee, then a small monthly for hosting, updates and new dishes
          </p>
        </motion.div>

        <motion.div className="pricing__grid" {...gridMotion}>
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              className={tier.featured ? 'tier tier--featured' : 'tier'}
              {...cardMotion}
            >
              {tier.featured && <span className="tier__pill">Most popular</span>}

              <h3 className="tier__name">{tier.name}</h3>
              <p className="tier__blurb">{tier.blurb}</p>

              <div className="tier__price">
                <p className="tier__price-value">
                  {tier.monthly}
                  <span className="tier__price-monthly"> / month</span>
                </p>
                <p
                  className="tier__price-monthly"
                  style={{ fontSize: '0.8rem' }}
                >
                  + one off setup fee
                </p>
              </div>

              <hr className="tier__divider" />

              <ul className="tier__features">
                {tier.features.map((f) => (
                  <li key={f} className="tier__feature">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                className={
                  tier.featured
                    ? 'tier__cta tier__cta--filled'
                    : 'tier__cta tier__cta--outline'
                }
                href="#contact"
              >
                Talk to us
                <Arrow />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="pricing__footnote">
          Not sure which fits? Most venues start with six dishes and grow from
          there, we will tell you honestly what your menu needs
        </p>
      </div>
    </section>
  );
}
