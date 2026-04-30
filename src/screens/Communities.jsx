import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function Communities() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <Ionicons name="arrow-back" size={24} color="white" />
          </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'black',
    paddingHorizontal:20
  }
})
