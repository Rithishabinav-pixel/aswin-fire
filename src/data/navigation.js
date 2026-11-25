import { solutions } from "./solutions";
import { industries } from "./industries";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    megaMenu: {
      description: "Five solution families, one engineering team.",
      items: solutions.map((s) => ({
        label: s.shortName,
        href: `/solutions/${s.slug}`,
        description: s.oneLiner,
        icon: s.icon,
      })),
      viewAll: { label: "View all solutions", href: "/solutions" },
    },
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: {
      description: "Fire protection engineered for your sector.",
      items: industries.slice(0, 8).map((i) => ({
        label: i.name,
        href: `/industries#${i.slug}`,
        description: i.summary,
        icon: i.icon,
      })),
      viewAll: { label: "View all industries", href: "/industries" },
    },
  },
  { label: "Projects", href: "/projects" },
  { label: "AMC & Services", href: "/amc-maintenance" },
  { label: "Clients", href: "/clients" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  solutions: solutions.map((s) => ({ label: s.shortName, href: `/solutions/${s.slug}` })),
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Products & Equipment", href: "/products" },
    { label: "Clients", href: "/clients" },
    { label: "Careers", href: "/careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
  ],
};
