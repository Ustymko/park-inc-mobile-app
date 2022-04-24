import { Button, View } from 'react-native';
import styles from './style';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
        <Button
            onPress = {() => navigation.navigate("Home")}
            title = "Back"
        />
      </View>
    );
  };
  
export default MapScreen;