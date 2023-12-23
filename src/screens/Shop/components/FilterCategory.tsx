import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../styles';
import MockData from '@src/helpers/mockData.json';
import _ from 'lodash';
import {colors} from '@src/theme';

interface FilterCategoryProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const FilterCategory = (props: FilterCategoryProps) => {
  const {selectedCategory, onSelectCategory} = props;
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories = _.map(MockData, product => product.category);
    const uniqueCategories = _.uniq(categories);
    setCategories(uniqueCategories);
  }, []);

  const renderHeader = () => {
    return (
      <View style={[styles.flexDirection, {marginBottom: 10}]}>
        <Text style={styles.productName}>Filter by Categories</Text>
        <Text style={styles.productCategory} onPress={() => onSelectCategory('')}>
          Reset Filter
        </Text>
      </View>
    );
  };

  const renderItem = ({item}: {item: string}) => {
    const isSelected = selectedCategory === item;
    return (
      <View style={styles.filterV}>
        <TouchableOpacity
          style={[styles.categoryBtn, isSelected && {backgroundColor: colors.amber}]}
          onPress={() => onSelectCategory(item)}>
          <Text>{item}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={categories}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item, index) => `category${item}`}
      ListHeaderComponent={renderHeader()}
      renderItem={renderItem}
      bounces={false}
      showsVerticalScrollIndicator={false}
      numColumns={4}
    />
  );
};

export default FilterCategory;
