import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {CartListModel} from '@src/models/ProductModel';
import styles from '../styles';
import _ from 'lodash';
import {useCartService} from '@src/ducks/hooks';
import {colors} from '@src/theme';
import Icon from 'react-native-vector-icons/Feather';

const CartList = ({item, index}: {item: CartListModel; index: number}) => {
  const {addToCart, subtractToCart, removeToCart} = useCartService();

  const onPress = (type: 'add' | 'subtract' | 'remove') => {
    switch (type) {
      case 'add':
        addToCart({...item, quantity: 1});
        break;
      case 'subtract':
        if (item.quantity > 1) {
          subtractToCart({...item, quantity: 1});
        } else {
          removeToCart(item);
        }
        break;
      case 'remove':
        removeToCart(item);
        break;
      default:
        break;
    }
  };

  const renderButtons = () => {
    return (
      <View style={styles.cartBtnContainer}>
        <View style={styles.cartPlusMinus}>
          <Pressable style={[styles.updateQty, styles.minusQty]} onPress={() => onPress('subtract')}>
            <Icon name="minus" size={32} color={colors.white} />
          </Pressable>
          <Pressable style={[styles.updateQty, styles.addQty]} onPress={() => onPress('add')}>
            <Icon name="plus" size={32} color={colors.white} />
          </Pressable>
        </View>
        <Pressable style={styles.removeButton} onPress={() => onPress('remove')}>
          <Text style={styles.addToCartText}>Remove</Text>
        </Pressable>
      </View>
    );
  };

  return (
    <Swipeable overshootRight friction={3} overshootFriction={8} renderRightActions={renderButtons}>
      <View style={styles.listContainer}>
        <Image style={styles.productImg} source={{uri: item.imageUrl}} />
        <View style={styles.productDetail}>
          <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
            {item.productName}
          </Text>
          <View style={styles.flexDirection}>
            <Text style={styles.productCategory}>{_.capitalize(item.category)}</Text>
            <Text style={styles.productCategory} numberOfLines={1} ellipsizeMode="tail">
              x{item.quantity}
            </Text>
          </View>
          <Text style={styles.productDesc} numberOfLines={3} ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default CartList;
