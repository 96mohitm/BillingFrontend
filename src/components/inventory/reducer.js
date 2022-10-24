import { GET_INVENTORY } from './action';

const initialState = {
  inventoryList: [],
};

export const getInventoryReducer = (state=initialState, action) => {
  if (action.type === GET_INVENTORY) {
    console.log("action", action);
    return {
      ...state,
      inventoryList: action.payload,
    };
  }
  return state;
}

export const selectInventory = (state) => state.inventory.inventoryList;
