export interface Item {
  id: number;
  title: string;
  category: Category | undefined;
  adress: string;
  ville: Ville | undefined;
  img?: string;
}

export interface Filer {
  ville: number;
  category: number;
}
export interface Ville {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
}
export interface ItemState {
  items: Item[];
  filteredItems: Item[];
}

export const ADD_ITEM = "ADD_ITEM";

export const FILTER_ITEMS = "FILTER_ITEMS";

export const GET_ITEMS = "GET_ITEMS";

interface AddItemAction {
  type: typeof ADD_ITEM;
  payload: Item;
}
interface GetItemsAction {
  type: typeof GET_ITEMS;
}

interface FilterItemsAction {
  type: typeof FILTER_ITEMS;
  payload: Filer;
}

export type ItemActionTypes =
  | AddItemAction
  | FilterItemsAction
  | GetItemsAction;
