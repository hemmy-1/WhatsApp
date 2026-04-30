import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

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
]
const Calls = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                    <Entypo name="dots-three-horizontal" size={24} color="white" />
                    <Entypo name="circle-with-plus" size={24} color="green" />
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
                        renderItem={({ item }) => (<TouchableOpacity style={{ gap: 8, margin: 10, paddingHorizontal: 8, }}>
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


                <View>
                    <FlatList
                        data={DataCall}
                        renderItem={({ item }) => (<TouchableOpacity>
                            <View style={styles.callContainer}>
                                <Image source={item.image}
                                    style={styles.imageCall} />
                            </View>

                            {/* Second General View*/}
                            <View>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={styles.nameCall}>{item.name}</Text>
                                    <View>
                                        <SimpleLineIcons name="call-in" size={24} color="white" />
                                        <Text style={styles.textcallin}>{item.callin}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>)}
                        keyExtractor={item => item.id}
                    />
                </View>

            </SafeAreaView >
        </SafeAreaProvider >
    )
}

export default Calls

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1014',
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
    textcallin:{
        fontSize:15,
        color:"gray"
    },
})

