import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your navigators and screens
import TabNavigator from './TabNavigator'; 
import Chats from '../screens/Chats';
import Updates from '../screens/Updates';
import Calls from '../screens/Calls';
import Communities from '../screens/Communities';
<<<<<<< HEAD
import messages from '../screens/messages';
import Dailycall from '../screens/Dailycall';
=======
import Messages from '../screens/messages';
import Profile from '../screens/Profile';
>>>>>>> d945ba1ec064eb29e1859bf307263283937ac112

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
<<<<<<< HEAD
      <Stack.Screen name="messages" component={messages} />
      <Stack.Screen name="Dailycall" component={Dailycall}/>
=======
      <Stack.Screen name="messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
>>>>>>> d945ba1ec064eb29e1859bf307263283937ac112
    </Stack.Navigator>
  );
};

export default MainNavigator;