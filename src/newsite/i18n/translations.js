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
  'common.openDemoMenu': 'Open the menu',
  'common.messageUsOnWhatsApp': 'Message us on WhatsApp',
  'common.qrAlt': 'QR code for the demo menu',

  // ---- Nav (links are reused by both footers) ----
  'nav.howItWorks': 'How it works',
  'nav.theMenu': 'The menu',
  'nav.pricing': 'Pricing',
  'nav.insideMenu': 'Inside the menu',
  'nav.tryMenu': 'Try the menu',
  'nav.questions': 'Questions',
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
    'Point your phone at the code, or open the menu here. This is a real menu, running live, with real dishes in 3D',
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
  'faq.q1.answer': 'First and foremost, it is a complete digital menu with text and photos. All dishes, categories, prices, ingredients, and allergens are available in three languages and open quickly on any smartphone. The 3D and AR dishes make the menu even more innovative and engaging.',
  'faq.q2.question': 'Does the guest need to install anything?',
  'faq.q2.answer': 'No installation is required on the guest\'s phone. They simply scan a QR code to open the menu directly in their browser, while viewing a 3D dish only requires access to the phone\'s camera.',
  'faq.q3.question': 'How much does it cost?',
  'faq.q3.answer': 'The pricing includes a one-time setup fee to build your menu and a monthly subscription that covers hosting and ongoing updates. The setup fee depends on the number of 3D dishes required and the level of design customization, so it is tailored to each project.',
  'faq.q4.question': 'What if my menu changes?',
  'faq.q4.answer': 'The menu is fully updateable. Any changes or additions can be made quickly by contacting us, and these updates are included in the monthly subscription.',
  'faq.q5.question': 'Which languages does the menu support?',
  'faq.q5.answer': 'Georgian, English, and Russian are all available within the same menu. Guests can switch languages with a single tap, allowing them to use the menu comfortably in their preferred language.',
  'faq.q6.question': 'How long does setup take?',
  'faq.q6.answer': 'Every 3D dish is individually scanned and processed from the real food, so creating a complete menu may take several weeks, depending on the number of dishes. The quality of every 3D model is our top priority.',
  'faq.q7.question': 'How do I get started?',
  'faq.q7.answer': 'Contact us via WhatsApp or email and tell us about your venue. We\'ll discuss your needs together and, based on your goals, develop your menu step by step as quickly as possible.',

  // ---- Proof ----
  'proof.eyebrow': 'Why it works',
  'proof.title': 'A better menu is not decoration, it sells',
  'proof.intro': 'We did not invent these numbers. They come from published research on the kind of menu we build',
  'proof.stat1.figure': 'About 6%',
  'proof.stat1.label': 'more orders per dish',
  'proof.stat1.body': 'Menu items shown with real photos consistently outsell text only ones',
  'proof.stat1.source': 'Industry studies, Cornell and ScienceDirect',
  'proof.stat2.figure': 'Up to 25%',
  'proof.stat2.label': 'higher conversion',
  'proof.stat2.body': 'Moving from a text menu to a photo menu lifts how often a guest actually orders what they look at',
  'proof.stat2.source': 'Menu conversion research',
  'proof.stat3.figure': '3 Languages',
  'proof.stat3.label': 'more guests who order',
  'proof.stat3.body': 'Guests who cannot read the menu play it safe or leave, so a menu in their language keeps the order',
  'proof.stat3.source': 'Hospitality and tourism research',
  'proof.footnote': 'These are general findings about photo and multilingual menus, not a promise of a specific result for your venue',

  // ---- Inside the menu ----
  'inside.eyebrow': 'inside the menu',
  'inside.heading': 'The experience your guests receive',
  'inside.subhead': 'A menu created around your dishes, your space, and your guests',
  'inside.f1': 'Faster, streamlined service with fewer ordering mistakes',
  'inside.f2': 'Calories, ingredients, and allergens - information that\'s easy to access and understand',
  'inside.f3': 'Guests can easily understand the menu and visualize portion sizes before ordering',
  'inside.f4': 'A continuously updated, customized menu available in 3 languages',
  'inside.f5': 'An engaging restaurant presentation with a modern digital experience',
  'inside.f6Title': 'A Simple 3-Step Experience',
  'inside.f6Step1': 'Scan the QR code',
  'inside.f6Step2': 'Explore the interactive menu',
  'inside.f6Step3': 'View dishes in 3D',
};

