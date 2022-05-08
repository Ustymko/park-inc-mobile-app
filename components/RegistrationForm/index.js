import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const RegistrationForm = (props) => {
    const navigation = useNavigation();
    return(
        <View style={styles.registration}>
            <Text style={styles.header}>Registration</Text>

            <TextInput style={{width: 100, height: 40, margin: 12, borderWidth: 2, padding: 10}} placeholder="some"/>
                
            {/* <TextInput styles ={styles.textinput} onChangeText={onChangeText} value={text} /> */}

            {/* <TextInput styles ={styles.textinput} placeholder="Your password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />

            <TextInput styles ={styles.textinput} placeholder="Confirm password"
            secureTextEntry={true} underlineColorAndroid={'transparent'} /> */}

            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.btntext}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegistrationForm;