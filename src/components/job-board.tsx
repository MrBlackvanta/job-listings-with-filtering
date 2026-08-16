"use client";

import { useState } from "react";

import FilterBar from "@/components/filter-bar";
import JobCard from "@/components/job-card";
import type { Job, Tag } from "@/data/jobs.types";
import { cn } from "@/lib";

export default function JobBoard({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<Tag[]>([]);

  const addFilter = (tag: Tag) =>
    setFilters((active) => (active.includes(tag) ? active : [...active, tag]));

  const removeFilter = (tag: Tag) =>
    setFilters((active) => active.filter((current) => current !== tag));

  const matches = jobs.filter((job) =>
    filters.every((tag) => job.tags.includes(tag)),
  );

  return (
    <>
      {filters.length > 0 && (
        <FilterBar
          filters={filters}
          onRemove={removeFilter}
          onClear={() => setFilters([])}
        />
      )}

      <p aria-live="polite" className="sr-only">
        {matches.length} of {jobs.length} jobs match the selected filters.
      </p>

      <ul
        className={cn("mt-8 flex flex-col gap-4 sm:mt-14 sm:gap-6 row:mt-19", {
          "row:mt-10": filters.length > 0,
        })}
      >
        {matches.map((job, index) => (
          <li key={job.id} className="v-reveal">
            <JobCard job={job} eager={index === 0} onSelectTag={addFilter} />
          </li>
        ))}
      </ul>
    </>
  );
}
