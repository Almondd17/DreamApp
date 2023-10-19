import React from 'react';
import { Text, View, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome Screen</Text>
      <Button
        title='Go to home screen'
        onPress={() => navigation.navigate('main')}
      />
    </View>
  );
}

export default WelcomeScreen;
