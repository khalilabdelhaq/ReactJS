import { combineReducers } from "redux";
import { itemReducer } from "./item.reducer";

export const rootReducer = combineReducers({ items: itemReducer });

export type RootState = ReturnType<typeof rootReducer>;
