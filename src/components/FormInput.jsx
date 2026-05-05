import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormInput = ({ placeholder,keyboardType }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        {/* 2. Input Area */ },

        <View style={styles.inputArea}>
            <View>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="#85959f"
                    style={styles.input}
                    keyboardType={keyboardType}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View >
        </View >

    )
}

export default FormInput;

const styles = StyleSheet.create({
    inputArea: {
        gap: 15,
    },
    input: {
        backgroundColor: '#1f2c34',
        height: 55,
        borderRadius: 12,
        paddingHorizontal: 16,
        color: 'white',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#2a3942',
    },
})