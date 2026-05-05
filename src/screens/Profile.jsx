import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function Profile({ route }) {


    const [moreVisible, setMoreVisible] = useState(false);
    const openMoreMenu = () => setMoreVisible(true);
    const closeMoreMenu = () => setMoreVisible(false);



    const navigation = useNavigation()
    // const { MainChat } = route.params


    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container1}>

                    <View style={styles.headerRow}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={35} color="white" />
                        </TouchableOpacity>


                        <View style={{ flexDirection: 'column', alignItems:'center', marginTop:10, gap:5 }}>

                            <Image source={require('../assets/bat.png')}
                                style={{ height: 120, width: 120, borderRadius: 100 }} />
                            <Text style={styles.userName}>You fit send me money</Text>
                            <Text style={{color:'white', fontSize:18,
                                fontWeight:'300'
                            }}>+234 915 254 3383</Text>
                        </View>


                        <Menu
                            visible={moreVisible}
                            onDismiss={closeMoreMenu}
                            anchor={
                                <TouchableOpacity onPress={openMoreMenu} style={styles.menuAnchor}>
                                    <Ionicons name="ellipsis-vertical" size={22} color="white" style={{ marginLeft: 15 }} />

                                </TouchableOpacity>
                            }
                            contentStyle={styles.menuContent}
                        >
                            <Menu.Item
                                onPress={() => { }}
                                title="Share"
                                titleStyle={styles.menuText}
                            />
                            <Menu.Item
                                onPress={() => { }}
                                title="Edit"
                                titleStyle={styles.menuText}
                            />
                            <Menu.Item
                                onPress={() => navigation.navigate('Updates')}
                                title="Verify security code"
                                titleStyle={styles.menuText}
                            />

                        </Menu>

                    </View>






                </SafeAreaView>






            </SafeAreaProvider>
        </PaperProvider>











    )
};



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10,

    },
    headerRow: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5
    },
    leftHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    profilePic: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    userName: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,
    },
    rightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuAnchor: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuContent: {
        backgroundColor: '#1f2c34', // Dark dropdown color
        marginTop: 40, // Adjust position so it doesn't cover the icon
        borderRadius: 12,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    },
    divider: {
        backgroundColor: '#2a3942',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 8,
        backgroundColor: 'transparent', // Usually sits on top of the chat background
        position: 'absolute',
        top: 850,

    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1f2c34', // Dark WhatsApp input background
        borderRadius: 25,
        alignItems: 'center',
        paddingHorizontal: 10,
        minHeight: 48,
        maxHeight: 100
    },
    textInput: {
        flex: 1,
        color: 'white',
        fontSize: 17,
        marginHorizontal: 8,
        paddingVertical: 10,
        // Ensure text aligns properly when multiline
        textAlignVertical: 'center',
    },
    iconButton: {
        padding: 5,
    },
    micButton: {
        backgroundColor: '#d05b70', // The pinkish-red color from your image
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginBottom: 0,
    },
    bottomInputRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 8,
        marginBottom: Platform.OS === 'ios' ? 20 : 5,

    },

});