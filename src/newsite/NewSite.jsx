import './tokens.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';

export default function NewSite() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Nav />
      <Hero />
    </div>
  );
}
