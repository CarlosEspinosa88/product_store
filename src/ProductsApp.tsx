import React from 'react';
import * as eva from '@eva-design/eva';

import {
  ApplicationProvider,
  // IconRegistry
} from '@ui-kitten/components';
// import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';

export const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'light' ? eva.light : eva.dark;
  console.log('HOLA', colorScheme);

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
