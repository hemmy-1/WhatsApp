import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Dailycall from '../screens/Dailycall';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      
      {/* 
         CRITICAL FIX: The 'component' must match the s
         variable name you used in the import above!
      */}
      <Stack.Screen name="Chat" component={Chats} /> 
      <Stack.Screen name="Updates" component={Updates} />
      <Stack.Screen name="calls" component={Calls} />
      <Stack.Screen name="Community" component={Communities} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigator;