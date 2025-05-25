import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HistoryLinksStore } from "@/shared/model";

export const useHistoryLinks = create(
  persist<HistoryLinksStore>(
    (set, get) => ({
      history: [],
      setHistoryLink: (newHistoryLink) => {
        const current = get().history.slice(0, 6);
        const index = current.findIndex(
          (item) => item?.content?.title === newHistoryLink.content.title
        );
        if (index !== -1) {
          current[index].last_visit = new Date();
          current.unshift(current.splice(index, 1)[0]);
        } else {
            current.unshift(newHistoryLink);
        }

        set({ history: current.splice(0, 6) });
      },
    }),
    {
      name: "history-links",
    }
  )
);
