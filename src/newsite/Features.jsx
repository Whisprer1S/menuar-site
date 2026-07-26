import { motion, useReducedMotion } from 'framer-motion';
import './features.css';

const MODEL_SRC =
  'https://xmwekpuaorzqlvkcfeyu.supabase.co/storage/v1/object/public/ar-models/a1111111-1111-4111-8111-111111111111/2886bb3d-500a-4534-9c11-97f886d0c263.glb';

const CARDS = [
  {
    id: 'ar',
    isModel: true,
    title: 'See it on your table',
    body: 'Point a phone at the table and the dish appears at full size, made from your real food so what they see is what arrives',
  },
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

// Fan rotations (deg) and default lift per card. Card 1 sits slightly forward.
const ROTATIONS = [-4, -2, 0, 2, 4];

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

        <motion.div className="features__stack" {...stackMotion}>
          {CARDS.map((card, i) => {
            const forward = i === 0;
            const style = {
              '--rot': `${ROTATIONS[i]}deg`,
              '--ty': forward ? '-14px' : '0px',
              '--z': `${forward ? 20 : i + 1}`,
            };
            return (
              <div key={card.id} className="feat-card" style={style}>
                <div className="feat-card__tile">
                  {card.isModel ? (
                    <model-viewer
                      class="feat-card__model"
                      src={MODEL_SRC}
                      auto-rotate=""
                      auto-rotate-delay="1000"
                      rotation-per-second="12deg"
                      touch-action="pan-y"
                      ar={true}
                      ar-modes="webxr scene-viewer quick-look"
                      camera-orbit="10deg 72deg 55%"
                      camera-target="0m 0m 0m"
                      field-of-view="30deg"
                      interaction-prompt="none"
                      shadow-intensity="1"
                      exposure="1"
                      alt="A dish shown in 3D on your table"
                    ></model-viewer>
                  ) : (
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      style={{ objectPosition: 'top' }}
                    />
                  )}
                </div>
                <div className="feat-card__text">
                  <h3 className="feat-card__title">{card.title}</h3>
                  <p className="feat-card__body">{card.body}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
