import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './MainStack';
import {ShoppingStack} from 'mobile-shopping';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStack} />
      <Tab.Screen
        name="Shopping"
        component={ShoppingStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
