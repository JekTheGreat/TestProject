import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '@src/theme';

interface ButtonProps {
  label: string;
  onPress?: () => void;
}

export const Button = (props: ButtonProps) => {
  const {label, onPress} = props;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
    color: colors.white,
  },
});
