import { useRef } from "react";

import { RemoveIcon } from "@/components/icons";
import type { Tag } from "@/data/jobs.types";

type FilterBarProps = {
  filters: Tag[];
  results: React.RefObject<HTMLUListElement | null>;
  onRemove: (tag: Tag) => void;
  onClear: () => void;
};

export default function FilterBar({
  filters,
  results,
  onRemove,
  onClear,
}: FilterBarProps) {
  const chipList = useRef<HTMLUListElement>(null);

  const firstResultControl = () =>
    results.current?.querySelector<HTMLButtonElement>("button");

  const removeFilter = (tag: Tag, index: number) => {
    const buttons = Array.from(
      chipList.current?.querySelectorAll("button") ?? [],
    );
    (buttons[index + 1] ?? buttons[index - 1] ?? firstResultControl())?.focus();
    onRemove(tag);
  };

  const clearFilters = () => {
    firstResultControl()?.focus();
    onClear();
  };

  return (
    <section
      aria-label="Active filters"
      className="-mt-9 flex items-center gap-5 v-surface p-5 sm:px-10"
    >
      <ul ref={chipList} className="flex flex-wrap gap-4">
        {filters.map((tag, index) => (
          <li key={tag} className="flex h-8 items-center v-tablet">
            <span className="px-2">{tag}</span>
            <button
              type="button"
              onClick={() => removeFilter(tag, index)}
              aria-label={`Remove ${tag} filter`}
              className="grid size-8 place-items-center rounded-r v-remove-button text-white"
            >
              <RemoveIcon />
            </button>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={clearFilters}
        className="ml-auto text-tablet font-bold v-clear-button text-slate"
      >
        Clear
      </button>
    </section>
  );
}
