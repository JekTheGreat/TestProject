import React, {useCallback, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import Icon from 'react-native-vector-icons/Feather';
import {BottomSheet, ButtonIcon, Header} from '@src/components';
import {colors} from '@src/theme';
import MockData from '@src/helpers/mockData.json';
import styles from './styles';
import ProductList from './components/ProductList';
import _ from 'lodash';
import {ProductModel} from '@src/models/ProductModel';
import ShopCartIcon from './components/ShopCartIcon';
import FilterCategory from './components/FilterCategory';

const ShopScreen = () => {
  const navigation = useNavigation<NavigationScreenProps<'ShopScreen'>>();
  const [inputtedProduct, setInputtedProduct] = useState<string>('');
  const [isOrderByDesc, setOrderStatus] = useState<boolean>(false);
  const [isFilterShowing, setFilterModalStatus] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const filteredData = _.filter(MockData, (product: ProductModel) =>
    product.productName.toLocaleLowerCase().includes(inputtedProduct.toLocaleLowerCase()),
  );
  const filterByCategory = _.filter(filteredData, (product: ProductModel) => selectedCategory === product.category);
  const orderedData = _.orderBy(
    _.isEmpty(selectedCategory) ? filteredData : filterByCategory,
    ['unitPrice'],
    [isOrderByDesc ? 'desc' : 'asc'],
  );

  const onChangeText = useCallback(
    (value: string) => {
      setInputtedProduct(value);
    },
    [inputtedProduct],
  );

  const renderHeader = () => {
    return (
      <>
        <Header
          icon={<Icon name="menu" size={24} color={colors.black} />}
          iconRight={<ShopCartIcon />}
          onPress={() => setFilterModalStatus(true)}
          onIconRightPress={() => navigation.navigate('CartScreen')}
        />
        <Text style={styles.headerLabel}>{`Online\nShopping Store`}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 20}}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.inputStyle} placeholder="Search for products..." value={inputtedProduct} onChangeText={onChangeText} />
          </View>
          <ButtonIcon name={isOrderByDesc ? 'corner-right-down' : 'corner-right-up'} onPress={() => setOrderStatus(!isOrderByDesc)} />
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        style={styles.container}
        data={orderedData}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(item, index) => `${item.id}`}
        ListHeaderComponent={renderHeader()}
        renderItem={({item, index}) => <ProductList key={`${item.id}`} item={item} index={index} />}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
      <BottomSheet
        isVisible={isFilterShowing}
        onClose={() => setFilterModalStatus(false)}
        renderChild={<FilterCategory selectedCategory={selectedCategory} onSelectCategory={category => setSelectedCategory(category)} />}
      />
    </>
  );
};

export default ShopScreen;
