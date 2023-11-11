import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../WelcomeScreen';
import NavigationTab from './NavigationTab';
import CreatePost from '../CreatePost';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen options={{ headerShown: false }} name='Welcome' component={WelcomeScreen} />
      <Stack.Screen options={{ headerShown: false }} name='main' component={NavigationTab} />
      <Stack.Screen
        options={{ headerShown: false, presentation: 'modal' }}
        name="CreatePostModal"
        component={CreatePost}
      />
    </Stack.Navigator>
  );
}
