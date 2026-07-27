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

  // ---- FAQ ----
  'faq.eyebrow': 'Questions',
  'faq.title': 'The things people ask before they message us',
  'faq.q1.question': 'What exactly is Menuar?',
  'faq.q1.answer': 'Menuar is a beautiful digital menu for your restaurant. Guests scan a QR code at the table and the menu opens on their phone, with your dishes photographed properly and your signature dishes shown in 3D. We design it around your venue and keep it running for you',
  'faq.q2.question': 'Is this just AR, or a full menu?',
  'faq.q2.answer': 'It is a full menu first. Every dish, every category, prices, ingredients and allergens, in three languages, laid out cleanly and fast on any phone. The 3D and AR dishes are the standout feature on top of that, not the whole thing',
  'faq.q3.question': 'Do I need to install anything? Do my guests?',
  'faq.q3.answer': 'Nobody installs anything. You do not, and your guests do not. They point their phone camera at the QR code on the table and the menu opens in their browser instantly, no app and no download',
  'faq.q4.question': 'How is this different from the free QR menu my POS already gives me?',
  'faq.q4.answer': 'A POS QR menu is usually a plain list or a PDF, the same template every venue gets. Menuar is designed around your brand, every dish is photographed, and your signature dishes appear in real 3D that guests can place on their own table. That is a different thing from a free menu bolted onto a cash register',
  'faq.q5.question': 'Do you replace my POS or cash register?',
  'faq.q5.answer': 'No. Menuar is the menu your guests see, not the system your kitchen and till run on. Your POS and fiscal register stay exactly as they are. We sit alongside them and make the part the guest touches beautiful',
  'faq.q6.question': 'How much does it cost?',
  'faq.q6.answer': 'There is a one off setup fee to build your menu, and a small monthly fee that covers hosting and updates. The setup depends on how many dishes and how much custom design you want, so we quote it after we talk. The monthly stays small on every plan',
  'faq.q7.question': 'How long does it take to build?',
  'faq.q7.answer': 'Each 3D dish is scanned and finished by hand from your real food, so a full menu takes a few weeks depending on the number of dishes. We take on a small number of venues at a time on purpose, because the quality of each model matters more than speed',
  'faq.q8.question': 'What if my menu changes?',
  'faq.q8.answer': 'You tell us and we handle it. Price changes, new dishes, seasonal swaps, all done by us, not left for you to figure out in a dashboard. Keeping the menu current is part of what the monthly covers',
  'faq.q9.question': 'Are the 3D dishes real?',
  'faq.q9.answer': 'Yes, and this is the rule we never break. Every 3D model is made from the actual dish the restaurant serves, scanned from the real food. What a guest sees on their table is exactly what arrives on it',
  'faq.q10.question': 'What languages does the menu support?',
  'faq.q10.answer': 'Georgian, English and Russian, on the same menu, switchable with one tap. A tourist reads it in their own language and orders instead of leaving, which is worth real money on a busy night',
  'faq.q11.question': 'Which venues is this for?',
  'faq.q11.answer': 'Cafes, restaurants, sushi and Asian spots, pizza places, brunch spots and wine bars, the kind of venue that already cares how it looks. We work with a small number of places in Tbilisi and Batumi',
  'faq.q12.question': 'How do I start?',
  'faq.q12.answer': 'You message us on WhatsApp and tell us about your venue. We talk through what your menu needs, then we build it and hand it over ready to put on your tables. That is the whole process',
};

