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
  const background =
    colorScheme === 'light'
      ? theme['color-basic-100']
      : theme['color-basic-800'];

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <NavigationContainer
        theme={{
          dark: colorScheme === 'dark',
          colors: {
            primary: theme['color-primary-500'],
            background: background,
            card: theme['color-basic-100'],
            text: theme['color-basic-color'],
            border: theme['color-basic-800'],
            notification: theme['color-primary-500'],
          },
        }}>
        <StackNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
};
