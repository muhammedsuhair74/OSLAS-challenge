import { configureStore } from '@reduxjs/toolkit';
import homeState from '../containers/homePage/homeState';

export const store = configureStore({
  reducer: {
    tempData : homeState,
  },
})

