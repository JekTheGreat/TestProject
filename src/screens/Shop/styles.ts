import {StyleSheet} from 'react-native';
import {colors} from '@src/theme';

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16},
  contentContainer: {rowGap: 12, paddingBottom: 20},
  headerLabel: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 12,
  },
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
});

export default styles;
