import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// TODO: For production, move API key to .env and do NOT expose publicly.
const GOOGLE_API_KEY = 'AIzaSyA06Q4kCiw2rxNsST5FwCR1Q38ErUC2W50';

const MapScreen = () => {
  const [location, setLocation] = useState(null); // { latitude, longitude }
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // Request location permission (Android)
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        Alert.alert('Permission error', err.message);
        return false;
      }
    }
    // iOS permission handled via Info.plist
    return true;
  };

  // Reverse geocode to get city, state, and formatted address
  const getAddressFromCoords = async (lat, lng) => {
    try {
      setAddress('');
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`,
      );
      const json = await res.json();
      if (json.results && json.results.length > 0) {
        const components = json.results[0].address_components;
        let city = '';
        let state = '';
        components.forEach((component) => {
          if (component.types.includes('locality')) {
            city = component.long_name;
          } else if (
            component.types.includes('administrative_area_level_1')
          ) {
            state = component.short_name;
          }
        });
        const formattedAddress = json.results[0].formatted_address;
        setAddress(`${city}${state ? ', ' + state : ''}\n${formattedAddress}`);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      setAddress('Reverse geocoding failed');
    }
  };

  // Get current location with reasonable timeout and accuracy settings
  const getCurrentLocation = async () => {
    setLoading(true);
    setErrorMsg('');

    const hasPermission = await requestLocationPermission();
    if (!hasPermission) {
      setLoading(false);
      setErrorMsg('Location permission denied');
      return;
    }

    Geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });
        getAddressFromCoords(latitude, longitude)
          .catch(() => setAddress('Reverse geocoding failed'))
          .finally(() => setLoading(false));
      },
      (error) => {
        setLoading(false);
        setErrorMsg('Error getting location: ' + error.message);
      },
      {
        enableHighAccuracy: false, // disable to reduce timeout time
        timeout: 30000,            // increased timeout to 30 seconds
        maximumAge: 10000,
      },
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" color="#4285F4" style={{ marginTop: 40 }} />
      )}

      {!loading && errorMsg ? (
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      ) : (
        location && (
          <>
            <Text style={styles.label}>Latitude:</Text>
            <Text style={styles.value}>{location.latitude}</Text>

            <Text style={styles.label}>Longitude:</Text>
            <Text style={styles.value}>{location.longitude}</Text>

            <Text style={[styles.label, { marginTop: 20 }]}>City, State & Address:</Text>
            <Text style={styles.value}>{address}</Text>
          </>
        )
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#222',
  },
  errorMsg: {
    marginTop: 40,
    fontSize: 16,
    color: '#d21c1c',
    textAlign: 'center',
  },
});
