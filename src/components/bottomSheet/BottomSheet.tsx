import {TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {BottomsheetProps} from './types';
import Sheet from './Sheet';
import styles from './styles';

export const BottomSheet = (props: BottomsheetProps) => {
  const {isVisible, onClose, renderChild} = props;

  if (!isVisible) {
    return null;
  }

  return (
    <View style={[styles.container]}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.flex1} />
      </TouchableWithoutFeedback>
      <Sheet isVisible={isVisible} renderChild={renderChild} onClose={onClose} />
    </View>
  );
};
