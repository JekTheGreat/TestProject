import {combineReducers} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

const reducer = combineReducers({cartSlice});

const rootReducer = (state: any, action: any) => {
  return reducer(state, action);
};

export default rootReducer;