// Georgian.
const ka = {
  'common.talkToUs': 'დაგვიკავშირდით',
  'common.openDemoMenu': 'გახსენით მენიუ',
  'common.messageUsOnWhatsApp': 'მოგვწერეთ WhatsApp-ზე',
  'common.qrAlt': 'QR კოდი დემო მენიუსთვის',
  'nav.howItWorks': 'როგორ მუშაობს',
  'nav.theMenu': 'მენიუ',
  'nav.pricing': 'ფასები',
  'nav.insideMenu': 'მენიუს შიგნით',
  'nav.tryMenu': 'მოსინჯეთ მენიუ',
  'nav.questions': 'კითხვები',
  'nav.language.switcher': 'ენა',
  'nav.language.english': 'ინგლისური',
  'nav.language.georgian': 'ქართული',
  'nav.language.russian': 'რუსული',
  'hero.eyebrow': 'ციფრული მენიუები რესტორნებისთვის',
  'hero.headline': 'ციფრული მენიუ, რომლის გამოყენებაც თქვენს სტუმრებს ნამდვილად მოეწონებათ',
  'hero.paragraph':
    'სრული ტექსტური და ფოტო მენიუ, რომელიც აცოცხლებს თქვენს კერძებს რეალისტურ 3D-ში',
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
  'tryDemo.title': 'დაასკანერეთ ისე, როგორც თქვენი სტუმარი',
  'tryDemo.paragraph':
    'მიმართეთ ტელეფონი კოდისკენ, ან გახსენით მენიუ აქვე. ეს ნამდვილი მენიუა, ცოცხლად მომუშავე, ნამდვილი კერძებით 3D-ში',
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
  'faq.q1.answer': 'პირველ რიგში ეს სრული ტექსტური და ფოტო ელექტრონული მენიუა. ყველა კერძი, კატეგორია, ფასები, ინგრედიენტები და ალერგენები, სამ ენაზე, სწრაფად იხსნება ნებისმიერ ტელეფონზე. 3D და AR კერძები კი უფრო ინოვაციურს ხდის მენიუს.',
  'faq.q2.question': 'რამე უნდა დააინსტალიროს სტუმარმა?',
  'faq.q2.answer': 'ტელეფონში არაფრის ინსტალაცია საჭირო არ არის. მენიუს გასახსნელად QR კოდის დასკანერდება აროს საჭირო და ის ბრაუზერში იხსნება, ხოლო 3D კერძის გახსნას კამერა სჭირდება.',
  'faq.q3.question': 'რა ღირს?',
  'faq.q3.answer': 'ფასი მოიცავს ერთჯერად დაყენების საფასურს მენიუს ასაგებად და ყოველთვიური საფასურს, რომელიც ჰოსტინგსა და განახლებებს ფარავს. დაყენების საფასური დამოკიდებულია იმაზე, თუ რამდენი 3D კერძი იქნება გამოყენებული და რამდენად ინდივიდუალური დიზაინი, შესაბამისად ფასი შეიძლება იყოს ინდივიდუალური.',
  'faq.q4.question': 'რა მოხდება, თუ ჩემი მენიუ შეიცვლება?',
  'faq.q4.answer': 'მენიუ სრულად განახლებადია, ნებისმიერი ცვლილება და დეტალი ჩვენთან კომუნიკაციით სწრაფად ხდება და ყოველთვიური საფასური ამ მომსახურებას მოიცავს.',
  'faq.q5.question': 'რა ენებს უჭერს მხარს მენიუ?',
  'faq.q5.answer': 'ქართული, ინგლისური და რუსული, ერთსა და იმავე მენიუში. ერთი შეხებით ენის ცვლილება სტუმარს სრულად აძლევს მენიუს გამოყენების საშუალებას.',
  'faq.q6.question': 'რა დრო სჭირდება დაყენებას?',
  'faq.q6.answer': 'ყოველი 3D კერძი ხელით სკანირდება და მუშავდება ნამდვილი საკვებისგან, შესაბამისად სრულ მენიუს რამდენიმე კვირა შეიძლება დასჭირდეს, კერძების რაოდენობის მიხედვით. ყოველი მოდელის ხარისხი ჩვენთვის პრიორიტეტია.',
  'faq.q7.question': 'როგორ დავიწყო?',
  'faq.q7.answer': 'მოგვწერეთ WhatsApp-ზე ან მეილზე და გვიამბეთ თქვენს სივრცეზე. ჩვენ ერთად განვიხილავთ და თქვენი ინტერესებიდან გამომდინარე ნაბიჯ-ნაბიჯ შევიმუშავებთ მენიუს რაც შეიძლება სწრაფად.',

  // ---- Proof ----
  'proof.eyebrow': 'რატომ მუშაობს',
  'proof.title': 'უკეთესი მენიუ დეკორაცია არ არის, ის ყიდის',
  'proof.intro': 'ეს ციფრები ჩვენ არ მოგვიგონია. ისინი გამოქვეყნებული კვლევებიდანაა იმ ტიპის მენიუზე, რომელსაც ჩვენ ვქმნით',
  'proof.stat1.figure': 'დაახლოებით 6%',
  'proof.stat1.label': 'მეტი შეკვეთა კერძზე',
  'proof.stat1.body': 'ნამდვილი ფოტოებით ნაჩვენები კერძები სტაბილურად უფრო იყიდება, ვიდრე მხოლოდ ტექსტით',
  'proof.stat1.source': 'ინდუსტრიის კვლევები, Cornell და ScienceDirect',
  'proof.stat2.figure': '25%-მდე',
  'proof.stat2.label': 'უფრო მაღალი კონვერსია',
  'proof.stat2.body': 'ტექსტური მენიუდან ფოტო მენიუზე გადასვლა ზრდის, რამდენად ხშირად უკვეთავს სტუმარი იმას, რასაც ათვალიერებს',
  'proof.stat2.source': 'მენიუს კონვერსიის კვლევა',
  'proof.stat3.figure': '3 ენა',
  'proof.stat3.label': 'მეტი სტუმარი, ვინც შეუკვეთავს',
  'proof.stat3.body': 'სტუმარი, რომელიც მენიუს ვერ კითხულობს, ან უსაფრთხოს ირჩევს ან მიდის, ამიტომ მისივე ენაზე მენიუ შეკვეთას ინარჩუნებს',
  'proof.stat3.source': 'სასტუმრო და ტურიზმის კვლევა',
  'proof.footnote': 'ეს ზოგადი დასკვნებია ფოტო და მრავალენოვან მენიუებზე და არა კონკრეტული შედეგის დაპირება თქვენი სივრცისთვის',

  // ---- Inside the menu ----
  'inside.eyebrow': 'მენიუს შიგნით',
  'inside.heading': 'რას იღებენ თქვენი სტუმრები',
  'inside.subhead': 'მენიუ, შექმნილი თქვენი კერძების, თქვენი სივრცისა და თქვენი სტუმრებისთვის',
  'inside.f1': 'სწრაფი, გამარტივებული მომსახურება და შეკვეთისას ნაკლები შეცდომები',
  'inside.f2': 'კალორიები, ინგრედიენტები, ალერგენები — ინფორმაცია, რომელიც კომფორტულია',
  'inside.f3': 'სტუმრები მენიუს მარტივად აღიქვამენ და პორციის ზომას ვიზუალურად ხედავენ',
  'inside.f4': 'მუდმივად განახლებადი, ობიექტზე მორგებული მენიუ 3 ენაზე',
  'inside.f5': 'რესტორნის მიმზიდველი პრეზენტაცია და თანამედროვე ციფრული გამოცდილება',
  'inside.f6Title': '3 ნაბიჯის გამოცდილება',
  'inside.f6Step1': 'დაასკანერე QR',
  'inside.f6Step2': 'დაათვალიერე ინტერაქტიული მენიუ',
  'inside.f6Step3': 'გადმოიტანე რეალობაში შეკვეთა',
};

