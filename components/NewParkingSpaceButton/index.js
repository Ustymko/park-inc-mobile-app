import React, {useState} from "react";
import {View, Text, Pressable} from 'react-native';
import styles from "./style";

const new_parking_space_button = (props) => {
    const [count, setCount] = useState(0)
    const onPress = () => setCount(count => count + 1)
    return(
        <Pressable onPress={onPress} style = {styles.newSpace}>
          
          <View style = {styles.button}>
            <Text style = {styles.buttonText}>Add a parking place</Text>
            <Text style = {styles.buttonText}>added: {count}</Text>
          </View>

        </Pressable>
        

    );


};

export default new_parking_space_button;