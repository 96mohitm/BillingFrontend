import { configureStore } from '@reduxjs/toolkit';
import { getInventoryReducer } from '../components/inventory/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { billingReducer } from '../components/billing/reducer';
import { productReducer } from '../components/product/reducer';


const preloadedState = {
  inventory: {
    inventoryList: [],
  },
  billing: {
    billingList: [],
  },
  product: {
    productList: [],
  }
};

export const store = configureStore({
  reducer: {
    inventory: getInventoryReducer,
    billing: billingReducer,
    product: productReducer,
  },
  middleware: [thunk, logger], //composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState,
});
