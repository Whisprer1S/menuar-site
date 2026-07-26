import { motion, useReducedMotion } from 'framer-motion';
import './howitworks.css';

const EASE = [0.22, 1, 0.36, 1];

const STEPS = [
  {
    num: '01',
    title: 'We talk',
    body: 'You tell us about the venue, your menu and how you want it to feel. We look at your space and your dishes and agree what goes into the menu',
  },
  {
    num: '02',
    title: 'We build it',
    body: 'Design, photography and 3D scanning of your signature dishes. Every model is made from your real food, so what a guest sees is what arrives at the table',
  },
  {
    num: '03',
    title: 'You hand it to your guests',
    body: 'QR codes for your tables and a live menu in three languages. Menu changes and new dishes are handled by us, not left to you',
  },
];

export default function HowItWorks() {
  const reduce = useReducedMotion();

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
          <p className="how__label">How it works</p>
          <h2 className="how__title">
            A menu built for your restaurant, not a template
          </h2>
          <p className="how__intro">
            We don&rsquo;t hand you a page builder. We build the whole thing for
            you, then keep it up to date as your menu changes
          </p>
        </motion.div>

        <motion.div className="how__steps" {...gridMotion}>
          {STEPS.map((step) => (
            <motion.div key={step.num} className="how__card" {...cardMotion}>
              <div className="how__num">{step.num}</div>
              <h3 className="how__card-title">{step.title}</h3>
              <p className="how__card-body">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
