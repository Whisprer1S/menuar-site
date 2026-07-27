import PageLayout from './PageLayout.jsx';
import { useTranslation } from './i18n/LanguageProvider.jsx';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <h1 className="page__h1">{t('about.title')}</h1>

      <p className="page__p">{t('about.paragraph1')}</p>

      <p className="page__p">{t('about.paragraph2')}</p>

      <p className="page__p">{t('about.paragraph3')}</p>

      <p className="page__closing">
        {t('about.closing')}{' '}
        <a
          className="page__link"
          href="https://wa.me/995598119981"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('common.messageUsOnWhatsApp')}
        </a>
      </p>
    </PageLayout>
  );
}
