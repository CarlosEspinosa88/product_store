import React, {useState} from 'react';
import {useWindowDimensions, StyleSheet, Alert} from 'react-native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {StackScreenProps} from '@react-navigation/stack';
import {RootParams} from '../../navigation/StackNavigator';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  const {login} = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    setIsPosting(true);
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }

    const wasSuccessLogin = await login(form.email, form.password);
    setIsPosting(false);
    if (wasSuccessLogin) {
      return;
    }

    Alert.alert('Error', 'Usuario y contraseña incorrectos');
  };

  return (
    <Layout style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        <Layout style={styles.loginContainer}>
          <Input
            value={form.email}
            placeholder="Correo electrónico"
            autoCapitalize="none"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={email => setForm({...form, email})}
          />

          <Input
            value={form.password}
            placeholder="Contraseña"
            autoCapitalize="none"
            style={styles.input}
            secureTextEntry
            onChangeText={password => setForm({...form, password})}
          />
          {/* <Text>{JSON.stringify(form, null, 2)}</Text> */}
          <Layout style={styles.separation} />
          <Layout>
            <Button aria-disabled={isPosting} onPress={onLogin}>
              Ingresar
            </Button>
          </Layout>
          <Layout style={styles.higherSeparation} />
          <Layout style={styles.footerContainer}>
            <Text>No tienes cuenta?</Text>
            <Text
              category="s1"
              status="primary"
              onPress={() => navigation.navigate('RegisterScreen')}>
              {' '}
              Crear cuenta
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
