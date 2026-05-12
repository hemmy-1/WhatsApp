import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

// Use destructuring for props - renamed onclose to onClose for standard naming
const CameraModal = ({ visible, facing, onClose }) => {
    return (
        <Modal visible={visible} animationType="fade" transparent={false}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <CameraView style={{ flex: 1 }} facing={facing}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 50 }}>

                        {/* Close Button */}
                        <TouchableOpacity
                            onPress={onClose} // Matches the prop name
                            style={styles.closeBtn}
                        >
                            <Ionicons name="close" size={30} color="white" />
                        </TouchableOpacity>

                        {/* Capture Button */}
                        <TouchableOpacity
                            style={styles.captureBtn}
                            onPress={() => console.log('Snap!')}
                        />
                    </View>
                </CameraView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    closeBtn: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: "#140c0cb7",
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    captureBtn: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 5,
        borderColor: 'white',
    }
});

export default CameraModal;