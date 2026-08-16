import type { Job, Tag } from "@/data/jobs.types";
import { cn } from "@/lib";

type JobCardProps = {
  job: Job;
  eager: boolean;
  onSelectTag: (tag: Tag) => void;
};

export default function JobCard({ job, eager, onSelectTag }: JobCardProps) {
  return (
    <article
      className={cn(
        "relative mt-6 v-surface px-6 pt-8 pb-6 sm:mt-0 sm:flex sm:flex-wrap sm:items-center sm:gap-6 sm:px-10 sm:py-8 row:flex-nowrap row:pb-7.75",
        {
          "before:absolute before:inset-y-0 before:left-0 before:w-1.25 before:rounded-l-card before:bg-cyan-banner":
            job.isFeatured,
        },
      )}
    >
      <img
        src={job.logo.src}
        alt=""
        width={88}
        height={88}
        loading={eager ? "eager" : "lazy"}
        className="absolute -top-6 left-6 size-12 sm:static sm:size-22"
      />

      <div>
        <div className="flex items-center gap-7.5 sm:gap-3.75">
          <p className="text-company-sm font-bold text-cyan sm:text-company">
            {job.company}
          </p>
          {(job.isNew || job.isFeatured) && (
            <div className="flex items-center gap-2">
              {job.isNew && <Badge className="bg-cyan">New!</Badge>}
              {job.isFeatured && <Badge className="bg-ink">Featured</Badge>}
            </div>
          )}
        </div>

        <h2 className="mt-2.5 text-title-sm font-bold sm:text-title">
          {job.position}
        </h2>

        <ul className="mt-1.75 flex items-center gap-[9.5px] text-meta-sm font-medium text-slate sm:gap-[18.5px] sm:text-meta">
          <li>{job.postedAt}</li>
          <li className="v-meta-dot">{job.contract}</li>
          <li className="v-meta-dot">{job.location}</li>
        </ul>
      </div>

      <ul className="mt-3.75 flex w-full flex-wrap gap-4 border-t border-rule pt-4 sm:mt-0 row:ml-auto row:w-auto row:border-t-0 row:pt-0">
        {job.tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onSelectTag(tag)}
              className="v-tablet-interactive h-8 v-tablet px-2.25"
            >
              {tag}
              <span className="sr-only">, add filter</span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Badge({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "grid h-6 place-items-center rounded-full px-2 pt-1 text-badge font-bold text-white uppercase",
        className,
      )}
    >
      {children}
    </span>
  );
}
