import { TEST_USERS } from "@/shared/config";
import { UserType } from "@/shared/model";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  user: UserType | null;
  setUser: (data: UserType) => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: TEST_USERS[0],
      setUser: (data: UserType) => set({ user: data }),
    }),
    {
      name: "test-user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useUserStore };
