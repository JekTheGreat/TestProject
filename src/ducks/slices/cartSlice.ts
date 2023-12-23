import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CartListModel, CartStateModel} from '@src/models/ProductModel';
import _ from 'lodash';

const initialState: CartStateModel = {
  cartList: [],
  totalCartQty: 0,
  totalSummary: 0,
};

const updateQuantity = (cartProducts: CartListModel[], payload: CartListModel, quantity: number) => {
  const {id} = payload;
  let products = [];
  const isExistingProduct = cartProducts.findIndex(product => product.id === id);
  if (isExistingProduct === -1) {
    products = [{...payload}, ...cartProducts];
    cartProducts = products;
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
      const {id, quantity} = action.payload;
      let cartProducts = state.cartList;
      const updatedList = updateQuantity(cartProducts, action.payload, quantity);
      state.cartList = updatedList;
      state.totalCartQty = _.sumBy(updatedList, product => product.quantity);
      state.totalSummary = _.sumBy(updatedList, product => product.unitPrice * product.quantity);
    },
    subtract: (state, action: PayloadAction<CartListModel>) => {
      const {id, quantity} = action.payload;
      let cartProducts = state.cartList;
      const updatedList = updateQuantity(cartProducts, action.payload, -quantity);
      state.cartList = updatedList;
      state.totalCartQty = _.sumBy(updatedList, product => product.quantity);
      state.totalSummary = _.sumBy(updatedList, product => product.unitPrice * product.quantity);
    },
    removeProduct: (state, action: PayloadAction<CartListModel>) => {
      const {id} = action.payload;
      let cartProducts = state.cartList;
      const updatedList = _.filter(cartProducts, product => id !== product.id);
      state.cartList = updatedList;
      state.totalCartQty = _.sumBy(updatedList, product => product.quantity);
      state.totalSummary = _.sumBy(updatedList, product => product.unitPrice * product.quantity);
    },
    reset: state => {
      state.cartList = initialState.cartList;
      state.totalCartQty = initialState.totalCartQty;
      state.totalSummary = initialState.totalSummary;
    },
  },
});

const {actions, reducer} = cartSlice;

export const {add, subtract, removeProduct, reset} = actions;
export default reducer;
