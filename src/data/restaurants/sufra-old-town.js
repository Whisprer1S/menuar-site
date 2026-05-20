// Demo menu restaurant config.
// This file keeps its legacy name to avoid unsafe file churn, but the public route is /menu/demo.
// Copy this file when onboarding a restaurant, then edit the categories,
// dishes, prices, images, models, ingredient tags, and AR settings below.

const menuCategories = [
  {
    id: "main-dishes",
    label: { en: "Main dishes", ka: "მთავარი კერძები", ru: "Основные блюда" },
  },
  {
    id: "baked-goods",
    label: { en: "Baked Goods", ka: "ცომეული", ru: "Выпечка" },
  },
  {
    id: "seafood",
    label: { en: "Seafood", ka: "ზღვის პროდუქტები", ru: "Морепродукты" },
  },
];

const weeklySchedule = [
  { day: { en: "Monday", ka: "ორშაბათი", ru: "Понедельник" }, hours: "00:00 - 23:59" },
  { day: { en: "Tuesday", ka: "სამშაბათი", ru: "Вторник" }, hours: "00:00 - 23:59" },
  { day: { en: "Wednesday", ka: "ოთხშაბათი", ru: "Среда" }, hours: "00:00 - 23:59" },
  { day: { en: "Thursday", ka: "ხუთშაბათი", ru: "Четверг" }, hours: "00:00 - 23:59" },
  { day: { en: "Friday", ka: "პარასკევი", ru: "Пятница" }, hours: "00:00 - 23:59" },
  { day: { en: "Saturday", ka: "შაბათი", ru: "Суббота" }, hours: "00:00 - 23:59" },
  { day: { en: "Sunday", ka: "კვირა", ru: "Воскресенье" }, hours: "00:00 - 23:59" },
];

const defaultPlatformScale = { default: 1, ios: 1, android: 1 };

