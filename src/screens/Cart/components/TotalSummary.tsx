import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {useCartService} from '@src/ducks/hooks';
import styles from '../styles';
import {Button} from '@src/components';
import SuccessModal from './SuccessModal';

const TotalSummary = () => {
  const {cart} = useCartService();
  const [isModalShowing, setModalStatus] = useState<boolean>(false);

  return (
    <View style={styles.totalSummaryContainer}>
      <View style={styles.flexDirection}>
        <Text style={styles.productName}>{cart.totalCartQty} Items</Text>
        <Text style={styles.productName}>${cart.totalSummary}</Text>
      </View>
      <Button label="Place order" onPress={() => setModalStatus(true)} />

      <SuccessModal isOpen={isModalShowing} closeModal={() => setModalStatus(false)} />
    </View>
  );
};

export default TotalSummary;
