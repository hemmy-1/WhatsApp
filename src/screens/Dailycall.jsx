import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Sound from 'react-native-sound';

const Dailycall = () => {
  const ringingSound = new Sound('ringtone.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) return console.log(error)
      ringingSound.setNumberOfLoops(-1)// -1 = loop forever
    ringingSound.play
  })
  //Stop it 
  ringingSound.stop()
  ringingSound.release()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/*Header*/}

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
          <View style={styles.box}>
            <AntDesign name="arrows-alt" size={24} color="black" />
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 24, }}>Car Dealer</Text>
            <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>Calling...</Text>
          </View>
          <View style={styles.box}>
            <Ionicons name="person-add" size={24} color="#FFF" />
          </View>
        </View>

        {/* Middle Layer*/}
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1, }}>
          <View style={{ backgroundColor: "#774e41", height: 200, width: 200, borderRadius: 200, alignItems: "center", justifyContent: "center", }}>
            <Image source={require("../assets/icons8-avatar-100.png")} style={{ tintColor: "#f9d5ca", marginBottom: 15 }} />
          </View>
        </View>

        {/*Down layer*/}
        <View style={styles.downcontainer}>

          <View style={styles.boxcontainer}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </View>

          <View style={styles.boxcontainer}>
            <Ionicons name="videocam" size={24} color="black" />
          </View>

          <View style={{
            height: 60, width: 60, borderRadius: 60, backgroundColor: "white", justifyContent: "center", alignItems: "center"
          }}>

          </View>

          <View style={styles.boxcontainer}>
            <Ionicons name="mic-off-sharp" size={24} color="white" />
          </View>

          <View style={{
            height: 60, width: 60, borderRadius: 60, backgroundColor: "red", justifyContent: "center", alignItems: "center"
          }}>

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
    backgroundColor: "black",
    padding: 20,
  },
  box: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  downcontainer: {
    backgroundColor: "gray",
    height: 77,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  boxcontainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
})