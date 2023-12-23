import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {Easing, SlideInDown, SlideOutDown, runOnJS, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import styles from './styles';
import {BottomsheetProps} from './types';

const Sheet = (props: BottomsheetProps) => {
  const {isVisible, renderChild, onClose} = props;
  const [sheetHeight, setSheetHeight] = useState<number>();
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: withTiming(animatedValue.value, {easing: Easing.linear})}]};
  });

  const onSwipeGesture = Gesture.Pan().onUpdate(event => {
    const {y, translationY} = event;
    if (translationY > 0) {
      if (y > 0) {
        animatedValue.value = y;
      }
    }
  });

  const onEndGesture = Gesture.Pan().onEnd(event => {
    const {y, translationY, velocityY} = event;
    if (translationY > 0) {
      if (y < 100) {
        animatedValue.value = 0;
      } else {
        runOnJS(onClose)();
      }
      if (velocityY > 650) {
        runOnJS(onClose)();
      }
    }
  });

  const getLayout = useCallback(
    (event: any) => {
      setSheetHeight(event.nativeEvent.layout.height);
    },
    [sheetHeight, isVisible],
  );

  return (
    <Animated.View style={[styles.sheet, animatedStyle]} onLayout={getLayout} entering={SlideInDown.springify(1000)} exiting={SlideOutDown}>
      <GestureDetector gesture={Gesture.Simultaneous(onSwipeGesture, onEndGesture)}>
        <View>
          <View style={styles.line} />
        </View>
      </GestureDetector>
      {renderChild}
    </Animated.View>
  );
};

export default Sheet;
