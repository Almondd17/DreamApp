import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/screens/routs/NavigationStack';


function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer> 
  );
}

export default App;

