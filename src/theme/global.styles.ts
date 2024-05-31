import {Platform, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: '#000000',
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: Platform.OS === 'android' ? 15 : 0,
    margin: 16,
  },
});
