// Launch set of 6 articles. Content blocks render as structured sections in
// the article template (src/app/resources/blog/[slug]/page.js).
export const blogPosts = [
  {
    slug: "fire-safety-requirements-hospitals-india",
    title: "Fire safety requirements for hospitals in India: a practical guide",
    excerpt:
      "What the National Building Code expects from a hospital, the systems typically required, and the gaps our engineers see most often during audits.",
    readTime: "9 min read",
    relatedSolutionSlug: "water-based-firefighting",
    blocks: [
      {
        type: "p",
        text: "Hospitals carry a fire risk profile unlike almost any other building type. Patients on ventilators and in ICUs cannot be evacuated quickly, oxygen and anaesthetic gases are stored and piped throughout the building, and corridors double as the primary escape route for people who cannot walk unaided. The National Building Code of India (NBC 2016) and local fire service rules reflect this by placing hospitals in a high-risk occupancy category with stricter requirements than most commercial buildings.",
      },
      {
        type: "h2",
        text: "What the code typically requires",
      },
      {
        type: "p",
        text: "Requirements scale with the building's height, floor area and bed strength, but most multi-storey hospitals in India need a combination of the following systems, each cross-checked against the applicable NBC occupancy classification and local fire department rules:",
      },
      {
        type: "ul",
        items: [
          "A wet riser and internal hydrant system reaching every floor and basement level",
          "Automatic sprinkler protection across patient care, storage and support areas",
          "An addressable fire alarm system, not conventional, once the building exceeds a certain height or bed strength",
          "Manual call points, hooters and visual alarms in every ward and corridor",
          "Smoke management and pressurisation for stairwells serving tall blocks",
          "Fire-rated compartmentation between departments, particularly around ICUs, OTs and oxygen stores",
          "A dedicated fire pump room with electric, diesel and jockey pumps and adequate static water storage",
        ],
      },
      {
        type: "h2",
        text: "Where audits most often find gaps",
      },
      {
        type: "p",
        text: "Across the hospital upgrades our engineers have carried out, a handful of issues come up repeatedly. Older buildings frequently have hydrant systems that were installed to meet an earlier, less stringent code and were never upgraded as additional floors were added. Fire alarm systems are sometimes conventional in buildings that have since grown large enough to need addressable detection, which slows down response because the panel only reports a zone, not an exact device.",
      },
      {
        type: "p",
        text: "Passive fire protection is the most commonly missed item. Cable trays and pipe penetrations through fire-rated walls are often left unsealed after later renovations, which quietly defeats the compartmentation the original design relied on. Oxygen pipelines and generator rooms also need specific protection measures that are easy to overlook if the fire system was designed separately from the mechanical and electrical services.",
      },
      {
        type: "h2",
        text: "Why phasing matters for working hospitals",
      },
      {
        type: "p",
        text: "A hospital cannot pause patient care to accommodate a fire system upgrade. Any serious contractor working on an operational hospital needs to plan riser shutdowns, hot-work permits and corridor closures around ICU, OT and ward schedules, usually in coordination with the hospital's own facility and infection-control teams. This is as much a project-management discipline as an engineering one, and it is where experience on live healthcare sites makes a measurable difference to how disruptive an upgrade turns out to be.",
      },
      {
        type: "p",
        text: "If you manage a hospital facility and are not certain whether your current systems meet today's code, a site survey is the fastest way to find out. Our engineers will walk the building, compare it against the applicable NBC occupancy requirements, and give you a prioritised list of what needs attention before your next fire-NOC renewal.",
      },
    ],
  },
  {
    slug: "sprinkler-vs-water-mist",
    title: "Sprinkler vs water mist: which is right for your building?",
    excerpt:
      "How each system works, how much water they use, what they cost to install, and where each one makes more sense.",
    readTime: "7 min read",
    relatedSolutionSlug: "water-based-firefighting",
    blocks: [
      {
        type: "p",
        text: "Automatic sprinklers and water mist systems both use water to control fire automatically, without anyone needing to act. Beyond that, they work quite differently, and the right choice usually comes down to the building, the hazard and what a water-damage event would cost you.",
      },
      {
        type: "h2",
        text: "How automatic sprinklers work",
      },
      {
        type: "p",
        text: "A sprinkler head opens when a heat-sensitive element reaches its rated temperature, releasing a comparatively large volume of water directly onto the fire and the surrounding area. Sprinkler systems are a mature, well-understood technology, backed by decades of fire test data and specified in NFPA 13 and the National Building Code. For most offices, hotels, hospitals and warehouses, they remain the default, most cost-effective choice.",
      },
      {
        type: "h2",
        text: "How water mist works",
      },
      {
        type: "p",
        text: "Water mist systems release water through much finer nozzles at higher pressure, producing droplets small enough to both cool the fire and smother it by displacing oxygen with steam, using a fraction of the water volume a sprinkler system would need. This makes mist attractive wherever water damage, weight or available water supply is a serious constraint.",
      },
      {
        type: "h2",
        text: "Comparing the two",
      },
      {
        type: "ul",
        items: [
          "Water use: mist systems typically use 10–20% of the water a comparable sprinkler system would discharge",
          "Installation cost: sprinklers are generally cheaper to install at scale; mist systems involve higher-pressure pipework and pumps",
          "Water damage: mist causes markedly less collateral damage to equipment, archives and finishes",
          "Track record: sprinklers have the longer, broader base of fire test and field data across general building types",
          "Typical applications: heritage buildings, machinery spaces, commercial kitchens and sensitive equipment rooms often favour mist; general occupancies typically favour sprinklers",
        ],
      },
      {
        type: "h2",
        text: "Our recommendation approach",
      },
      {
        type: "p",
        text: "We do not default to one technology. During a site survey, our engineers weigh the fire load, the value and sensitivity of what is being protected, the available water supply and the budget, then recommend the system that gives you reliable protection without over- or under-specifying. In some buildings, the right answer is a combination: sprinklers across general areas and water mist in specific rooms where water damage would be disproportionately costly.",
      },
    ],
  },
  {
    slug: "fm-200-vs-inergen-vs-novec-1230",
    title: "FM-200 vs Inergen vs Novec 1230: choosing a clean agent",
    excerpt:
      "Safety, space requirements, environmental impact and cost, compared across the three most common clean agents.",
    readTime: "8 min read",
    relatedSolutionSlug: "gas-suppression-systems",
    blocks: [
      {
        type: "p",
        text: "Clean agent suppression protects spaces where water would cause as much damage as the fire itself: server rooms, control rooms, archives and switchgear. The three agents most commonly specified in India today are FM-200, Inergen and Novec 1230 (marketed as Sapphire in some systems). Each extinguishes fire differently, and that difference drives the decision.",
      },
      {
        type: "h2",
        text: "FM-200 (HFC-227ea)",
      },
      {
        type: "p",
        text: "FM-200 extinguishes fire chemically, interrupting the combustion reaction at low concentrations. It is stored as a liquefied compressed gas, so cylinders are relatively compact for the protection they provide, making it a practical choice where cylinder room space is limited. It has been in wide use for over two decades with an established safety and performance record for normally occupied spaces at design concentration.",
      },
      {
        type: "h2",
        text: "Inergen",
      },
      {
        type: "p",
        text: "Inergen is a blend of naturally occurring gases: nitrogen, argon and a small proportion of carbon dioxide. It extinguishes fire by reducing the oxygen concentration to a level that will not sustain combustion, while the added CO2 keeps the mixture safe for people to breathe for the short duration of a discharge. Because it is stored as a compressed gas rather than liquefied, Inergen needs more cylinders and more space than FM-200 or Novec 1230 for an equivalent hazard, but it leaves no chemical residue and has no ozone-depletion or global-warming concerns, which makes it attractive for archives, museums and heritage interiors.",
      },
      {
        type: "h2",
        text: "Novec 1230 / Sapphire",
      },
      {
        type: "p",
        text: "Novec 1230 is the most recent of the three agents in wide commercial use. It is stored as a liquid and vaporises on release, extinguishing fire primarily through heat absorption. It has an extremely short atmospheric lifetime and a negligible global warming potential compared with FM-200, which has made it the preferred choice where an organisation has an explicit sustainability or environmental policy guiding its procurement.",
      },
      {
        type: "h2",
        text: "How to decide",
      },
      {
        type: "ul",
        items: [
          "Limited cylinder room space: FM-200 or Novec 1230 typically need a smaller footprint than Inergen",
          "Environmental policy requirements: Novec 1230 has the lowest global warming potential of the three",
          "Heritage or archival spaces: Inergen's residue-free discharge is often preferred",
          "Budget and agent availability: cost and lead time vary by project scale and region",
        ],
      },
      {
        type: "p",
        text: "In every case, the agent choice is only half the design. Room integrity (door-fan) testing, correctly calculated agent quantity and a reliable detection and release system matter just as much as which gas is in the cylinder. Our engineers size and specify all three agents and will recommend the one that fits your space, budget and policy constraints rather than a single default.",
      },
    ],
  },
  {
    slug: "fire-noc-tamil-nadu-documents-steps",
    title: "How to get a fire NOC in Tamil Nadu: documents and steps",
    excerpt:
      "An overview of the process and the documentation building owners typically need to prepare, to discuss with your fire protection consultant and the local fire department.",
    readTime: "6 min read",
    relatedSolutionSlug: null,
    blocks: [
      {
        type: "p",
        text: "A fire No-Objection Certificate (fire NOC) is the Tamil Nadu Fire and Rescue Services Department's confirmation that a building's fire protection systems meet the applicable code before, and periodically after, occupancy. Requirements and exact procedures can change, and your local fire station or consultant should always be treated as the final authority, but the broad shape of the process is consistent across most projects.",
      },
      {
        type: "h2",
        text: "Typical documentation required",
      },
      {
        type: "ul",
        items: [
          "Approved building plan and occupancy certificate details",
          "Fire protection system drawings: hydrant, sprinkler, alarm and suppression layouts as installed",
          "Hydraulic calculations supporting the pump and pipe sizing",
          "Equipment datasheets and test certificates for major components",
          "Commissioning and testing reports, witnessed and signed",
          "Site photographs of installed systems",
        ],
      },
      {
        type: "h2",
        text: "The general sequence",
      },
      {
        type: "ul",
        items: [
          "Design review against the applicable NBC occupancy classification and local fire service requirements",
          "Installation of the approved systems by a licensed contractor",
          "Testing and commissioning, typically witnessed by the fire department or an authorised agency",
          "Submission of the documentation package with the NOC application",
          "Site inspection by the fire department",
          "Issue of the NOC, usually valid for a defined period before renewal is required",
        ],
      },
      {
        type: "h2",
        text: "Where applications commonly stall",
      },
      {
        type: "p",
        text: "Most delays we see are documentation gaps rather than system deficiencies: missing commissioning certificates, as-built drawings that no longer match what was actually installed after site changes, or equipment datasheets that were never collected from the supplier. Keeping a single, current documentation file from the start of a project, rather than reconstructing it at NOC time, is the single biggest time-saver we recommend to clients.",
      },
      {
        type: "p",
        text: "If your fire NOC is due for renewal and you are not confident your documentation is complete, our team can review what you have, identify gaps, and prepare the drawings and records needed to support the application. Confirm current procedures and timelines with your local fire department before relying on any of the above for a live application."
      },
    ],
  },
  {
    slug: "mvws-hvws-explained",
    title: "MVWS and HVWS explained: protecting transformers and fuel tanks",
    excerpt:
      "The design principles behind medium and high velocity water spray systems, and what their maintenance actually involves.",
    readTime: "7 min read",
    relatedSolutionSlug: "water-based-firefighting",
    blocks: [
      {
        type: "p",
        text: "Transformers, switchyards and fuel storage tanks fail in ways that general-purpose sprinklers were never designed to handle: large volumes of hot oil, intense radiant heat, and fires that can escalate to neighbouring equipment within minutes. Medium velocity water spray (MVWS) and high velocity water spray (HVWS) systems exist specifically for these hazards.",
      },
      {
        type: "h2",
        text: "What MVWS does",
      },
      {
        type: "p",
        text: "MVWS systems use spray nozzles to apply water across exposed surfaces, primarily to cool equipment and the structures around it and to control a fire rather than fully extinguish it in every case. It is typically specified for LPG storage bullets, fuel tanks and cable galleries, where the priority is preventing a fire from escalating or spreading to adjacent equipment while it is brought under control.",
      },
      {
        type: "h2",
        text: "What HVWS does",
      },
      {
        type: "p",
        text: "HVWS systems deliver water at much higher velocity through specially designed nozzles, breaking it into fine droplets capable of extinguishing oil fires directly rather than only cooling the surroundings. This is the standard protection method for oil-filled power transformers and switchyard equipment, where the fuel itself is the transformer oil and a conventional sprinkler spray pattern would not be effective against it.",
      },
      {
        type: "h2",
        text: "Design principles that matter",
      },
      {
        type: "ul",
        items: [
          "Detection speed: these systems are usually triggered by rate-of-rise heat detectors or linear detection cable sized for a fast-developing fire",
          "Water density and nozzle coverage: calculated to the specific equipment's oil volume and surface area, not a generic standard",
          "Deluge valve response time: the valve and pipe network must deliver full design flow within seconds of activation",
          "Pump capacity: the fire pump house must be sized to support MVWS/HVWS demand alongside any other systems operating simultaneously",
        ],
      },
      {
        type: "h2",
        text: "What maintenance actually involves",
      },
      {
        type: "p",
        text: "These systems sit idle for long stretches and must work perfectly the one time they are needed. Our AMC visits for MVWS and HVWS installations include deluge valve function testing, nozzle inspection for blockage or corrosion, detection cable continuity checks, and periodic flow testing to confirm the pump house still delivers design pressure at the furthest nozzle. Skipping these checks is the most common reason a system fails to perform during an actual incident, despite having passed commissioning years earlier.",
      },
    ],
  },
  {
    slug: "fire-hydrant-system-amc-checklist",
    title: "Fire hydrant system AMC checklist",
    excerpt:
      "What to inspect monthly, quarterly and annually to keep a hydrant and wet riser system ready to perform.",
    readTime: "6 min read",
    relatedSolutionSlug: "water-based-firefighting",
    blocks: [
      {
        type: "p",
        text: "A hydrant system that passed commissioning five years ago is not automatically a hydrant system that will work today. Pumps need to be run, valves need to be exercised, and hose reels need to be checked, or the first time anyone discovers a fault is during an actual fire. Below is the broad shape of the inspection schedule we run under our AMC contracts; your exact frequency should be set with your maintenance provider based on the system's criticality.",
      },
      {
        type: "h2",
        text: "Monthly checks",
      },
      {
        type: "ul",
        items: [
          "Visual inspection of hydrant valves, landing valves and hose reels for damage or tampering",
          "Fire pump controller indicator lamps and alarm panel status",
          "Static water tank level",
          "Diesel engine battery charge and fuel level, where a diesel pump is installed",
        ],
      },
      {
        type: "h2",
        text: "Quarterly checks",
      },
      {
        type: "ul",
        items: [
          "Functional run test of electric, diesel and jockey pumps",
          "Pressure gauge readings at the pump house and at representative hydrant points",
          "Hose reel unwind and visual condition check",
          "Valve exercising to prevent seizure",
        ],
      },
      {
        type: "h2",
        text: "Annual checks",
      },
      {
        type: "ul",
        items: [
          "Full flow test of the system at design pressure",
          "Hydrostatic pressure testing of hoses",
          "Pump performance test against the original design curve",
          "Review of as-built drawings against any site modifications made during the year",
          "Documentation update for fire-NOC renewal",
        ],
      },
      {
        type: "h2",
        text: "The most commonly missed item",
      },
      {
        type: "p",
        text: "Diesel pump batteries and fuel levels are, by a wide margin, the most common failure point we find on first inspection of a system maintained by someone else. A diesel pump that will not start because its battery was never load-tested defeats the entire point of having a diesel backup to the electric pump. If your current maintenance contract does not explicitly test this monthly, it is worth asking why.",
      },
      {
        type: "p",
        text: "If your hydrant system has not had a proper documented inspection in some time, or you have taken over a building with an existing system of unknown history, we offer a one-time audit that benchmarks the system against this checklist and flags anything that needs attention before you commit to an ongoing AMC.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
