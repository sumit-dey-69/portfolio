import { create } from "zustand";

type State = {
  toggleHamburger: boolean;
  setToggleHamburger: (toggle: boolean) => void;
};

const useStore = create<State>((set) => ({
  toggleHamburger: false,
  setToggleHamburger: (toggle: boolean) => set({ toggleHamburger: toggle }),
}));

export const useToggleHamburger = () => useStore((state) => state.toggleHamburger);
export const useSetToggleHamburger = () => useStore((state) => state.setToggleHamburger);
