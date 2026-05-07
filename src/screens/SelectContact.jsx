import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import * as Contacts from 'expo-contacts';

export default function SelectContact({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
        });

        if (data.length > 0) {
          // Sort contacts alphabetically
          const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
          setContacts(sortedData);
          setFilteredContacts(sortedData);
        }
      }
      setLoading(false);
    })();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = contacts.filter(contact => 
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const HeaderActions = () => (
    <View>
      <ActionItem icon="people" label="New group" color="#00a884" />
      <ActionItem icon="person-add" label="New contact" color="#00a884" showQR />
      <ActionItem icon="group" label="New community" color="#00a884" isMaterial />
      <Text style={styles.sectionHeader}>Contacts on WhatsApp</Text>
    </View>
  );

  const ActionItem = ({ icon, label, color, showQR, isMaterial }) => (
    <TouchableOpacity style={styles.contactItem}>
      <View style={[styles.iconCircle, { backgroundColor: color }]}>
        {isMaterial ? (
          <MaterialCommunityIcons name={icon} size={22} color="white" />
        ) : (
          <Ionicons name={icon} size={22} color="white" />
        )}
      </View>
      <Text style={styles.actionLabel}>{label}</Text>
      {showQR && <Ionicons name="qr-code" size={20} color="#8696a0" style={{ marginLeft: 'auto' }} />}
    </TouchableOpacity>
  );

  const renderContact = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      {item.imageAvailable ? (
        <Image source={{ uri: item.image.uri }} style={styles.avatar} />
      ) : (
        <View style={styles.placeholderAvatar}>
          <Ionicons name="person" size={24} color="white" />
        </View>
      )}
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactStatus}>
          {item.phoneNumbers?.[0]?.number || "Hey there! I am using WhatsApp."}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Navbar */}
        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => navigation?.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.navTextContainer}>
            <Text style={styles.navTitle}>Select contact</Text>
            <Text style={styles.navSubtitle}>{contacts.length} contacts</Text>
          </View>
          <View style={styles.navIcons}>
            <Ionicons name="search" size={22} color="white" style={{ marginRight: 20 }} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
          </View>
        </View>

        {/* Search Input */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.input}
            placeholder="Search contacts..."
            placeholderTextColor="#8696a0"
            value={search}
            onChangeText={handleSearch}
          />
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#00a884" style={{ marginTop: 50 }} />
        ) : (
          <FlatList
            data={filteredContacts}
            ListHeaderComponent={HeaderActions}
            keyExtractor={(item) => item.id}
            renderItem={renderContact}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b141a' },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0b141a',
  },
  navTextContainer: { marginLeft: 25, flex: 1 },
  navTitle: { color: 'white', fontSize: 18, fontWeight: '500' },
  navSubtitle: { color: 'white', fontSize: 12 },
  navIcons: { flexDirection: 'row' },
  searchSection: { paddingHorizontal: 15, marginBottom: 10 },
  input: {
    backgroundColor: '#202c33',
    color: 'white',
    padding: 10,
    borderRadius: 20,
    fontSize: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 15 },
  placeholderAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6b7c85',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  actionLabel: { color: 'white', fontSize: 16, fontWeight: '500' },
  sectionHeader: {
    color: '#8696a0',
    fontSize: 14,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontWeight: '500',
  },
  contactInfo: { flex: 1 },
  contactName: { color: 'white', fontSize: 16, fontWeight: '500' },
  contactStatus: { color: '#8696a0', fontSize: 14, marginTop: 2 },
});