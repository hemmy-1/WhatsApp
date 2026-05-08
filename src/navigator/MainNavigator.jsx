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
import SelectContact from '../screens/SelectContact';
import SplashScreen from '../screens/SplashScreen';
import Photos from '../screens/Photos';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Splash" component={SplashScreen} /> 
      <Stack.Screen name="Chat" component={Chats} /> 
      <Stack.Screen name="Updates" component={Updates} />
      <Stack.Screen name="calls" component={Calls} />
      <Stack.Screen name="Community" component={Communities} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Dailycall" component={Dailycall} />
      <Stack.Screen name="SelectContact" component={SelectContact} />
      <Stack.Screen name="Photos" component={Photos} />
      
    </Stack.Navigator>
  );
};

export default MainNavigator;