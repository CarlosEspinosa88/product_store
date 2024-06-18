import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './navigation/StackNavigator';

export const ProductsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