// Russian.
const ru = {
  'common.talkToUs': 'Напишите нам',
  'common.openDemoMenu': 'Открыть меню',
  'common.messageUsOnWhatsApp': 'Написать в WhatsApp',
  'common.qrAlt': 'QR код для демо меню',
  'nav.howItWorks': 'Как это работает',
  'nav.theMenu': 'Меню',
  'nav.pricing': 'Цены',
  'nav.insideMenu': 'Внутри меню',
  'nav.tryMenu': 'Попробуйте меню',
  'nav.questions': 'Вопросы',
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
  'tryDemo.title': 'Отсканируйте так, как это сделает ваш гость',
  'tryDemo.paragraph':
    'Наведите телефон на код или откройте меню здесь. Это настоящее меню, работающее вживую, с настоящими блюдами в 3D',
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
  'faq.q1.answer': 'Прежде всего это полноценное цифровое меню с текстом и фотографиями. Все блюда, категории, цены, ингредиенты и аллергены доступны на трёх языках и быстро открываются на любом смартфоне. Блюда в 3D и AR делают меню ещё более современным и интересным.',
  'faq.q2.question': 'Нужно ли гостю что-то устанавливать?',
  'faq.q2.answer': 'Гостю ничего не нужно устанавливать на телефон. Достаточно отсканировать QR код, и меню откроется прямо в браузере, а для просмотра блюда в 3D нужен только доступ к камере телефона.',
  'faq.q3.question': 'Сколько это стоит?',
  'faq.q3.answer': 'Стоимость включает разовую плату за настройку и создание меню и ежемесячную плату, которая покрывает хостинг и обновления. Плата за настройку зависит от количества 3D блюд и степени индивидуального дизайна, поэтому рассчитывается под каждый проект.',
  'faq.q4.question': 'Что если моё меню изменится?',
  'faq.q4.answer': 'Меню полностью обновляемое. Любые изменения или дополнения делаются быстро по обращению к нам, и эти обновления входят в ежемесячную плату.',
  'faq.q5.question': 'Какие языки поддерживает меню?',
  'faq.q5.answer': 'Грузинский, английский и русский доступны в одном и том же меню. Гость меняет язык одним касанием и пользуется меню на удобном для него языке.',
  'faq.q6.question': 'Сколько времени занимает настройка?',
  'faq.q6.answer': 'Каждое 3D блюдо сканируется и обрабатывается вручную из настоящей еды, поэтому создание полного меню может занять несколько недель, в зависимости от количества блюд. Качество каждой 3D модели для нас в приоритете.',
  'faq.q7.question': 'Как начать?',
  'faq.q7.answer': 'Напишите нам в WhatsApp или на почту и расскажите о вашем заведении. Мы вместе обсудим ваши задачи и, исходя из ваших целей, шаг за шагом создадим меню как можно быстрее.',

  // ---- Proof ----
  'proof.eyebrow': 'Почему это работает',
  'proof.title': 'Хорошее меню это не украшение, оно продаёт',
  'proof.intro': 'Мы не придумывали эти цифры. Они взяты из опубликованных исследований о таких меню, какие мы создаём',
  'proof.stat1.figure': 'около 6%',
  'proof.stat1.label': 'больше заказов на блюдо',
  'proof.stat1.body': 'Блюда с настоящими фотографиями стабильно продаются лучше, чем только с текстом',
  'proof.stat1.source': 'Отраслевые исследования, Cornell и ScienceDirect',
  'proof.stat2.figure': 'до 25%',
  'proof.stat2.label': 'выше конверсия',
  'proof.stat2.body': 'Переход с текстового меню на меню с фото повышает то, как часто гость заказывает то, что рассматривает',
  'proof.stat2.source': 'Исследования конверсии меню',
  'proof.stat3.figure': '3 языка',
  'proof.stat3.label': 'больше гостей, которые заказывают',
  'proof.stat3.body': 'Гость, который не может прочитать меню, выбирает знакомое или уходит, поэтому меню на его языке сохраняет заказ',
  'proof.stat3.source': 'Исследования гостеприимства и туризма',
  'proof.footnote': 'Это общие выводы о меню с фото и на нескольких языках, а не обещание конкретного результата для вашего заведения',

  // ---- Inside the menu ----
  'inside.eyebrow': 'внутри меню',
  'inside.heading': 'Впечатление, которое получают ваши гости',
  'inside.subhead': 'Меню, созданное вокруг ваших блюд, вашего пространства и ваших гостей',
  'inside.f1': 'Быстрое, отлаженное обслуживание и меньше ошибок при заказе',
  'inside.f2': 'Калории, ингредиенты и аллергены: информация, которую легко найти и понять',
  'inside.f3': 'Гости легко понимают меню и видят размер порции ещё до заказа',
  'inside.f4': 'Постоянно обновляемое, адаптированное меню на 3 языках',
  'inside.f5': 'Привлекательная презентация ресторана и современный цифровой опыт',
  'inside.f6Title': 'Всего 3 шага',
  'inside.f6Step1': 'Отсканируйте QR',
  'inside.f6Step2': 'Откройте интерактивное меню',
  'inside.f6Step3': 'Смотрите блюда в 3D',
};

export const translations = { en, ka, ru };
export const FALLBACK_LANGUAGE = 'en';
