import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function LocationP() {
    const [location, setLocation] = useState(null);
    const [nearbyPlaces, setNearbyPlaces] = useState([
        { id: '1', name: 'Vicory concrete concept', address: 'Aweke guest house, opp sofak...' },
        { id: '2', name: 'Excellent Stitches', address: 'Iyaji lay out, Winners area...' },
        // These would eventually come from the Google Places API
    ]);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;

            let userLocation = await Location.getCurrentPositionAsync({});
            setLocation(userLocation.coords);
        })();
    }, []);

    const renderHeader = () => (
        <View>
            {/* 1. THE MAP SECTION */}
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: location?.latitude || 7.123, // Fallback if loading
                    longitude: location?.longitude || 3.456,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                customMapStyle={darkMapStyle} // WhatsApp uses a dark theme
            >
                {location && <Marker coordinate={location} />}
            </MapView>

            {/* 2. FIXED ACTION BUTTONS */}
            <TouchableOpacity style={styles.actionRow}>
                <View style={styles.iconCircle}>
                    <MaterialCommunityIcons name="map-marker-radius" size={24} color="white" />
                </View>
                <Text style={styles.primaryText}>Share live location</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionRow}>
                <View style={[styles.iconCircle, { borderColor: '#25D366', borderWidth: 2 }]}>
                    <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: '#25D366' }} />
                </View>
                <View>
                    <Text style={styles.primaryText}>Send your current location</Text>
                    <Text style={styles.secondaryText}>Accurate to 34 meters</Text>
                </View>
            </TouchableOpacity>

            <Text style={styles.sectionHeader}>Nearby places</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={nearbyPlaces}
                ListHeaderComponent={renderHeader}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.placeRow}>
                        <Ionicons name="location-outline" size={24} color="#888" />
                        <View style={styles.placeTextContainer}>
                            <Text style={styles.primaryText}>{item.name}</Text>
                            <Text style={styles.secondaryText} numberOfLines={1}>{item.address}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0b141a' },
    map: { height: 300, width: '100%' },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#222',
    },
    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#1f2c34',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    placeRow: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    placeTextContainer: { marginLeft: 15, flex: 1 },
    primaryText: { color: 'white', fontSize: 16 },
    secondaryText: { color: '#888', fontSize: 12 },
    sectionHeader: {
        color: '#888',
        padding: 15,
        fontSize: 13,
        backgroundColor: '#121b22',
    },
});

// You can find Dark Mode JSON for Google Maps online to match the screenshot
const darkMapStyle = [];