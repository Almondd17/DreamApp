import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import NotificationScreen from '../Notification';
import ProfileScreen from '../ProfileScreen';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name='Profile' component={ProfileScreen} />
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Notification' component={NotificationScreen} />
    </Tab.Navigator>
  );
}
