import { RemoveIcon } from "@/components/icons";
import type { Tag } from "@/data/jobs.types";

type FilterBarProps = {
  filters: Tag[];
  onRemove: (tag: Tag) => void;
  onClear: () => void;
};

export default function FilterBar({
  filters,
  onRemove,
  onClear,
}: FilterBarProps) {
  return (
    <section
      aria-label="Active filters"
      className="v-surface -mt-9 flex items-center gap-5 p-5 sm:px-10"
    >
      <ul className="flex flex-wrap gap-4">
        {filters.map((tag) => (
          <li key={tag} className="v-tablet flex h-8 items-center">
            <span className="px-2">{tag}</span>
            <button
              type="button"
              onClick={() => onRemove(tag)}
              aria-label={`Remove ${tag} filter`}
              className="v-remove-button grid size-8 place-items-center rounded-r text-white"
            >
              <RemoveIcon />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onClear}
        className="v-clear-button ml-auto text-tablet font-bold text-slate"
      >
        Clear
      </button>
    </section>
  );
}
