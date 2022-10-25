import { GET_PRODUCT_LIST } from "./actions";

const initialState = {
  productList: [],
};

export const productReducer = (state=initialState, action) => {
  if (action.type === GET_PRODUCT_LIST) {
    return {
      ...state,
      productList: action.payload,
    };
  }
  return state;
}

export const selectProduct = (state) => state.product.productList;
