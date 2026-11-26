// Real client logos supplied by Aswin Fire (corrections/clients logo/), grouped
// by sector. Clients named elsewhere on the site without a supplied logo file
// render through a consistent placeholder tile (see ClientLogoCard) rather
// than as plain text.
export const clientLogos = [
  { name: "Apollo Hospitals", sector: "Healthcare", logo: "/clients/apollo-hospital.jpg" },
  { name: "Karpagam University", sector: "Education", logo: "/clients/karpagam-university.jpg" },
  { name: "B Braun", sector: "Chemical & Pharma", logo: "/clients/b-braun.jpg" },
  { name: "SPIC Pharma", sector: "Chemical & Pharma", logo: "/clients/spic-pharma.jpg" },
  { name: "Asian Paints", sector: "Chemical & Pharma", logo: "/clients/asian-paints.jpg" },
  { name: "Siemens", sector: "Engineering & Automotive", logo: "/clients/siemens.jpg" },
  { name: "TVS Motor", sector: "Engineering & Automotive", logo: "/clients/tvs-motor.jpg" },
  { name: "TVS Electronics", sector: "Engineering & Automotive", logo: "/clients/tvs-electronics.jpg" },
  { name: "Borg Warner", sector: "Engineering & Automotive", logo: "/clients/borg-warner.jpg" },
  { name: "Schwing Stetter", sector: "Engineering & Automotive", logo: "/clients/schwing-stetter.jpg" },
  { name: "Bank of Baroda", sector: "Banking & Financial", logo: "/clients/bank-of-baroda.jpg" },
  { name: "Vodafone", sector: "Telecom", logo: "/clients/vodafone.jpg" },
  { name: "Hutch", sector: "Telecom", logo: "/clients/hutch.jpg" },
  { name: "C-DOT Alcatel", sector: "IT / ITES", logo: "/clients/c-dot-alcatel.jpg" },
  { name: "Zoho", sector: "IT / ITES", logo: "/clients/zoho.jpg" },
  { name: "Justdial", sector: "IT / ITES", logo: "/clients/justdial.jpg" },
  { name: "Vijay TV", sector: "Hospitality & Media", logo: "/clients/vijay-tv.jpg" },
  { name: "Raj TV", sector: "Hospitality & Media", logo: "/clients/raj-tv.jpg" },
  { name: "BKR Grand Hotel", sector: "Hospitality & Media", logo: "/clients/bkr-grand-hotel.jpg" },
  { name: "Harrisons Hotel", sector: "Hospitality & Media", logo: "/clients/harrisons.jpg" },
  { name: "Ramco Cements", sector: "Cement & Power", logo: "/clients/ramco-cements.jpg" },
  { name: "Zuari Cement", sector: "Cement & Power", logo: "/clients/zuari-cement.jpg" },
  { name: "Blue Dart", sector: "Retail & Logistics", logo: "/clients/blue-dart.jpg" },
  { name: "Jet Airways", sector: "Retail & Logistics", logo: "/clients/jet-airways.jpg" },
  { name: "Star Boxes", sector: "Retail & Logistics", logo: "/clients/star-boxes.jpg" },
  { name: "ETA", sector: "Retail & Logistics", logo: "/clients/eta.jpg" },
  { name: "SPEL", sector: "Retail & Logistics", logo: "/clients/spel.jpg" },
  { name: "Indus Coffee", sector: "Retail & Logistics", logo: "/clients/indus.jpg" },
  { name: "Baashyaam Constructions", sector: "Infrastructure & Residential", logo: "/clients/baashyaam.jpg" },
  { name: "Bhoomi & Buildings", sector: "Infrastructure & Residential", logo: "/clients/bhoomi-buildings.jpg" },
  { name: "Sabari Group", sector: "Infrastructure & Residential", logo: "/clients/sabari.jpg" },
];

// Clients referenced elsewhere on the site (case studies, industries) that
// Aswin has not supplied a logo file for yet — shown as placeholder tiles.
export const clientsWithoutLogo = [
  { name: "CMC Vellore", sector: "Healthcare" },
  { name: "Homi Bhabha Cancer Hospital", sector: "Healthcare" },
  { name: "Oracle", sector: "IT / ITES" },
  { name: "TCS", sector: "IT / ITES" },
  { name: "HDFC Cards", sector: "Banking & Financial" },
  { name: "Brakes India", sector: "Engineering & Automotive" },
  { name: "Hyatt Regency Chennai", sector: "Hospitality & Media" },
];

export const clientSectors = Array.from(
  new Set([...clientLogos.map((c) => c.sector), ...clientsWithoutLogo.map((c) => c.sector)])
).map((sector) => ({
  sector,
  clients: [
    ...clientLogos.filter((c) => c.sector === sector),
    ...clientsWithoutLogo.filter((c) => c.sector === sector),
  ],
}));

// A curated subset for the homepage trust marquee.
export const trustLogos = [
  clientLogos.find((c) => c.name === "Apollo Hospitals"),
  clientLogos.find((c) => c.name === "Siemens"),
  clientLogos.find((c) => c.name === "TVS Motor"),
  clientLogos.find((c) => c.name === "Bank of Baroda"),
  clientLogos.find((c) => c.name === "Vodafone"),
  clientLogos.find((c) => c.name === "Zoho"),
  clientLogos.find((c) => c.name === "Vijay TV"),
  clientLogos.find((c) => c.name === "Blue Dart"),
  clientLogos.find((c) => c.name === "Justdial"),
  clientLogos.find((c) => c.name === "Ramco Cements"),
  clientLogos.find((c) => c.name === "Asian Paints"),
  clientLogos.find((c) => c.name === "Jet Airways"),
].filter(Boolean);

export const testimonials = [
  {
    quote:
      "Aswin's team understood that we could not shut down patient care for construction. They planned every phase around our operations and delivered a system that passed every test on the first attempt.",
    name: "Facility Director",
    role: "Healthcare client",
  },
  {
    quote:
      "From the hydraulic calculations to the final commissioning report, the documentation was thorough enough to walk straight into our fire-NOC renewal.",
    name: "MEP Consultant",
    role: "Consulting engineer",
  },
];
