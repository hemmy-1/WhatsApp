import { useState } from 'react'
import { View, Image, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useRoute } from '@react-navigation/native'

export default function PhotoPicker() {
  const [image, setImage] = useState(null)
  const route = useRoute()
  
  // Get the photo data passed from Updates screen
  const photoData = route.params?.photo

  const pickImage = async () => {
    // 1. Request permission
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (status!== 'granted') {
      Alert.alert('Permission needed', 'We need access to your photos')
      return
    }

    // 2. Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // only images, not videos
      allowsEditing: true, // let user crop/resize
      aspect: [1, 1], // square crop
      quality: 0.8, // 0 to 1. Lower = smaller file size
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      console.log('Selected image URI:', result.assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
      {/* Display the photo from Updates screen if passed */}
      {photoData && (
        <View>
          <Image source={photoData.image} style={styles.image} />
          <Text style={styles.title}>{photoData.title}</Text>
          <Text style={styles.subtitle}>{photoData.time}</Text>
        </View>
      )}

      {/* Display picked image from gallery if selected */}
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick from Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B141A',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#AAB8C2',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#25D366',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})