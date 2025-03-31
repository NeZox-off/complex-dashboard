import { create } from "zustand";

interface AuthStore {
  type: "login" | "register";
  setType: (newType: AuthStore["type"]) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  type: "login",
  setType: (newType) => set({ type: newType }),
}));

export default useAuthStore;
