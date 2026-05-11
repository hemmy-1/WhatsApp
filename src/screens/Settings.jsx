import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export default function Settings() {

  const navigation = useNavigation()

  const Data = [
    {
      id: '1',
      name: 'Account',
      note: 'Secrity notification, change number',
      Ionicons: 'key-outline'
    },
    {
      id: '2',
      name: 'Privacy',
      note: 'Blocked account, dissappear message',
      Ionicons: 'lock-closed-outline'
    },
    {
      id: '3',
      name: 'Lists',
      note: 'Manage people and groups',
      Ionicons: 'people-outline'
    },
    {
      id: '4',
      name: 'Chats',
      note: 'Theme, wallpapper, chat history',
      Ionicons: 'chatbubble-outline'
    },
    {
      id: '5',
      name: 'Notification',
      note: 'Messagem group & call tones',
      Ionicons: 'notifications-outline'
    },
    {
      id: '6',
      name: 'Storage and data',
      note: 'Network usage, auto-download',
      Ionicons: 'pie-chart-outline'
    },
    {
      id: '7',
      name: 'Accessibility',
      note: 'Increase Contrast, animation',
      Ionicons: 'accessibility-outline'
    },
    {
      id: '8',
      name: 'App language',
      note: 'English (device language)',
      Ionicons: 'globe-outline'

    },
    {
      id: '9',
      name: 'Help and feedback',
      note: 'Help center, contact us, privacy policy',
      Ionicons: 'help-circle-outline'
    },
    {
      id: '10',
      name: 'Invite a friend',
      Ionicons: 'people-outline'

    },
    {
      id: '11',
      name: 'App updates',
      Ionicons: 'phone-portrait-outline'
    },
  ]

  const DataView = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={{
          flexDirection: 'row', gap: 30, marginTop: 30,
          paddingHorizontal: 20, alignItems: 'center', flex: 1
        }}>
          <Ionicons name={item.Ionicons} color="white" size={24} />

          <View>
            <Text style={{ color: 'white', fontSize: 18 }}>
              {item.name}
            </Text>
            <Text style={{ color: 'white', fontSize: 16, color: '#888' }}>
              {item.note}
            </Text>
          </View>

        </View>

      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={{
          height: 60, width: '100%',
          flexDirection: 'row', justifyContent: 'space-between',
          alignItems: 'center', paddingHorizontal: 15
        }}>
          <View style={{
            flexDirection: 'row', alignItems: 'center', gap: 10
          }}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Settings</Text>
          </View>

          <EvilIcons name="search" size={30} color="white" />

        </View>

        <ScrollView  >


          <View style={{
            width: '100%', borderBottomColor: '#88888844',
            borderTopColor: '#88888844', paddingVertical: 20,
            borderTopWidth: 0.5, borderBottomWidth: 0.5, justifyContent: 'space-between',
            paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center',
          }}>

            <View style={{ flexDirection: 'row', gap: 20 }}>

              <View>

                <Image source={require('../assets/por.png')}
                  style={{ height: 60, width: 60, borderRadius: 50 }} />
              </View>
              <View>
                <Text style={{ color: 'white', fontSize: 20 }}>
                  (Unknown)
                </Text>
                <View style={{
                  height: 25, width: 100, borderWidth: 1, borderColor: '#888888', borderRadius: 10,
                  marginTop: 5, justifyContent: 'center', alignItems: 'center'
                }}>

                  <Text style={{ color: '#888' }}>
                    Unknown
                  </Text>
                </View>

              </View>

            </View>

            <View style={{ flexDirection: 'row', gap: 15 }}>
              <Ionicons name="qr-code-outline" size={25} color="white" />
              <Ionicons name="add-circle-outline" size={25} color="#25D366" />

            </View>
          </View>

          <View style={{ flex: 1 }}>

            <FlatList
              data={Data}
              renderItem={DataView}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>

          <TouchableOpacity style={{
            height: 120, width: '100%', borderBottomColor: '#88888844',
            borderTopColor: '#88888844',
            borderTopWidth: 0.5, borderBottomWidth: 0.5,
            paddingHorizontal: 20, flexDirection: 'column', alignContent: 'center',
            justifyContent: 'center'
          }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

              <FontAwesome6 name="meta" size={20} color="white" />
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                Meta
              </Text>
            </View>
            <Text style={{ color: 'white', fontSize: 18 }}>Accounts Center</Text>
            <Text style={{ color: '#888', fontSize: 16 }}>Control your experience across whatsApp, Instagram and more</Text>
          </TouchableOpacity>



          <View style={{ paddingHorizontal: 15, gap:30, marginTop:20 }}>
            <Text style={{ color: '#888', fontSize: 16 }}>Also from Meta</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>


              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{
                  height: 60, width: 60, backgroundColor: '#0c1821', justifyContent: 'center',
                  alignItems: 'center', borderRadius: 30
                }}>
                  <Entypo name="instagram" size={25} color="white" />
                </View>
                <Text style={{ color: '#888', fontSize: 16 }}>Instagram</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{
                  height: 60, width: 60, backgroundColor: '#0c1821', justifyContent: 'center',
                  alignItems: 'center', borderRadius: 30
                }}>
                  <FontAwesome5 name="facebook" size={25} color="white" />
                </View>
                <Text style={{ color: '#888', fontSize: 16 }}>Facebook</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{
                  height: 60, width: 60, backgroundColor: '#0c1821', justifyContent: 'center',
                  alignItems: 'center', borderRadius: 30
                }}>
                  <FontAwesome6 name="threads" size={25} color="white" />
                </View>
                <Text style={{ color: '#888', fontSize: 16 }}>Threads</Text>
              </TouchableOpacity>


              <TouchableOpacity style={{alignItems:'center'}}>
                <View style={{
                  height: 60, width: 60, backgroundColor: '#0c1821', justifyContent: 'center',
                  alignItems: 'center', borderRadius: 30
                }}>
                  <FontAwesome6 name="meta" size={25} color="white" />
                </View>
                <Text style={{ color: '#888', fontSize: 16 }}>Meta AI App</Text>
              </TouchableOpacity>





            </View>
          </View>


          <View style={{ height: 50 }} />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b141a'
  },
  headcontainer: {

  }
})