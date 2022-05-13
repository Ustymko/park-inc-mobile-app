import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from '../HomeScreenTopPanel/style';
import Constants from 'expo-constants'
import { useNavigation } from "@react-navigation/native";

var statusBarHeight = Constants.statusBarHeight

function HomeScreenTopPanel(){
    const navigation = useNavigation();
    return(
        <View style={[styles.panel, {marginTop: statusBarHeight}]}>
            <View style={{flex: 1}}>
                <Image style={styles.avatar} source={require('../../assets/avatardefault.png')}/>
            </View>
            
            <Text style={styles.panelText}>Park.inc</Text>
            <View style={{flex: 1}}>
                <Image style={styles.settingsIcon} source={require('../../assets/settings-icon.png')}/>
            </View>
        </View>
    )
}

export default HomeScreenTopPanel;