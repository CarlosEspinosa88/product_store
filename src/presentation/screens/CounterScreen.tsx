import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {PrimaryButton} from '../components';
import {Button, FAB} from 'react-native-paper';
import {globalStyles} from '../../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={globalStyles.containerCenter}>
      <Text style={globalStyles.title}>{counter}</Text>

      {/* RN Vector Icons */}
      <Icon name="accessibility-outline" size={50} />

      {/* Custom Pressable Button */}
      <PrimaryButton
        label="Increment"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
      />

      {/* RN Paper Button */}
      <Button
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}>
        <Text> Increment</Text>
      </Button>

      {/* RN Paper FAB Button + RN Vector Icons */}
      <FAB
        icon="add"
        onPress={() => setCounter(counter + 1)}
        onLongPress={() => setCounter(0)}
        style={globalStyles.fab}
      />
    </View>
  );
}
