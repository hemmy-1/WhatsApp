import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';

const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [facing, setFacing] = useState('back')
  const cameraRef = useRef(null)
  const navigation = useNavigation();

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()
    }
  }, [permission])
  if (!permission) {

    return <View style={styles.container} />
  }
  if (!permission.granted) {
    // Permission denied
    return (
      <View style={styles.controls}>
        <Text style={styles.text}>We need camera permission to continue</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttontext}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    )
  }
  // Function to take a picture
  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync()
      console.log('Photo URI:', photo.uri)
      // You can now upload or display the photo
    }
  }

  // Flip camera
  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'))
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={cameraRef}
      >
        {/* <TouchableOpacity style={styles.button} onPress={}>
             <Text style={styles.buttontext}>Flip</Text>
           </TouchableOpacity> */}
        <View style={{ padding: 20, marginTop: 23, gap: 22 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
            <TouchableOpacity style={{ transform: [{ rotate: '90deg' }], backgroundColor: "gray", height: 55, width: 55, borderRadius: 55, justifyContent: "center", alignItems: "center", }}>
              <MaterialCommunityIcons name="arrow-collapse" size={24} color="white" />
            </TouchableOpacity>
            <View>
              <Text style={{
                color: "white", fontSize: 20,
              }}>CarDelar</Text>
            </View>

            <TouchableOpacity style={{ backgroundColor: "gray", height: 55, width: 55, borderRadius: 55, justifyContent: "center", alignItems: "center", }}>
              <Ionicons name="person-add" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "flex-end", gap: 22, }}>  
            <TouchableOpacity onPress={toggleCameraFacing} style={{ backgroundColor: "gray", height: 55, width: 55, borderRadius: 55, justifyContent: "center", alignItems: "center", }}>
              <Ionicons name="camera-reverse-outline" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "gray", height: 55, width: 55, borderRadius: 55, justifyContent: "center", alignItems: "center", }}>
              <Ionicons name="color-wand-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        
        </View>



        <View style={styles.controls}>

          <View style={styles.downcontainer}>

            <View style={styles.boxcontainer}>
              <Entypo name="dots-three-horizontal" size={24} color="white" />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.boxcontainer}>
              <Ionicons name="videocam" size={24} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{
              height: 55, width: 55, borderRadius: 55, backgroundColor: "white", justifyContent: "center", alignItems: "center"
            }}>
              <Ionicons name="volume-medium" size={30} color="black" />
            </TouchableOpacity>

            <View style={styles.boxcontainer}>
              <Ionicons name="mic-off-sharp" size={24} color="white" />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack('Calls')}
              style={{
                height: 55, width: 55, borderRadius: 55, backgroundColor: "red", justifyContent: "center", alignItems: "center"
              }}>
              <MaterialCommunityIcons name="phone-hangup" size={24} color="white" />
            </TouchableOpacity>
            {/*           
          <View style={{width:50,height:50,borderRadius:50,backgroundColor:"red"}}>

          </View>
       
 
           <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
             <View style={styles.captureInner}></View>
           </TouchableOpacity> */}

            {/* spacer for centering */}
            {/* <View style={{ width: 50 }}></View>  */}
          </View>
        </View>
      </CameraView>
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  controls: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,

  },
  buttontext: {
    color: 'white',
    fontSize: 16,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F15C6D',
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  downcontainer: {
    backgroundColor: "gray",
    height: 80,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  boxcontainer: {
    height: 55,
    width: 55,
    borderRadius: 55,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
})