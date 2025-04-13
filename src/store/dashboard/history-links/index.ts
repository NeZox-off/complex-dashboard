import { IconProps } from "@/src/components/ui";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface History {
  title: string;
  content: {
    title: string;
    link: string;
    icon: IconProps["name"];
  };
  last_visit: Date | string | number;
}

interface HistoryLinksStore {
  history: History[];
  setHistoryLink: (newHistoryLink: History) => void;
}

export const useHistoryLinks = create(
  persist<HistoryLinksStore>(
    (set, get) => ({
      history: [],
      setHistoryLink: (newHistoryLink) => {
        const current = get().history;
        let updatedHistory;
        let isHas = [];
        for (let i = 0; i < 6; ++i) {
          console.log(
            current[i]?.content?.title === newHistoryLink.content.title
          );
          if (current[i]?.content?.title === newHistoryLink.content.title) {
            isHas.push(1);
            current[i].last_visit = new Date();
            set({ history: current });
          } else {
            isHas.push(0);
          }
        }
        if (isHas.includes(1)) return;
        updatedHistory = [newHistoryLink, ...current].slice(0, 6);
        set({ history: updatedHistory });
      },
    }),
    {
      name: "history-links",
    }
  )
);
