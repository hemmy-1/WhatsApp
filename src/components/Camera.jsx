import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'






const Camera = (visible) => {
  return (
      <Modal visible={visible} animationType="fade">
          <View style={{ flex: 1, backgroundColor: 'black' }}>
              <CameraView style={{ flex: 1 }} facing="front">
                  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 }}>
                      {/* Close Button */}
                      <TouchableOpacity
                          onPress={() => setShowCamera(false)}
                          style={{ position: 'absolute', top: 50, left: 20 }}
                      >
                          <Ionicons name="close" size={30} color="white" />
                      </TouchableOpacity>

                      {/* Capture Button */}
                      <TouchableOpacity
                          style={{ width: 70, height: 70, borderRadius: 35, borderWidth: 5, borderColor: 'white' }}
                          onPress={() => console.log('Snap!')}
                      />
                  </View>
              </CameraView>
          </View>
      </Modal>
  )
}

export default Camera

const styles = StyleSheet.create({})