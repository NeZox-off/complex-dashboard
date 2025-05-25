import { create } from "zustand";

interface ToggleAuthorizationStore {
  type: "Login" | "Register";
  setType: (newType: ToggleAuthorizationStore["type"]) => void;
}

const useToggleAuthorizationStore = create<ToggleAuthorizationStore>((set) => ({
  type: "Login",
  setType: (newType) => set({ type: newType }),
}));

export { useToggleAuthorizationStore };
