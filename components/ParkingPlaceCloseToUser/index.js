import React from "react";
import {View, Text} from 'react-native';
import styles from "./style";

function ParkingPlaceCloseToUser(props) {
    //const backgroundColor = isAvaliable === 'true' ? '#a8ffbf' : '#ff575c';
    return(
      <View style={styles.parkingPlace}>
        <View style={{flexDirection: 'column', marginLeft: 5}}>
          <Text style={styles.address}>{props.address}</Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
        <Text style={styles.details}>Details</Text>
        

      </View>
    );


};

export default ParkingPlaceCloseToUser;