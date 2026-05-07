import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Menu, PaperProvider, Divider } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';


export default function Messages({ route }) {

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const [moreVisible, setMoreVisible] = useState(false);
  const openMoreMenu = () => setMoreVisible(true);
  const closeMoreMenu = () => setMoreVisible(false);



  const navigation = useNavigation()
  const { MainChat } = route.params


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
              <TouchableOpacity>
                <Image source={MainChat.img}
                  style={{ height: 45, width: 45, borderRadius: 40 }} />
              </TouchableOpacity>
            </View>




            <TouchableOpacity onPress={()=> navigation.navigate('Profile', {MainChat})}
            style={{
              height: '100%', width: '50%',
              justifyContent: 'center', backgroundColor: 'black'
            }}>
              <Text style={styles.userName}>{MainChat.name}</Text>
            </TouchableOpacity>




            <View style={styles.rightHeader}>
              <TouchableOpacity>
                <Ionicons name="videocam-outline" size={30} color="white"
                  style={{ marginRight: 15 }} />
              </TouchableOpacity>
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
                  onPress={() => navigation.navigate('Dailycall')}
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
                  title="View Contact"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  onPress={() => { }}
                  title="Search"
                  titleStyle={styles.menuText}
                />
                <Divider style={styles.divider} />
                <Menu.Item
                  onPress={() => navigation.navigate('Updates')}
                  title="Report"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  onPress={() => { }}
                  title="Mute notification"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  onPress={() => { }}
                  title="Disappearing message"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  onPress={() => { }}
                  title="Chat Theme"
                  titleStyle={styles.menuText}
                />
                <Menu.Item
                  onPress={() => navigation.navigate('Updates')}
                  title="More"
                  titleStyle={styles.menuText}
                />
              </Menu>

            </View>




          </View>

        </SafeAreaView>




        <ImageBackground
          source={require('../assets/background.jpg')}
          resizeMode="cover"
          style={styles.container2}>



          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            // This offset nudges the bar to sit perfectly above the keyboard
            keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 80}          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={{ flex: 1 }}>

                {/* MESSAGE AREA: This flex:1 View pushes the input down */}
                <View style={{ flex: 1 }}>
                  {/* Your FlatList of messages will go here */}
                </View>

                {/* INPUT AREA: Now part of the normal flow */}
                <View style={styles.bottomInputRow}>
                  <View style={styles.inputContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                      <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color="#85959f" />
                    </TouchableOpacity>

                    <TextInput
                      placeholder="Message"
                      placeholderTextColor="#85959f"
                      style={styles.textInput}
                      multiline
                    />

                    <TouchableOpacity style={styles.iconButton}>
                      <Entypo name="attachment" size={20} color="#85959f" style={{ transform: [{ rotate: '315deg' }] }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton}>
                      <Ionicons name="camera-outline" size={24} color="#85959f" />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.micButton}>
                    <FontAwesome5 name="microphone" size={20} color="black" />
                  </TouchableOpacity>
                </View>

              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>




        </ImageBackground>


      </SafeAreaProvider>
    </PaperProvider>











  )
};



const styles = StyleSheet.create({
  container1: {
    flex: 0.11,
    backgroundColor: '#0b141a',
    paddingHorizontal: 10,

  },
  container2: {
    flex: 1,


  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
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