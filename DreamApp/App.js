import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/screens/routs/NavigationStack';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
}
export default App;
