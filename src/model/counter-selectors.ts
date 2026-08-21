import {RootState} from "../app/store.ts";

export const selectCounter = (state: RootState): number => state.counter;