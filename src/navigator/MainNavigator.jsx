import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import chats from '../screens/chats';
import Updates from '../screens/Updates'; // Fixed Case
import Calls from '../screens/Calls';     // Fixed Case
import communities from '../screens/communities';
import messages from '../screens/messages';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      
      {/* 
         CRITICAL FIX: The 'component' must match the s
         variable name you used in the import above!
      */}
      <Stack.Screen name="Chat" component={chats} /> 
      <Stack.Screen name="Updates" component={Updates} />
      <Stack.Screen name="calls" component={Calls} />
      <Stack.Screen name="Community" component={communities} />
      <Stack.Screen name="messages" component={messages} />
    </Stack.Navigator>
  );
};

export default MainNavigator;