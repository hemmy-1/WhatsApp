import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ text }) => {
    return (
        <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginButtonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonArea: {
        marginTop: 10,
    },
    loginButton: {
        backgroundColor: '#00a884',
        height: 55,
        borderRadius: 30, // Makes it a pill shape
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signupText: {
        color: '#00a884',
        fontSize: 14,
        fontWeight: 'bold',
    },

});