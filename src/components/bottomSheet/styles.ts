import {colors} from '@src/theme';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.background,
    zIndex: 5,
    paddingHorizontal: 0,
    marginBottom: 0,
  },
  sheet: {
    position: 'absolute',
    bottom: 0,
    width: width,
    maxHeight: height * 0.9,
    backgroundColor: colors.white,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  line: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 4,
    width: 105,
    backgroundColor: colors.black,
    borderRadius: 4,
    marginTop: 24,
    marginBottom: 40,
  },
  flex1: {flex: 1},
});

export default styles;
