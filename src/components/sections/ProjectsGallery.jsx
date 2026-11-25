"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";
import styles from "./ProjectsGallery.module.css";

export default function ProjectsGallery({ projects, initialIndustry = "" }) {
  const [system, setSystem] = useState("");
  const [industry, setIndustry] = useState(initialIndustry);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (system && !(p.solutionSlugs || []).includes(system)) return false;
      if (industry && p.industrySlug !== industry) return false;
      if (query) {
        const q = query.toLowerCase();
        const haystack = `${p.client} ${p.location}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [projects, system, industry, query]);

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.field}>
          <label htmlFor="filter-system">System</label>
          <select id="filter-system" value={system} onChange={(e) => setSystem(e.target.value)}>
            <option value="">All systems</option>
            {solutions.map((s) => (
              <option value={s.slug} key={s.slug}>
                {s.shortName}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="filter-industry">Industry</label>
          <select id="filter-industry" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="">All industries</option>
            {industries.map((i) => (
              <option value={i.slug} key={i.slug}>
                {i.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="filter-location">Client or location</label>
          <input
            id="filter-location"
            type="text"
            placeholder="Search by client or city"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <p className={styles.count}>
        Showing {filtered.length} of {projects.length} projects
      </p>

      {filtered.length ? (
        <div className={styles.grid}>
          {filtered.map((p, i) => (
            <ProjectCard project={p} delay={(i % 6) * 60} key={p.slug} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>No projects match these filters yet.</div>
      )}
    </div>
  );
}
