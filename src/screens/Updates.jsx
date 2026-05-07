import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity, } from "react-native";
import { SafeAreaProvider, SafeAreaView, } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

const DATA = [
    {
        id: '1',
        image: require('../assets/myimage.png'),
        title: 'EnochDmc',
        time: '31 minutes ago',
    },

    {
        id: '2',
        image: require('../assets/everything.jpg'),
        title: 'Mr ibrahm',
        time: '10 minutes ago',
    },

    {
        id: '3',
        image: require('../assets/make1 (1).jpg'),
        title: 'mark',
        time: '8 minutes ago',
    },


    {
        id: '4',
        image: require('../assets/make1 (2).jpg'),
        title: 'vic',
        time: '20 minutes ago',
    },


    {
        id: '5',
        image: require('../assets/make1 (3).jpg'),
        title: 'john',
        time: '15 minutes age',
    },


    {
        id: '6',
        image: require('../assets/make1 (4).jpg'),
        title: 'Davide',
        time: '11 minutes age',
    },


    {
        id: '7',
        image: require('../assets/make1 (5).jpg'),
        title: 'Gbegan',
        time: '12 minutes age',
    },


    {
        id: '8',
        image: require('../assets/make1 (6).jpg'),
        title: 'Emmanuel',
        time: '30 minutes age',
    },


    {
        id: '9',
        image: require('../assets/make1 (7).jpg'),
        title: 'Owooluwa',
        time: '1 minutes age',
    },
]


export default function Updates() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <View>
                        <Text style={{ fontSize: 40, color: 'white', }}>
                            Updates
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', gap: 20, }}>
                        <EvilIcons name="search" size={24} color="white" />
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </View>
                </View>

                <View style={{
                    width: "95%", height: 50, backgroundColor: "#0a332b",
                    borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row", gap: 20,
                }}>

                    <View>
                        <Ionicons name="megaphone" size={24} color="black" />
                    </View>


                    <Text style={{ color: 'white', fontSize: 11, letterSpacing: 0.5, }}>
                        Discover more with relevant ads only in Status &{'\n'}Channels.
                        <Text style={{ color: "green", }}>
                            See details and updated terms
                        </Text>
                    </Text>
                    <View>
                        <Entypo name="cross" size={24} color="white"
                        />
                    </View>
                </View>

                <Text style={{ color: "white", fontSize: 18, }}>Status</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <View>
                        <Image source={require('../assets/myimage.png')}
                            style={{ width: 50, height: 50, borderRadius: 50, }}
                        />

                    </View>
                    <Entypo name="circle-with-plus" size={24} color="green" />

                    <View>
                        <Text style={{ color: 'white', }}>Add status</Text>
                        <Text style={{ color: 'white', fontSize: 10 }}>Disappears after 24 hours</Text>
                    </View>
                </View>
                <Text style={{ color: "white", fontSize: 12, }}>Recent updates</Text>

                
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (<TouchableOpacity style={styles.statusContainer}>
                            <Image source={item.image}
                                style={styles.imageStatus}
                            />
                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.title}>{item.time}</Text>
                            </View>
                        </TouchableOpacity>)}
                        keyExtractor={item => item.id}
                    />
                </View>


            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
        paddingTop: 10,
        padding: 10,
        gap: 10,

    },
    statusContainer: {

        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 15,


    },
    title: {
        color: 'white',
        fontSize: 10
    },

    imageStatus: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
});
