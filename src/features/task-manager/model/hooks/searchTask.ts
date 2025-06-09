import { useTaskStore } from "@/entities/dashboard/task-manager/model/tasks-store";
import { useDebounce } from "@/shared/model";
import { useState } from "react";

export const useSearchTasks = () => {
  const { tasks, setSearchQuery } = useTaskStore();
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearchTaskByTitle = useDebounce((value: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSearchQuery(value);
    }, 500);
  }, 300);
  return {
    tasks,
    debouncedSearchTaskByTitle,
    isLoading,
  };
};
