import { ADD_ITEM, FILTER_ITEMS, Filer, Item } from "./types";
import { ActionCreator } from "redux";
import { ItemActionTypes } from "./types";

export const addItemRequest: ActionCreator<ItemActionTypes> = (item: Item) => {
  return { type: ADD_ITEM, payload: item };
};

export const filterItemsRequest: ActionCreator<ItemActionTypes> = (
  filter: Filer
) => {
  return { type: FILTER_ITEMS, payload: filter };
};
