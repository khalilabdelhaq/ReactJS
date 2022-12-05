import { Dispatch } from "react";
import { ItemActionTypes } from "../types";

export const loggerMiddleware =
  (store: any) =>
  (next: Dispatch<ItemActionTypes>) =>
  (action: ItemActionTypes) => {
    console.log("store", store);
    next(action);
  };
