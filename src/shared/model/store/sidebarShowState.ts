import { create } from "zustand";

interface SidebarShowStore {
  show: boolean;
  setShow: () => void;
}

export const useSidebarShowStore = create<SidebarShowStore>((set) => ({
  show: false,
  setShow: () => set((state) => ({ show: !state.show })),
}));

