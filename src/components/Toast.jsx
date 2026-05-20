import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const toastColors = {
  success: '#4BB543',
  error: '#FF3333',
  info: '#007AFF',
};

const Toast = ({ type = 'info', message = '' }) => {
  return (
    <View style={[styles.toast, { backgroundColor: toastColors[type] || toastColors.info }]}> 
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    padding: 12,
    borderRadius: 8,
    position: 'absolute',
    top:90,
    left: '50%',
    transform: [{ translateX: -100 }],
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Toast;
