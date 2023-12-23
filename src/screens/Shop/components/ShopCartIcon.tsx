import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@src/theme';
import {useCartService} from '@src/ducks/hooks';
import _ from 'lodash';
import styles from '../styles';

const ShopCartIcon = () => {
  const {cart} = useCartService();
  const emptyCart = _.isEmpty(cart.cartList);

  return (
    <View>
      {!emptyCart && (
        <View style={styles.cartQuantityRed}>
          <Text style={styles.quantityText}>{cart.totalCartQty}</Text>
        </View>
      )}
      <Icon name="shopping-cart" size={24} color={colors.black} />
    </View>
  );
};

export default ShopCartIcon;
