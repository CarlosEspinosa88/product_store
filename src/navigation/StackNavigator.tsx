import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen} from '../screens/auth/AuthScreen';
import {HomeScreen} from '../screens/home/HomeScreen';

export type RootParams = {
  AuthScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthScreen" component={AuthScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
