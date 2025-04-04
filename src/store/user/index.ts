import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  privacy: boolean;
  rememberMe: boolean;
};

interface UserStore {
  user: UserType | null;
  setUser: (data: UserType) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      setUser: (data: UserType) => set({ user: data }),
    }),
    {
      name: "test-user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
