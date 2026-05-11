import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SectionList } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';






export default function Communities() {


  const navigation = useNavigation()
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);


  const CommunityList = [
    {
      title: 'FENG 🎓',
      titleimg: require('../assets/eng.png'),
      data: [
        {
          id: '1', name: 'Announcements', note: 'this is an important information', time: '11:11', img: require('../assets/announ.png')
        },
        {
          id: '2', name: '400 LEVEL FENG 🎓', note: '+234 567 890 0987:  Okay', time: '11:11', img: require('../assets/bmw.jpg')
        },
        {
          id: '4', name: 'FENG 🎓', note: '+234 567 890 0987:  We are about to start', time: '11:11', img: require('../assets/arsss.jpg')
        }
      ]
    },
    {
      title: 'FENG 🎓',
      titleimg: require('../assets/eng.png'),
      data: [
        {
          id: '5', name: 'Announcements', note: 'this is an important information', time: '11:11', img: require('../assets/announ.png')
        },
        {
          id: '6', name: '400 LEVEL FENG 🎓', note: '+234 567 890 0987:  Okay', time: '11:11', img: require('../assets/bmw.jpg')
        },
        {
          id: '7', name: 'FENG 🎓', note: '+234 567 890 0987:  We are about to start', time: '11:11', img: require('../assets/arsss.jpg')
        }
      ]
    },
    {
      title: 'FENG 🎓',
      titleimg: require('../assets/eng.png'),
      data: [
        {
          id: '8', name: 'Announcements', note: 'this is an important information', time: '11:11', img: require('../assets/announ.png')
        },
        {
          id: '9', name: '400 LEVEL FENG 🎓', note: '+234 567 890 0987:  Okay', time: '11:11', img: require('../assets/bmw.jpg')
        },
        {
          id: '10', name: 'FENG 🎓', note: '+234 567 890 0987:  We are about to start', time: '11:11', img: require('../assets/arsss.jpg')
        }
      ]
    },
  ]

  const CommunityView = ({ item }) => {

  }



  const renderSectionHeader = ({ section }) => (
    <View>

      <View style={{
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center', marginTop: 20
      }}>
        <Image source={section.titleimg} style={{
          width: 40, height: 40, marginRight: 10
        }} />
        <Text style={{
          color: '#ffffff', fontSize: 16, fontWeight: 'bold',
        }}>{section.title}</Text>
      </View>
      <Divider style={{ backgroundColor: '#4e5558' }} />
    </View>
  );

  // Component for the Row
  const renderItem = ({ item }) => (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>

      <Image source={item.img} style={{
        width: 40, height: 40, borderRadius: 5, marginRight: 15,
      }} />
      <View>

        <View style={{ flexDirection: 'row', width: '94%', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontSize: 16, }}>{item.name}</Text>
          <Text style={{ color: 'white', fontSize: 14, }}>{item.time}</Text>
        </View>

        <Text style={{ color: '#888', fontSize: 14 }}>{item.note}</Text>
      </View>


    </TouchableOpacity>
  );
  const renderSectionFooter = () => (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: 0.5,
        borderTopColor: '#202c33' // Subtle line above the button
      }}
    >
      <View style={{ width: 40, alignItems: 'center', marginRight: 15 }}>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="#8696a0" />
      </View>
      <Text style={{ color: '#8696a0', fontSize: 16 }}>View all</Text>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>

      <SafeAreaProvider>
        <SafeAreaView style={styles.mainContainer}>
          <View style={{
            height: '100%', width: '100%',
            flex: 0.10, flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <Text style={{ fontSize: 25, color: 'white', fontWeight: 800 }}>Communities</Text>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              contentStyle={{
                backgroundColor: '#1f2c34',
                width: 200, borderRadius: 12, marginTop: 30, marginRight: 10,
              }}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Entypo name="dots-three-vertical" size={24} color="white" />
                </TouchableOpacity>
              }
            >
              <Menu.Item
                title="Settings"
                titleStyle={{ color: 'white' }}
                onPress={() => navigation.navigate('Settings')}
              />
            </Menu>
          </View>



          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 20 }}>
            <View style={{
              height: 50, width: 50, borderRadius: 10, backgroundColor: '#25D366',
              alignItems: 'center', justifyContent: 'center',
            }}>
              <MaterialCommunityIcons name="account-multiple-plus" size={22} color="#fff" />


            </View>
            <Text style={{ color: 'white', fontSize: 16 }}> new community</Text>
          </View>


          <View style={{flex:1}}>

            <SectionList
              sections={CommunityList}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              // Add this line
              renderSectionFooter={renderSectionFooter}
              // This removes the gap between sections so they look like one list
              SectionSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#1f2c34' }} />}
            />

          </View>

        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0b141a', // WhatsApp-style dark background
    paddingHorizontal: 15
  },
});