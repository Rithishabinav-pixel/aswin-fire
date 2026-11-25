// The five solution families. Each full record backs both the homepage
// cards/solutions hub and its own detail page at /solutions/[slug]/.
export const solutions = [
  {
    slug: "water-based-firefighting",
    name: "Water-Based Firefighting Systems",
    shortName: "Water-Based Firefighting",
    icon: "droplets",
    oneLiner:
      "Hydrants, sprinklers, MVWS/HVWS, deluge, foam and fire pump rooms.",
    seoTitle: "Fire Hydrant, Sprinkler & MVWS Systems in Chennai | Aswin Fire",
    metaDescription:
      "Design, installation and commissioning of fire hydrant, sprinkler, MVWS/HVWS, deluge, foam and pump room systems to NFPA, FM, UL and NBC standards.",
    intro:
      "Water remains the most effective way to control and extinguish fires in most occupancies. We design complete water-based systems, from the fire water tank and pump house to the last sprinkler head, and commission them to perform at full design pressure.",
    systems: [
      {
        name: "Fire hydrant & wet riser",
        what: "Hydrant valves, hose reels, wet risers and down-comers give firefighters pressurised water on every floor",
        applications: "High-rises, hospitals, malls, factories",
      },
      {
        name: "Yard hydrant",
        what: "External ring main with hydrants and water monitors around a site",
        applications: "Plants, warehouses, campuses",
      },
      {
        name: "Automatic sprinkler",
        what: "Heat-activated sprinkler heads control a fire at its origin, automatically",
        applications: "Offices, hotels, hospitals, warehouses",
      },
      {
        name: "MVWS (medium velocity water spray)",
        what: "Spray nozzles cool exposed surfaces and control fires",
        applications: "LPG bullets, fuel tanks, cable galleries",
      },
      {
        name: "HVWS (high velocity water spray)",
        what: "High-velocity spray extinguishes oil fires",
        applications: "Transformers, switchyards, power stations",
      },
      {
        name: "Deluge & water curtain",
        what: "Open-nozzle systems that release water over a whole area at once",
        applications: "Hazardous areas, separation between zones",
      },
      {
        name: "Foam systems (medium & high expansion)",
        what: "Foam blankets smother flammable-liquid fires",
        applications: "Fuel storage, chemical plants, hangars",
      },
      {
        name: "Water mist",
        what: "Fine droplets cool and smother with minimal water",
        applications: "Heritage sites, machinery spaces, kitchens",
      },
      {
        name: "Coal yard sprinkler",
        what: "Sprinkler and spray protection for coal storage and handling",
        applications: "Thermal power and cement plants",
      },
      {
        name: "Fire pump house",
        what: "Electric, diesel and jockey pumps, controllers and hydro-pneumatic systems",
        applications: "Every water-based installation",
      },
    ],
    scope: [
      "Hazard classification and code review (NBC, NFPA 13/14/15/20, TAC)",
      "Hydraulic calculations and pipe sizing",
      "Pump selection and pump-room layout",
      "Shop drawings and BOQ",
      "Supply of UL/FM-listed components",
      "Fabrication, erection and pressure testing",
      "Commissioning, flow tests and handover documentation",
      "AMC and periodic testing",
    ],
    whyAswin: [
      "Experience from high-rise hospitals to switchyards and coal yards",
      "In-house design and installation teams, so nothing is lost between drawing and site",
      "Systems tested to full design flow and pressure before handover",
    ],
    relatedProjectSlugs: [
      "apollo-hospitals-chennai",
      "switchyard-mvws-hvws",
      "warehouse-yard-hydrant",
    ],
    faqs: [
      {
        q: "Is a sprinkler system mandatory for my building?",
        a: "It depends on the building's height, occupancy and floor area under the National Building Code and local fire service rules. Our engineers can confirm the requirement during a site survey.",
      },
      {
        q: "What is the difference between MVWS and HVWS?",
        a: "MVWS uses medium-velocity spray mainly to cool and control fires on tanks and vessels. HVWS uses high-velocity spray to extinguish oil fires, typically on transformers.",
      },
      {
        q: "Do you provide fire pump rooms as a complete package?",
        a: "Yes. We design, supply, install and commission complete pump houses, including pumps, controllers, piping and valves.",
      },
    ],
    ctaText: "Need a hydrant, sprinkler or spray system?",
  },
  {
    slug: "fire-detection-alarm",
    name: "Fire Detection & Alarm Systems",
    shortName: "Fire Detection & Alarm",
    icon: "siren",
    oneLiner:
      "Conventional and addressable alarm, beam detectors and PA / voice evacuation.",
    seoTitle: "Addressable Fire Alarm Systems in Chennai | Aswin Fire",
    metaDescription:
      "Conventional and addressable fire alarm, beam detection, PA and voice evacuation systems, designed, installed and maintained by Aswin Fire across South India.",
    intro:
      "The first minutes of a fire decide its outcome. Our detection and alarm systems find fire and smoke early, alert occupants clearly and tell responders exactly where to go.",
    systems: [
      {
        name: "Conventional fire alarm systems",
        what: "Zone-based detection for small and medium buildings, simple and economical.",
      },
      {
        name: "Analogue addressable fire alarm systems",
        what: "Each detector reports its exact location, with fewer false alarms and faster response; suited to hospitals, IT parks and high-rises.",
      },
      {
        name: "Networked fire alarm systems",
        what: "Multiple panels across buildings or campuses linked to one control room.",
      },
      {
        name: "Beam detectors",
        what: "Smoke detection for atriums, warehouses and large open spaces.",
      },
      {
        name: "Aspirating smoke detection (VESDA)",
        what: "Very early warning for data centres and clean rooms.",
      },
      {
        name: "Manual call points, hooters and strobes",
        what: "Clear audible and visual warning for every occupant.",
      },
      {
        name: "Public address & voice evacuation",
        what: "Integrated with the fire alarm for zoned, orderly evacuation.",
      },
    ],
    integration:
      "Our alarm systems can trigger sprinkler and suppression releases, shut down HVAC, release access-controlled doors, recall lifts and connect to the building management system.",
    scope: [
      "Detector layout to NFPA 72 / IS 2189 and NBC",
      "Cabling and containment",
      "Panel programming and cause-and-effect matrix",
      "Testing of every device",
      "Operator training",
      "AMC",
    ],
    relatedProjectSlugs: ["apollo-hospitals-chennai", "it-data-centre-suppression"],
    faqs: [
      {
        q: "Conventional or addressable: which do I need?",
        a: "Conventional suits smaller buildings with few zones. Addressable is recommended for large or complex buildings, where pinpointing the exact device saves critical time.",
      },
      {
        q: "Can you upgrade our existing fire alarm system?",
        a: "Yes. We audit the current system and recommend a phased upgrade that reuses cabling where possible.",
      },
    ],
    ctaText: "Plan your fire alarm system with our engineers.",
  },
  {
    slug: "gas-suppression-systems",
    name: "Gas & Special Suppression Systems",
    shortName: "Gas & Special Suppression",
    icon: "flask-conical",
    oneLiner:
      "FM-200, Inergen, CO2, clean agent, kitchen and panel suppression.",
    seoTitle: "FM-200, Inergen & CO2 Gas Suppression Systems | Aswin Fire",
    metaDescription:
      "Clean agent, inert gas, CO2, kitchen and panel fire suppression systems for data centres, control rooms, hospitals and industry. Design, installation and AMC.",
    intro:
      "Some spaces cannot be protected with water: server rooms, control rooms, electrical panels, archives and commercial kitchens. Our gas and special suppression systems put out fires in seconds without damaging the equipment, records or operations they protect.",
    systems: [
      {
        name: "Clean agent suppression",
        what: "FM-200 (HFC-227ea), Novec 1230 / Sapphire",
        applications: "Data centres, server and UPS rooms, control rooms",
      },
      {
        name: "Inert gas suppression",
        what: "Inergen (nitrogen, argon, CO2 blend)",
        applications: "Occupied critical spaces, archives, museums",
      },
      {
        name: "CO2 flooding",
        what: "High-pressure carbon dioxide",
        applications: "Unoccupied electrical rooms, turbines, generator enclosures",
      },
      {
        name: "Kitchen hood suppression",
        what: "ANSUL R-102 wet chemical",
        applications: "Hotel, hospital and restaurant kitchens",
      },
      {
        name: "Panel / direct suppression",
        what: "Tube-based detection and local release",
        applications: "Electrical panels, CNC machines, battery cabinets",
      },
    ],
    specialistApplications: [
      "Aviation",
      "Data centres",
      "Control rooms",
      "Hospitals",
      "Museums",
      "Offshore platforms",
      "Power plants",
      "Telecom facilities",
    ],
    scope: [
      "Hazard and enclosure assessment",
      "Agent quantity calculation",
      "Room integrity (door fan) testing",
      "Detection and release control",
      "Installation and pipe network",
      "Commissioning",
      "Cylinder weighing, refilling and AMC",
    ],
    whyAswin: [
      "Specialised in suppression systems from ANSUL (USA), Inergen and Sapphire",
      "Experience protecting hospitals, IT and telecom facilities",
      "Agent calculations and documentation ready for consultant and insurer review",
    ],
    relatedProjectSlugs: ["it-data-centre-suppression"],
    faqs: [
      {
        q: "Is FM-200 or Inergen safe for people in the room?",
        a: "Both are designed for use in normally occupied spaces when applied at the correct concentration. CO2 systems are for unoccupied areas only and need lock-out safeguards.",
      },
      {
        q: "How often should a gas suppression system be serviced?",
        a: "We recommend inspections at least every six months, plus cylinder weight and pressure checks as specified by the manufacturer.",
      },
    ],
    ctaText: "Protect your critical rooms without water damage.",
  },
  {
    slug: "passive-fire-protection",
    name: "Passive Fire Protection",
    shortName: "Passive Fire Protection",
    icon: "shield-half",
    oneLiner: "Fire-retardant coatings, cable sealants and fire barriers.",
    seoTitle: "Passive Fire Protection, Fire Retardant Coatings & Sealants | Aswin",
    metaDescription:
      "Fire-retardant cable coatings, fire sealants and fire barriers that contain fire and smoke in power plants, hospitals and commercial buildings.",
    intro:
      "Active systems fight fire; passive protection stops it spreading. By sealing openings, coating cables and creating fire-rated barriers, we keep a fire confined to where it starts, buying time for people to escape and for active systems to work.",
    systems: [
      {
        name: "Fire-retardant cable coatings",
        what: "Prevent fire from travelling along cable trays and galleries.",
      },
      {
        name: "Fire sealants and penetration seals",
        what: "Seal cable, pipe and duct openings through fire-rated walls and floors.",
      },
      {
        name: "Fire barriers and compartmentation",
        what: "Fire-rated boards, wraps and barriers that maintain compartment integrity.",
      },
      {
        name: "Fire-rated doors and dampers",
        what: "Scope confirmed on a per-project basis.",
      },
    ],
    whereItMatters: [
      "Power stations and switchyards",
      "Cable galleries and substations",
      "Hospitals and high-rise buildings",
      "Data centres",
      "Industrial plants",
    ],
    scope: [
      "Survey of openings and cable routes",
      "Product selection to rated performance",
      "Application by trained crews",
      "Inspection records and photo documentation for audits",
    ],
    relatedProjectSlugs: ["switchyard-mvws-hvws"],
    faqs: [
      {
        q: "Do I need passive protection if I already have sprinklers?",
        a: "Usually, yes. Most buildings need both: sprinklers control the fire, while passive protection keeps fire and smoke from spreading through openings and cables.",
      },
    ],
    ctaText: "Get a passive fire protection survey.",
  },
  {
    slug: "security-elv-systems",
    name: "Security & ELV Systems",
    shortName: "Security & ELV",
    icon: "camera",
    oneLiner:
      "CCTV, access control, turnstiles, boom barriers and intrusion alarms.",
    seoTitle: "CCTV, Access Control & Security Systems in Chennai | Aswin Fire",
    metaDescription:
      "Integrated CCTV, access control, turnstiles, boom barriers and intrusion alarm systems with remote monitoring, from the team that protects your building from fire.",
    intro:
      "Safety covers more than fire. We integrate surveillance, access control and intrusion detection with your fire systems, so one partner looks after the protection of your people, assets and premises.",
    systems: [
      {
        name: "CCTV surveillance",
        what: "High-definition IP and analogue cameras, recording, and integrated video management.",
      },
      {
        name: "Access control",
        what: "Card, biometric and PIN access for doors and restricted areas.",
      },
      {
        name: "Entrance control",
        what: "Turnstiles, flap barriers, wicket gates and boom barriers for people and vehicles.",
      },
      {
        name: "Intrusion & security alarms",
        what: "Wired and wireless systems with web-based remote monitoring.",
      },
      {
        name: "Public address",
        what: "Paging, background music and emergency announcements.",
      },
    ],
    integration:
      "Access-controlled doors release automatically on fire alarm, and cameras can be linked to alarm events for faster verification.",
    relatedProjectSlugs: [],
    faqs: [
      {
        q: "Can you integrate security with our existing fire alarm?",
        a: "In most cases, yes. We assess compatibility and design the interface during the site survey.",
      },
    ],
    ctaText: "Secure your premises with one integrated partner.",
  },
];

export function getSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug);
}
