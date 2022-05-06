import { Text, View, TouchableOpacity, Image } from "react-native"
import styles from "./style"
import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight

const PlaceRentScreen = ({navigation}) => {
    var backButton = "<--"
    return(
        <View style={[styles.container, {marginTop: statusBarHeight}]}>
            <View style={[styles.infoAboutParkingPlace, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Map")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.infoAboutParkingPlaceText}>Place info</Text>
            </View>

            <Image style={styles.garagePhoto} source={require('../../assets/garage1.png')}></Image>
            <Text>Стіпан</Text>

            <TouchableOpacity style={styles.rentButton}>
                <Text style={styles.rentButtonText}>Rent</Text>
            </TouchableOpacity>
            
        </View>
    )

}

export default PlaceRentScreen;