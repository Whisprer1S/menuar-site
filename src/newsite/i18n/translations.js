// Flat, namespaced keys. `en` holds the live copy. `ka` and `ru` currently
// mirror the English word for word as placeholders, so the site renders
// identically until the real translations are written. The provider falls back
// to English for any key that is missing or empty, so partial translation is
// safe: fill in `ka` and `ru` a few keys at a time.
//
// Deliberately NOT translated and still hardcoded in the components:
// the Menuar wordmark, the phone number, the prices and the lari symbol,
// the step numerals 01/02/03, and the tier names Essential/Signature/Bespoke.

const en = {
  // ---- shared across more than one component ----
  'common.talkToUs': 'Talk to us',
  'common.openDemoMenu': 'Open the demo menu',
  'common.messageUsOnWhatsApp': 'Message us on WhatsApp',
  'common.qrAlt': 'QR code for the demo menu',

  // ---- Nav (links are reused by both footers) ----
  'nav.howItWorks': 'How it works',
  'nav.theMenu': 'The menu',
  'nav.pricing': 'Pricing',
  'nav.language.switcher': 'Language',
  'nav.language.english': 'English',
  'nav.language.georgian': 'Georgian',
  'nav.language.russian': 'Russian',

  // ---- Hero ----
  'hero.eyebrow': 'Digital menus for restaurants',
  'hero.headline': 'A digital menu your guests will actually enjoy using',
  'hero.paragraph':
    'Beautiful on every phone, in three languages, with your signature dishes in photorealistic 3D. Guests scan a QR code at the table and the menu opens instantly',
  'hero.scanTitle': 'Scan to try it',
  'hero.scanNote': 'This is the same code that sits on the table',
  'hero.phoneAlt': 'The Menuar menu open on a phone',
  'hero.modelAlt': 'A dish shown in 3D',
  'hero.loading': 'Loading dish…',
  'hero.dragToRotate': 'Drag to rotate',

  // ---- How it works ----
  'howItWorks.eyebrow': 'How it works',
  'howItWorks.title': 'A menu built for your restaurant, not a template',
  'howItWorks.intro':
    'We don’t hand you a page builder. We build the whole thing for you, then keep it up to date as your menu changes',
  'howItWorks.step1.title': 'We talk',
  'howItWorks.step1.body':
    'You tell us about the venue, your menu and how you want it to feel. We look at your space and your dishes and agree what goes into the menu',
  'howItWorks.step2.title': 'We build it',
  'howItWorks.step2.body':
    'Design, photography and 3D scanning of your signature dishes. Every model is made from your real food, so what a guest sees is what arrives at the table',
  'howItWorks.step3.title': 'You hand it to your guests',
  'howItWorks.step3.body':
    'QR codes for your tables and a live menu in three languages. Menu changes and new dishes are handled by us, not left to you',

  // ---- Features ----
  'features.eyebrow': 'Inside the menu',
  'features.title': 'Everything a guest needs, in the palm of their hand',
  'features.ar.eyebrow': 'THE DIFFERENCE',
  'features.ar.line':
    'Guests see the real dish on their own table before they order',
  'features.ar.modelAlt': 'A dish shown in 3D on your table',
  'features.menu.title': 'Every dish photographed',
  'features.menu.body':
    'A clean, fast menu where every plate is shot properly, not a PDF someone zoomed into',
  'features.ingredients.title': 'Ingredients at a glance',
  'features.ingredients.body':
    'Allergies, vegetarian, spice level, all tagged on the dish so nobody has to ask',
  'features.language.title': 'Read in their language',
  'features.language.body':
    'Georgian, English and Russian on the same menu, so a tourist orders instead of leaving',
  'features.selection.title': 'Chosen before you arrive',
  'features.selection.body':
    'Guests add dishes as they browse and read the list back, so ordering takes seconds',

  // ---- Try the demo ----
  'tryDemo.eyebrow': 'TRY IT',
  'tryDemo.title': 'Scan it the way your guests will',
  'tryDemo.paragraph':
    'Point your phone at the code, or open the demo menu here. This is a real menu, running live, with real dishes in 3D',
  'tryDemo.note':
    'Every code we make is designed to match the venue it belongs to',

  // ---- Pricing ----
  'pricing.eyebrow': 'Pricing',
  'pricing.title': 'We build it, then we keep it running',
  'pricing.subtitle':
    'Every menu is built for the venue it belongs to, so we quote the setup after we talk. The monthly covers hosting and updates, and it stays small',
  'pricing.mostPopular': 'Most popular',
  'pricing.perMonth': ' / month',
  'pricing.setupFee': '+ one off setup fee',
  'pricing.essential.blurb': 'A beautiful menu for a focused offering',
  'pricing.essential.feature1': 'Your full menu, designed to match the venue',
  'pricing.essential.feature2': '3 signature dishes in photorealistic 3D',
  'pricing.essential.feature3': 'Georgian, English and Russian',
  'pricing.essential.feature4': 'QR codes for your tables',
  'pricing.essential.feature5': 'Price and text updates handled by us',
  'pricing.signature.blurb':
    'For venues that want their table to stop people mid scroll',
  'pricing.signature.feature1': 'Everything in Essential',
  'pricing.signature.feature2': '6 signature dishes in photorealistic 3D',
  'pricing.signature.feature3': 'Deeper custom design around your brand',
  'pricing.signature.feature4': 'Seasonal dish swaps included',
  'pricing.signature.feature5': 'Priority on changes',
  'pricing.bespoke.blurb': 'A one of a kind menu built from a blank page',
  'pricing.bespoke.feature1': 'Everything in Signature',
  'pricing.bespoke.feature2': '10 signature dishes in photorealistic 3D',
  'pricing.bespoke.feature3': 'A design built for you, not themed from a base',
  'pricing.bespoke.feature4': 'Extra AR dishes at a reduced rate',
  'pricing.bespoke.feature5': 'First in line for new features',
  'pricing.footnote':
    'Not sure which fits? Most venues start with six dishes and grow from there, we will tell you honestly what your menu needs',

  // ---- Contact band ----
  'contact.title': 'Let’s build your menu',
  'contact.text':
    'Send us a message and tell us about your venue, we will come back with what your menu could look like and what it would cost',

  // ---- Footer (shared by Contact.jsx and Footer.jsx) ----
  'footer.tagline': 'Beautiful digital menus for restaurants and cafes',
  'footer.menuHeading': 'Menu',
  'footer.contactHeading': 'Contact',
  'footer.about': 'About',
  'footer.privacy': 'Privacy',
  'footer.copyright': '© 2026 Menuar. All rights reserved',

  // ---- Standalone page shell ----
  'pageLayout.backToSite': 'Back to site',

  // ---- About page ----
  'about.title': 'About Menuar',
  'about.paragraph1':
    'Menuar builds premium digital menus for restaurants and cafes. A guest scans a QR code at the table and sees the real menu, with signature dishes in photorealistic 3D they can place on their own table before they order',
  'about.paragraph2':
    'Every 3D dish is made from the real food the restaurant serves, so what a guest sees is what arrives. That rule sits behind everything we build',
  'about.paragraph3':
    'Each menu is built by hand for the venue, designed around its brand and kept up to date as the menu changes. We work with a small number of restaurants in Tbilisi and Batumi',
  'about.closing': 'Want a menu like this for your venue?',

  // ---- Privacy page ----
  'privacy.title': 'Privacy Policy',
  'privacy.lastUpdated': 'Last updated: July 2026',
  'privacy.intro':
    'Menuar provides premium digital menu experiences for restaurants, cafes and hospitality venues. We respect guest privacy. Visitors can browse Menuar menus without creating an account, logging in, or submitting sensitive personal information',
  'privacy.notCollected.heading': 'Information we do not collect',
  'privacy.notCollected.intro':
    'Menuar does not require guests to provide any of the following:',
  'privacy.notCollected.item1': 'account details',
  'privacy.notCollected.item2': 'passwords',
  'privacy.notCollected.item3': 'payment information',
  'privacy.notCollected.item4': 'government ID information',
  'privacy.notCollected.item5': 'sensitive personal information',
  'privacy.technical.heading': 'Basic technical information',
  'privacy.technical.body':
    'Like most websites, Menuar may process basic technical information needed to operate, protect and improve the website. This may include browser type, device type, page performance, approximate usage activity and technical logs handled by hosting or analytics providers',
  'privacy.preferences.heading': 'Preferences',
  'privacy.preferences.body':
    'Menuar may save simple preferences on the user’s device, such as selected language or theme, to improve the browsing experience',
  'privacy.restaurant.heading': 'Restaurant information',
  'privacy.restaurant.body':
    'Restaurant menu pages may display public information provided by the restaurant, such as dish names, prices, photos, ingredients, working hours and contact links',
  'privacy.thirdParty.heading': 'Third party links',
  'privacy.thirdParty.body':
    'Menuar may link to third party services such as Instagram, TikTok, Facebook, WhatsApp or restaurant owned pages. These services have their own privacy policies and data practices',
  'privacy.contact.heading': 'Contact',
  'privacy.contact.body': 'For privacy questions, contact us on WhatsApp at',
  'privacy.changes.heading': 'Changes to this policy',
  'privacy.changes.body':
    'We may update this Privacy Policy from time to time. The latest version will be available on this page',
};

