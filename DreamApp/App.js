import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen.js';
import NavigationTab from './src/screens/routs/NavigationTab.js';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>

        <Stack.Screen options={{ headerShown: false }} name = 'Welcome' component={WelcomeScreen} /> 
        <Stack.Screen name='Home' component={NavigationTab} />

      </Stack.Navigator>
    </NavigationContainer> 
    
  );
}

export default App;