// Georgian.
const ka = {
  'common.talkToUs': 'დაგვიკავშირდით',
  'common.openDemoMenu': 'დემო მენიუს გახსნა',
  'common.messageUsOnWhatsApp': 'მოგვწერეთ WhatsApp-ზე',
  'common.qrAlt': 'QR კოდი დემო მენიუსთვის',
  'nav.howItWorks': 'როგორ მუშაობს',
  'nav.theMenu': 'მენიუ',
  'nav.pricing': 'ფასები',
  'nav.language.switcher': 'ენა',
  'nav.language.english': 'ინგლისური',
  'nav.language.georgian': 'ქართული',
  'nav.language.russian': 'რუსული',
  'hero.eyebrow': 'ციფრული მენიუები რესტორნებისთვის',
  'hero.headline': 'ციფრული მენიუ, რომლითაც სტუმრები სიამოვნებით ისარგებლებენ',
  'hero.paragraph':
    'ლამაზი ყველა ტელეფონზე, სამ ენაზე, თქვენი ფირმული კერძებით ფოტორეალისტურ 3D-ში. სტუმარი მაგიდასთან ასკანერებს QR კოდს და მენიუ მყისვე იხსნება',
  'hero.scanTitle': 'დაასკანერეთ და სცადეთ',
  'hero.scanNote': 'ეს იგივე კოდია, რომელიც მაგიდაზე დგას',
  'hero.phoneAlt': 'Menuar-ის მენიუ ტელეფონში',
  'hero.modelAlt': 'კერძი 3D-ში',
  'hero.loading': 'იტვირთება…',
  'hero.dragToRotate': 'გადაათრიეთ მოსატრიალებლად',
  'howItWorks.eyebrow': 'როგორ მუშაობს',
  'howItWorks.title': 'მენიუ, აგებული თქვენი რესტორნისთვის და არა შაბლონიდან',
  'howItWorks.intro':
    'ჩვენ არ გაძლევთ კონსტრუქტორს. ყველაფერს ჩვენ ვაკეთებთ თქვენთვის და შემდეგ ვაახლებთ მენიუს ცვლილებებთან ერთად',
  'howItWorks.step1.title': 'ვსაუბრობთ',
  'howItWorks.step1.body':
    'თქვენ გვიყვებით სივრცეზე, მენიუზე და იმაზე, როგორი განწყობა გინდათ. ჩვენ ვათვალიერებთ თქვენს სივრცესა და კერძებს და ვთანხმდებით, რა შევა მენიუში',
  'howItWorks.step2.title': 'ვქმნით',
  'howItWorks.step2.body':
    'დიზაინი, ფოტოგრაფია და თქვენი ფირმული კერძების 3D სკანირება. ყოველი მოდელი თქვენივე ნამდვილი საკვებისგან იქმნება, ამიტომ სტუმარი ზუსტად იმას ხედავს, რაც მაგიდაზე მიდის',
  'howItWorks.step3.title': 'თქვენ სტუმრებს გადასცემთ',
  'howItWorks.step3.body':
    'QR კოდები მაგიდებისთვის და ცოცხალი მენიუ სამ ენაზე. მენიუს ცვლილებებსა და ახალ კერძებს ჩვენ ვუვლით და არა თქვენ',
  'features.eyebrow': 'მენიუს შიგნით',
  'features.title': 'ყველაფერი, რაც სტუმარს სჭირდება, ხელისგულზე',
  'features.ar.eyebrow': 'განსხვავება',
  'features.ar.line':
    'სტუმარი ხედავს ნამდვილ კერძს საკუთარ მაგიდაზე შეკვეთამდე',
  'features.ar.modelAlt': 'კერძი 3D-ში თქვენს მაგიდაზე',
  'features.menu.title': 'ყველა კერძი გადაღებული',
  'features.menu.body':
    'სუფთა და სწრაფი მენიუ, სადაც ყოველი კერძი სწორად არის გადაღებული და არა PDF, რომელსაც ვიღაც აზუმებს',
  'features.ingredients.title': 'ინგრედიენტები ერთი შეხედვით',
  'features.ingredients.body':
    'ალერგენები, ვეგეტარიანული, სიცხარე, ყველაფერი კერძზეა მონიშნული, რომ კითხვა აღარ დასჭირდეთ',
  'features.language.title': 'წაიკითხავენ თავიანთ ენაზე',
  'features.language.body':
    'ქართული, ინგლისური და რუსული ერთსა და იმავე მენიუში, რომ ტურისტმა შეუკვეთოს და არ წავიდეს',
  'features.selection.title': 'არჩეული მოსვლამდე',
  'features.selection.body':
    'სტუმრები კერძებს დათვალიერებისას ამატებენ და სიას უკან კითხულობენ, ამიტომ შეკვეთას წამები სჭირდება',
  'tryDemo.eyebrow': 'სცადეთ',
  'tryDemo.title': 'დაასკანერეთ ისე, როგორც თქვენი სტუმრები გააკეთებენ',
  'tryDemo.paragraph':
    'მიმართეთ ტელეფონი კოდს ან გახსენით დემო მენიუ აქვე. ეს რეალური მენიუა, ცოცხლად მუშაობს, ნამდვილი კერძებით 3D-ში',
  'tryDemo.note': 'ყოველი კოდი იმ სივრცეს ერგება, რომელსაც ეკუთვნის',
  'pricing.eyebrow': 'ფასები',
  'pricing.title': 'ჩვენ ვქმნით და შემდეგ ვინახავთ მუშა მდგომარეობაში',
  'pricing.subtitle':
    'ყოველი მენიუ იმ სივრცისთვის იქმნება, რომელსაც ეკუთვნის, ამიტომ დაყენების ფასს საუბრის შემდეგ გეტყვით. ყოველთვიური ჰოსტინგსა და განახლებებს ფარავს და მცირე რჩება',
  'pricing.mostPopular': 'ყველაზე პოპულარული',
  'pricing.perMonth': ' / თვეში',
  'pricing.setupFee': '+ ერთჯერადი დაყენების საფასური',
  'pricing.essential.blurb': 'ლამაზი მენიუ ფოკუსირებული შეთავაზებისთვის',
  'pricing.essential.feature1':
    'თქვენი სრული მენიუ, სივრცის შესაბამისი დიზაინით',
  'pricing.essential.feature2': '3 ფირმული კერძი ფოტორეალისტურ 3D-ში',
  'pricing.essential.feature3': 'ქართული, ინგლისური და რუსული',
  'pricing.essential.feature4': 'QR კოდები თქვენი მაგიდებისთვის',
  'pricing.essential.feature5': 'ფასებისა და ტექსტის განახლებას ჩვენ ვუვლით',
  'pricing.signature.blurb':
    'სივრცეებისთვის, რომელთაც სურთ მაგიდამ ადამიანი გააჩეროს',
  'pricing.signature.feature1': 'ყველაფერი Essential-ში',
  'pricing.signature.feature2': '6 ფირმული კერძი ფოტორეალისტურ 3D-ში',
  'pricing.signature.feature3':
    'უფრო ღრმა ინდივიდუალური დიზაინი თქვენი ბრენდის ირგვლივ',
  'pricing.signature.feature4': 'სეზონური კერძების ცვლილება შედის',
  'pricing.signature.feature5': 'პრიორიტეტი ცვლილებებზე',
  'pricing.bespoke.blurb': 'ერთადერთი მენიუ, აგებული სუფთა ფურცლიდან',
  'pricing.bespoke.feature1': 'ყველაფერი Signature-ში',
  'pricing.bespoke.feature2': '10 ფირმული კერძი ფოტორეალისტურ 3D-ში',
  'pricing.bespoke.feature3':
    'დიზაინი თქვენთვის შექმნილი და არა ბაზიდან მორგებული',
  'pricing.bespoke.feature4': 'დამატებითი AR კერძები შემცირებულ ფასად',
  'pricing.bespoke.feature5': 'პირველები ახალ ფუნქციებზე',
  'pricing.footnote':
    'ვერ ირჩევთ? სივრცეების უმეტესობა ექვსი კერძით იწყებს და შემდეგ ზრდის, ჩვენ გულწრფელად გეტყვით, რა სჭირდება თქვენს მენიუს',
  'contact.title': 'მოდით, ავაწყოთ თქვენი მენიუ',
  'contact.text':
    'მოგვწერეთ და გვიამბეთ თქვენს სივრცეზე, ჩვენ დაგიბრუნდებით იმით, როგორი შეიძლება იყოს თქვენი მენიუ და რა დაჯდება',
  'footer.tagline': 'ლამაზი ციფრული მენიუები რესტორნებისა და კაფეებისთვის',
  'footer.menuHeading': 'მენიუ',
  'footer.contactHeading': 'კონტაქტი',
  'footer.about': 'შესახებ',
  'footer.privacy': 'კონფიდენციალურობა',
  'footer.copyright': '© 2026 Menuar. ყველა უფლება დაცულია',
  'pageLayout.backToSite': 'საიტზე დაბრუნება',
  'about.title': 'Menuar-ის შესახებ',
  'about.paragraph1':
    'Menuar ქმნის პრემიუმ ციფრულ მენიუებს რესტორნებისა და კაფეებისთვის. სტუმარი მაგიდასთან ასკანერებს QR კოდს და ხედავს რეალურ მენიუს, ფირმული კერძებით ფოტორეალისტურ 3D-ში, რომელთაც შეკვეთამდე საკუთარ მაგიდაზე დადებს',
  'about.paragraph2':
    'ყოველი 3D კერძი იმ ნამდვილი საკვებისგან იქმნება, რომელსაც რესტორანი სთავაზობს, ამიტომ სტუმარი ზუსტად იმას ხედავს, რაც მიაქვთ. ეს წესი ყველაფრის უკან დგას, რასაც ვქმნით',
  'about.paragraph3':
    'ყოველი მენიუ ხელით იქმნება კონკრეტული სივრცისთვის, მისი ბრენდის ირგვლივ და ახლდება მენიუს ცვლილებებთან ერთად. ვმუშაობთ თბილისისა და ბათუმის რამდენიმე რესტორანთან',
  'about.closing': 'გინდათ ასეთი მენიუ თქვენი სივრცისთვის?',
  'privacy.title': 'კონფიდენციალურობის პოლიტიკა',
  'privacy.lastUpdated': 'ბოლო განახლება: 2026 წლის ივლისი',
  'privacy.intro':
    'Menuar აწვდის პრემიუმ ციფრული მენიუს გამოცდილებას რესტორნებს, კაფეებსა და სასტუმრო სივრცეებს. ჩვენ პატივს ვცემთ სტუმრის კონფიდენციალურობას. ვიზიტორებს შეუძლიათ დაათვალიერონ Menuar-ის მენიუები ანგარიშის შექმნის, ავტორიზაციისა და პირადი მონაცემების მიწოდების გარეშე',
  'privacy.notCollected.heading': 'ინფორმაცია, რომელსაც არ ვაგროვებთ',
  'privacy.notCollected.intro': 'Menuar სტუმრებს არ სთხოვს შემდეგს:',
  'privacy.notCollected.item1': 'ანგარიშის მონაცემები',
  'privacy.notCollected.item2': 'პაროლები',
  'privacy.notCollected.item3': 'საგადახდო ინფორმაცია',
  'privacy.notCollected.item4': 'პირადობის დამადასტურებელი მონაცემები',
  'privacy.notCollected.item5': 'მგრძნობიარე პირადი ინფორმაცია',
  'privacy.technical.heading': 'ძირითადი ტექნიკური ინფორმაცია',
  'privacy.technical.body':
    'როგორც უმეტესი ვებსაიტი, Menuar შესაძლოა ამუშავებდეს ძირითად ტექნიკურ ინფორმაციას, რომელიც საჭიროა საიტის მუშაობის, დაცვისა და გაუმჯობესებისთვის. ეს შეიძლება მოიცავდეს ბრაუზერის ტიპს, მოწყობილობის ტიპს, გვერდის წარმადობას, სავარაუდო აქტივობასა და ტექნიკურ ჩანაწერებს, რომელთაც ჰოსტინგის ან ანალიტიკის მომწოდებლები ამუშავებენ',
  'privacy.preferences.heading': 'პარამეტრები',
  'privacy.preferences.body':
    'Menuar შესაძლოა მომხმარებლის მოწყობილობაზე შეინახოს მარტივი პარამეტრები, მაგალითად არჩეული ენა ან თემა, დათვალიერების გასაუმჯობესებლად',
  'privacy.restaurant.heading': 'რესტორნის ინფორმაცია',
  'privacy.restaurant.body':
    'რესტორნის მენიუს გვერდები შესაძლოა აჩვენებდეს რესტორნის მიერ მოწოდებულ საჯარო ინფორმაციას, მაგალითად კერძების სახელებს, ფასებს, ფოტოებს, ინგრედიენტებს, სამუშაო საათებსა და საკონტაქტო ბმულებს',
  'privacy.thirdParty.heading': 'მესამე მხარის ბმულები',
  'privacy.thirdParty.body':
    'Menuar შესაძლოა მიუთითებდეს მესამე მხარის სერვისებზე, როგორიცაა Instagram, TikTok, Facebook, WhatsApp ან რესტორნის საკუთარი გვერდები. ამ სერვისებს აქვთ საკუთარი კონფიდენციალურობის პოლიტიკა და მონაცემთა დამუშავების პრაქტიკა',
  'privacy.contact.heading': 'კონტაქტი',
  'privacy.contact.body':
    'კონფიდენციალურობასთან დაკავშირებული კითხვებისთვის დაგვიკავშირდით WhatsApp-ზე',
  'privacy.changes.heading': 'ცვლილებები ამ პოლიტიკაში',
  'privacy.changes.body':
    'შესაძლოა დროდადრო განვაახლოთ ეს კონფიდენციალურობის პოლიტიკა. უახლესი ვერსია ხელმისაწვდომი იქნება ამ გვერდზე',

  // ---- FAQ ----
  'faq.eyebrow': 'კითხვები',
  'faq.title': 'რასაც ხალხი გვეკითხება, სანამ მოგვწერს',
  'faq.q1.question': 'რა არის Menuar ზუსტად?',
  'faq.q1.answer': 'Menuar არის ლამაზი ციფრული მენიუ თქვენი რესტორნისთვის. სტუმარი მაგიდასთან ასკანერებს QR კოდს და მენიუ ტელეფონში იხსნება, თქვენი კერძების სწორად გადაღებული ფოტოებით და ფირმული კერძებით 3D-ში. ჩვენ მას თქვენი სივრცის ირგვლივ ვქმნით და ვინახავთ მუშა მდგომარეობაში',
  'faq.q2.question': 'ეს მხოლოდ AR-ია თუ სრული მენიუ?',
  'faq.q2.answer': 'პირველ რიგში ეს სრული მენიუა. ყველა კერძი, ყველა კატეგორია, ფასები, ინგრედიენტები და ალერგენები, სამ ენაზე, სუფთად და სწრაფად ნებისმიერ ტელეფონზე. 3D და AR კერძები ამის თავზე დამატებული მთავარი მახასიათებელია და არა თავად მთელი მენიუ',
  'faq.q3.question': 'რამე უნდა დავაინსტალირო? ჩემმა სტუმრებმა?',
  'faq.q3.answer': 'არავინ არაფერს აინსტალირებს. არც თქვენ და არც თქვენი სტუმრები. ისინი ტელეფონის კამერას მიმართავენ მაგიდაზე არსებულ QR კოდს და მენიუ მყისვე იხსნება ბრაუზერში, აპლიკაციისა და ჩამოტვირთვის გარეშე',
  'faq.q4.question': 'რით განსხვავდება ეს იმ უფასო QR მენიუსგან, რომელსაც ჩემი POS უკვე მაძლევს?',
  'faq.q4.answer': 'POS-ის QR მენიუ ჩვეულებრივ უბრალო სიაა ან PDF, იგივე შაბლონი, რომელსაც ყველა სივრცე იღებს. Menuar თქვენი ბრენდის ირგვლივ იქმნება, ყველა კერძი გადაღებულია და თქვენი ფირმული კერძები ნამდვილ 3D-ში ჩნდება, რომელსაც სტუმარი საკუთარ მაგიდაზე დადებს. ეს სხვა რამეა, ვიდრე სალაროზე მიბმული უფასო მენიუ',
  'faq.q5.question': 'ცვლით ჩემს POS-ს ან სალაროს?',
  'faq.q5.answer': 'არა. Menuar ის მენიუა, რომელსაც სტუმარი ხედავს და არა სისტემა, რომელზეც სამზარეულო და სალარო მუშაობს. თქვენი POS და ფისკალური სალარო უცვლელი რჩება. ჩვენ მათ გვერდით ვდგავართ და იმ ნაწილს ვალამაზებთ, რომელსაც სტუმარი ეხება',
  'faq.q6.question': 'რა ღირს?',
  'faq.q6.answer': 'არის ერთჯერადი დაყენების საფასური მენიუს ასაგებად და მცირე ყოველთვიური საფასური, რომელიც ჰოსტინგსა და განახლებებს ფარავს. დაყენება დამოკიდებულია იმაზე, რამდენი კერძი და რამდენად ინდივიდუალური დიზაინი გინდათ, ამიტომ ფასს საუბრის შემდეგ გეტყვით. ყოველთვიური ყველა პაკეტზე მცირე რჩება',
  'faq.q7.question': 'რამდენი დრო სჭირდება აგებას?',
  'faq.q7.answer': 'ყოველი 3D კერძი ხელით სკანირდება და მუშავდება თქვენივე ნამდვილი საკვებისგან, ამიტომ სრულ მენიუს რამდენიმე კვირა სჭირდება კერძების რაოდენობის მიხედვით. ჩვენ განზრახ ვიღებთ რამდენიმე სივრცეს ერთდროულად, რადგან ყოველი მოდელის ხარისხი უფრო მნიშვნელოვანია, ვიდრე სისწრაფე',
  'faq.q8.question': 'რა მოხდება, თუ ჩემი მენიუ შეიცვლება?',
  'faq.q8.answer': 'თქვენ გვეუბნებით და ჩვენ ვაგვარებთ. ფასების ცვლილება, ახალი კერძები, სეზონური ცვლილებები, ყველაფერს ჩვენ ვაკეთებთ და არა თქვენ პანელში. მენიუს განახლება იმის ნაწილია, რასაც ყოველთვიური ფარავს',
  'faq.q9.question': 'ნამდვილია 3D კერძები?',
  'faq.q9.answer': 'დიახ, და ეს წესი ჩვენ არასდროს ვარღვევთ. ყოველი 3D მოდელი იმ ნამდვილი კერძისგან იქმნება, რომელსაც რესტორანი სთავაზობს, ნამდვილი საკვების სკანირებით. რასაც სტუმარი მაგიდაზე ხედავს, ზუსტად ის მიდის მაგიდაზე',
  'faq.q10.question': 'რა ენებს უჭერს მხარს მენიუ?',
  'faq.q10.answer': 'ქართული, ინგლისური და რუსული, ერთსა და იმავე მენიუში, ერთი შეხებით გადართვადი. ტურისტი მას თავის ენაზე კითხულობს და შეუკვეთავს ნაცვლად იმისა, რომ წავიდეს, რაც დატვირთულ საღამოს ნამდვილ ფულს ნიშნავს',
  'faq.q11.question': 'რომელი სივრცეებისთვისაა ეს?',
  'faq.q11.answer': 'კაფეები, რესტორნები, სუშისა და აზიური ადგილები, პიცერიები, ბრანჩის ადგილები და ღვინის ბარები, ის სივრცე, რომელსაც უკვე აინტერესებს, როგორ გამოიყურება. ჩვენ თბილისისა და ბათუმის რამდენიმე ადგილთან ვმუშაობთ',
  'faq.q12.question': 'როგორ დავიწყო?',
  'faq.q12.answer': 'მოგვწერეთ WhatsApp-ზე და გვიამბეთ თქვენს სივრცეზე. ჩვენ ერთად განვიხილავთ, რა სჭირდება თქვენს მენიუს, შემდეგ ავაგებთ და მზად გადმოგცემთ მაგიდებზე დასადებად. ეს არის მთელი პროცესი',
};

