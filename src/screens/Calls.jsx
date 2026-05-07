import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
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



const Data = [
    {
        id: '1',
        icons: 'call-outline',
        title: 'Call',
    },
    {
        id: '2',
        icons: 'schedule',
        title: 'Schedule',
    },
    {
        id: '3',
        icons: '',
        title: 'Keypad',
    },
    {
        id: '4',
        icons: '',
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


    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Menu 
                        visible={visible}
                            onDismiss={closeMenu}
                            anchor={
                                <TouchableOpacity  onPress={(openMenu) }>
                                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                                    </TouchableOpacity>
                                }
                                contentStyle={{backgroundColor:"white",width:"170%",height:80,borderRadius:15,marginTop:30,}}
                                >
                                    <Menu.Item 
                                    title="Edit"
                                    onPress={() => {}}  
                                    leadingIcon="pencil"
                                    style={{ height:30, }}
                                     />

                                    <Divider />

                                    <Menu.Item leadingIcon="calendar"
                                     onPress={() => { }} 
                                     title="Schedule"
                                        style={{ }} 
                                        />
                        </Menu>
                        <TouchableOpacity>
                            <Entypo name="circle-with-plus" size={24} color="green" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "white", fontSize: 32, fontWeight: "bold", }}>Calls</Text>

                    <View style={{
                        width: "95%", height: 32, backgroundColor: "'rgba(255, 255, 255, 0.5)'", alignItems: "center", borderRadius: 10, flexDirection: "row",
                        paddingHorizontal: 10, gap: 5
                    }}>
                        <EvilIcons name="search" size={24} color="white" />
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={"black"}
                            style={{ fontSize: 18, flex: 1, }}
                            returnKeyType='search'
                        />
                    </View>
                    <View>
                        <FlatList
                            data={Data}
                            renderItem={({ item }) => (<TouchableOpacity onPress={() => navigation.navigate('Dailycall')} style={{ gap: 8, margin: 10, paddingHorizontal: 8, }}>
                                <View style={styles.callicons}>
                                    <Ionicons name={item.icons} size={24} color="white" />
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

                                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: -10, }}>
                                        <Text style={styles.time}>{item.time}</Text>
                                        <TouchableOpacity>
                                            <MaterialIcons name="info-outline" size={24} color="gray" />
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </TouchableOpacity>)}
                            keyExtractor={item => item.id}
                        />

                    </View>
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
        justifyContent: "center",
        alignItems: "center",
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
        borderBottomWidth: 1,
        borderBottomColor: "gray"
    },
})

