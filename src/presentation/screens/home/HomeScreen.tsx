import React from 'react';
import {Layout, Button, Text} from '@ui-kitten/components';

export const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text>HomeScreen</Text>
      <Button>Login with Facebook</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
