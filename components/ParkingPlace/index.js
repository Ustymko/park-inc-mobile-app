import React from "react";
import {View, Text} from 'react-native';
import styles from "./style";

const ParkingPlace = (props) => {
    const isAvaliable = props.isAvaliable;

    const backgroundColor = isAvaliable === 'true' ? '#a8ffbf' : '#ff575c';
    return(
        
      <View style = {[styles.parkingPlace, {backgroundColor: backgroundColor}]}>
        <Text style = {styles.placeNumber}>
          Parking Place #{props.placeNumber}
        </Text>
        <Text>
          {props.placeAddress}
        </Text>

    </View>

    );


};

export default ParkingPlace;