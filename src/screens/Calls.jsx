import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';

const Calls = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>

      <Text>Calls</Text>

      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Calls

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#0b1014',
    },
})