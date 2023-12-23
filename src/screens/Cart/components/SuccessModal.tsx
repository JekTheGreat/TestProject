import {Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {NavigationScreenProps} from '@src/navigators/NavigatorTypes';
import {useCartService} from '@src/ducks/hooks';
import {colors} from '@src/theme';

interface SuccessModalProps {
  isOpen: boolean;
  closeModal: () => void;
}
const SuccessModal = (props: SuccessModalProps) => {
  const {isOpen, closeModal} = props;
  const navigation = useNavigation<NavigationScreenProps<'CartScreen'>>();
  const {resetCart} = useCartService();

  const closeAnimation = () => {
    resetCart();
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'ShopScreen'}],
      }),
    );
  };

  return (
    <Modal
      visible={isOpen}
      animationType="none"
      transparent
      onRequestClose={closeModal}
      supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.container}>
          <LottieView
            style={styles.lottieSize}
            source={require('@src/assets/lottieFiles/success_check_lottie.json')}
            autoPlay
            loop={false}
            onAnimationFinish={closeAnimation}
          />
          <Text style={styles.labelSuccess}>Order success!</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'},
  lottieSize: {height: 320, width: 230},
  labelSuccess: {fontSize: 24, fontWeight: '700', color: colors.green, marginTop: 20},
});
