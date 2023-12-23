import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartListModel, CartStateModel} from '@src/models/ProductModel';
import _ from 'lodash';

const initialState: CartStateModel = {
  cartList: [],
};

const updateQuantity = (cartProducts: CartListModel[], payload: CartListModel, quantity: number) => {
  const {id} = payload;
  const isExistingProduct = cartProducts.findIndex(product => product.id === id);
  if (isExistingProduct === -1) {
    cartProducts.push(payload);
  } else {
    cartProducts[isExistingProduct].quantity += quantity;
  }
  return cartProducts;
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartListModel>) => {
      const {quantity} = action.payload;
      let cartProducts = state.cartList;
      const updatedQuantity = updateQuantity(cartProducts, action.payload, quantity);
      state.cartList = updatedQuantity;
    },
    subtract: (state, action: PayloadAction<CartListModel>) => {
      const {quantity} = action.payload;
      let cartProducts = state.cartList;
      const updatedQuantity = updateQuantity(cartProducts, action.payload, -quantity);
      state.cartList = updatedQuantity;
    },
  },
});

const {actions, reducer} = cartSlice;

export const {add, subtract} = actions;
export default reducer;
