import PageLayout from './PageLayout.jsx';

export default function AboutPage() {
  return (
    <PageLayout>
      <h1 className="page__h1">About Menuar</h1>

      <p className="page__p">
        Menuar builds premium digital menus for restaurants and cafes. A guest
        scans a QR code at the table and sees the real menu, with signature
        dishes in photorealistic 3D they can place on their own table before
        they order
      </p>

      <p className="page__p">
        Every 3D dish is made from the real food the restaurant serves, so what
        a guest sees is what arrives. That rule sits behind everything we build
      </p>

      <p className="page__p">
        Each menu is built by hand for the venue, designed around its brand and
        kept up to date as the menu changes. We work with a small number of
        restaurants in Tbilisi and Batumi
      </p>

      <p className="page__closing">
        Want a menu like this for your venue?{' '}
        <a
          className="page__link"
          href="https://wa.me/995598119981"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us on WhatsApp
        </a>
      </p>
    </PageLayout>
  );
}

