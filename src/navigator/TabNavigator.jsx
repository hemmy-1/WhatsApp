import React from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Updates from '../screens/updates';
import Calls from '../screens/calls';
import Communities from '../screens/communities';
import Chats from '../screens/chats';

const Tab = createBottomTabNavigator();

// NOTE: Changed name from "App" to "TabNavigator" and removed NavigationContainer
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FFFFFF', // White text for active
        tabBarInactiveTintColor: '#AAB8C2', // Grayish text for inactive
        tabBarStyle: {
          backgroundColor: '#0B141B', // Dark WhatsApp background
          height: 70,
          borderTopWidth: 0,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        // This creates the "pill" effect behind the active icon
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;
          let showBadge = false;

          if (route.name === 'Chats') {
            iconSource = require('../assets/chat.png');
            showBadge = true; // Example: show badge on chats
          } else if (route.name === 'Updates') {
            iconSource = require('../assets/updates.png');
          } else if (route.name === 'Communities') {
            iconSource = require('../assets/community.png');
          } else if (route.name === 'Calls') {
            iconSource = require('../assets/calls.png');
          }

          return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View style={{
                backgroundColor: focused ? '#0D3D28' : 'transparent', // Dark green pill
                paddingHorizontal: 20,
                paddingVertical: 4,
                borderRadius: 20,
                marginBottom: 4,
              }}>
                <Image 
                  source={iconSource} 
                  style={{ 
                    width: 24, 
                    height: 24, 
                    tintColor: focused ? '#D1F4CC' : '#AAB8C2' // Light green if focused
                  }} 
                />
                {/* Notification Badge Example */}
                {showBadge && (
                  <View style={{
                    position: 'absolute',
                    right: 8,
                    top: -2,
                    backgroundColor: '#25D366', // Bright WhatsApp green
                    borderRadius: 10,
                    width: 16,
                    height: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Text style={{ color: '#0B141B', fontSize: 10, fontWeight: 'bold' }}>4</Text>
                  </View>
                )}
              </View>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Updates" component={Updates} />
      <Tab.Screen name="Communities" component={Communities} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
}