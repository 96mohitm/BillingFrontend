import { GET_INVENTORY } from './actions';

const initialState = {
  inventoryList: [],
};

export const getInventoryReducer = (state=initialState, action) => {
  if (action.type === GET_INVENTORY) {
    return {
      ...state,
      inventoryList: action.payload,
    };
  }
  return state;
}

export const selectInventory = (state) => state.inventory.inventoryList;
