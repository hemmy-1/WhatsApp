import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import Chats from '../screens/chats';
import Updates from '../screens/updates';
import Calls from '../screens/calls';
import Communities from '../screens/communities';
import messages from '../screens/messages';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* This holds your Bottom Tabs */}
      <Stack.Screen name="Tab" component={TabNavigator} />
      
      {/* Other screens you can navigate to from the tabs */}
      <Stack.Screen name="Chat" component={Chats} />
      <Stack.Screen name="Updates" component={Updates} />
      <Stack.Screen name="calls" component={Calls} />
      <Stack.Screen name="Community" component={Communities} />
      <Stack.Screen name="messages" component={messages} />
    </Stack.Navigator>
  );
};

export default MainNavigator;