import {create} from "zustand"


interface CountState {
  counts: number;
  increaseCount: () => void;
}


export const useCountStore = create<CountState>(set => ({
    counts: 0,
    increaseCount: () => set(state => ({ counts: state.counts + 1 })),
}));

