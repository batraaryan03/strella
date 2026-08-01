/**
 * STELLAR — single source of truth for all site content.
 * Content structure mirrors the Weekend Movers project; copy is
 * rebranded & refined for Stellar Removals.
 *
 * Photography: curated + download-tracked via the Unsplash MCP tool.
 * Every image is a real Unsplash photo (never a dummy/placeholder).
 */

export const BRAND = {
  name: "Stellar",
  fullName: "Stellar Removals",
  tagline: "Melbourne's Precision Removalists",
  phone: "+61416828199",
  phoneDisplay: "+61 416 828 199",
  email: "sales@stellarremovals.com.au",
  location: "Melbourne, VIC",
  hoursWeekday: "Mon – Fri: 8:00 AM – 6:00 PM",
  hoursWeekend: "Sat – Sun: 9:00 AM – 5:00 PM",
  instagram: "https://www.instagram.com/",
  facebook: "https://facebook.com/",
  whatsapp: "https://wa.me/61416828199",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "/contact", label: "Contact", isPage: true },
] as const;

/* ── Photography (Unsplash, tracked) ───────────────────────── */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PHOTOS = {
  hero: u("photo-1698917414969-feade59e3343", 1600), // crew unloading at the kerb
  serviceHouse: u("photo-1714647211902-bb711d643a17"), // packing boxes in living room
  serviceApartment: u("photo-1772724317350-520faccb15e6"), // carrying boxes outside building
  serviceOffice: u("photo-1591267556741-66d584d88e42"), // man carrying box
  servicePacking: u("photo-1700165644892-3dd6b67b25bc"), // brown packing boxes
  serviceAssembly: u("photo-1714647211963-fa82bd5b3a7a"), // laying rug on the floor
} as const;

export const HERO_CAPTION = {
  route: "Hawthorn → South Yarra",
  truck: "STL-08 · Sat 08:00",
} as const;

/** Photographer credits for every Unsplash photo used (API terms). */
export const PHOTO_CREDITS = [
  { name: "Egor Ivlev", url: "https://unsplash.com/@ger46" },
  { name: "Vitaly Gariev", url: "https://unsplash.com/@silverkblack" },
  { name: "Handiwork NYC", url: "https://unsplash.com/@handiworknyc" },
  { name: "Infinity Movers Cape Coral", url: "https://unsplash.com/@infinitymoverscapecoral" },
  { name: "Jorge Alcala", url: "https://unsplash.com/@jorgeaalcala" },
  { name: "Luke Heibert", url: "https://unsplash.com/@lukeheibert" },
  { name: "Dina Badamshina", url: "https://unsplash.com/@dinaamazing" },
  { name: "Christian Lue", url: "https://unsplash.com/@christianlue" },
  { name: "Apartment Life", url: "https://unsplash.com/@apartmentlife" },
  { name: "Bench Accounting", url: "https://unsplash.com/@benchaccounting" },
  { name: "Sander Yigin", url: "https://unsplash.com/@sanderyigin" },
] as const;

/* ── Map data (Leaflet · OpenStreetMap, real coordinates) ──── */
export const MELBOURNE_CENTER: [number, number] = [144.9631, -37.8136];

/** Rough service-area hull covering greater Melbourne (lng, lat). */
export const SERVICE_AREA_POLYGON: [number, number][] = [
  [144.55, -37.7],
  [144.65, -37.45],
  [144.9, -37.38],
  [145.15, -37.4],
  [145.35, -37.55],
  [145.45, -37.75],
  [145.3, -37.95],
  [145.05, -38.12],
  [144.8, -38.1],
  [144.6, -37.95],
];

/** Depot → CBD → inner-east sample route (lng, lat). */
export const ROUTE_PATH: [number, number][] = [
  [144.945, -37.817], // Docklands depot
  [144.9631, -37.8136], // CBD
  [145.0359, -37.8216], // Hawthorn
];

export interface SuburbPoint {
  name: string;
  lat: number;
  lng: number;
}

