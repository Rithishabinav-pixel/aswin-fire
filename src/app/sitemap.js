import { solutions } from "@/data/solutions";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const base = "https://www.aswinfire.in";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/solutions",
    "/industries",
    "/projects",
    "/products",
    "/amc-maintenance",
    "/clients",
    "/resources",
    "/resources/blog",
    "/contact",
    "/careers",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const solutionRoutes = solutions.map((s) => ({
    url: `${base}/solutions/${s.slug}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/resources/blog/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...solutionRoutes, ...projectRoutes, ...blogRoutes];
}
