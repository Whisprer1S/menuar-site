import './tokens.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import Features from './Features.jsx';
import Pricing from './Pricing.jsx';

export default function NewSite() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
    </div>
  );
}
