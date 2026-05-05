import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
import messages from '../screens/messages';
import Dailycall from '../screens/Dailycall';

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
      <Stack.Screen name="Dailycall" component={Dailycall}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;