import { motion, useReducedMotion } from 'framer-motion';
import './features.css';

const MODEL_SRC =
  'https://xmwekpuaorzqlvkcfeyu.supabase.co/storage/v1/object/public/ar-models/a1111111-1111-4111-8111-111111111111/2886bb3d-500a-4534-9c11-97f886d0c263.glb';

const CARDS = [
  {
    id: 'menu',
    image: '/images/feature-menu.jpg',
    title: 'Every dish photographed',
    body: 'A clean, fast menu where every plate is shot properly, not a PDF someone zoomed into',
  },
  {
    id: 'ingredients',
    image: '/images/feature-ingredients.jpg',
    title: 'Ingredients at a glance',
    body: 'Allergies, vegetarian, spice level, all tagged on the dish so nobody has to ask',
  },
  {
    id: 'language',
    image: '/images/feature-language.jpg',
    title: 'Read in their language',
    body: 'Georgian, English and Russian on the same menu, so a tourist orders instead of leaving',
  },
  {
    id: 'selection',
    image: '/images/feature-selection.jpg',
    title: 'Chosen before you arrive',
    body: 'Guests add dishes as they browse and read the list back, so ordering takes seconds',
  },
];

// Fan rotations (deg) for the four screenshot cards, unchanged from the
// original five card fan now that the AR card has its own zone.
const ROTATIONS = [-2, 0, 2, 4];

export default function Features() {
  const reduce = useReducedMotion();

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
      <div className="features__inner">
        <p className="features__label">Inside the menu</p>
        <h2 className="features__title">
          Everything a guest needs, in the palm of their hand
        </h2>

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
                alt="A dish shown in 3D on your table"
              ></model-viewer>
            </div>
            <div className="ar-card__caption">
              <p className="ar-card__eyebrow">THE DIFFERENCE</p>
              <p className="ar-card__line">
                Guests see the real dish on their own table before they order
              </p>
            </div>
          </div>

          <div className="features__stack">
            {CARDS.map((card, i) => {
              const style = {
                '--rot': `${ROTATIONS[i]}deg`,
                '--ty': '0px',
                '--z': `${i + 1}`,
              };
              return (
                <div key={card.id} className="feat-card" style={style}>
                  <div className="feat-card__tile">
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      style={{ objectPosition: 'top' }}
                    />
                  </div>
                  <div className="feat-card__text">
                    <h3 className="feat-card__title">{card.title}</h3>
                    <p className="feat-card__body">{card.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
