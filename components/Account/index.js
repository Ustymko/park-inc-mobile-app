import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const Account = (props) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image style={styles.avatar} source={require('../../assets/avatardefault.png')}/>

            <Text style={styles.changephoto}>Change photo</Text>

            <TextInput style ={styles.textinput} placeholder="Name"/>
            <TextInput style ={styles.textinput} placeholder="Phone number"/>
            <TextInput style ={styles.textinput} placeholder="Email"/>

            <Text style={styles.history}>History:</Text>

            <ScrollView style={styles.scrollView}>
                <View style={styles.historyParkingPlace}>
                <Text >
                    Parking place 0
                </Text>
                </View>
                <View style={styles.historyParkingPlace}>
                <Text>
                    Parking place 1
                </Text>
                </View>
                <View style={styles.historyParkingPlace}>
                <Text>
                    Parking place 2
                </Text>
                </View>
                <View style={styles.historyParkingPlace}>
                <Text>
                    Parking place 3
                </Text>
                </View>
        
            </ScrollView>
            
        </View>
    );
}

export default Account;