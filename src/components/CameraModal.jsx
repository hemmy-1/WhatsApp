import { StyleSheet, View, Modal, TouchableOpacity } from 'react-native';
import { CameraView } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useRef } from 'react'; // 1. Added useRef

const CameraModal = ({ visible, facing, onClose, onPhotoCaptured }) => {
    const cameraRef = useRef(null);

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 1,
                    skipProcessing: false,
                });

                if (onPhotoCaptured) {
                    onPhotoCaptured(photo.uri)};
                    console.log("save image", onPhotoCaptured);
            } catch (error) {
                console.error("Capture Error:", error);
            }
        }
    };

    return (
        <Modal visible={visible} animationType="fade" transparent={false}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <CameraView
                    style={{ flex: 1 }}
                    facing={facing}
                    ref={cameraRef} // 4. Attach the ref here
                >
                    <View style={styles.overlay}>

                        {/* Close Button */}
                        <TouchableOpacity
                            onPress={onClose}
                            style={styles.closeBtn}
                        >
                            <Ionicons name="close" size={30} color="white" />
                        </TouchableOpacity>

                        {/* Capture Button */}
                        <TouchableOpacity
                            style={styles.captureBtn}
                            onPress={takePicture}
                            >
                           

                            </TouchableOpacity>
                            
                       
                    </View>
                </CameraView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 50
    },
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
        backgroundColor: 'rgba(255, 255, 255, 0.3)', // Added a slight fill
    }
});

export default CameraModal;