import {Platform, StyleSheet} from 'react-native';
import {colors} from '@src/theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16, backgroundColor: colors.lightGray, marginTop: Platform.OS === 'ios' ? 40 : 0},
  contentContainer: {rowGap: 12, paddingBottom: 20},
  headerLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 12,
  },
  searchContainer: {
    flex: 1,
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
  cartQuantityRed: {
    position: 'absolute',
    backgroundColor: colors.red,
    top: -15,
    left: -15,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  quantityText: {fontSize: 10, fontWeight: '700', color: colors.white},
  filterV: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  categoryBtn: {borderWidth: 0.3, padding: 6, borderRadius: 6},
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
