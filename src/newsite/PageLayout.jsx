import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import './tokens.css';
import './pages.css';

export default function PageLayout({ children }) {
  return (
    <div className="page">
      <header className="page__topbar">
        <Link to="/" className="page__wordmark">
          Menuar
        </Link>
        <Link to="/" className="page__back">
          Back to site
        </Link>
      </header>

      <main className="page__content">{children}</main>

      <Footer />
    </div>
  );
}
