import type { Job, Tag } from "@/data/jobs.types";
import { cn } from "@/lib";

type JobCardProps = {
  job: Job;
  onSelectTag: (tag: Tag) => void;
};

export default function JobCard({ job, onSelectTag }: JobCardProps) {
  return (
    <article
      className={cn(
        "v-surface relative mt-6 px-6 pt-8 pb-6 row:mt-0 row:flex row:items-center row:gap-6 row:px-10 row:py-8",
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
        className="absolute -top-6 left-6 size-12 row:static row:size-22"
      />

      <div>
        <div className="flex items-center gap-7.5 row:gap-3.75">
          <p className="text-company-sm font-bold text-cyan row:text-company">
            {job.company}
          </p>
          {(job.isNew || job.isFeatured) && (
            <div className="flex items-center gap-2">
              {job.isNew && <Badge className="bg-cyan">New!</Badge>}
              {job.isFeatured && <Badge className="bg-ink">Featured</Badge>}
            </div>
          )}
        </div>

        <h2 className="mt-2.5 text-title-sm font-bold row:text-title">
          {job.position}
        </h2>

        <ul className="mt-1.75 flex items-center gap-[9.5px] text-meta-sm font-medium text-slate row:gap-[18.5px] row:text-meta">
          <li>{job.postedAt}</li>
          <li className="v-meta-dot">{job.contract}</li>
          <li className="v-meta-dot">{job.location}</li>
        </ul>
      </div>

      <ul className="mt-3.75 flex flex-wrap gap-4 border-t border-rule pt-4 row:mt-0 row:ml-auto row:justify-end row:border-t-0 row:pt-0">
        {job.tags.map((tag) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => onSelectTag(tag)}
              className="v-tablet v-tablet-interactive h-8 px-2.25"
            >
              {tag}
              <span className="sr-only"> — add filter</span>
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