const sufraOldTown = {
  slug: "demo",
  brandName: "Sufra AR",
  currency: "GEL",
  restaurantName: {
    en: "Sufra AR",
    ka: "Sufra AR",
    ru: "Sufra AR",
  },
  subtitle: {
    en: "A mobile-first WebAR menu for premium restaurants.",
    ka: "A mobile-first WebAR menu for premium restaurants.",
    ru: "A mobile-first WebAR menu for premium restaurants.",
  },
  locationLabel: {
    en: "Tbilisi, Georgia",
    ka: "Tbilisi, Georgia",
    ru: "Tbilisi, Georgia",
  },
  schedule: {
    status: {
      en: "Open until 23:59 today.",
      ka: "დღეს ღიაა 23:59-მდე.",
      ru: "Сегодня открыто до 23:59.",
    },
    days: weeklySchedule,
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Tbilisi%2C%20Georgia",
  heroImage: "/images/dishes/fine dining table phone.jpg",
  theme: {
    background: "#FAFAF8",
    text: "#121212",
    secondaryText: "#666666",
    accent: "#121212",
    card: "#FFFFFF",
    border: "#E0E0E0",
    headingFont: '"Playfair Display", Georgia, serif',
    bodyFont: 'Inter, "Helvetica Neue", Arial, system-ui, sans-serif',
  },
  categories: menuCategories,
  dishes: [
    {
      id: "wrap",
      categoryId: "main-dishes",
      type: "meat",
      name: {
        en: "Chicken Wrap",
        ka: "ქათმის როლი",
        ru: "Куриный ролл",
      },
      description: {
        en: "Warm grilled wrap with chicken, melted cheese, vegetables, and light sauce.",
        ka: "თბილი გრილზე შემწვარი როლი ქათმით, მდნარი ყველით, ბოსტნეულით და მსუბუქი სოუსით.",
        ru: "Теплый ролл на гриле с курицей, расплавленным сыром, овощами и легким соусом.",
      },
      priceGEL: 24,
      calories: 520,
      image: "/images/dishes/wrap.webp",
      model: "/models/dishes/wrap.glb",
      hasModel: true,
      ingredients: [
        { name: "Tortilla", benefits: ["Energy"] },
        { name: "Chicken", benefits: ["Protein", "B vitamins"] },
        { name: "Cheese", benefits: ["Calcium"] },
        { name: "Lettuce", benefits: ["Freshness"] },
        { name: "Vegetables", benefits: ["Fiber"] },
        { name: "Sauce", benefits: ["Light sauce"] },
      ],
      ingredientHotspots: [
        {
          id: "chicken",
          name: "Chicken",
          position: "0m 0.08m 0m",
          normal: "0m 1m 0m",
          benefits: ["Protein", "B vitamins"],
        },
      ],
      arScale: "1 1 1",
      platformScale: defaultPlatformScale,
      arPlacement: "floor",
      cameraOrbit: "35deg 70deg 2.5m",
      fieldOfView: "30deg",
    },
    {
      id: "lobiani",
      categoryId: "baked-goods",
      type: "veg",
      name: {
        en: "Lobiani",
        ka: "ლობიანი",
        ru: "Лобиани",
      },
      description: {
        en: "Georgian baked bread filled with seasoned beans and herbs.",
        ka: "ქართული ცომეული სუნელებით შეზავებული ლობიოსა და მწვანილის შიგთავსით.",
        ru: "Грузинская выпечка с начинкой из пряной фасоли и зелени.",
      },
      priceGEL: 18,
      calories: 480,
      image: "/images/dishes/Lobiani.webp",
      model: "/models/dishes/lobiani.glb",
      hasModel: true,
      ingredients: [
        { name: "Dough", benefits: ["Energy"] },
        { name: "Beans", benefits: ["Fiber", "Plant protein", "Iron"] },
        { name: "Herbs", benefits: ["Aroma"] },
        { name: "Onion", benefits: ["Aroma"] },
        { name: "Oil", benefits: ["Soft texture"] },
        { name: "Salt", benefits: ["Seasoning"] },
        { name: "Spices", benefits: ["Warm spice"] },
      ],
      ingredientHotspots: [
        {
          id: "beans",
          name: "Beans",
          position: "0m 0.08m 0m",
          normal: "0m 1m 0m",
          benefits: ["Fiber", "Plant protein", "Iron"],
        },
      ],
      arScale: "1 1 1",
      platformScale: defaultPlatformScale,
      arPlacement: "floor",
      cameraOrbit: "35deg 70deg 2.4m",
      fieldOfView: "30deg",
    },
    {
      id: "pizza",
      categoryId: "baked-goods",
      type: "meat",
      name: {
        en: "Pepperoni Pizza",
        ka: "პეპერონის პიცა",
        ru: "Пицца пепперони",
      },
      description: {
        en: "Oven-baked pepperoni pizza with melted cheese and crisp golden crust.",
        ka: "ღუმელში გამომცხვარი პეპერონის პიცა მდნარი ყველით და ხრაშუნა ოქროსფერი ქერქით.",
        ru: "Пицца пепперони из печи с расплавленным сыром и хрустящей золотистой корочкой.",
      },
      priceGEL: 32,
      calories: 980,
      image: "/images/dishes/pizza.webp",
      model: "/models/dishes/pizza.glb",
      hasModel: true,
      ingredients: [
        { name: "Dough", benefits: ["Energy"] },
        { name: "Tomato Sauce", benefits: ["Antioxidants"] },
        { name: "Mozzarella", benefits: ["Calcium", "Protein"] },
        { name: "Pepperoni", benefits: ["Protein", "Selenium"] },
        { name: "Herbs", benefits: ["Aroma"] },
      ],
      ingredientHotspots: [
        {
          id: "mozzarella",
          name: "Mozzarella",
          position: "0m 0.08m 0m",
          normal: "0m 1m 0m",
          benefits: ["Calcium", "Protein"],
        },
      ],
      arScale: "1 1 1",
      platformScale: defaultPlatformScale,
      arPlacement: "floor",
      cameraOrbit: "35deg 70deg 2.5m",
      fieldOfView: "30deg",
    },
    {
      id: "sushi",
      categoryId: "seafood",
      type: "meat",
      name: {
        en: "Sushi Platter",
        ka: "სუშის ასორტი",
        ru: "Суши-сет",
      },
      description: {
        en: "Assorted sushi rolls with rice, salmon, cucumber, sesame, and creamy topping.",
        ka: "სუშის ასორტი ბრინჯით, ორაგულით, კიტრით, სეზამით და ნაზი კრემის ტოპინგით.",
        ru: "Ассорти суши-роллов с рисом, лососем, огурцом, кунжутом и нежным кремовым топингом.",
      },
      priceGEL: 36,
      calories: 620,
      image: "/images/dishes/Sushi.webp",
      model: "/models/dishes/sushi.glb",
      hasModel: true,
      ingredients: [
        { name: "Sushi Rice", benefits: ["Energy"] },
        { name: "Nori", benefits: ["Iodine"] },
        { name: "Salmon", benefits: ["Omega-3", "Protein", "B12"] },
        { name: "Cucumber", benefits: ["Freshness"] },
        { name: "Sesame", benefits: ["Healthy fats"] },
        { name: "Cream Cheese", benefits: ["Calcium"] },
        { name: "Sauce", benefits: ["Smooth finish"] },
      ],
      ingredientHotspots: [
        {
          id: "salmon",
          name: "Salmon",
          position: "0m 0.08m 0m",
          normal: "0m 1m 0m",
          benefits: ["Omega-3", "Protein", "B12"],
        },
      ],
      arScale: "1 1 1",
      platformScale: defaultPlatformScale,
      arPlacement: "floor",
      cameraOrbit: "35deg 70deg 2.5m",
      fieldOfView: "30deg",
    },
  ],
};

export default sufraOldTown;
