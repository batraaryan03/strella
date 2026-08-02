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
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#areas", label: "Areas" },
  { href: "#services", label: "Services" },
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
  { icon: "shield", label: "Transit insured", num: 20, prefix: "$", suffix: "M", decimals: 0, sub: "cover on every move" },
  { icon: "badge", label: "Local crew", num: 100, suffix: "%", decimals: 0, sub: "professional movers" },
  { icon: "truck", label: "Moves completed", num: 5000, suffix: "+", decimals: 0, sub: "across greater Melbourne" },
  { icon: "star", label: "Rated by locals", num: 5, suffix: "★", decimals: 0, sub: "Melbourne customers" },
  { icon: "receipt", label: "Upfront pricing", text: "Fixed", sub: "per-hour rates" },
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
    subtitle: "Ideal for 1–2 Bedroom Unit or Small Apartment",
    price: { weekday: 130, weekend: 140 },
    features: [
      "2 professional movers",
      "Suitable for smaller moves",
      "Moving truck & equipment included",
    ],
    popular: false,
  },
  {
    name: "8 Tonne Truck",
    subtitle: "Ideal for 3–4 Bedroom House",
    price: { weekday: 140, weekend: 150 },
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
    subtitle: "Ideal for 5–6 Bedroom House or Large Office",
    price: { weekday: 160, weekend: 170 },
    features: [
      "2 professional movers",
      "Large capacity for big moves",
      "Moving truck & equipment included",
      "Full packing assistance",
    ],
    popular: false,
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
  {
    name: "Olivia B.",
    location: "Box Hill",
    text: "Booked on a Sunday and they still arrived exactly on time. The crew wrapped our sofa like it was priceless. Flawless.",
  },
  {
    name: "Nathan K.",
    location: "Toorak",
    text: "Three-bedroom house packed, moved and unpacked in a single day. The price matched the quote to the dollar. Zero surprises.",
  },
  {
    name: "Priya S.",
    location: "Glen Waverley",
    text: "The team took genuine care with our piano and artwork. Polished from the first call to the last box. Can't recommend enough.",
  },
  {
    name: "Daniel R.",
    location: "Essendon",
    text: "Same-day move, no drama. Fair rate, careful crew, and they even reconnected our washing machine. Above and beyond.",
  },
  {
    name: "Grace T.",
    location: "Werribee",
    text: "Moving with a newborn is chaos — Stellar made it calm. Friendly, fast, and nothing was scratched. Worth every dollar.",
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

/* ── FAQ (copied verbatim from stellarremovals.com.au) ─────── */
export const FAQS = [
  {
    q: "How much does a local move in Melbourne cost?",
    a: "Our local moving rates start from $130/hour for a 4-tonne truck and 2 movers. The total cost depends on the size of your move, access at both properties, and travel time. We maintain full transparency with no hidden fees.",
  },
  {
    q: "Do you offer packing and unpacking services?",
    a: "Yes, we offer professional full or partial packing and unpacking services. We bring high-quality boxes, bubble wrap, and packing materials to ensure all your fragile items are securely packed and ready for transport.",
  },
  {
    q: "Are my belongings insured during the move?",
    a: "Yes, we hold comprehensive Public Liability Insurance and Transit Insurance to protect your belongings and property during the entire moving process for your complete peace of mind.",
  },
  {
    q: "Do you work on weekends and public holidays?",
    a: "Absolutely! We specialize in weekend and public holiday moves at no extra or hidden surcharge, making it convenient for you to move without taking time off work.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "We recommend booking your move at least 1 to 2 weeks in advance, especially for weekend moves. However, we also accommodate last-minute and same-day moving requests subject to availability.",
  },
  {
    q: "Do you disassemble and reassemble furniture?",
    a: "Yes, basic furniture disassembly and reassembly (such as beds, tables, and desks) are included in our service at no extra charge. Our team brings all necessary tools.",
  },
  {
    q: "What truck sizes do you have available?",
    a: "We have 4-tonne, 8-tonne, and 10-tonne trucks available, suitable for anything from a small 1-bedroom apartment to a large 5-6 bedroom family home or commercial office.",
  },
  {
    q: "Do you provide moving boxes?",
    a: "Yes, we can supply high-quality moving boxes, packing paper, and tape prior to your move upon request, or we can bring them with us on moving day.",
  },
  {
    q: "Do you charge a call-out fee or depot-to-depot fee?",
    a: "Our travel fee is transparently calculated based on the distance between your pickup location, drop-off location, and our base. We explain all travel charges upfront before you confirm.",
  },
  {
    q: "Can you move pianos or pool tables?",
    a: "Yes, we can handle heavy specialty items like upright pianos and pool tables, provided we are notified of them in advance so we can bring the appropriate equipment and crew size.",
  },
  {
    q: "What areas of Melbourne do you service?",
    a: "We service all metropolitan Melbourne suburbs, the CBD, and surrounding regional areas across Victoria. No matter where you are located, our team is ready to help.",
  },
  {
    q: "Is there a minimum booking time?",
    a: "Yes, our standard minimum booking time is 2 hours of labor plus travel time, which applies to all local residential and commercial moves.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, direct bank transfer, and major credit/debit cards. Payment is typically settled upon completion of the move.",
  },
  {
    q: "Can I help with the move to save time?",
    a: "While you are welcome to assist with lighter items or directing placement to save time, we generally recommend letting our professional team handle the heavy lifting for safety and efficiency.",
  },
  {
    q: "What happens if it rains on moving day?",
    a: "Rain won't stop us! Our trucks and equipment are fully enclosed, and our experienced team takes extra precautions to protect your furniture and keep your floors clean during wet weather.",
  },
  {
    q: "Do you offer storage solutions?",
    a: "While we do not operate our own storage facilities, we can recommend trusted secure storage partners across Melbourne and help coordinate the transit of your items into storage.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. We pride ourselves on 100% transparent pricing with no hidden charges, surprise fuel levies, or unexpected stair fees unless previously agreed upon.",
  },
  {
    q: "Can I change my booking date after confirming?",
    a: "Yes, you can reschedule your booking subject to availability. We recommend giving us at least 48 hours notice so we can adjust our schedule accordingly.",
  },
  {
    q: "Do you handle office and commercial moves?",
    a: "Yes, we are experienced in commercial relocations, including office furniture, workstations, and equipment. We can work after hours to minimize disruption to your business.",
  },
  {
    q: "What if something gets damaged?",
    a: "In the rare event of accidental damage, we take full responsibility. Our team is fully insured, and we have a straightforward claims process to resolve any issues promptly and fairly.",
  },
] as const;

/* ── Gallery (real local photos from /public/gallery) ───────── */
/** All 30 real move photos in public/gallery (01.jpg–30.jpg). */
export const GALLERY_LOCAL = Array.from({ length: 30 }, (_, i) => ({
  src: `/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Melbourne move — photo ${i + 1}`,
}));
