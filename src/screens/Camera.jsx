import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import { useState,useEffect,useRef } from 'react'
import {CameraView,useCameraPermissions} from 'expo-camera'
const Camera = () => {
  const [permission, requestPermission] = useCameraPermissions()
  const [facing, setFacing] = useState('back')
  const cameraRef = useRef(null)
  useEffect ( ()=> {
    if (!permission?.granted) {
      requestPermission()
    }
  },[permission])
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
     setFacing(current => (current === 'back'? 'front' : 'back'))
   }
 
   return (
     <View style={styles.container}>
       <CameraView
         style={styles.camera}
         facing={facing}
         ref={cameraRef}
       >
      <Text style={{color:"white",fontSize:20,padding:30,position:"absolute",top:40,left:20 }}>CarDelar</Text>
         <View style={styles.controls}>
       
           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
             <Text style={styles.buttontext}>Flip</Text>
           </TouchableOpacity>
 
           <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
             <View style={styles.captureInner} />
           </TouchableOpacity>
 
           <View style={{ width: 70 }} /> // spacer for centering
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
})