import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {ProductModel} from '@src/models/ProductModel';
import styles from '../styles';
import _ from 'lodash';
import {useCartService} from '@src/ducks/hooks';

const ProductList = ({item, index}: {item: ProductModel; index: number}) => {
  const {addToCart} = useCartService();

  const renderButtons = () => {
    return (
      <Pressable style={styles.addToCart} onPress={() => addToCart({...item, quantity: 1})}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </Pressable>
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
          <Text style={styles.productCategory}>{_.capitalize(item.category)}</Text>
          <Text style={styles.productDesc} numberOfLines={3} ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default ProductList;
