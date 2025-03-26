import { create } from "zustand";

type State = {
    activeTab: number;
    setActiveTab: (activeTab: number) => void;
}

const useStore = create<State>((set) => ({
    activeTab: 0,
    setActiveTab: (activeTab: number) => set({ activeTab }),
}));

export const useActiveTab = () => useStore((state) => state.activeTab);
export const useSetActiveTab = () => useStore((state) => state.setActiveTab)