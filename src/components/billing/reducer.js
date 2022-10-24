import { GET_BILLING } from "./actions";

const initialState = {
  billingList: [],
};

export const billingReducer = (state=initialState, action) => {
  if (action.type === GET_BILLING) {
    return {
      ...state,
      billingList: action.payload,
    }
  }
  return state;
}

export const selectBilling = (state) => state.billing.billingList;
