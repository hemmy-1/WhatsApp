import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message'; 

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    if (!isLoading) {
      // Show the cross-platform toast
      Toast.show({
        type: 'success',
        text1: 'Welcome!',
        text2: 'Welcome to WhatsApp 👋',
        position: 'bottom',
        visibilityTime: 2500,
      });

      navigation.navigate('Tab');
    }
  }, [isLoading, navigation]);

  // 1. Create animated values for opacity (0 to 1) and scale (0.3 to 1)
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    // 2. Run the entry animations simultaneously
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000, // 1 second to fade in
        useNativeDriver: true, // Hardware acceleration for 60fps
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5, // Controls bounciness (lower = more bouncy)
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    // 3. Keep the splash visible for 3 seconds total before navigating
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim]);

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Tab');
    }
  }, [isLoading, navigation]);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        {/* 4. Wrap your image and text inside a single Animated.View to animate them together */}
        <Animated.View
          style={[
            styles.animatedWrapper,
            {
              opacity: fadeAnim, // Binds opacity to state
              transform: [{ scale: scaleAnim }] // Binds size scaling to state
            }
          ]}
        >
          <Image
            source={require('../assets/wlogo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>Whatsapp</Text>
        </Animated.View>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: '#006633', // Adjusted to match your OPay clone or deep green aesthetic
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 100, // Explicit sizing prevents layout jumps
    height: 100,
    marginBottom: 16,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1.5,
  },
});