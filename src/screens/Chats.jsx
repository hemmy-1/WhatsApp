import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


export default function chats() {
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

    // const email = 'emocakll@gmail.com';
    // const password = '232@menmmee';

    const MainChat = [
        {
            id: '1',
            name: 'Emmanuel',
            message: 'welcome to this chat',
            time: '10:10',
           
        },
        {
            id: '2',
            name: 'Enoch',
            message: 'welcome to this chat',
            time: '10:10'

        },
        {
            id: '3',
            name: 'Owooluwa',
            message: 'welcome to this chat',
            time: '10:10'
        },
        {
            id: '4',
            name: 'David',
            message: 'welcome to this chat',
            time: '10:10'
        },
        {
            id: '5',
            name: 'Gbenga',
            message: 'welcome to this chat',
            time: '10:10'
        },
        {
            id: '6',
            name: 'Daniel',
            message: 'welcome to this chat',
            time: '10:10'
        },
    ]
    const MainChatView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('messages',{MainChat:item} )} style={{
                flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', marginBottom: 20
            }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
                    <Image source={require('../assets/myimage.png')}
                        style={{ height: 55, width: 55, borderRadius: 50 }} />

                    <View>
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

                <View>
                    <Text style={{
                        color: '#888',
                        fontSize: 12,
                    }}>
                        {item.time}
                    </Text>

                </View>

                

            </TouchableOpacity>

        )
    }




    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <View style={{
                    justifyContent: 'space-between', flexDirection: 'row',
                    alignContent: 'center', alignItems: 'center'
                }}>
                    <View>
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 800 }}>
                            WhatsApp
                        </Text>
                    </View>


                    <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                        <EvilIcons name="camera" size={30} color="white" />
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </View>

                </View>

                <View style={styles.search}>
                    <EvilIcons name="search" size={24} color="white" />
                    <TextInput
                        placeholder="Ask Meta AI or Search"
                        placeholderTextColor={'white'}
                        inputMode="search" />

                </View>

                <View>
                    <FlatList
                        data={Data}
                        renderItem={messageStatusVIew}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />

                </View>

                <View style={{ marginTop: 10, gap: 15, paddingHorizontal: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialCommunityIcons name="archive-arrow-down-outline" size={24} color="white" />
                        <Text style={{
                            color: 'white', marginStart: 10
                        }}>
                            Archived
                        </Text>
                    </View>
                    <View>
                        <FlatList
                            data={MainChat}
                            renderItem={MainChatView}
                            keyExtractor={item => item.id} />
                    </View>







                </View>







            </SafeAreaView>
        </SafeAreaProvider>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 10,
        paddingHorizontal: 5
    },
    search: {
        height: 50,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5,
        paddingStart: 10,
        marginTop: 10,
        backgroundColor: '#2f2e2e'
    }
})