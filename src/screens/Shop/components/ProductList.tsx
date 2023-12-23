import {View, Text, Image} from 'react-native';
import React from 'react';
import {ProductModel} from '@src/models/ProductModel';
import styles from '../styles';
import _ from 'lodash';

const ProductList = ({item, index}: {item: ProductModel; index: number}) => {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.productImg} source={{uri: item.imageUrl}} />
      <View style={styles.productDetail}>
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
          {item.productName}
        </Text>
        <Text style={styles.productCategory}>
          {_.capitalize(item.category)}
        </Text>
        <Text style={styles.productDesc} numberOfLines={3} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductList;
