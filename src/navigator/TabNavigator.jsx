import React from 'react';
import { Image, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
import Chats from '../screens/Chats';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      animation= 'shift'
      tabBarPosition="bottom" // Keeps it at the bottom like your screenshot
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        tabBarShowIcon: true, // Crucial for Top Tabs
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#AAB8C2',
        tabBarStyle: {
          backgroundColor: '#0B141B',
          height: 75,
          borderTopWidth: 0,
          elevation: 0, // Removes shadow on Android
        },
        tabBarIndicatorStyle: {
          height: 0, // Hides the sliding bar so we can use your pill effect
        },
        tabBarLabelStyle: {
          fontSize: 11,
          textTransform: 'none',
          marginBottom: 10,
        },
        tabBarIconStyle: {
          width: 'auto',
          height: 35,
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'Chats') iconSource = require('../assets/chat.png');
          else if (route.name === 'Updates') iconSource = require('../assets/updates.png');
          else if (route.name === 'Communities') iconSource = require('../assets/community.png');
          else if (route.name === 'Calls') iconSource = require('../assets/calls.png');

          return (
            <View style={{
              backgroundColor: focused ? '#0D3D28' : 'transparent',
              paddingHorizontal: 18,
              paddingVertical: 4,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Image
                source={iconSource}
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? '#D1F4CC' : '#AAB8C2'
                }}
              />
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