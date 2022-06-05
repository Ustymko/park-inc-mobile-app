import styles from './style';
import MapView, { Callout, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight

function MapScreen() {
  
  const navigation = useNavigation();
    return (
      <View style={[styles.container, {marginTop: statusBarHeight}]}>
        <MapView 
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={true} 
        >
          <Marker coordinate={{
            latitude: 49.8455084,
            longitude: 24.0438791
            
          }}>
            <Callout onPress={() => navigation.navigate("PlaceRent", {owner: "Us*** ***ko", address: "Sadovskogo 6", price:"20 hrn/hour"})}>
              <View>
                <Text>Rent</Text>
              </View>
              
            </Callout>
          </Marker>

          <Marker coordinate={{
            latitude: 49.84070168963158,
            longitude: 24.051619718060728
          }}
          pinColor="green">
            <Callout onPress={() => navigation.navigate("PlaceRent", {owner: "Bo**** *****ka", address: "Barvinskih 10", price:"19 hrn/hour"})}>
              <Text>Rent</Text>
            </Callout>
          </Marker>
        </MapView>

      </View>

    );
  };
  
export default MapScreen;


/*import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
//import styles from './style';

export default function MapScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [customLatitude, setCustomLatitude] = useState(null);
  const [customLongitude, setCustomLongitude] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCustomLatitude(location.coords.latitude);
      setCustomLongitude(location.coords.longitude);
      setLocation(location);
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    
  }
  return (
    <View style={styles.container}>
      
      <Text>{text}</Text>
      <Text>{customLatitude}, {customLongitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
*/
