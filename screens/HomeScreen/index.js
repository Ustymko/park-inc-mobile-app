import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import HomeScreenButtons from '../../components/HomeScreenButtons';
import HomeScreenTopPanel from '../../components/HomeScreenTopPanel';
import ParkingPlaceCloseToUser from '../../components/ParkingPlaceCloseToUser';
import styles from './style';

const HomeScreen = ({ navigation }) => {
  
    return (
      <View style={styles.container}>
        <HomeScreenTopPanel/>
        <Text style={{fontSize: 30, color:'black'}}>Places close to you</Text>
        <ParkingPlaceCloseToUser owner={"**ras Klo**"} address={"Kharkivska 4"} price={"20 hrn/hour"}/>
        <ParkingPlaceCloseToUser owner={"**riy Rozhankivsk**"} address={"Kharkivska 5"} price={"15 hrn/hour"}/>
        <ParkingPlaceCloseToUser owner={"**riy Reshetn**"} address={"Kharkivska 6"} price={"17 hrn/hour"}/>
        {/* <ScrollView style = {styles.scrollView}>
            <View style={styles.parkingPlaces}>
              <ParkingPlace isAvaliable = 'true' placeNumber = '1' placeAddress = 'Shevchenka 10'/>
              <ParkingPlace placeNumber = '2' placeAddress = 'Shevchenka 11'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '3' placeAddress = 'Shevchenka 12'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '4' placeAddress = 'Shevchenka 13'/>
              
              <ParkingPlace isAvaliable = 'true' placeNumber = '5' placeAddress = 'Shevchenka 14'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '6' placeAddress = 'Shevchenka 15'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '7' placeAddress = 'Shevchenka 16'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '8' placeAddress = 'Shevchenka 17'/>
              <ParkingPlace placeNumber = '9' placeAddress = 'Shevchenka 18'/>
              <ParkingPlace isAvaliable = 'true' placeNumber = '10' placeAddress = 'Shevchenka 19'/>
              <NewParkingSpaceButton/>
            </View>
          </ScrollView> */}
          <View style={styles.homeScreenButtons}>
            <HomeScreenButtons/>
          </View>
          
        <StatusBar style="auto" />
      </View>
    );
  };
  
export default HomeScreen;