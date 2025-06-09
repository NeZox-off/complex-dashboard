"use client";
import { Icon, Input } from "@/shared/ui";
import { FC } from "react";
import { useSearchTasks } from "../model/hooks/searchTask";
import { cn } from "@/shared/lib";

interface InputSearchTaskProps {}

export const InputSearchTask: FC<InputSearchTaskProps> = ({}) => {
  const { debouncedSearchTaskByTitle, isLoading } = useSearchTasks();

  return (
    <label className="text-lg font-bold inline-flex items-center gap-3">
      Search
      <Input
        type="search"
        className="border-2 border-solid border-white/10 rounded px-3 py-2"
        onChange={(e) => debouncedSearchTaskByTitle(e.target.value)}
      />
      <Icon
        name="LoaderCircle"
        size={24}
        className={cn(
          isLoading ? "animate-spin opacity-100 visible" : "invisible opacity-0"
        )}
      />
    </label>
  );
};
