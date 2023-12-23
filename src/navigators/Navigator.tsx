import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationOptions, TransitionSpecs, createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@src/navigators/NavigatorTypes';
import ShopScreen from '@src/screens/Shop/ShopScreen';
import CartScreen from '@src/screens/Cart/CartScreen';

const screenOpts: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOpts}>
        <RootStack.Screen name="ShopScreen" component={ShopScreen} />
        <RootStack.Screen name="CartScreen" component={CartScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
