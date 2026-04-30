import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function messages({ route }) {

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const navigation = useNavigation()
  const { MainChat } = route.params
  // console.log("The message is", MainChat.message)


  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container1}>

          <View style={styles.headerRow}>

            <View style={{
              flexDirection: 'row', alignItems: 'center',
              gap: 10
            }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={35} color="white" />
              </TouchableOpacity>
              <Image source={require('../assets/myimage.png')}
                style={{ height: 45, width: 45, borderRadius: 40 }} />
              <Text style={styles.userName}>{MainChat.name}</Text>
            </View>

            {/* Right Side: Menu Trigger */}
            <View style={styles.rightHeader}>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <TouchableOpacity onPress={openMenu} style={styles.menuAnchor}>
                    <Ionicons name="call-outline" size={24} color="white" />
                    <Ionicons name="caret-down" size={12} color="white" style={{ marginLeft: 2 }} />
                  </TouchableOpacity>
                }
                contentStyle={styles.menuContent}
              >
                <Menu.Item
                  leadingIcon="phone-outline"
                  onPress={() => { }}
                  title="Voice call"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  leadingIcon="video-outline"
                  onPress={() => { }}
                  title="Video call"
                  titleStyle={styles.menuText}
                />
                <Divider style={styles.divider} />
                <Menu.Item
                  leadingIcon="link"
                  onPress={() => navigation.navigate('Updates')}
                  title="Send call link"
                  titleStyle={styles.menuText}
                />
              </Menu>

              {/* Optional: Vertical dots for other settings */}
              <Ionicons name="ellipsis-vertical" size={22} color="white" style={{ marginLeft: 15 }} />
            </View>




          </View>

        </SafeAreaView>




        <ImageBackground
          source={require('../assets/background.jpg')}
          resizeMode="cover"
          style={styles.container2}>

          <View style={{
            height: 60, width: '95%', backgroundColor: 'black',
            alignSelf: ""
          }}>

            <View style={{ height: 40, width: 100, }}>
              <Text style={{color:"white", fontSize:35}}>{MainChat.time}</Text>
            </View>



          </View>





        </ImageBackground>


      </SafeAreaProvider>
    </PaperProvider>











  )
};



const styles = StyleSheet.create({
  container1: {
    flex: 0.09,
    backgroundColor: 'black',
    paddingHorizontal: 10,

  },
  container2: {
    flex: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 10

  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: 18,
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
  }
});