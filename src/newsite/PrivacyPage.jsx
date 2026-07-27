import PageLayout from './PageLayout.jsx';
import { useTranslation } from './i18n/LanguageProvider.jsx';

const NOT_COLLECTED_KEYS = [
  'privacy.notCollected.item1',
  'privacy.notCollected.item2',
  'privacy.notCollected.item3',
  'privacy.notCollected.item4',
  'privacy.notCollected.item5',
];

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1 className="page__h1">{t('privacy.title')}</h1>
      <p className="page__meta">{t('privacy.lastUpdated')}</p>

      <p className="page__p">{t('privacy.intro')}</p>

      <h2 className="page__h2">{t('privacy.notCollected.heading')}</h2>
      <p className="page__p">{t('privacy.notCollected.intro')}</p>
      <ul className="page__list">
        {NOT_COLLECTED_KEYS.map((key) => (
          <li key={key}>{t(key)}</li>
        ))}
      </ul>

      <h2 className="page__h2">{t('privacy.technical.heading')}</h2>
      <p className="page__p">{t('privacy.technical.body')}</p>

      <h2 className="page__h2">{t('privacy.preferences.heading')}</h2>
      <p className="page__p">{t('privacy.preferences.body')}</p>

      <h2 className="page__h2">{t('privacy.restaurant.heading')}</h2>
      <p className="page__p">{t('privacy.restaurant.body')}</p>

      <h2 className="page__h2">{t('privacy.thirdParty.heading')}</h2>
      <p className="page__p">{t('privacy.thirdParty.body')}</p>

      <h2 className="page__h2">{t('privacy.contact.heading')}</h2>
      <p className="page__p">
        {t('privacy.contact.body')}{' '}
        <a
          className="page__link page__phone"
          href="https://wa.me/995598119981"
          target="_blank"
          rel="noopener noreferrer"
        >
          +995 598 11 99 81
        </a>
      </p>

      <h2 className="page__h2">{t('privacy.changes.heading')}</h2>
      <p className="page__p">{t('privacy.changes.body')}</p>
    </PageLayout>
  );
}
