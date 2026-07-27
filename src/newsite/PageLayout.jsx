import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import { useTranslation } from './i18n/LanguageProvider.jsx';
import './tokens.css';
import './pages.css';

export default function PageLayout({ children }) {
  const { t } = useTranslation();

  return (
    <div className="page">
      <header className="page__topbar">
        <Link to="/" className="page__wordmark">
          Menuar
        </Link>
        <Link to="/" className="page__back">
          {t('pageLayout.backToSite')}
        </Link>
      </header>

      <main className="page__content">{children}</main>

      <Footer />
    </div>
  );
}
