import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import {Header} from '@src/components';
import styles from './styles';
import {useCartService} from '@src/ducks/hooks';
import ProductList from '../Shop/components/ProductList';

const CartScreen = () => {
  const navigation = useNavigation<NavigationScreenProps<'CartScreen'>>();
  const {cart, addToCart, subtractToCart} = useCartService();

  const renderHeader = () => {
    return <Header onPress={navigation.goBack} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={cart.cartList}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => `${item.id}`}
      ListHeaderComponent={renderHeader()}
      renderItem={({item, index}) => <ProductList key={`${item.id}`} item={item} index={index} />}
      bounces={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CartScreen;
