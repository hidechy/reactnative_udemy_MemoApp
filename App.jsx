/* eslint-disable react/react-in-jsx-scope */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './src/components/Hello';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      {/* eslint-disable-next-line */}
      <StatusBar style="auto" />

      <Hello>world</Hello>
      <Hello style={{ backgroundColor: 'red', fontSize: 16 }}>small world</Hello>

    </View>
  );
}
