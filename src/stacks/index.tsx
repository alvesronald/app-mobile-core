import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';

type RootStackNavigator = {
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigator>();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
