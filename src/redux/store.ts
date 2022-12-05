import { createStore, applyMiddleware } from "redux";
import { loggerMiddleware } from "./middlewares/loggerMiddleware";
import { rootReducer } from "./rootReducer";
export const store = createStore(
  rootReducer,
  applyMiddleware(loggerMiddleware)
);
