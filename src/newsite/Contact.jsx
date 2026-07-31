import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './contact.css';

const WHATSAPP_CTA =
  'https://wa.me/995598119981?text=Hi%20Menuar%2C%20I%20have%20a%20restaurant%20and%20I%27d%20like%20a%20menu';

// Mirrors the top nav exactly: same label keys, same section anchors.
const MENU_LINKS = [
  { key: 'nav.insideMenu', href: '#inside-menu' },
  { key: 'nav.tryMenu', href: '#try-it' },
  { key: 'nav.pricing', href: '#pricing' },
  { key: 'nav.questions', href: '#faq' },
];

function Arrow() {
  return (
    <span className="contact__arrow" aria-hidden="true">
      <svg
        width="20"
        height="20"
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const reduce = useReducedMotion();
  const { t } = useTranslation();

  const bandMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <>
      <section id="contact" className="contact">
        <motion.div className="contact__inner" {...bandMotion}>
          <h2 className="contact__title">{t('contact.title')}</h2>
          <a
            className="contact__cta"
            href={WHATSAPP_CTA}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common.messageUsOnWhatsApp')}
            <Arrow />
          </a>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__cols">
            <div className="footer__brand">
              <p className="footer__brand-name">Menuar</p>
              <p className="footer__tagline">{t('footer.tagline')}</p>
            </div>

            <nav className="footer__col">
              <p className="footer__heading">{t('footer.menuHeading')}</p>
              <ul className="footer__links">
                {MENU_LINKS.map((link) => (
                  <li key={link.key}>
                    <a className="footer__link" href={link.href}>
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer__col">
              <p className="footer__heading">{t('footer.contactHeading')}</p>
              <ul className="footer__links">
                <li>
                  <a
                    className="footer__wa"
                    href="https://wa.me/995598119981"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon />
                    <span className="footer__wa-num">+995 598 11 99 81</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="footer__bottom">{t('footer.copyright')}</p>
          {/* Fixed English wordmark line, identical in every language. */}
          <p className="footer__designed">Designed with 🤍 by Menuar</p>
        </div>
      </footer>
    </>
  );
}
