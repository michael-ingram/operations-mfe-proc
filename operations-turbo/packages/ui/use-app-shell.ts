import type {StateCreator} from "zustand";
import create from "zustand";
import { persist } from "zustand/middleware";

interface Store  {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};

export const useAppShell = create<Store>(
    persist<Store>(
        (set) => ({
            user: null,
            score: 0,
            setUser: (user) => { set(() => ({ user })); },
            addToScore: (amount) => { set((state) => ({ score: state.score + amount })); },
        }),
        {
            name: "app-shell",
        }
    ) as StateCreator<Store, [], [], Store> // Update the StateCreator type
);
