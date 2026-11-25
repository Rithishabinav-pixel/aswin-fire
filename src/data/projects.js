// Launch set of case studies, per the brief's "8–12 projects to write up first".
// Scale figures (bed counts, exact dates, tonnages) are withheld rather than
// invented — pending confirmation from Aswin Fire — and phrased qualitatively.
export const projects = [
  {
    slug: "apollo-hospitals-chennai",
    client: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    industrySlug: "healthcare",
    industryLabel: "Healthcare",
    systems: ["Fire hydrant", "Sprinkler", "Addressable fire alarm"],
    solutionSlugs: ["water-based-firefighting", "fire-detection-alarm"],
    scope: ["Design", "Supply", "Installation", "Commissioning"],
    summary:
      "Hydrant, sprinkler and addressable fire alarm systems for a multi-specialty hospital campus.",
    challenge:
      "A live, fully operational multi-specialty hospital cannot pause patient care for construction. Every riser shutdown, hot-work permit and corridor closure had to be sequenced around ICU, OT and ward operations, while meeting NBC and fire-NOC requirements for a high-occupancy healthcare building.",
    solution:
      "Our engineers phased the hydrant, wet-riser and sprinkler installation floor by floor, coordinating night and low-occupancy windows with the hospital's facility team. An analogue addressable fire alarm system was layered in to give exact device-level location reporting across ICUs, OTs and diagnostic areas, with the panel configured to interface with existing access-controlled doors and the building management system.",
    result:
      "Systems were commissioned without disrupting patient care, tested to full design flow and pressure, and handed over with complete documentation for fire-NOC renewal. The site continues under Aswin's AMC.",
    gallery: 4,
    featured: true,
  },
  {
    slug: "cmc-vellore",
    client: "CMC Vellore",
    location: "Vellore, Tamil Nadu",
    industrySlug: "healthcare",
    industryLabel: "Healthcare",
    systems: ["Hydrant", "Sprinkler", "Fire alarm"],
    solutionSlugs: ["water-based-firefighting", "fire-detection-alarm"],
    scope: ["Design", "Installation", "Commissioning", "AMC"],
    summary:
      "Code-compliant fire protection upgrades across a long-established medical campus.",
    challenge:
      "A campus built up over decades meant mixed-vintage buildings, inconsistent existing protection and ongoing clinical activity throughout the upgrade.",
    solution:
      "We surveyed each block individually, classified hazards by NBC occupancy type, and designed a phased hydrant, sprinkler and fire alarm upgrade that reused serviceable existing infrastructure where it met code, replacing only what was necessary.",
    result:
      "The campus now runs under a single, documented fire protection standard with ongoing AMC support from Aswin.",
    gallery: 3,
  },
  {
    slug: "homi-bhabha-cancer-hospital-varanasi",
    client: "Homi Bhabha Cancer Hospital",
    location: "Varanasi, Uttar Pradesh",
    industrySlug: "healthcare",
    industryLabel: "Healthcare",
    systems: ["Hydrant", "Sprinkler", "Fire alarm", "Passive fire protection"],
    solutionSlugs: ["water-based-firefighting", "fire-detection-alarm", "passive-fire-protection"],
    scope: ["Design", "Supply", "Installation", "Commissioning"],
    summary:
      "Fire and life-safety systems for a specialist oncology hospital outside Aswin's home region.",
    challenge:
      "Delivering a project far from our Chennai base meant mobilising a supervised installation team, sourcing certified equipment, and meeting the same commissioning standard we hold on home-ground projects.",
    solution:
      "Aswin's design team prepared drawings and hydraulic calculations centrally, then deployed a dedicated site team for installation, cable and pipe containment, and passive fire sealing at critical openings, with testing and commissioning witnessed by hospital and consultant representatives.",
    result:
      "The hospital's fire protection systems were commissioned to design specification, demonstrating Aswin's ability to deliver consistent quality on projects outside South India.",
    gallery: 3,
  },
  {
    slug: "hyatt-regency-chennai",
    client: "Hyatt Regency Chennai",
    location: "Chennai, Tamil Nadu",
    industrySlug: "hospitality-malls-entertainment",
    industryLabel: "Hospitality",
    systems: ["Sprinkler", "Hydrant", "Voice evacuation", "Kitchen hood suppression"],
    solutionSlugs: ["water-based-firefighting", "fire-detection-alarm", "gas-suppression-systems"],
    scope: ["Design", "Installation", "Commissioning", "AMC"],
    summary:
      "Guest-floor sprinkler and voice evacuation systems alongside kitchen hood suppression for a five-star property.",
    challenge:
      "A functioning hotel with guests in residence needed a fire protection upgrade that caused minimal noise, dust and disruption across guest floors, banquet spaces and back-of-house kitchens.",
    solution:
      "Work was sequenced room-block by room-block in coordination with housekeeping and front-office teams. Kitchen hood suppression was engineered around existing extraction ductwork, and a zoned voice evacuation system was integrated with the hotel's existing fire alarm for clear, staged announcements during an emergency.",
    result:
      "The property now runs a fully integrated detection, suppression and evacuation system, maintained under an ongoing Aswin AMC.",
    gallery: 4,
  },
  {
    slug: "switchyard-mvws-hvws",
    client: "Power & utilities client",
    location: "South India",
    industrySlug: "power-utilities-cement",
    industryLabel: "Power & Utilities",
    systems: ["MVWS", "HVWS", "Fire-retardant cable coating"],
    solutionSlugs: ["water-based-firefighting", "passive-fire-protection"],
    scope: ["Design", "Supply", "Installation", "Commissioning"],
    summary:
      "High-velocity and medium-velocity water spray protection for transformers, switchyard equipment and cable galleries.",
    challenge:
      "Transformer and switchyard fires escalate in seconds and carry high-energy electrical hazards, demanding spray systems engineered to extinguish oil fires without endangering personnel or equipment.",
    solution:
      "Aswin designed a combined HVWS and MVWS network sized to each transformer's oil volume and radiant heat profile, paired with fire-retardant coating along adjoining cable galleries to prevent fire travel between bays.",
    result:
      "The system was pressure-tested and commissioned to full design flow, with documentation prepared for insurer and consultant review, and remains under periodic testing.",
    gallery: 3,
  },
  {
    slug: "it-data-centre-suppression",
    client: "IT & data centre client",
    location: "Chennai, Tamil Nadu",
    industrySlug: "it-data-centres-commercial",
    industryLabel: "IT & Data Centres",
    systems: ["Clean-agent suppression", "Early-warning smoke detection"],
    solutionSlugs: ["gas-suppression-systems", "fire-detection-alarm"],
    scope: ["Design", "Supply", "Installation", "Commissioning"],
    summary:
      "Clean-agent gas suppression for server and UPS rooms serving a major technology campus.",
    challenge:
      "Server and UPS rooms needed suppression that could extinguish a fire in seconds without leaving residue or damaging hardware, in spaces too critical to risk a false discharge.",
    solution:
      "We calculated agent quantities room by room, carried out door-fan integrity testing to confirm each enclosure would hold design concentration, and integrated aspirating smoke detection for the earliest possible warning ahead of any suppression event.",
    result:
      "Systems were commissioned with full documentation for consultant and insurer review, and remain under Aswin's cylinder-weighing and inspection AMC.",
    gallery: 3,
  },
  {
    slug: "tvs-motor-automotive-plant",
    client: "TVS Motor",
    location: "Tamil Nadu",
    industrySlug: "manufacturing-automotive",
    industryLabel: "Manufacturing & Automotive",
    systems: ["Yard hydrant", "Sprinkler", "Foam", "Fire alarm"],
    solutionSlugs: ["water-based-firefighting", "fire-detection-alarm"],
    scope: ["Design", "Installation", "Commissioning", "AMC"],
    summary:
      "Yard hydrant, sprinkler and foam protection across a working automotive production plant.",
    challenge:
      "Production lines, paint shops and stores each carry different fire loads, and the plant could not afford extended downtime during installation.",
    solution:
      "Aswin's engineers zoned the plant by hazard class, specifying foam protection for paint and solvent areas, sprinklers for stores and general production, and a yard hydrant ring main for external coverage, installed in coordination with the plant's maintenance shutdown windows.",
    result:
      "The plant operates under a unified, code-compliant fire protection system with continuing AMC support.",
    gallery: 3,
  },
  {
    slug: "fire-tender-vehicle-supply",
    client: "Industrial client",
    location: "South India",
    industrySlug: "oil-gas-chemicals-pharma",
    industryLabel: "Oil, Gas & Chemicals",
    systems: ["Fire tender vehicle", "Foam tender"],
    solutionSlugs: ["water-based-firefighting"],
    scope: ["Supply", "Commissioning", "Training"],
    summary: "Supply and commissioning of a foam-capable fire tender for an industrial site.",
    challenge:
      "The site needed a mobile first-response capability for flammable-liquid fires beyond the reach of fixed systems, operable by its own trained crew.",
    solution:
      "Aswin supplied a foam-capable fire tender matched to the site's hazard profile, commissioned it on site, and trained the client's fire-response team on operation and routine checks.",
    result:
      "The vehicle is in active service as part of the site's emergency response plan, with Aswin providing ongoing servicing support.",
    gallery: 2,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByIndustry(industrySlug) {
  return projects.filter((p) => p.industrySlug === industrySlug);
}

export function getProjectsBySolution(slug) {
  return projects; // filtering refined per-solution via relatedProjectSlugs in solutions.js
}
