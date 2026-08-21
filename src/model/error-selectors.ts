import {RootState} from "../app/store.ts";

export const selectError = (state: RootState): string => state.error;