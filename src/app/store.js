import { configureStore } from '@reduxjs/toolkit';
import { getInventoryReducer } from '../components/inventory/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { billingReducer } from '../components/billing/reducer';


const preloadedState = {
  inventory: {
    inventoryList: [],
  },
  billing: {
    billingList: [],
  },
};

export const store = configureStore({
  reducer: {
    inventory: getInventoryReducer,
    billing: billingReducer,
  },
  middleware: [thunk, logger], //composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState,
});
