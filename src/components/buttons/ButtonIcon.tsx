import {colors} from '@src/theme';
import React, {ReactNode} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export interface ButtonIconProps {
  icon?: ReactNode;
  onPress?: () => void;
}

const ButtonIcon = (props: ButtonIconProps) => {
  const {icon, onPress} = props;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {icon ? icon : <Icon name="arrow-left" size={24} color={colors.black} />}
    </Pressable>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 8,
    elevation: 5,
  },
});
