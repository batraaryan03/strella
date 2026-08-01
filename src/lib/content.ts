/**
 * STELLAR — single source of truth for all site content.
 * Content structure mirrors the Weekend Movers project; copy is
 * rebranded & refined for Stellar Removals.
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

/* ── Trust metrics (hero ribbon) ───────────────────────────── */
export const TRUST_METRICS = [
  { label: "Google Rating", value: "4.9", suffix: "★", sub: "2,300+ verified reviews" },
  { label: "Moves Completed", value: "5,000", suffix: "+", sub: "across greater Melbourne" },
  { label: "Years Moving", value: "12", suffix: "+", sub: "local Melbourne expertise" },
  { label: "Insurance", value: "$20M", suffix: "", sub: "full transit coverage" },
  { label: "Availability", value: "7", suffix: " days", sub: "weekends & same-day" },
] as const;

/* ── Services ──────────────────────────────────────────────── */
export const SERVICES = [
  {
    icon: "home",
    title: "Local House Moves",
    desc: "Complete residential moving services across Melbourne. We handle everything from small apartments to large family homes with care and professionalism.",
    img: "/services/01-local-house-moves.png",
  },
  {
    icon: "building",
    title: "Apartment Moves",
    desc: "Specialised in apartment and unit relocations. We navigate stairs, elevators, and tight spaces with ease to ensure a smooth move.",
    img: "/services/02-apartment-moves.png",
  },
  {
    icon: "briefcase",
    title: "Office Relocations",
    desc: "Professional office moving services that minimise downtime. We handle furniture, equipment, and documents with efficiency and care.",
    img: "/services/03-office-relocations.png",
  },
  {
    icon: "package",
    title: "Packing & Unpacking",
    desc: "Full packing services available with quality materials. We pack, move, and unpack your belongings, saving you time and stress.",
    img: "/services/04-packing-unpacking.png",
  },
  {
    icon: "wrench",
    title: "Furniture Assembly",
    desc: "Expert furniture disassembly and reassembly included. We handle complex furniture pieces to ensure safe transport and proper setup.",
    img: "/services/05-furniture-assembly.png",
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
    icon: "users",
    title: "Local Melbourne Team",
    desc: "Born and raised in Melbourne, we know the city inside out — every laneway, loading zone, and parking fine avoided.",
  },
  {
    icon: "dollar",
    title: "Clear Upfront Pricing",
    desc: "Transparent hourly quotes with no surprise fees, no hidden costs, and no last-minute markups. Ever.",
  },
  {
    icon: "shield",
    title: "Careful Handling",
    desc: "Your belongings are protected with $20M transit insurance and professional wrapping on every item that matters.",
  },
  {
    icon: "calendar",
    title: "Weekend & Same-Day",
    desc: "Flexible scheduling including weekends and last-minute moves, because life rarely sticks to business hours.",
  },
  {
    icon: "heart",
    title: "Friendly Professionals",
    desc: "Background-checked movers who treat your home like their own — shoe covers on, smiles on.",
  },
  {
    icon: "map",
    title: "All Metro Coverage",
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

/* ── Gallery ───────────────────────────────────────────────── */
export const GALLERY_IMAGES = Array.from(
  { length: 30 },
  (_, i) => `/gallery/${String(i + 1).padStart(2, "0")}.jpg`
);
