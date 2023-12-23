import {useCallback} from 'react';
import {useAppDispatch, useAppSelector} from '../ducksHook';
import {add, subtract, removeProduct, reset} from '@src/ducks/slices/cartSlice';
import {CartListModel, CartStateModel} from '@src/models/ProductModel';

export type CartServiceOperators = {
  cart: CartStateModel;
  addToCart: (item: CartListModel) => void;
  subtractToCart: (item: CartListModel) => void;
  removeToCart: (item: CartListModel) => void;
  resetCart: () => void;
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
    removeToCart: useCallback(
      (item: CartListModel) => {
        dispatch(removeProduct(item));
      },
      [dispatch],
    ),
    resetCart: useCallback(() => {
      dispatch(reset());
    }, [dispatch]),
  };
};

export default useCartService;
