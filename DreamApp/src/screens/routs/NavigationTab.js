import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import NotificationScreen from '../Notification';
import ProfileScreen from '../ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import from the correct library

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notification') {
            iconName = 'notifications';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: '#EE82EE',
      })}
    >

      <Tab.Screen options={{ headerShown: false }} name='Profile' component={ProfileScreen} />
      <Tab.Screen options={{ headerShown: false }} name='Home' component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }} name='Notification' component={NotificationScreen} />

    </Tab.Navigator>
  );
}
