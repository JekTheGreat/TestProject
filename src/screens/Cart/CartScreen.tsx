import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import {Header} from '@src/components';

const CartScreen = () => {
  const navigation = useNavigation<NavigationScreenProps<'CartScreen'>>();
  return (
    <View>
      <Header onPress={() => navigation.goBack()} />
      <Text onPress={() => navigation.goBack()}>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
