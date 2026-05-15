import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image, Modal, ScrollView, } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { Menu, Divider, PaperProvider } from 'react-native-paper';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const Data = [
    {
        id: '1',
        Ionicons: 'call-outline',
        title: 'Call',
        location: 'navigation.navigate("SelectContact")',

    },
    {
        id: '2',
        MaterialCommunityIcons: 'calendar-month',
        title: 'Schedule',

    },
    {
        id: '3',
        MaterialCommunityIcons: 'apps',
        title: 'Keypad',

    },
    {
        id: '4',
        MaterialIcons: 'favorite-border',
        title: 'Favorites',
    },
]


const DataCall = [
    {
        id: '1',
        image: require('../assets/make1 (1).jpg'),
        name: 'Car Dealer',
        callin: 'Missed',
        time: '11:06 AM',
    },
    {
        id: '2',
        image: require('../assets/make1 (2).jpg'),
        name: 'Bullish',
        callin: 'Incoming',
        time: '11:09 AM',
    },
    {
        id: '3',
        image: require('../assets/make1 (3).jpg'),
        name: 'Bearish',
        callin: 'Missed',
        time: '11:15 AM',
    },
    {
        id: '4',
        image: require('../assets/make1 (4).jpg'),
        name: 'AMG',
        callin: 'Missed',
        time: '11:18 AM',
    },
    {
        id: '5',
        image: require('../assets/make1 (5).jpg'),
        name: 'URIS',
        callin: 'Incomming',
        time: '11:20 AM',
    },
    {
        id: '6',
        image: require('../assets/make1 (6).jpg'),
        name: 'Audi',
        callin: 'Incomming',
        time: '11:25 AM',
    },
    {
        id: '7',
        image: require('../assets/make1 (7).jpg'),
        name: 'Dodge',
        callin: 'Incomming',
        time: '12:00 PM',
    },
    {
        id: '8',
        image: require('../assets/make1 (8).jpg'),
        name: 'posh',
        callin: 'Incomming',
        time: '12:30 PM',
    },
    {
        id: '9',
        image: require('../assets/make1 (7).jpg'),
        name: 'ferrari',
        callin: 'Missed',
        time: '12:40 PM',
    },
    {
        id: '10',
        image: require('../assets/make1 (7).jpg'),
        name: 'BMW',
        callin: 'Incomming',
        time: '12:50 PM',
    },
]




