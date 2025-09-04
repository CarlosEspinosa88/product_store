import React, { PropsWithChildren, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../store/auth/useAuthStore';
import { RootParams } from '../navigation/StackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export const AuthProvider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<StackNavigationProp<RootParams>>();
  const {checkStatus, status} = useAuthStore();
  
  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'authenticated') {
        navigation.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'LoginScreen'}],
        });
      }
    }
  }, [status]);

  return <>{children}</>;
}