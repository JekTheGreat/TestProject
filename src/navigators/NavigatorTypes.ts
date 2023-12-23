import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  ShopScreen: undefined;
  CartScreen: undefined;
};

export type NavigationScreenProps<K extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, K>;
