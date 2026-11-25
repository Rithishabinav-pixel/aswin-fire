import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import styles from "./WhatWeDo.module.css";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).concat(
    projects.filter((p) => !p.featured)
  ).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            eyebrow="Recent work"
            title="Featured projects"
            description="A selection of fire protection systems we have designed, installed and commissioned."
          />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
        <div className={styles.grid}>
          {featured.map((p, i) => (
            <ProjectCard project={p} delay={i * 70} key={p.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
