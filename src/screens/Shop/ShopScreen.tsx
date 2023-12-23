import {FlatList, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import Icon from 'react-native-vector-icons/Feather';
import {Header} from '@src/components';
import {colors} from '@src/theme';
import MockData from '@src/helpers/mockData.json';
import styles from './styles';
import ProductList from './components/ProductList';

const ShopScreen = () => {
  const navigation = useNavigation<NavigationScreenProps<'ShopScreen'>>();

  const renderHeader = () => {
    return (
      <>
        <Header
          icon={<Icon name="menu" size={24} color={colors.black} />}
          iconRight={
            <Icon name="shopping-cart" size={24} color={colors.black} />
          }
          onPress={() => console.log('OPEN MENU')}
          onIconRightPress={() => navigation.navigate('CartScreen')}
        />
        <Text style={styles.headerLabel}>{`Online\nShopping Store`}</Text>
      </>
    );
  };

  return (
    <FlatList
      style={styles.container}
      data={MockData}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => `${item.id}`}
      ListHeaderComponent={renderHeader()}
      renderItem={({item, index}) => <ProductList item={item} index={index} />}
      bounces={false}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ShopScreen;
