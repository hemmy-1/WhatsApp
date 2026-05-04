import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';


const Dailycall = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <View>
            <AntDesign name="arrows-alt" size={24} color="black" />
            <Text style={{color:"white",fontSize:20,}}>Car Dealer
              <Text style={{color:"white",fontSize:18,}}>Calling...</Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Dailycall

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 20,
  },
})