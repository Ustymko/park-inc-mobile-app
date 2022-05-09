import * as React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function FindParkingPlaceButton () {

  const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate("Map")} style = {styles.findPlace}>
          
          <View style = {styles.button}>
            <Text style = {styles.buttonText}>Find a parking place</Text>
          </View>

        </TouchableOpacity>
    );
};

export default FindParkingPlaceButton;
