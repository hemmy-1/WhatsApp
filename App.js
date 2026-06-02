import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigator/MainNavigator";
import Toast from 'react-native-toast-message';


export default function App() {
  return(
    <NavigationContainer>
      <MainNavigator/>
      <Toast />
    </NavigationContainer>
  )
}
