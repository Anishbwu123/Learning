import {useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

type Location = {lat: number; lng: number} | null;

export const useGeoLocation = () => {
  const [location, setLocation] = useState<Location>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = async () => {
    try {
      setLoading(true);
      setError(null);
      if (Platform.OS === 'android') {
        const ok = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (ok !== PermissionsAndroid.RESULTS.GRANTED) {
          setLoading(false);
          setError('permission_denied');
          return 'permission_denied';
        }
      }
      Geolocation.getCurrentPosition(
        position => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
          setError(null);
        },
        error => {
          setLoading(false);
          setError('location_unavailable');
          console.log(
            'The error came at fetching Geolocation',
            error,
            JSON.stringify(error),
          );
          return 'location_unavailable';
        },
        {enableHighAccuracy: false, timeout: 30000, maximumAge: 10000},
      );
    } catch (e) {
      setLoading(false);
      setError('error');
      console.log('The error came at fetching location', e);
      return 'error';
    }
  };

  return {location, requestLocation, loading, error};
};
