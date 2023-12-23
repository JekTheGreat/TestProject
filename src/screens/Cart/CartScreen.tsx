import {FlatList, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import {Header} from '@src/components';
import styles from './styles';
import {useCartService} from '@src/ducks/hooks';
import Icon from 'react-native-vector-icons/Feather';
import {colors} from '@src/theme';
import _ from 'lodash';
import CartList from './components/CartList';
import TotalSummary from './components/TotalSummary';

const CartScreen = () => {
  const navigation = useNavigation<NavigationScreenProps<'CartScreen'>>();
  const {cart, resetCart} = useCartService();
  const emptyCart = _.isEmpty(cart.cartList);
  const renderHeader = () => {
    return (
      <>
        <Header onPress={navigation.goBack} iconRight={<Icon name="trash-2" size={24} color={colors.red} />} onIconRightPress={resetCart} />
        {!emptyCart && <Text style={styles.headerLabel}>My Cart</Text>}
      </>
    );
  };

  return (
    <>
      <FlatList
        style={styles.container}
        data={cart.cartList}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => `cartList${item.id}`}
        ListHeaderComponent={renderHeader()}
        renderItem={({item, index}) => <CartList key={`cartList${item.id}`} item={item} index={index} />}
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => emptyCart && <Text style={[styles.headerLabel, {textAlign: 'center'}]}>Cart is empty</Text>}
      />
      {!emptyCart && <TotalSummary />}
    </>
  );
};

export default CartScreen;
