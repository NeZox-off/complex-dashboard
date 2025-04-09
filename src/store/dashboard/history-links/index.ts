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
  last_visit: Date;
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
        const updatedHistory = [newHistoryLink, ...current].slice(0, 6);
        set({ history: updatedHistory });
      },
    }),
    {
      name: "history-links",
    }
  )
);