// Russian.
const ru = {
  'common.talkToUs': 'Напишите нам',
  'common.openDemoMenu': 'Открыть демо меню',
  'common.messageUsOnWhatsApp': 'Написать в WhatsApp',
  'common.qrAlt': 'QR код для демо меню',
  'nav.howItWorks': 'Как это работает',
  'nav.theMenu': 'Меню',
  'nav.pricing': 'Цены',
  'nav.language.switcher': 'Язык',
  'nav.language.english': 'Английский',
  'nav.language.georgian': 'Грузинский',
  'nav.language.russian': 'Русский',
  'hero.eyebrow': 'Цифровые меню для ресторанов',
  'hero.headline': 'Цифровое меню, которым гостям приятно пользоваться',
  'hero.paragraph':
    'Красиво на любом телефоне, на трёх языках, с вашими фирменными блюдами в фотореалистичном 3D. Гость сканирует QR код за столом и меню открывается мгновенно',
  'hero.scanTitle': 'Отсканируйте и попробуйте',
  'hero.scanNote': 'Это тот же код, который стоит на столе',
  'hero.phoneAlt': 'Меню Menuar открыто на телефоне',
  'hero.modelAlt': 'Блюдо в 3D',
  'hero.loading': 'Загрузка…',
  'hero.dragToRotate': 'Потяните, чтобы повернуть',
  'howItWorks.eyebrow': 'Как это работает',
  'howItWorks.title': 'Меню, созданное для вашего ресторана, а не по шаблону',
  'howItWorks.intro':
    'Мы не даём вам конструктор. Мы делаем всё сами, а затем поддерживаем меню в актуальном состоянии',
  'howItWorks.step1.title': 'Мы говорим',
  'howItWorks.step1.body':
    'Вы рассказываете о заведении, меню и о том, каким вы хотите его ощущение. Мы смотрим на ваше пространство и блюда и договариваемся, что войдёт в меню',
  'howItWorks.step2.title': 'Мы создаём',
  'howItWorks.step2.body':
    'Дизайн, фотография и 3D сканирование ваших фирменных блюд. Каждая модель создаётся из вашей настоящей еды, поэтому гость видит именно то, что приносят на стол',
  'howItWorks.step3.title': 'Вы отдаёте его гостям',
  'howItWorks.step3.body':
    'QR коды для столов и живое меню на трёх языках. Изменения в меню и новые блюда берём на себя мы, а не вы',
  'features.eyebrow': 'Внутри меню',
  'features.title': 'Всё, что нужно гостю, у него в руке',
  'features.ar.eyebrow': 'Отличие',
  'features.ar.line': 'Гость видит настоящее блюдо на своём столе до заказа',
  'features.ar.modelAlt': 'Блюдо в 3D на вашем столе',
  'features.menu.title': 'Каждое блюдо снято',
  'features.menu.body':
    'Чистое и быстрое меню, где каждая тарелка снята как следует, а не PDF, который приходится увеличивать',
  'features.ingredients.title': 'Состав с одного взгляда',
  'features.ingredients.body':
    'Аллергены, вегетарианское, острота, всё отмечено на блюде, чтобы не приходилось спрашивать',
  'features.language.title': 'Читают на своём языке',
  'features.language.body':
    'Грузинский, английский и русский в одном меню, чтобы турист сделал заказ, а не ушёл',
  'features.selection.title': 'Выбрано до прихода',
  'features.selection.body':
    'Гости добавляют блюда пока смотрят и зачитывают список, поэтому заказ занимает секунды',
  'tryDemo.eyebrow': 'Попробуйте',
  'tryDemo.title': 'Отсканируйте так, как это сделают ваши гости',
  'tryDemo.paragraph':
    'Наведите телефон на код или откройте демо меню здесь. Это настоящее меню, работающее вживую, с настоящими блюдами в 3D',
  'tryDemo.note':
    'Каждый код мы делаем под то заведение, которому он принадлежит',
  'pricing.eyebrow': 'Цены',
  'pricing.title': 'Мы создаём его, а затем поддерживаем',
  'pricing.subtitle':
    'Каждое меню создаётся под конкретное заведение, поэтому стоимость установки мы называем после разговора. Ежемесячная плата покрывает хостинг и обновления и остаётся небольшой',
  'pricing.mostPopular': 'Самый популярный',
  'pricing.perMonth': ' / месяц',
  'pricing.setupFee': '+ разовая плата за установку',
  'pricing.essential.blurb': 'Красивое меню для небольшого предложения',
  'pricing.essential.feature1': 'Ваше полное меню, оформленное под заведение',
  'pricing.essential.feature2': '3 фирменных блюда в фотореалистичном 3D',
  'pricing.essential.feature3': 'Грузинский, английский и русский',
  'pricing.essential.feature4': 'QR коды для ваших столов',
  'pricing.essential.feature5': 'Обновления цен и текста берём на себя',
  'pricing.signature.blurb':
    'Для заведений, которые хотят, чтобы их стол останавливал взгляд',
  'pricing.signature.feature1': 'Всё из Essential',
  'pricing.signature.feature2': '6 фирменных блюд в фотореалистичном 3D',
  'pricing.signature.feature3':
    'Более глубокий индивидуальный дизайн вокруг вашего бренда',
  'pricing.signature.feature4': 'Сезонная замена блюд включена',
  'pricing.signature.feature5': 'Приоритет на изменения',
  'pricing.bespoke.blurb': 'Уникальное меню, созданное с чистого листа',
  'pricing.bespoke.feature1': 'Всё из Signature',
  'pricing.bespoke.feature2': '10 фирменных блюд в фотореалистичном 3D',
  'pricing.bespoke.feature3':
    'Дизайн, созданный для вас, а не подогнанный из базового',
  'pricing.bespoke.feature4': 'Дополнительные AR блюда по сниженной цене',
  'pricing.bespoke.feature5': 'Первыми получаете новые функции',
  'pricing.footnote':
    'Не уверены, что подойдёт? Большинство заведений начинают с шести блюд и растут дальше, мы честно скажем, что нужно вашему меню',
  'contact.title': 'Давайте создадим ваше меню',
  'contact.text':
    'Напишите нам и расскажите о вашем заведении, мы вернёмся с тем, как может выглядеть ваше меню и сколько это будет стоить',
  'footer.tagline': 'Красивые цифровые меню для ресторанов и кафе',
  'footer.menuHeading': 'Меню',
  'footer.contactHeading': 'Контакты',
  'footer.about': 'О нас',
  'footer.privacy': 'Конфиденциальность',
  'footer.copyright': '© 2026 Menuar. Все права защищены',
  'pageLayout.backToSite': 'Вернуться на сайт',
  'about.title': 'О Menuar',
  'about.paragraph1':
    'Menuar создаёт премиальные цифровые меню для ресторанов и кафе. Гость сканирует QR код за столом и видит настоящее меню с фирменными блюдами в фотореалистичном 3D, которые можно поставить на свой стол до заказа',
  'about.paragraph2':
    'Каждое 3D блюдо создаётся из настоящей еды, которую подаёт ресторан, поэтому гость видит именно то, что принесут. Это правило стоит за всем, что мы делаем',
  'about.paragraph3':
    'Каждое меню создаётся вручную под заведение, вокруг его бренда, и обновляется вместе с меню. Мы работаем с небольшим числом ресторанов в Тбилиси и Батуми',
  'about.closing': 'Хотите такое меню для своего заведения?',
  'privacy.title': 'Политика конфиденциальности',
  'privacy.lastUpdated': 'Последнее обновление: июль 2026',
  'privacy.intro':
    'Menuar предоставляет премиальные цифровые меню для ресторанов, кафе и заведений гостеприимства. Мы уважаем приватность гостей. Посетители могут просматривать меню Menuar без создания аккаунта, входа в систему или предоставления личной информации',
  'privacy.notCollected.heading': 'Информация, которую мы не собираем',
  'privacy.notCollected.intro':
    'Menuar не требует от гостей ничего из следующего:',
  'privacy.notCollected.item1': 'данные аккаунта',
  'privacy.notCollected.item2': 'пароли',
  'privacy.notCollected.item3': 'платёжная информация',
  'privacy.notCollected.item4': 'данные удостоверения личности',
  'privacy.notCollected.item5': 'чувствительная личная информация',
  'privacy.technical.heading': 'Базовая техническая информация',
  'privacy.technical.body':
    'Как и большинство сайтов, Menuar может обрабатывать базовую техническую информацию, необходимую для работы, защиты и улучшения сайта. Это может включать тип браузера, тип устройства, производительность страницы, приблизительную активность и технические журналы, обрабатываемые хостинг или аналитическими провайдерами',
  'privacy.preferences.heading': 'Настройки',
  'privacy.preferences.body':
    'Menuar может сохранять на устройстве пользователя простые настройки, например выбранный язык или тему, чтобы улучшить просмотр',
  'privacy.restaurant.heading': 'Информация о ресторане',
  'privacy.restaurant.body':
    'Страницы меню ресторана могут отображать публичную информацию, предоставленную рестораном, например названия блюд, цены, фотографии, состав, часы работы и контактные ссылки',
  'privacy.thirdParty.heading': 'Ссылки третьих сторон',
  'privacy.thirdParty.body':
    'Menuar может ссылаться на сторонние сервисы, такие как Instagram, TikTok, Facebook, WhatsApp или собственные страницы ресторана. У этих сервисов есть свои политики конфиденциальности и практики работы с данными',
  'privacy.contact.heading': 'Контакты',
  'privacy.contact.body':
    'По вопросам конфиденциальности свяжитесь с нами в WhatsApp',
  'privacy.changes.heading': 'Изменения в этой политике',
  'privacy.changes.body':
    'Мы можем время от времени обновлять эту Политику конфиденциальности. Актуальная версия будет доступна на этой странице',

  // ---- FAQ ----
  'faq.eyebrow': 'Вопросы',
  'faq.title': 'Что люди спрашивают, прежде чем написать нам',
  'faq.q1.question': 'Что такое Menuar?',
  'faq.q1.answer': 'Menuar это красивое цифровое меню для вашего ресторана. Гость сканирует QR код за столом и меню открывается на телефоне, с правильно снятыми блюдами и фирменными блюдами в 3D. Мы создаём его вокруг вашего заведения и поддерживаем в рабочем состоянии',
  'faq.q2.question': 'Это только AR или полное меню?',
  'faq.q2.answer': 'В первую очередь это полное меню. Каждое блюдо, каждая категория, цены, состав и аллергены, на трёх языках, аккуратно и быстро на любом телефоне. Блюда в 3D и AR это яркая особенность сверху, а не всё меню целиком',
  'faq.q3.question': 'Нужно ли мне что-то устанавливать? А моим гостям?',
  'faq.q3.answer': 'Никто ничего не устанавливает. Ни вы, ни ваши гости. Они наводят камеру телефона на QR код на столе и меню мгновенно открывается в браузере, без приложения и без загрузки',
  'faq.q4.question': 'Чем это отличается от бесплатного QR меню, которое уже даёт мой POS?',
  'faq.q4.answer': 'QR меню от POS это обычно простой список или PDF, один и тот же шаблон для всех. Menuar создаётся вокруг вашего бренда, каждое блюдо снято, а фирменные блюда появляются в настоящем 3D, который гость может поставить на свой стол. Это другое, чем бесплатное меню, привязанное к кассе',
  'faq.q5.question': 'Вы заменяете мой POS или кассу?',
  'faq.q5.answer': 'Нет. Menuar это меню, которое видит гость, а не система, на которой работают кухня и касса. Ваш POS и фискальная касса остаются как есть. Мы работаем рядом с ними и делаем красивой ту часть, которой касается гость',
  'faq.q6.question': 'Сколько это стоит?',
  'faq.q6.answer': 'Есть разовая плата за установку для создания меню и небольшая ежемесячная плата, которая покрывает хостинг и обновления. Установка зависит от количества блюд и объёма индивидуального дизайна, поэтому стоимость мы называем после разговора. Ежемесячная плата остаётся небольшой на любом плане',
  'faq.q7.question': 'Сколько времени занимает создание?',
  'faq.q7.answer': 'Каждое 3D блюдо сканируется и дорабатывается вручную из вашей настоящей еды, поэтому полное меню занимает несколько недель в зависимости от количества блюд. Мы намеренно берём несколько заведений одновременно, потому что качество каждой модели важнее скорости',
  'faq.q8.question': 'Что если моё меню изменится?',
  'faq.q8.answer': 'Вы говорите нам, и мы всё делаем. Изменения цен, новые блюда, сезонные замены, всё делаем мы, а не вы в панели. Поддержание меню в актуальном виде входит в ежемесячную плату',
  'faq.q9.question': 'Настоящие ли 3D блюда?',
  'faq.q9.answer': 'Да, и это правило мы не нарушаем никогда. Каждая 3D модель создаётся из настоящего блюда, которое подаёт ресторан, отсканированного с реальной еды. Что гость видит на столе, то и приносят',
  'faq.q10.question': 'Какие языки поддерживает меню?',
  'faq.q10.answer': 'Грузинский, английский и русский, в одном меню, переключение одним касанием. Турист читает на своём языке и делает заказ вместо того, чтобы уйти, а это реальные деньги в загруженный вечер',
  'faq.q11.question': 'Для каких заведений это?',
  'faq.q11.answer': 'Кафе, рестораны, суши и азиатские места, пиццерии, места для бранча и винные бары, те заведения, которым уже важно, как они выглядят. Мы работаем с небольшим числом мест в Тбилиси и Батуми',
  'faq.q12.question': 'Как начать?',
  'faq.q12.answer': 'Напишите нам в WhatsApp и расскажите о вашем заведении. Мы обсудим, что нужно вашему меню, затем создадим его и передадим готовым для ваших столов. Это весь процесс',
};

export const translations = { en, ka, ru };
export const FALLBACK_LANGUAGE = 'en';
