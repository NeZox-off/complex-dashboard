import { create } from 'zustand'

const useAuthStore = create((set) => ({
  type: "login",
  setType: () => set((state) => ({type: state.type})),
}))

export default useStore;