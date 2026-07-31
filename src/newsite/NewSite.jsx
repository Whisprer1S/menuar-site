import './tokens.css';
import Nav from './Nav.jsx';
import Hero from './Hero.jsx';
import InsideMenu from './InsideMenu.jsx';
import TryDemo from './TryDemo.jsx';
import Pricing from './Pricing.jsx';
import Faq from './Faq.jsx';
import Contact from './Contact.jsx';

export default function NewSite() {
  return (
    <div style={{ background: 'var(--ink)' }}>
      <Nav />
      <Hero />
      <InsideMenu />
      <TryDemo />
      <Pricing />
      <Faq />
      <Contact />
    </div>
  );
}
