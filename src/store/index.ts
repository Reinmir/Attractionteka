import { createStore } from "redux";
import { UserReducer } from "src/reducers/userReducer";

export const store = createStore(UserReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
