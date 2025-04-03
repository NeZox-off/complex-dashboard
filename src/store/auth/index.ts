import { create } from "zustand";

interface AuthStore {
  type: "Login" | "Register";
  setType: (newType: AuthStore["type"]) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  type: "Login",
  setType: (newType) => set({ type: newType }),
}));

export default useAuthStore;
