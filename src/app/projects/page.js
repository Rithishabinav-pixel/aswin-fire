import { Suspense } from "react";
import PageHero from "@/components/sections/PageHero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Fire Protection Projects & Case Studies | Aswin Fire System",
  description:
    "See hospitals, power plants, IT campuses and industries protected by Aswin Fire: hydrant, sprinkler, MVWS, fire alarm and gas suppression projects across India.",
  alternates: { canonical: "/projects" },
};

async function ProjectsGalleryLoader({ searchParams }) {
  const sp = await searchParams;
  const initialIndustry = typeof sp?.industry === "string" ? sp.industry : "";
  return <ProjectsGallery projects={projects} initialIndustry={initialIndustry} />;
}

export default function ProjectsPage({ searchParams }) {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects that prove our engineering"
        subtitle="From multi-specialty hospitals to transformer yards, here is a selection of fire protection systems we have designed, installed and commissioned."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />
      <section className="section">
        <div className="container">
          <Suspense fallback={<ProjectsGallery projects={projects} />}>
            <ProjectsGalleryLoader searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
