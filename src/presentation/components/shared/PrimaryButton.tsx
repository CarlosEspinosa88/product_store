import React from 'react';
import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const isAndroid = Platform.OS === 'android';

export default function PrimaryButton({label, onPress, onLongPress}: Props) {
  return (
    <View>
      <Pressable
        style={({pressed}) => [styles.button, pressed && styles.buttonPress]}
        onPress={onPress}
        onLongPress={onLongPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: isAndroid ? '#5856D6' : '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: isAndroid ? 'FFFFFF' : '#5856D6',
  },
  buttonPress: {
    backgroundColor: isAndroid ? '#4746AB' : '#FFFFFF',
  },
});
