import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import Chats from './Chats';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  // 1. State to track if the app is still loading
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    // 2. Simulate a loading process (e.g., checking login or fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Shows splash for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  // Navigate to Tab screen when loading is complete
  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Tab');
    }
  }, [isLoading, navigation]);

  // 3. If loading, show the Splash Screen
  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        {/* You can put your Logo here */}
        <Text style={styles.logoText}>MY APP</Text>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  // 4. Once loading is false, navigation will happen via useEffect above
  return null;
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#6200EE', // Your brand color
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

