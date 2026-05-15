import { Text, View, StyleSheet, Modal, TextInput, TouchableOpacity, FlatList, Image, TouchableWithoutFeedback, ImageBackground, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CameraView, useCameraPermissions } from 'expo-camera';
import Ionicons from '@expo/vector-icons/Ionicons';
import CameraModal from "../components/CameraModal";



export default function Chats() {


    const [archivedModal, serArchivedModal] = useState(false)
    const [permission, requestPermission] = useCameraPermissions();
    const [showCamera, setShowCamera] = useState(false);

    const handleCameraPress = async () => {
        if (!permission?.granted) {
            const { granted } = await requestPermission();
            if (!granted) return;
        }
        setShowCamera(true);
    };

    const [visible, setVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false)

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    const navigation = useNavigation()



    const Data = [
        {
            id: '1',
            name: 'All',
        },
        {
            id: '2',
            name: 'Unread'
        },
        {
            id: '3',
            name: 'Favourites'
        },
        {
            id: '4',
            name: 'Groups'
        },
        {
            id: '5',
            name: '+'
        },
    ]

    const messageStatusVIew = ({ item }) => {
        return (
            <TouchableOpacity style={{ gap: 10, }}>
                <View style={{
                    backgroundColor: '#000000',
                    borderRadius: 20,
                    flexWrap: 'wrap',
                    marginEnd: 10,
                    marginTop: 10,
                    borderColor: '#e2d8d86e',
                    borderWidth: 1
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                        margin: 'auto',
                        padding: 8,
                        paddingHorizontal: 16

                    }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }


    const MainChat = [
        {
            id: '1',
            name: 'Emmanuel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/por.png')

        },
        {
            id: '2',
            name: 'Enoch',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/bat.png')

        },
        {
            id: '3',
            name: 'Owooluwa',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/arsss.jpg')
        },
        {
            id: '4',
            name: 'David',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/bmw.jpg')
        },
        {
            id: '5',
            name: 'Gbenga',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/ars.png')
        },
        {
            id: '6',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '7',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '8',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '9',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '10',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '11',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '12',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '13',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
        {
            id: '14',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10',
            img: require('../assets/meme.png')
        },
    ]
    const MainChatView = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', gap: 10, marginTop: 23 }} >

                <TouchableOpacity onPress={() => {
                    setSelectedUser(item); // Store the clicked user's data
                    setModalVisible(true);
                }}
                >
                    <Image source={item.img}
                        style={{ height: 55, width: 55, borderRadius: 50 }} />
                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate('Messages', { MainChat: item })}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flex: 1
                    }}>


                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>

                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>
                                {item.name}
                            </Text>
                            <Text style={{
                                color: '#888',
                                fontSize: 14,
                            }}>
                                {item.message}
                            </Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <Text style={{
                            color: '#888',
                            fontSize: 12,
                        }}>
                            {item.time}
                        </Text>

                    </View>

                </TouchableOpacity>

            </View>

        )
    }




    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>

                    <View style={{
                        justifyContent: 'space-between', flexDirection: 'row',
                        alignContent: 'center', alignItems: 'center', marginTop: 10
                    }}>


                        <View>
                            <Text style={{ fontSize: 25, color: 'white', fontWeight: 800 }}>
                                WhatsApp
                            </Text>
                        </View>


                        <View
                            style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>

                            <TouchableOpacity onPress={handleCameraPress} >
                                <EvilIcons name="camera" size={24} color="white" />
                            </TouchableOpacity>


                            <Menu
                                visible={visible}
                                onDismiss={closeMenu}
                                anchor={
                                    <TouchableOpacity onPress={openMenu}>
                                        <Entypo name="dots-three-vertical" size={24} color="white" />
                                    </TouchableOpacity>
                                }

                                contentStyle={{
                                    backgroundColor: '#1f2c34',
                                    marginTop: 40, // Adjust position so it doesn't cover the icon
                                    borderRadius: 12,
                                    width: 200

                                }}>

                                <Menu.Item
                                    onPress={() => setCount(count + 1)}
                                    title="New group"
                                    titleStyle={styles.menuText}
                                />
                                <Menu.Item
                                    onPress={() => setCount(count - 1)}
                                    title="New broadcast"
                                    titleStyle={styles.menuText}
                                />
                                <Menu.Item
                                    onPress={() => { }}
                                    title="Link devices"
                                    titleStyle={styles.menuText}
                                />
                                <Menu.Item
                                    onPress={() => { }}
                                    title="Starred"
                                    titleStyle={styles.menuText}
                                />
                                <Menu.Item
                                    onPress={() => { }}
                                    title="Read all"
                                    titleStyle={styles.menuText}
                                />
                                <Menu.Item
                                    onPress={() => navigation.navigate('Settings')}
                                    title="Settings"
                                    titleStyle={styles.menuText}
                                />


                            </Menu>
                        </View>

                    </View>

                    <View style={styles.search}>
                        <EvilIcons name="search" size={24} color="white" />
                        <TextInput
                            placeholder="Ask Meta AI or Search"
                            placeholderTextColor={'white'}
                            inputMode="search"
                            scrollEnabled={false}
                            style={{ color: 'white', width: '100%' }}
                            showsHorizontalScrollIndicator={false} />

                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ marginVertical: 10, flex: 1 }}>
                            <FlatList
                                data={Data}
                                renderItem={messageStatusVIew}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                scrollEnabled={false}
                            />

                        </View>

                        <View style={{ marginTop: 10, gap: 15, paddingHorizontal: 10 }}>
                            <TouchableOpacity onPress={() => serArchivedModal(true)}
                                style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <MaterialCommunityIcons name="archive-arrow-down-outline" size={24} color="white" />
                                <Text style={{
                                    color: 'white', marginStart: 10
                                }}>
                                    Archived
                                </Text>
                            </TouchableOpacity>
                            <View style={{}}>
                                <FlatList
                                    data={MainChat}
                                    renderItem={MainChatView}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>
                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('SelectContact')}
                        style={{
                            backgroundColor: '#25D366', height: 55, width: 55,
                            borderWidth: 1, borderRadius: 10, position: 'relative',
                            top: 180, left: 390, alignItems: 'center', justifyContent: 'center'
                        }}>
                        <MaterialCommunityIcons name="message-plus-outline" size={24} color="black" />

                    </TouchableOpacity>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        {/* The Overlay/Backdrop */}
                        <TouchableOpacity
                            style={styles.centeredView}
                            activeOpacity={1}
                            onPressOut={() => setModalVisible(false)} // Dismiss when clicking outside
                        >
                            {/* Prevent closing when clicking inside the modal content */}
                            <TouchableWithoutFeedback>
                                <View>
                                    {selectedUser && (
                                        <ImageBackground
                                            source={selectedUser.img} // Uses the dynamic image
                                            style={styles.modalView}
                                        >
                                            {/* Header info */}
                                            <View style={styles.modalHeader}>
                                                <Text style={styles.modalHeaderText}>
                                                    {selectedUser.name}
                                                </Text>
                                            </View>

                                            {/* Bottom Action Row */}
                                            <View style={styles.modalActionRow}>
                                                <MaterialCommunityIcons name="message-text-outline" size={26} color="#25D366" />
                                                <MaterialCommunityIcons name="phone-outline" size={26} color="#25D366" />
                                                <MaterialCommunityIcons name="video-outline" size={26} color="#25D366" />
                                                <AntDesign name="info-circle" size={26} color="#25D366" />
                                            </View>
                                        </ImageBackground>
                                    )}
                                </View>
                            </TouchableWithoutFeedback>
                        </TouchableOpacity>
                    </Modal>

                    <Modal
                        visible={archivedModal}
                        onRequestClose={() => serArchivedModal(false)}>
                        <View style={{ flex: 1, backgroundColor: 'black', paddingHorizontal:10 }}>
                            <View style={{ height: 60, width: '100%', backgroundColor: 'black', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => serArchivedModal(false)}>
                                    <Ionicons name="arrow-back" size={30} color="white" />
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingHorizontal:5}}>
                                <FlatList
                                    data={MainChat}
                                    renderItem={MainChatView}
                                    keyExtractor={item => item.id} />
                            </View>
                        </View>

                    </Modal>

                    <CameraModal facing={'front'}
                        onClose={() => setShowCamera(false)}
                        visible={showCamera}
                    />



                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    search: {
        height: 50,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        paddingStart: 10,
        marginTop: 15,
        backgroundColor: '#2f2e2e',
    },


    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: { backgroundColor: '#F194FF' },
    buttonClose: { backgroundColor: '#2196F3' },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: { marginBottom: 15, textAlign: 'center' },
    centeredView: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        top: 200
    },
    modalView: {
        height: 300,
        width: 280,
        overflow: 'hidden', // Keeps child views inside border radius
        backgroundColor: '#1f2c34',
    },
    modalHeader: {
        height: 45,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    modalHeaderText: {
        color: 'white',
        fontSize: 20,
    },
    modalActionRow: {
        backgroundColor: '#1f2c34',
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    menuText: {
        color: 'white',
        fontSize: 16,
    }
})