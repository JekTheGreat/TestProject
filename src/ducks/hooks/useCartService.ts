import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../ducksHook';
import {add, subtract} from '@src/ducks/slices/cartSlice';
import {CartListModel, CartStateModel} from '@src/models/ProductModel';

export type CartServiceOperators = {
  cart: CartStateModel;
  addToCart: (item: CartListModel) => void;
  subtractToCart: (item: CartListModel) => void;
};

export const useCartService = (): Readonly<CartServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    cart: useAppSelector(state => state.rootReducer.cartSlice),
    addToCart: useCallback(
      (item: CartListModel) => {
        dispatch(add(item));
      },
      [dispatch],
    ),
    subtractToCart: useCallback(
      (item: CartListModel) => {
        dispatch(subtract(item));
      },
      [dispatch],
    ),
  };
};

export default useCartService;
