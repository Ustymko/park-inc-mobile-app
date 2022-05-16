import { useNavigation } from '@react-navigation/native';
import {Text, View} from 'react-native';
import styles from './style';

const AccountScreen = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.randomText}>
            <Text >This is your account</Text>
        </View>
    )
}

export default AccountScreen;