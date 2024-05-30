import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaView, StyleSheet} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CounterScreen from './src/presentation/screens/CounterScreen';

function App(): React.JSX.Element {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcons {...props} />,
      }}>
      <SafeAreaView style={styles.container}>
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
