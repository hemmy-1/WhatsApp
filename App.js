import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigator/MainNavigator";
import Toast from 'react-native-toast-message';
import { ToastProvider } from "./src/utils/utils";


export default function App() {
  return(
    <NavigationContainer>
      <MainNavigator/>
      <ToastProvider />
    </NavigationContainer>
  )
}