export const SUBURB_POINTS: SuburbPoint[] = [
  { name: "Craigieburn", lat: -37.599, lng: 144.7237 },
  { name: "Essendon", lat: -37.7549, lng: 144.9178 },
  { name: "Brunswick", lat: -37.7662, lng: 144.9633 },
  { name: "Northcote", lat: -37.8253, lng: 145.0012 },
  { name: "Fitzroy", lat: -37.7984, lng: 144.9784 },
  { name: "Carlton", lat: -37.8003, lng: 144.9664 },
  { name: "Docklands", lat: -37.8187, lng: 144.9458 },
  { name: "Richmond", lat: -37.8232, lng: 145.0019 },
  { name: "Hawthorn", lat: -37.8216, lng: 145.0359 },
  { name: "Toorak", lat: -37.8419, lng: 145.0207 },
  { name: "Box Hill", lat: -37.8223, lng: 145.1243 },
  { name: "Glen Waverley", lat: -37.8789, lng: 145.163 },
  { name: "Footscray", lat: -37.8007, lng: 144.8985 },
  { name: "Sunshine", lat: -37.787, lng: 144.832 },
  { name: "Point Cook", lat: -37.9261, lng: 144.7505 },
  { name: "Werribee", lat: -37.9027, lng: 144.6596 },
  { name: "Southbank", lat: -37.8236, lng: 144.9655 },
  { name: "St Kilda", lat: -37.8676, lng: 144.9806 },
  { name: "Preston", lat: -37.732, lng: 145.0087 },
  { name: "Dandenong", lat: -37.9873, lng: 145.2148 },
];

/* ── Trust metrics (verified ribbon) ───────────────────────── */
export const TRUST_METRICS = [
  { icon: "shield", label: "Fully insured", num: 20, prefix: "$", suffix: "M", decimals: 0, sub: "transit cover on every move" },
  { icon: "badge", label: "Police-checked crew", num: 100, suffix: "%", decimals: 0, sub: "background verified" },
  { icon: "truck", label: "Moves completed", num: 5000, suffix: "+", decimals: 0, sub: "across greater Melbourne" },
  { icon: "star", label: "Google rating", num: 4.9, suffix: "★", decimals: 1, sub: "2,300+ verified reviews" },
  { icon: "receipt", label: "Upfront pricing", text: "Fixed", sub: "no hidden fees, ever" },
] as const;

/* ── Services ──────────────────────────────────────────────── */
export const SERVICES = [
  {
    icon: "home",
    title: "Local House Moves",
    desc: "Complete residential moving services across Melbourne. We handle everything from small apartments to large family homes with care and professionalism.",
    img: PHOTOS.serviceHouse,
  },
  {
    icon: "building",
    title: "Apartment Moves",
    desc: "Specialised in apartment and unit relocations. We navigate stairs, elevators, and tight spaces with ease to ensure a smooth move.",
    img: PHOTOS.serviceApartment,
  },
  {
    icon: "briefcase",
    title: "Office Relocations",
    desc: "Professional office moving services that minimise downtime. We handle furniture, equipment, and documents with efficiency and care.",
    img: PHOTOS.serviceOffice,
  },
  {
    icon: "package",
    title: "Packing & Unpacking",
    desc: "Full packing services available with quality materials. We pack, move, and unpack your belongings, saving you time and stress.",
    img: PHOTOS.servicePacking,
  },
  {
    icon: "wrench",
    title: "Furniture Assembly",
    desc: "Expert furniture disassembly and reassembly included. We handle complex furniture pieces to ensure safe transport and proper setup.",
    img: PHOTOS.serviceAssembly,
  },
] as const;

