import { TypedUseSelectorHook, useSelector } from "react-redux";
import { store } from "src/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
