import { create } from "zustand";

interface MainSidebarStore {
  show: boolean;
  setShow: () => void;
}

const useMainSidebarStore = create<MainSidebarStore>((set) => ({
  show: true,
  setShow: () => set((state) => ({ show: !state.show })),
}));

export default useMainSidebarStore;
