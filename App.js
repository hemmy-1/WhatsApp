import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Updates from './src/screens/Updates';
import Calls from './src/screens/Calls';
import Communities from './src/screens/Communities';
import Chats from './src/screens/Chats';

// 1. Define the Bottom Tab Navigator
const MainTabs = createBottomTabNavigator({

  screens: {
    Chats: {
      screen: Chats,

      options: {

        tabBarIcon: ({ color, size }) => (
          <Ionicons name="chatbubbles-outline" size={size} color={color} />
        ),
      },
    },
    Updates: {
      screen: Updates, // Replace with your Status/Updates component
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="circle-filter-outline" size={size} color={color} />
        ),
      },
    },
    Communities: {
      screen: Communities, // Replace with your Calls component
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="call-outline" size={size} color={color} />
        ),
      },
    },
    Calls: {
      screen: Calls,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people-outline" size={size} color={color} />
        ),
      },
    },
  },
  screenOptions: {
    tabBarActiveTintColor: '#128C7E', // WhatsApp Green
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarActiveBackgroundColor: '#000000',
    
  },
});




const RootStack = createNativeStackNavigator({

  screens: {

    screen: MainTabs
  },
  screenOptions:{ headerShown: false },

});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}