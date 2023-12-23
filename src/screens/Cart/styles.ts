import {StyleSheet} from 'react-native';
import {colors} from '@src/theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16, backgroundColor: colors.lightGray},
  contentContainer: {rowGap: 12, paddingBottom: 20},
  headerLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.semiLightGray,
    borderRadius: 8,
  },
  inputStyle: {padding: 8},
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 150,
    borderRadius: 4,
    padding: 12,
    backgroundColor: colors.white,
    elevation: 5,
    columnGap: 24,
  },
  productName: {fontSize: 18, fontWeight: '700', color: colors.black},
  productDetail: {flex: 1, rowGap: 6},
  productCategory: {fontSize: 14, fontWeight: '700', color: colors.orange},
  productDesc: {fontSize: 12, fontWeight: '400'},
  productImg: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  addToCart: {height: 150, width: 100, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.orange, borderRadius: 8},
  addToCartText: {fontSize: 18, fontWeight: '700', color: colors.white},
});

export default styles;
