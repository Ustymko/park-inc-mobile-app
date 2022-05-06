import { Button, View, Text } from 'react-native';
import styles from './style';
import MapView, { Callout, Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
    return (

      <View style={styles.container}>
        <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 49.8415084,
          longitude: 24.0478791,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }} 
        >
          <Marker coordinate={{
            latitude: 49.8415084,
            longitude: 24.0478791
            
          }}>
            <Callout onPress={() => navigation.navigate("PlaceRent")}>
              <Text>Rent</Text>
            </Callout>
          </Marker>

          <Marker coordinate={{
            latitude: 49.84070168963158,
            longitude: 24.051619718060728
          }}
          pinColor="green">
            <Callout onPress={() => navigation.navigate("PlaceRent")}>
              <Text>Rent</Text>
            </Callout>
          </Marker>
        </MapView>
        
        <Button
            onPress = {() => navigation.navigate("Home")}
            title = "Home"
        />
      </View>
    );
  };
  
export default MapScreen;


/*import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import styles from './style';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let customLatitude;
  let customLongitude;
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
      <Text>{customLatitude}</Text>
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
});*/

