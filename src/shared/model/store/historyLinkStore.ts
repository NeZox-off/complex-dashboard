import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HistoryLinksStore } from "@/shared/model";

export const useHistoryStore = create(
  persist<HistoryLinksStore>(
    (set) => ({
      history: [],
      setHistoryLink: (historyLinks) => {
        set({ history: historyLinks });
      },
      removeHistoryLink: (historyLinks) => {
        set({ history: historyLinks });
      },
    }),
    {
      name: "history-links",
    }
  )
);