// Georgian. Placeholder values identical to English until the copy is
// written. Replace the values in place; anything left in English still
// renders correctly.
const ka = {
  'common.talkToUs': 'Talk to us',
  'common.openDemoMenu': 'Open the demo menu',
  'common.messageUsOnWhatsApp': 'Message us on WhatsApp',
  'common.qrAlt': 'QR code for the demo menu',
  'nav.howItWorks': 'How it works',
  'nav.theMenu': 'The menu',
  'nav.pricing': 'Pricing',
  'nav.language.switcher': 'Language',
  'nav.language.english': 'English',
  'nav.language.georgian': 'Georgian',
  'nav.language.russian': 'Russian',
  'hero.eyebrow': 'Digital menus for restaurants',
  'hero.headline': 'A digital menu your guests will actually enjoy using',
  'hero.paragraph':
    'Beautiful on every phone, in three languages, with your signature dishes in photorealistic 3D. Guests scan a QR code at the table and the menu opens instantly',
  'hero.scanTitle': 'Scan to try it',
  'hero.scanNote': 'This is the same code that sits on the table',
  'hero.phoneAlt': 'The Menuar menu open on a phone',
  'hero.modelAlt': 'A dish shown in 3D',
  'hero.loading': 'Loading dish…',
  'hero.dragToRotate': 'Drag to rotate',
  'howItWorks.eyebrow': 'How it works',
  'howItWorks.title': 'A menu built for your restaurant, not a template',
  'howItWorks.intro':
    'We don’t hand you a page builder. We build the whole thing for you, then keep it up to date as your menu changes',
  'howItWorks.step1.title': 'We talk',
  'howItWorks.step1.body':
    'You tell us about the venue, your menu and how you want it to feel. We look at your space and your dishes and agree what goes into the menu',
  'howItWorks.step2.title': 'We build it',
  'howItWorks.step2.body':
    'Design, photography and 3D scanning of your signature dishes. Every model is made from your real food, so what a guest sees is what arrives at the table',
  'howItWorks.step3.title': 'You hand it to your guests',
  'howItWorks.step3.body':
    'QR codes for your tables and a live menu in three languages. Menu changes and new dishes are handled by us, not left to you',
  'features.eyebrow': 'Inside the menu',
  'features.title': 'Everything a guest needs, in the palm of their hand',
  'features.ar.eyebrow': 'THE DIFFERENCE',
  'features.ar.line':
    'Guests see the real dish on their own table before they order',
  'features.ar.modelAlt': 'A dish shown in 3D on your table',
  'features.menu.title': 'Every dish photographed',
  'features.menu.body':
    'A clean, fast menu where every plate is shot properly, not a PDF someone zoomed into',
  'features.ingredients.title': 'Ingredients at a glance',
  'features.ingredients.body':
    'Allergies, vegetarian, spice level, all tagged on the dish so nobody has to ask',
  'features.language.title': 'Read in their language',
  'features.language.body':
    'Georgian, English and Russian on the same menu, so a tourist orders instead of leaving',
  'features.selection.title': 'Chosen before you arrive',
  'features.selection.body':
    'Guests add dishes as they browse and read the list back, so ordering takes seconds',
  'tryDemo.eyebrow': 'TRY IT',
  'tryDemo.title': 'Scan it the way your guests will',
  'tryDemo.paragraph':
    'Point your phone at the code, or open the demo menu here. This is a real menu, running live, with real dishes in 3D',
  'tryDemo.note':
    'Every code we make is designed to match the venue it belongs to',
  'pricing.eyebrow': 'Pricing',
  'pricing.title': 'We build it, then we keep it running',
  'pricing.subtitle':
    'Every menu is built for the venue it belongs to, so we quote the setup after we talk. The monthly covers hosting and updates, and it stays small',
  'pricing.mostPopular': 'Most popular',
  'pricing.perMonth': ' / month',
  'pricing.setupFee': '+ one off setup fee',
  'pricing.essential.blurb': 'A beautiful menu for a focused offering',
  'pricing.essential.feature1': 'Your full menu, designed to match the venue',
  'pricing.essential.feature2': '3 signature dishes in photorealistic 3D',
  'pricing.essential.feature3': 'Georgian, English and Russian',
  'pricing.essential.feature4': 'QR codes for your tables',
  'pricing.essential.feature5': 'Price and text updates handled by us',
  'pricing.signature.blurb':
    'For venues that want their table to stop people mid scroll',
  'pricing.signature.feature1': 'Everything in Essential',
  'pricing.signature.feature2': '6 signature dishes in photorealistic 3D',
  'pricing.signature.feature3': 'Deeper custom design around your brand',
  'pricing.signature.feature4': 'Seasonal dish swaps included',
  'pricing.signature.feature5': 'Priority on changes',
  'pricing.bespoke.blurb': 'A one of a kind menu built from a blank page',
  'pricing.bespoke.feature1': 'Everything in Signature',
  'pricing.bespoke.feature2': '10 signature dishes in photorealistic 3D',
  'pricing.bespoke.feature3': 'A design built for you, not themed from a base',
  'pricing.bespoke.feature4': 'Extra AR dishes at a reduced rate',
  'pricing.bespoke.feature5': 'First in line for new features',
  'pricing.footnote':
    'Not sure which fits? Most venues start with six dishes and grow from there, we will tell you honestly what your menu needs',
  'contact.title': 'Let’s build your menu',
  'contact.text':
    'Send us a message and tell us about your venue, we will come back with what your menu could look like and what it would cost',
  'footer.tagline': 'Beautiful digital menus for restaurants and cafes',
  'footer.menuHeading': 'Menu',
  'footer.contactHeading': 'Contact',
  'footer.about': 'About',
  'footer.privacy': 'Privacy',
  'footer.copyright': '© 2026 Menuar. All rights reserved',
  'pageLayout.backToSite': 'Back to site',
  'about.title': 'About Menuar',
  'about.paragraph1':
    'Menuar builds premium digital menus for restaurants and cafes. A guest scans a QR code at the table and sees the real menu, with signature dishes in photorealistic 3D they can place on their own table before they order',
  'about.paragraph2':
    'Every 3D dish is made from the real food the restaurant serves, so what a guest sees is what arrives. That rule sits behind everything we build',
  'about.paragraph3':
    'Each menu is built by hand for the venue, designed around its brand and kept up to date as the menu changes. We work with a small number of restaurants in Tbilisi and Batumi',
  'about.closing': 'Want a menu like this for your venue?',
  'privacy.title': 'Privacy Policy',
  'privacy.lastUpdated': 'Last updated: July 2026',
  'privacy.intro':
    'Menuar provides premium digital menu experiences for restaurants, cafes and hospitality venues. We respect guest privacy. Visitors can browse Menuar menus without creating an account, logging in, or submitting sensitive personal information',
  'privacy.notCollected.heading': 'Information we do not collect',
  'privacy.notCollected.intro':
    'Menuar does not require guests to provide any of the following:',
  'privacy.notCollected.item1': 'account details',
  'privacy.notCollected.item2': 'passwords',
  'privacy.notCollected.item3': 'payment information',
  'privacy.notCollected.item4': 'government ID information',
  'privacy.notCollected.item5': 'sensitive personal information',
  'privacy.technical.heading': 'Basic technical information',
  'privacy.technical.body':
    'Like most websites, Menuar may process basic technical information needed to operate, protect and improve the website. This may include browser type, device type, page performance, approximate usage activity and technical logs handled by hosting or analytics providers',
  'privacy.preferences.heading': 'Preferences',
  'privacy.preferences.body':
    'Menuar may save simple preferences on the user’s device, such as selected language or theme, to improve the browsing experience',
  'privacy.restaurant.heading': 'Restaurant information',
  'privacy.restaurant.body':
    'Restaurant menu pages may display public information provided by the restaurant, such as dish names, prices, photos, ingredients, working hours and contact links',
  'privacy.thirdParty.heading': 'Third party links',
  'privacy.thirdParty.body':
    'Menuar may link to third party services such as Instagram, TikTok, Facebook, WhatsApp or restaurant owned pages. These services have their own privacy policies and data practices',
  'privacy.contact.heading': 'Contact',
  'privacy.contact.body': 'For privacy questions, contact us on WhatsApp at',
  'privacy.changes.heading': 'Changes to this policy',
  'privacy.changes.body':
    'We may update this Privacy Policy from time to time. The latest version will be available on this page',
};

