import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TaskStoreType } from "./types";
import { TASKS } from "../config";

export const useTaskStore = create(
  persist<TaskStoreType>(
    (set, get) => ({
      tasks: TASKS,
      searchQuery: "",
      setSearchQuery: (query) => {
        set({ searchQuery: query });
      },
      setTasks: (tasks) => {
        set({ tasks });
      },
      removeTask: (tasks) => {
        set({ tasks });
      },
      searchTasks: (tasks) => {
        set({ tasks });
      },
    }),
    {
      name: "task-store",
    }
  )
);
