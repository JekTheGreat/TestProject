import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {ButtonIcon, ButtonIconProps} from '../buttons/ButtonIcon';

interface HeaderProps extends ButtonIconProps {
  iconRight?: ReactNode;
  onIconRightPress?: () => void;
}

export const Header = (props: HeaderProps) => {
  const {icon: iconLeft, iconRight, onPress, onIconRightPress} = props;

  return (
    <View style={styles.container}>
      <ButtonIcon icon={iconLeft} onPress={onPress} />
      {iconRight && <ButtonIcon icon={iconRight} onPress={onIconRightPress} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
