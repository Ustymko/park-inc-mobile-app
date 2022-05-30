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
                    <Text style={styles.parkingPlaceText}>Віталік</Text>
                    <TouchableOpacity >
                        <Text style={styles.buttonsText}>details</Text>
                    </TouchableOpacity>
                    <Text style={styles.parkingPlaceHours}>14:00-16:00</Text>
                    <Text style={styles.parkingPlaceDate}>12.05.2022</Text>
                </View>
                <View style={styles.historyParkingPlace}>
                    <Text style={styles.parkingPlaceText}>Олег</Text>
                    <TouchableOpacity >
                        <Text style={styles.buttonsText}>details</Text>
                    </TouchableOpacity>
                    <Text style={styles.parkingPlaceHours}>12:00-13:00</Text>
                    <Text style={styles.parkingPlaceDate}>02.05.2022</Text>
                </View>
                <View style={styles.historyParkingPlace}>
                    <Text style={styles.parkingPlaceText}>Артур</Text>
                    <TouchableOpacity >
                        <Text style={styles.buttonsText}>details</Text>
                    </TouchableOpacity>
                    <Text style={styles.parkingPlaceHours}>20:00-21:00</Text>
                    <Text style={styles.parkingPlaceDate}>29.02.2022</Text>
                </View>
                <View style={styles.historyParkingPlace}>
                    <Text style={styles.parkingPlaceText}>Роберт</Text>
                    <TouchableOpacity >
                        <Text style={styles.buttonsText}>details</Text>
                    </TouchableOpacity>
                    <Text style={styles.parkingPlaceHours}>12:00-13:00</Text>
                    <Text style={styles.parkingPlaceDate}>08.11.2021</Text>
                </View>
        
            </ScrollView>
            
        </View>
    );
}

export default Account;