import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
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