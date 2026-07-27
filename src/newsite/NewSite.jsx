import './tokens.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import Proof from './Proof.jsx';
import HowItWorks from './HowItWorks.jsx';
import Features from './Features.jsx';
import TryDemo from './TryDemo.jsx';
import Pricing from './Pricing.jsx';
import Faq from './Faq.jsx';
import Contact from './Contact.jsx';

export default function NewSite() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Nav />
      <Hero />
      <Proof />
      <HowItWorks />
      <Features />
      <TryDemo />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  );
}
