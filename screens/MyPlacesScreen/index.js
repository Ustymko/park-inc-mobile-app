import styles from "./style";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Constants from 'expo-constants'
import { useNavigation } from '@react-navigation/native';
import React, {useState, useEffect} from 'react'

var statusBarHeight = Constants.statusBarHeight
const movieURL = "https://reactnative.dev/movies.json";
const DATA = [
    { "id": "1", "address": "Vyhovskoho 10", "price": "10" },
    { "id": "2", "address": "Vyhovskoho 10", "price": "20" },
]

const MyPlacesScreen = () => {
    const navigation = useNavigation();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    var backButton = "<--"
  // similar to 'componentDidMount', gets called once
  useEffect(() => {
    // fetch(movieURL)
    //   .then((response) => response.json()) // get response, convert to json
    //   .then((json) => {
    //     setData(json.movies);
    //   })
    //   .catch((error) => alert(error)) // display errors
    //   .finally(() => setLoading(false)); // change loading state
    setData(DATA)
    setLoading(false)
  }, []);

    return (
        <View style={styles.container}>
        <View style={[styles.topPanel, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Home")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.topPanelText}>My places</Text>
            </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{width: "100%"}}>
          <FlatList
            style={{width: '100%'}}
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <View style={styles.place}>
                <Text style={styles.movieText}>
                  #{item.id} {item.address}, {item.price}
                </Text>
                <TouchableOpacity style={styles.openTheGates}>
                    <Text style={{fontSize: 20}}>Open the gates</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
      </View>
        
    )
}

export default MyPlacesScreen;