import PageLayout from './PageLayout.jsx';

export default function PrivacyPage() {
  return (
    <PageLayout>
      <h1 className="page__h1">Privacy Policy</h1>
      <p className="page__meta">Last updated: July 2026</p>

      <p className="page__p">
        Menuar provides premium digital menu experiences for restaurants, cafes
        and hospitality venues. We respect guest privacy. Visitors can browse
        Menuar menus without creating an account, logging in, or submitting
        sensitive personal information
      </p>

      <h2 className="page__h2">Information we do not collect</h2>
      <p className="page__p">
        Menuar does not require guests to provide any of the following:
      </p>
      <ul className="page__list">
        <li>account details</li>
        <li>passwords</li>
        <li>payment information</li>
        <li>government ID information</li>
        <li>sensitive personal information</li>
      </ul>

      <h2 className="page__h2">Basic technical information</h2>
      <p className="page__p">
        Like most websites, Menuar may process basic technical information
        needed to operate, protect and improve the website. This may include
        browser type, device type, page performance, approximate usage activity
        and technical logs handled by hosting or analytics providers
      </p>

      <h2 className="page__h2">Preferences</h2>
      <p className="page__p">
        Menuar may save simple preferences on the user&rsquo;s device, such as
        selected language or theme, to improve the browsing experience
      </p>

      <h2 className="page__h2">Restaurant information</h2>
      <p className="page__p">
        Restaurant menu pages may display public information provided by the
        restaurant, such as dish names, prices, photos, ingredients, working
        hours and contact links
      </p>

      <h2 className="page__h2">Third party links</h2>
      <p className="page__p">
        Menuar may link to third party services such as Instagram, TikTok,
        Facebook, WhatsApp or restaurant owned pages. These services have their
        own privacy policies and data practices
      </p>

      <h2 className="page__h2">Contact</h2>
      <p className="page__p">
        For privacy questions, contact us on WhatsApp at{' '}
        <a
          className="page__link page__phone"
          href="https://wa.me/995598119981"
          target="_blank"
          rel="noopener noreferrer"
        >
          +995 598 11 99 81
        </a>
      </p>

      <h2 className="page__h2">Changes to this policy</h2>
      <p className="page__p">
        We may update this Privacy Policy from time to time. The latest version
        will be available on this page
      </p>
    </PageLayout>
  );
}
