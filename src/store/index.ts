import { createStore, combineReducers } from "redux";
import { UserReducer } from "src/reducers/userReducer";

const rootReducer = combineReducers({ user: UserReducer });

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