const Calls = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const [modalVisible, setModalVisible] = useState(false);
    const handlePress = (id, screen) => {
        console.log('Pressed item with id:', id);
        if (id === '1') {
            navigation.navigate('SelectContact');
        } else if (id === '2') {
            setModalVisible(true);
        } else {
            // Handle other cases if needed
        }
    };

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Menu
                            visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                                <TouchableOpacity onPress={(openMenu)}>
                                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                                </TouchableOpacity>
                            }
                            contentStyle={{ backgroundColor: "white", width: "170%", height: 80, borderRadius: 15, marginTop: 30, }}
                        >

                            <Menu.Item
                                title="Edit"
                                onPress={() => { }}
                                trailingIcon="pencil"
                                style={{ height: 30, justifyContent: "center", }}
                            />

                            <Divider />

                            <Menu.Item trailingIcon="calendar"
                                onPress={() => { }}
                                title="Schedule"
                                style={{}}
                            />

                        </Menu>
                        <TouchableOpacity onPress={() => navigation.navigate('SelectContact')}>
                            <Entypo name="circle-with-plus" size={24} color="green" />
                        </TouchableOpacity>

                    </View>
                    <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", }}>Calls</Text>

                    <View style={{
                        width: "95%", height: 42, backgroundColor: "'rgba(255, 255, 255, 0.5)'", alignItems: "center", borderRadius: 10, flexDirection: "row",
                        marginHorizontal: 10, gap: 5, paddingHorizontal: 10,
                    }}>
                        <EvilIcons name="search" size={24} color="white" />
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"black"}
                            style={{ fontSize: 20, flex: 1, }}
                            returnKeyType='search'
                        />
                    </View>
                    <View>
                        <FlatList
                            data={Data}
                            renderItem={({ item }) => (<TouchableOpacity style={{ gap: 8, margin: 10, paddingHorizontal: 8, }}>
                                <View style={styles.callicons}>

                                    {/* Call Icon */}
                                    <TouchableOpacity onPress={() => handlePress(item.id,)}
                                        style={{ position: 'absolute', bottom: 0, top: 0, right: 0, left: 0, justifyContent: "center", alignItems: "center" }}>

                                        {item.Ionicons ?
                                            (<Ionicons name={item.Ionicons} size={24} color="white" />) :
                                            item.MaterialIcons ?
                                                (<MaterialIcons name={item.MaterialIcons} size={24} color="black" />) :
                                                (<MaterialCommunityIcons name={item.MaterialCommunityIcons} size={24} color="black" />)
                                        }
                                    </TouchableOpacity>

                                </View>
                                < View style={styles.calltitle}>
                                    <Text style={styles.callBartext}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>)}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>

                    <Text style={{ color: "white", fontSize: 18, }}>Recent</Text>


                    <View style={{ flex: 1 }}>
                        <FlatList
                            data={DataCall}
                            renderItem={({ item }) => (<TouchableOpacity
                                onPress={() => navigation.navigate('Dailycall')}
                                style={styles.callContainer}>

                                <Image source={item.image}
                                    style={styles.imageCall} />


                                {/* Second General View*/}
                                <View style={styles.content}>
                                    <View style={{ gap: 5 }}>
                                        <Text style={styles.nameCall}>{item.name}</Text>
                                        <View style={{ flexDirection: "row", gap: 10, }}>
                                            <SimpleLineIcons name="call-in" size={15} color="gray" />
                                            <Text style={styles.textcallin}>{item.callin}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: -10, gap: 10 }}>
                                        <Text style={styles.time}>{item.time}</Text>
                                        <TouchableOpacity>
                                            <MaterialIcons name="info-outline" size={20} color="gray" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </TouchableOpacity>)}
                            keyExtractor={item => item.id}
                        />

                    </View>

                    <Modal visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                        animationType="slide"
                        presentationStyle="pageSheet"
                        transparent={true}>
                            <View style={{ flex: 1, backgroundColor: "#0b141a", paddingTop: 60, padding: 20, gap: 20, borderTopLeftRadius: 22, borderTopRightRadius: 22, }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                                    <TouchableOpacity   onPress={() => setModalVisible(false)}>
                                        <Text style={{ fontSize: 21, color: "white" }}>
                                            Cancel
                                        </Text>
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 21, color: "white", fontWeight: "bold" }}>
                                        Schedule a call
                                    </Text>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 21, color: "white" }}>
                                            Next
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: "100%", height:180, backgroundColor: "darkgray", borderRadius: 10, padding: 15, gap: 10,
                                    overflow:"hidden"
                                 }}>
                                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: "gray", paddingBottom: 10, }}>
                                        <Text>De King's Call</Text>
                                    </View>
                                
                                        <TextInput
                                            placeholder="Add description(optional)"
                                            placeholderTextColor={"black"}
                                            multiline={true}
                                            style={{ fontSize: 15,  textAlignVertical: "top", flex:1 }}
                                        />
                                  
                                    <View style={{ alignItems: "flex-end", }}>
                                        <Text>2048</Text>
                                    </View>
                                </View>

                                <View style={{
                                    width: "100%", height: "25%",
                                    backgroundColor: "darkgray", borderRadius: 10, padding: 15, gap: 20, marginTop: 10,
                                }}>
                                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: "gray", paddingBottom: 10, }} >
                                        <Text style={{ fontSize: 17 }}>Starts</Text>
                                    </View>
                                    <View style={{ borderBottomWidth: 0.5, borderBottomColor: "gray", paddingBottom: 10, }}>
                                        <Text style={{ fontSize: 17 }}>Ends</Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 17 }}>
                                            Include end time
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 15, color: "gray" }}>
                                        Event with cal links can't be more than one year in {"\n"}the future.
                                    </Text>
                                </View>
                                <TouchableOpacity style={{  width: "100%", height: 40, backgroundColor: "darkgray", justifyContent: "center", borderRadius: 10, padding: 10 }}>
                                    <Text style={{ fontSize: 17, color: "white" }}>
                                        Call type
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: "100%", height: 40, backgroundColor: "darkgray", justifyContent: "center", borderRadius: 10, padding: 10 }}>
                                    <Text style={{ fontSize: 17, color: "white" }}>
                                        Reminder
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 15, color: "gray" }}>
                                        Guests also get notified at the time of the event.
                                    </Text>
                                </View>
                            </View>
                    </Modal>

                </SafeAreaView >
            </SafeAreaProvider >
        </PaperProvider>
    )
}

export default Calls

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
        paddingTop: 10,
        padding: 10,
        gap: 15,
    },
    callicons: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "gray",
        // justifyContent: "center",
        // alignItems: "center",
    },
    callBartext: {
        color: "white",
        fontSize: 18,
    },
    calltitle: {
        alignItems: "center"
    },

    callContainer: {
        marginTop: 15,
        flexDirection: "row",
        gap: 18,
        marginBottom: 10,

    },
    imageCall: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    nameCall: {
        color: "red",
        fontSize: 18,
    },
    textcallin: {
        fontSize: 15,
        color: "gray"
    },
    time: {
        color: "gray",
    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 53,
        borderBottomWidth: 0.5,
        borderBottomColor: "gray"
    },
})

