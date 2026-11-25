export const industries = [
  {
    slug: "healthcare",
    name: "Healthcare & hospitals",
    icon: "cross",
    summary:
      "Hospitals cannot simply evacuate. Patients on life support, operating theatres and ICUs need fire protection that detects early, contains fire and keeps critical areas running.",
    typicalSystems: [
      "Addressable fire alarm",
      "Sprinklers",
      "Hydrants",
      "Clean-agent suppression for data and imaging rooms",
      "Kitchen suppression",
      "Passive protection",
    ],
    clients: ["Apollo Hospitals (multiple sites)", "CMC Vellore", "Homi Bhabha Cancer Hospital, Varanasi"],
  },
  {
    slug: "power-utilities-cement",
    name: "Power, utilities & cement",
    icon: "zap",
    summary:
      "Transformers, switchyards, cable galleries, coal yards and fuel stores carry high-energy fire risks that need fast, heavy-duty protection.",
    typicalSystems: [
      "HVWS for transformers",
      "MVWS",
      "Deluge",
      "Coal yard sprinklers",
      "Foam systems",
      "CO2 flooding",
      "Fire-retardant cable coatings",
    ],
    clients: ["Leading power & cement sector clients"],
  },
  {
    slug: "manufacturing-automotive",
    name: "Manufacturing & automotive",
    icon: "factory",
    summary:
      "Production lines, paint shops, stores and utilities need protection that matches each process and keeps downtime low.",
    typicalSystems: ["Yard hydrants", "Sprinklers", "Foam", "Panel suppression", "Fire alarm"],
    clients: ["TVS Motor", "Brakes India"],
  },
  {
    slug: "it-data-centres-commercial",
    name: "IT, data centres & commercial offices",
    icon: "server",
    summary:
      "Data and uptime are the business. Server rooms need suppression that leaves no residue; office floors need reliable detection and sprinklers.",
    typicalSystems: [
      "FM-200 / Inergen / Novec suppression",
      "Early-warning smoke detection",
      "Addressable alarm",
      "Sprinklers",
      "Access control and CCTV",
    ],
    clients: ["TCS", "Oracle", "Siemens", "HDFC", "Bank of Baroda"],
  },
  {
    slug: "hospitality-malls-entertainment",
    name: "Hospitality, malls & entertainment",
    icon: "building-2",
    summary:
      "Hotels, malls and multiplexes host large crowds and busy kitchens, where safe, fast evacuation is critical.",
    typicalSystems: ["Sprinklers", "Hydrants", "Voice evacuation", "Kitchen hood suppression", "CCTV"],
    clients: ["Hyatt Regency Chennai", "Vijay TV"],
  },
  {
    slug: "oil-gas-chemicals-pharma",
    name: "Oil, gas, chemicals & pharma",
    icon: "flame",
    summary:
      "Flammable liquids and gases demand engineered foam, spray and suppression systems built to strict standards.",
    typicalSystems: ["MVWS for LPG bullets and tanks", "Foam systems", "Deluge", "Water monitors", "Fire tenders"],
    clients: ["Leading petroleum, energy, chemical & pharma clients"],
  },
  {
    slug: "residential-infrastructure-warehousing",
    name: "Residential, infrastructure & warehousing",
    icon: "warehouse",
    summary:
      "High-rise residences, IT parks and warehouses need code-compliant systems that pass fire NOC and are easy to maintain.",
    typicalSystems: ["Wet risers", "Hydrants", "Sprinklers", "Fire alarm", "Pump rooms"],
    clients: ["Residential and infrastructure developments across South India"],
  },
  {
    slug: "government-education-telecom",
    name: "Government, education & telecom",
    icon: "landmark",
    summary:
      "Public buildings, campuses and telecom sites need dependable protection with full documentation.",
    typicalSystems: ["Fire alarm", "Hydrants", "Gas suppression for telecom shelters", "Extinguishers"],
    clients: ["Vodafone"],
  },
];

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug);
}
