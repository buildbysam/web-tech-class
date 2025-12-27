"use client";

import Button from "@/components/button";
import Dropdown from "@/components/dropdown";
import { cx } from "@/lib/utils";
import { SortOptions } from "@/types/projects.types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  allTech: string[];
  activeTech?: string;
  activeSort?: string;
}

export default function FilterProjects({ allTech, activeTech, activeSort }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const sortOptions = [
    { label: "Newest First", value: SortOptions.newest },
    { label: "Oldest First", value: SortOptions.oldest },
  ];

  const updateFilterParams = (updates: { tech?: string; sort?: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    if (updates.tech) {
      if (updates.tech === "all") params.delete("tech");
      else params.set("tech", updates.tech);
    }
    if (updates.sort) {
      params.set("sort", updates.sort);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const setTechFilter = (tech: string) => updateFilterParams({ tech });
  const setSortOrder = (sort: string) => updateFilterParams({ sort });

  return (
    <>
      <div className="mb-8 px-4 py-3 card flex flex-col sm:flex-row flex-wrap sm:justify-between sm:items-center gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="font-medium text-muted-foreground mr-1">Filter:</span>
          {allTech.map((tech) => {
            const active = (activeTech || "all") === tech.toLowerCase();
            return (
              <Button
                key={tech}
                onClick={() => {
                  if (active) return;
                  setTechFilter(tech.toLowerCase());
                }}
                disabled={active}
                variant="outline"
                className={cx(
                  "rounded-md text-sm py-1! px-2! opacity-100!",
                  active ? "bg-primary! text-primary-foreground! cursor-default!" : ""
                )}
              >
                {tech}
              </Button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium text-muted-foreground mr-1">Sort:</span>
          <Dropdown
            dropdown_items={sortOptions}
            selected_item={sortOptions.find((opt) => opt.value === activeSort) ?? sortOptions[0]}
            handleChange={(value) => setSortOrder(value)}
          />
        </div>
      </div>
    </>
  );
}
