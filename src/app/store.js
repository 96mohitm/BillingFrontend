import { configureStore } from '@reduxjs/toolkit';
import { getInventoryReducer } from '../components/inventory/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const preloadedState = {
  inventory: {
    inventoryList: []
  }
};

export const store = configureStore({
  reducer: {
    inventory: getInventoryReducer,
  },
  middleware: [thunk, logger], //composeWithDevTools(applyMiddleware(...middleware)),
  preloadedState,
});