// Russian. Placeholder values identical to English until the copy is
// written. Replace the values in place; anything left in English still
// renders correctly.
const ru = {
  'common.talkToUs': 'Talk to us',
  'common.openDemoMenu': 'Open the demo menu',
  'common.messageUsOnWhatsApp': 'Message us on WhatsApp',
  'common.qrAlt': 'QR code for the demo menu',
  'nav.howItWorks': 'How it works',
  'nav.theMenu': 'The menu',
  'nav.pricing': 'Pricing',
  'nav.language.switcher': 'Language',
  'nav.language.english': 'English',
  'nav.language.georgian': 'Georgian',
  'nav.language.russian': 'Russian',
  'hero.eyebrow': 'Digital menus for restaurants',
  'hero.headline': 'A digital menu your guests will actually enjoy using',
  'hero.paragraph':
    'Beautiful on every phone, in three languages, with your signature dishes in photorealistic 3D. Guests scan a QR code at the table and the menu opens instantly',
  'hero.scanTitle': 'Scan to try it',
  'hero.scanNote': 'This is the same code that sits on the table',
  'hero.phoneAlt': 'The Menuar menu open on a phone',
  'hero.modelAlt': 'A dish shown in 3D',
  'hero.loading': 'Loading dish…',
  'hero.dragToRotate': 'Drag to rotate',
  'howItWorks.eyebrow': 'How it works',
  'howItWorks.title': 'A menu built for your restaurant, not a template',
  'howItWorks.intro':
    'We don’t hand you a page builder. We build the whole thing for you, then keep it up to date as your menu changes',
  'howItWorks.step1.title': 'We talk',
  'howItWorks.step1.body':
    'You tell us about the venue, your menu and how you want it to feel. We look at your space and your dishes and agree what goes into the menu',
  'howItWorks.step2.title': 'We build it',
  'howItWorks.step2.body':
    'Design, photography and 3D scanning of your signature dishes. Every model is made from your real food, so what a guest sees is what arrives at the table',
  'howItWorks.step3.title': 'You hand it to your guests',
  'howItWorks.step3.body':
    'QR codes for your tables and a live menu in three languages. Menu changes and new dishes are handled by us, not left to you',
  'features.eyebrow': 'Inside the menu',
  'features.title': 'Everything a guest needs, in the palm of their hand',
  'features.ar.eyebrow': 'THE DIFFERENCE',
  'features.ar.line':
    'Guests see the real dish on their own table before they order',
  'features.ar.modelAlt': 'A dish shown in 3D on your table',
  'features.menu.title': 'Every dish photographed',
  'features.menu.body':
    'A clean, fast menu where every plate is shot properly, not a PDF someone zoomed into',
  'features.ingredients.title': 'Ingredients at a glance',
  'features.ingredients.body':
    'Allergies, vegetarian, spice level, all tagged on the dish so nobody has to ask',
  'features.language.title': 'Read in their language',
  'features.language.body':
    'Georgian, English and Russian on the same menu, so a tourist orders instead of leaving',
  'features.selection.title': 'Chosen before you arrive',
  'features.selection.body':
    'Guests add dishes as they browse and read the list back, so ordering takes seconds',
  'tryDemo.eyebrow': 'TRY IT',
  'tryDemo.title': 'Scan it the way your guests will',
  'tryDemo.paragraph':
    'Point your phone at the code, or open the demo menu here. This is a real menu, running live, with real dishes in 3D',
  'tryDemo.note':
    'Every code we make is designed to match the venue it belongs to',
  'pricing.eyebrow': 'Pricing',
  'pricing.title': 'We build it, then we keep it running',
  'pricing.subtitle':
    'Every menu is built for the venue it belongs to, so we quote the setup after we talk. The monthly covers hosting and updates, and it stays small',
  'pricing.mostPopular': 'Most popular',
  'pricing.perMonth': ' / month',
  'pricing.setupFee': '+ one off setup fee',
  'pricing.essential.blurb': 'A beautiful menu for a focused offering',
  'pricing.essential.feature1': 'Your full menu, designed to match the venue',
  'pricing.essential.feature2': '3 signature dishes in photorealistic 3D',
  'pricing.essential.feature3': 'Georgian, English and Russian',
  'pricing.essential.feature4': 'QR codes for your tables',
  'pricing.essential.feature5': 'Price and text updates handled by us',
  'pricing.signature.blurb':
    'For venues that want their table to stop people mid scroll',
  'pricing.signature.feature1': 'Everything in Essential',
  'pricing.signature.feature2': '6 signature dishes in photorealistic 3D',
  'pricing.signature.feature3': 'Deeper custom design around your brand',
  'pricing.signature.feature4': 'Seasonal dish swaps included',
  'pricing.signature.feature5': 'Priority on changes',
  'pricing.bespoke.blurb': 'A one of a kind menu built from a blank page',
  'pricing.bespoke.feature1': 'Everything in Signature',
  'pricing.bespoke.feature2': '10 signature dishes in photorealistic 3D',
  'pricing.bespoke.feature3': 'A design built for you, not themed from a base',
  'pricing.bespoke.feature4': 'Extra AR dishes at a reduced rate',
  'pricing.bespoke.feature5': 'First in line for new features',
  'pricing.footnote':
    'Not sure which fits? Most venues start with six dishes and grow from there, we will tell you honestly what your menu needs',
  'contact.title': 'Let’s build your menu',
  'contact.text':
    'Send us a message and tell us about your venue, we will come back with what your menu could look like and what it would cost',
  'footer.tagline': 'Beautiful digital menus for restaurants and cafes',
  'footer.menuHeading': 'Menu',
  'footer.contactHeading': 'Contact',
  'footer.about': 'About',
  'footer.privacy': 'Privacy',
  'footer.copyright': '© 2026 Menuar. All rights reserved',
  'pageLayout.backToSite': 'Back to site',
  'about.title': 'About Menuar',
  'about.paragraph1':
    'Menuar builds premium digital menus for restaurants and cafes. A guest scans a QR code at the table and sees the real menu, with signature dishes in photorealistic 3D they can place on their own table before they order',
  'about.paragraph2':
    'Every 3D dish is made from the real food the restaurant serves, so what a guest sees is what arrives. That rule sits behind everything we build',
  'about.paragraph3':
    'Each menu is built by hand for the venue, designed around its brand and kept up to date as the menu changes. We work with a small number of restaurants in Tbilisi and Batumi',
  'about.closing': 'Want a menu like this for your venue?',
  'privacy.title': 'Privacy Policy',
  'privacy.lastUpdated': 'Last updated: July 2026',
  'privacy.intro':
    'Menuar provides premium digital menu experiences for restaurants, cafes and hospitality venues. We respect guest privacy. Visitors can browse Menuar menus without creating an account, logging in, or submitting sensitive personal information',
  'privacy.notCollected.heading': 'Information we do not collect',
  'privacy.notCollected.intro':
    'Menuar does not require guests to provide any of the following:',
  'privacy.notCollected.item1': 'account details',
  'privacy.notCollected.item2': 'passwords',
  'privacy.notCollected.item3': 'payment information',
  'privacy.notCollected.item4': 'government ID information',
  'privacy.notCollected.item5': 'sensitive personal information',
  'privacy.technical.heading': 'Basic technical information',
  'privacy.technical.body':
    'Like most websites, Menuar may process basic technical information needed to operate, protect and improve the website. This may include browser type, device type, page performance, approximate usage activity and technical logs handled by hosting or analytics providers',
  'privacy.preferences.heading': 'Preferences',
  'privacy.preferences.body':
    'Menuar may save simple preferences on the user’s device, such as selected language or theme, to improve the browsing experience',
  'privacy.restaurant.heading': 'Restaurant information',
  'privacy.restaurant.body':
    'Restaurant menu pages may display public information provided by the restaurant, such as dish names, prices, photos, ingredients, working hours and contact links',
  'privacy.thirdParty.heading': 'Third party links',
  'privacy.thirdParty.body':
    'Menuar may link to third party services such as Instagram, TikTok, Facebook, WhatsApp or restaurant owned pages. These services have their own privacy policies and data practices',
  'privacy.contact.heading': 'Contact',
  'privacy.contact.body': 'For privacy questions, contact us on WhatsApp at',
  'privacy.changes.heading': 'Changes to this policy',
  'privacy.changes.body':
    'We may update this Privacy Policy from time to time. The latest version will be available on this page',
};

export const translations = { en, ka, ru };
export const FALLBACK_LANGUAGE = 'en';