/* ── Pricing ───────────────────────────────────────────────── */
export const PLANS = [
  {
    name: "4 Tonne Truck",
    code: "STL-04",
    subtitle: "Ideal for 1–2 Bedroom Unit or Small Apartment",
    price: 120,
    features: [
      "2 professional movers",
      "Suitable for smaller moves",
      "Moving truck & equipment included",
    ],
    popular: false,
  },
  {
    name: "8 Tonne Truck",
    code: "STL-08",
    subtitle: "Ideal for 3–4 Bedroom House",
    price: 140,
    features: [
      "2 professional movers",
      "Medium-size moves with more furniture",
      "Moving truck & equipment included",
      "Disassembly & reassembly included",
    ],
    popular: true,
  },
  {
    name: "10 Tonne Truck",
    code: "STL-10",
    subtitle: "Ideal for 5–6 Bedroom House or Large Office",
    price: 160,
    features: [
      "2 professional movers",
      "Large capacity for big moves",
      "Moving truck & equipment included",
      "Full packing assistance",
    ],
    popular: false,
  },
] as const;

/* ── Why choose ────────────────────────────────────────────── */
export const WHY_CHOOSE = [
  {
    title: "Local Melbourne Team",
    metric: "MEL · 12 yrs",
    desc: "Born and raised in Melbourne, we know the city inside out — every laneway, loading zone, and parking fine avoided.",
  },
  {
    title: "Clear Upfront Pricing",
    metric: "$120/hr",
    desc: "Transparent hourly quotes with no surprise fees, no hidden costs, and no last-minute markups. Ever.",
  },
  {
    title: "Careful Handling",
    metric: "$20M cover",
    desc: "Your belongings are protected with $20M transit insurance and professional wrapping on every item that matters.",
  },
  {
    title: "Weekend & Same-Day",
    metric: "7 days",
    desc: "Flexible scheduling including weekends and last-minute moves, because life rarely sticks to business hours.",
  },
  {
    title: "Friendly Professionals",
    metric: "Police-checked",
    desc: "Background-checked movers who treat your home like their own — shoe covers on, smiles on.",
  },
  {
    title: "All Metro Coverage",
    metric: "300+ postcodes",
    desc: "From the CBD to the outer suburbs, we service 300+ postcodes across greater Melbourne.",
  },
] as const;

/* ── Process (guided journey) ──────────────────────────────── */
export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Request your move",
    desc: "Fill out our simple form or give us a call to share your moving requirements.",
    meta: "≈ 2 minutes",
  },
  {
    num: "02",
    title: "Receive a fixed quote",
    desc: "Get a transparent, no-hidden-fees quote and confirm your booking on the spot.",
    meta: "≈ 60 seconds",
  },
  {
    num: "03",
    title: "We execute the move",
    desc: "Our professional team arrives on time and moves your belongings safely to your new home.",
    meta: "on schedule",
  },
] as const;

/* ── Service areas (Melbourne suburbs) ─────────────────────── */
export const SUBURBS = [
  "Brunswick", "Richmond", "Southbank", "Carlton", "St Kilda", "Docklands",
  "Footscray", "Dandenong", "Werribee", "Point Cook", "Craigieburn", "Preston",
  "Sunshine", "Essendon", "Hawthorn", "Northcote", "Fitzroy", "Toorak",
  "Glen Waverley", "Box Hill",
] as const;

/* ── Reviews ───────────────────────────────────────────────── */
export const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Brunswick",
    text: "Absolutely fantastic service! The team was professional, careful with our belongings, and finished ahead of schedule. Highly recommend!",
  },
  {
    name: "James K.",
    location: "Richmond",
    text: "Best moving experience we've ever had. Transparent pricing, no hidden fees, and the movers were incredibly friendly and efficient.",
  },
  {
    name: "Emily R.",
    location: "Southbank",
    text: "Moved our entire 3-bedroom house in just 3 hours. The team was organised, hardworking, and made what could have been stressful into a smooth experience.",
  },
  {
    name: "Michael T.",
    location: "Carlton",
    text: "Used Stellar for our office relocation. They handled everything with minimal downtime. Professional from start to finish.",
  },
  {
    name: "Lisa W.",
    location: "St Kilda",
    text: "Great value for money. The quote was accurate, the team arrived on time, and they took great care with fragile items. Will use again!",
  },
  {
    name: "David C.",
    location: "Footscray",
    text: "Couldn't be happier with the service. They moved us on a Saturday which was so convenient. The crew was efficient and careful.",
  },
  {
    name: "Anna P.",
    location: "Hawthorn",
    text: "From the initial quote to the final box being unpacked, everything was seamless. Stellar made our move completely stress-free.",
  },
  {
    name: "Tom H.",
    location: "Preston",
    text: "Professional, punctual, and priced fairly. They even helped us with some last-minute furniture assembly. Highly recommended!",
  },
] as const;

