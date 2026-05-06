import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

export default function Communities() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.innerContainer}>

              {/* 1. Header/Logo Area */}
              <View style={styles.headerArea}>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
              </View>




              <View style={{ gap: 13 }}>

                <FormInput placeholder={"Email Address"} keyboardType={"number-pad"} />
                <FormInput placeholder={"Password"} />
              </View>


              <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>


              {/* 3. Action Area */}
              <Button text={"Login"} />
              <Button text={"Sign Up"} />
              <Text style={styles.footerText}>Don't have an account? </Text>


            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0b141a', // WhatsApp-style dark background
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center', // Centers the content vertically
  },
  headerArea: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#e9edef',
  },
  subtitle: {
    fontSize: 16,
    color: '#85959f',
    marginTop: 8,
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: 11
  },
  forgotText: {
    color: '#00a884', // WhatsApp teal
    fontSize: 14,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#85959f',
    fontSize: 14,
  },

});
