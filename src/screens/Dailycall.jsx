import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { Audio } from 'expo-av';
import { useEffect,useRef,useState } from 'react';

const Dailycall = () => {

  const [callStatus, setCallStatus] = useState('calling') // calling | connected | ended
  const soundRef = useRef(null)

  // Play ringing sound when screen mounts
  useEffect(() => {
    setupAudio()
    playRingingSound()

    // Cleanup when component unmounts
    return () => {
      stopRingingSound()
    }
  }, [])

  const setupAudio = async () => {
    // Allow audio to play even when phone is on silent mode
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      playThroughEarpieceAndroid: false,
    })
  }

  const playRingingSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/ringtone.mp3'), // put your mp3 in assets folder
        { 
          isLooping: true, // loop the ringing sound
          volume: 1.0 
        }
      )
      soundRef.current = sound
      await sound.playAsync()
    } catch (error) {
      console.log('Error playing sound:', error)
    }
  }

  const stopRingingSound = async () => {
    if (soundRef.current) {
      await soundRef.current.stopAsync()
      await soundRef.current.unloadAsync()
      soundRef.current = null
    }
  }

  const handleEndCall = async () => {
    await stopRingingSound()
    setCallStatus('ended')
    // navigation.goBack() or whatever you use
  }

  const handleAnswerCall = async () => {
    await stopRingingSound()
    setCallStatus('connected')
    // start actual call logic with WebRTC here
  }
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