/* ── Moving tips / FAQ ─────────────────────────────────────── */
export const MOVING_TIPS = [
  {
    q: "Start planning early",
    a: "Begin your preparations at least 4–6 weeks in advance. Create a moving checklist, sort through your belongings, and declutter. The earlier you start, the smoother the entire process will be.",
  },
  {
    q: "Label your boxes clearly",
    a: "Use a clear labelling system for all your boxes. Mark each box with its contents and the room it belongs in. Use colour-coded labels for different rooms to make unpacking much easier.",
  },
  {
    q: "Protect fragile items properly",
    a: "Wrap fragile items individually in packing paper or bubble wrap. Use sturdy boxes and fill any gaps with packing material. Clearly mark fragile boxes so movers handle them with extra care.",
  },
  {
    q: "Prepare your home for moving day",
    a: "Clear hallways and doorways of any obstacles. Protect floors with cardboard or moving blankets. Make sure there is clear access for the moving truck and that parking is arranged.",
  },
  {
    q: "Pack an essentials bag",
    a: "Pack a bag with items you'll need immediately: toiletries, phone charger, important documents, medications, snacks, and a change of clothes. Keep this bag with you during the move.",
  },
  {
    q: "Understand what affects moving costs",
    a: "Moving costs depend on distance, volume of items, access difficulties (stairs, narrow hallways), and time of year. Get a detailed quote upfront so there are no surprises on moving day.",
  },
] as const;

/* ── FAQ (pricing & logistics) ─────────────────────────────── */
export const FAQS = [
  {
    q: "How much does a move cost?",
    a: "Our pricing is simple: per-hour truck rates starting at $120/hour with two professional movers and full equipment included. Final cost depends on truck size, distance, and access conditions — and we always confirm it upfront.",
  },
  {
    q: "Do you charge extra for weekends?",
    a: "No. Weekend and same-day availability is included in our standard rates. We believe moving shouldn't cost more just because it happens on a Saturday.",
  },
  {
    q: "Are you insured?",
    a: "Yes. Every Stellar move is covered by $20M public liability and full transit insurance. Ask your move manager for a certificate of currency at any time.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend 1–2 weeks for standard moves, but we regularly accommodate same-day and next-day bookings across Melbourne, subject to crew availability.",
  },
  {
    q: "What's your cancellation policy?",
    a: "Plans change — we get it. You can reschedule or cancel your booking free of charge up to 24 hours before your confirmed time slot.",
  },
] as const;

/* ── Gallery (real Unsplash photography) ───────────────────── */
export const GALLERY_IMAGES = [
  u("photo-1698917414969-feade59e3343"), // unloading at the kerb
  u("photo-1714647211902-bb711d643a17"), // packing boxes in living room
  u("photo-1600518464441-9154a4dea21b"), // crew beside the truck
  u("photo-1707407087163-7ab35bca9ffc"), // truck loaded with boxes
  u("photo-1591267556741-66d584d88e42"), // carrying a box
  u("photo-1700165644892-3dd6b67b25bc"), // brown packing boxes
  u("photo-1730154838368-c37b1fdebcf6"), // room filled with boxes
  u("photo-1757742690834-aa581b9f53b2"), // empty room, floor cleared
  u("photo-1772724317350-520faccb15e6"), // carrying boxes outside
  u("photo-1714647211963-fa82bd5b3a7a"), // laying rug on the floor
  u("photo-1449247666642-264389f5f5b1"), // person holding a box
  u("photo-1592838064575-70ed626d3a0e"), // truck on the road
];
