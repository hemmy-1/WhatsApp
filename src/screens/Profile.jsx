import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Switch } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function Profile({ route }) {


    const [moreVisible, setMoreVisible] = useState(false);
    const openMoreMenu = () => setMoreVisible(true);
    const closeMoreMenu = () => setMoreVisible(false);
    const [endable, isEnabled] = useState('')

    const toggleSwitch = () => {
        setType(current => (current === 'front' ? 'back' : 'front'));
    };
    const [type, setType] = useState('front');

    const navigation = useNavigation()
    const { MainChat } = route.params


    const Data = [
        {
            id: '1',
            img: require('../assets/vic.png')
        },
        {
            id: '2',
            img: require('../assets/por.png')
        },
        {
            id: '3',
            img: require('../assets/updates.png')
        },
        {
            id: '4',
            img: require('../assets/bat.png')
        },
        {
            id: '5',
            img: require('../assets/ars.png')

        },
        {
            id: '6',
            img: require('../assets/arss.png')
        },
        {
            id: '7',
            img: require('../assets/arsss.jpg')
        },
        {
            id: '8',
            img: require('../assets/bmw.jpg')
        },
        {
            id: '9',
            img: require('../assets/make1 (3).jpg')
        },
        {
            id: '10',
            img: require('../assets/meme.png')
        },
        {
            id: '11',
            img: require('../assets/myimage.png')
        },
    ]


    const Data2 = [
        {
            id: '1',
            name: 'Manage Storage',
            note: '200.1 MB',
            Ionicons: "images-outline"
        },
        {
            id: '2',
            name: 'Notification',
            Ionicons: "notifications-outline"
        },
        {
            id: '3',
            name: 'Media visibility',
            note: '200.1 MB',
            Ionicons: "image-outline"
        },
        {
            id: '4',
            name: 'Encryption',
            note: 'Message and calls are end-to-end encrypted. Tap to verify',
            Ionicons: "lock-closed-outline"
        },
        {
            id: '5',
            name: 'Disappering meddages',
            note: '200.1 MB',
            Ionicons: "timer-outline"
        },
        {
            id: '6',
            name: 'Chat lock',
            note: 'Lock and hide this chat on this device',
            MaterialCommunityIcons: "message-text-lock",

        },
        {
            id: '7',
            name: 'Advance chat privacy',
            note: 'off',
            Ionicons: "shield-outline"
        },
        {
            id: '8',
            name: 'Transcripts',
            note: 'English',
            Ionicons: "document-text-outline"
        },
    ]

    const Data2View = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row', marginTop: 25, gap: 40, marginStart: 10,
                alignItems: 'center'
            }}>
                {item.Ionicons ? (<Ionicons name={item.Ionicons} size={22} color="#fff" />) :
                    (<MaterialCommunityIcons name={item.MaterialCommunityIcons} size={22} color="#fff" />
                    )}
                <View style={{ flexDirection: 'column' }}>

                    <Text style={{ color: 'white', fontSize: 16 }}>{item.name}</Text>
                    <Text style={{ color: '#888', fontSize: 14 }}>{item.note}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    const Groups = [
        {
            id: '1',
            name: 'Create group with',
            Ionicons: 'people'
        },
        {
            id: '2',
            name: 'Add to groups',
            note: 'Add this contacts to groups you are in.',
            MaterialCommunityIcons: "account-multiple-plus" 
        },
        {
            id: '3',
            name: 'Add to Favourites',
            MaterialIcons: "favorite-border"
        },
        {
            id: '4',
            name: 'Add to list',
            MaterialCommunityIcons: "playlist-plus"
        },
        {
            id: '5',
            name: 'Clear chat',
            Ionicons: "remove-circle-outline"
        },
        {
            id: '6',
            name: 'Block',
            MaterialCommunityIcons: "block-helper",
            color: '#FF5252'
        },
        {
            id: '7',
            name: 'Report',
            MaterialCommunityIcons: "thumb-down-outline",
            color: '#FF5252'
        },
    ]

    const GroupView = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row', marginTop: 25, gap: 40, marginStart: 10,
                alignItems: 'center' }}>

                    {item.Ionicons ?
                        (<Ionicons name={item.Ionicons} size={22} color="#fff" />) 
                        : item.MaterialCommunityIcons ? 
                        ( <MaterialCommunityIcons name={item.MaterialCommunityIcons} size={22} style={{color: item.color || "#ffffff"}} />) 
                        : (<MaterialIcons name={item.MaterialIcons} size={24} style={{color: item.color || "#ffffff"}} />)}
                    <Text style={{ color: item.color || 'white', fontSize: 16 }}>
                        {item.name}
                    </Text>
            </TouchableOpacity>



        )
    }


    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container1}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.headerRow}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back" size={30} color="white" />
                            </TouchableOpacity>


                            <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, gap: 5 }}>

                                <Image source={MainChat.img}
                                    style={{ height: 120, width: 120, borderRadius: 100 }} />
                                <Text style={styles.userName}>{MainChat.name}</Text>
                                <Text style={{
                                    color: 'white', fontSize: 18,
                                    fontWeight: '300'
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

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, }}>
                            <TouchableOpacity onPress={()=> navigation.navigate('Dailycall')}
                            style={{
                                height: 65, width: 140,
                                borderWidth: 1, borderColor: '#ffffff46',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Ionicons name="call-outline" size={24} color="#25D366" />
                                <Text style={{ color: 'white' }}>
                                    Audio
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 65, width: 140,
                                borderWidth: 1, borderColor: '#ffffff46',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Ionicons name="videocam-outline" size={30} color="#25D366" />
                                <Text style={{ color: 'white' }}>
                                    Video
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                height: 65, width: 140,
                                borderWidth: 1, borderColor: '#ffffff46',
                                borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <EvilIcons name="search" size={24} color="#25D366" />
                                <Text style={{ color: 'white' }}>
                                    Search
                                </Text>

                            </TouchableOpacity>
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingHorizontal: 15,
                            marginTop: 40
                        }}>
                            <Text style={{ color: '#888', fontSize: 16 }}>Media, links, and docs</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#888', marginRight: 5 }}>127</Text>
                                <Entypo name="chevron-right" size={20} color="#888" />
                            </View>
                        </View>


                        <View>
                            <FlatList
                                data={Data}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ paddingLeft: 15, paddingVertical: 10 }}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={{ marginRight: 10 }}>
                                        <Image
                                            source={item.img}
                                            style={{
                                                width: 100,
                                                height: 100,
                                                borderRadius: 10,
                                                backgroundColor: '#2f2e2e'
                                            }}
                                        />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>

                        <View>
                            <FlatList
                                data={Data2}
                                renderItem={Data2View}
                                keyExtractor={item => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{ color: '#888', fontSize: 14 }}> No groups in common</Text>
                            <FlatList
                                data={Groups}
                                renderItem={GroupView}
                                keyExtractor={item => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />







                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>











    )
};



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#0b141a',
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