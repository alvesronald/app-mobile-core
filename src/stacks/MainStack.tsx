import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../modules/Home';
import {ShoppingStack} from 'mobile-shopping';

export type MainStackNavigator = {
  Home: undefined;
  Shopping: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigator>();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen name="Shopping" component={ShoppingStack} />
  </Stack.Navigator>
);

export default MainStack;
