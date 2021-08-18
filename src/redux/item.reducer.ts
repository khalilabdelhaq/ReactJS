import { mockedCategories, mockedItems, mockedVilles } from './fixtures'
import { ADD_ITEM, FILTER_ITEMS, ItemState, ItemActionTypes } from './types'

const initialItemState: ItemState = {
  items: mockedItems,
  filteredItems: [],
}

export function itemReducer(
  state: ItemState = initialItemState,
  action: ItemActionTypes
): ItemState {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            title: action.payload.title,
            adress: action.payload.adress,
            category: mockedCategories.find(
              (item) => !!action.payload.category && item.id === action.payload.category.id
            ),
            ville: mockedVilles.find(
              (item) => action.payload.ville && item.id === action.payload.ville.id
            ),
          },
        ],
      }
    }
    case FILTER_ITEMS: {
      return {
        ...state,
        filteredItems: state.items.filter(
          (item) =>
            item.ville &&
            item.ville.id === action.payload.ville &&
            item.category &&
            item.category.id === action.payload.category
        ),
      }
    }
    default:
      return state
  }
}
