import React from 'react';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {useWindowDimensions, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootParams} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootParams, 'LoginScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        <Layout style={styles.loginContainer}>
          <Input
            placeholder="Nombre completo"
            autoCapitalize="none"
            style={styles.input}
            keyboardType="email-address"
          />
          <Input
            placeholder="Correo electrónico"
            autoCapitalize="none"
            style={styles.input}
            keyboardType="email-address"
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            style={styles.input}
            secureTextEntry
          />
          <Layout style={styles.separation} />
          <Layout>
            <Button onPress={() => {}}>Crear</Button>
          </Layout>
          <Layout style={styles.higherSeparation} />
          <Layout style={styles.footerContainer}>
            <Text>Ya tienes cuenta?</Text>
            <Text
              category="s1"
              status="primary"
              onPress={() => navigation.goBack()}>
              {' '}
              Ingresar a tu cuenta
            </Text>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    marginHorizontal: 40,
  },
  input: {
    marginBottom: 10,
  },
  loginContainer: {
    paddingTop: 20,
  },
  separation: {
    height: 20,
  },
  higherSeparation: {
    height: 50,
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
