import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OneScreen} from './OneScreen';
import {SecondScreen} from './SecondScreen';

export type ShoppingStackNavigator = {
  ScreenOne: undefined;
  ScreenSecond: undefined;
};

const Stack = createNativeStackNavigator<ShoppingStackNavigator>();

const ShoppingStack = () => (
  <Stack.Navigator initialRouteName="ScreenOne">
    <Stack.Screen
      name="ScreenOne"
      component={OneScreen}
      options={{
        // headerShown: false,
        title: 'Shopping - Tela 1',
      }}
    />

    <Stack.Screen
      name="ScreenSecond"
      component={SecondScreen}
      options={{
        // headerShown: false,
        title: 'Shopping - Tela 2',
      }}
    />
  </Stack.Navigator>
);

export default ShoppingStack;
