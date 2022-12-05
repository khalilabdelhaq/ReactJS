import { ADD_ITEM, FILTER_ITEMS, Filer, Item, GET_ITEMS } from "./types";
import { ActionCreator } from "redux";
import { ItemActionTypes } from "./types";

export const getItemsRequest: ActionCreator<ItemActionTypes> = (item: Item) => {
  return { type: GET_ITEMS };
};

export const addItemRequest: ActionCreator<ItemActionTypes> = (item: Item) => {
  return { type: ADD_ITEM, payload: item };
};

export const filterItemsRequest: ActionCreator<ItemActionTypes> = (
  filter: Filer
) => {
  return { type: FILTER_ITEMS, payload: filter };
};
