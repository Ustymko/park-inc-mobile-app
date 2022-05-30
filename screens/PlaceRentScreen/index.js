import { Text, View, TouchableOpacity, Image, Modal } from "react-native"
import styles from "./style"
import Constants from 'expo-constants'
import React, {useState} from 'react'
import {DateModalPicker} from '../../components/DateModalPicker'
import { TimeModalPicker } from "../../components/TimeModalPicker"

const statusBarHeight = Constants.statusBarHeight

const PlaceRentScreen = ({route, navigation}) => {
    const {owner, address, price} = route.params
    var backButton = "<--"
    const [chooseData, setChooseData] = useState('Choose the date')
    const [chooseTime, setChooseTime] = useState('Choose time gap')
    const [isModalVisible, setisModalVisible] = useState(false)
    const [isTimeModalVisible, setIsTimeModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
        setisModalVisible(bool)
    }

    const setData = (option) => {
        setChooseData(option)
    }

    const changeTimeModalVisibility = (bool) => {
        setIsTimeModalVisible(bool)
    }

    const setTime = (option) => {
        setChooseTime(option)
    }

    // const post_request = () =>{
    //     var dataToSend = {email : 'test.email@gmail.com'}
    //     var formbody = []
    //     formbody.push(email + " " + dataToSend[email])
    //     fetch('http://127.0.0.1:5000/sonoff_ifttt', {
    //         method: 'POST',
    //         body: formbody,
    //         headers:{
    //             'Content-Type': 'not_encoded'
    //         },
    //     })
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         alert(JSON.stringify(responseJson))
    //         console.log(responseJson)
    //     })
    //     .catch((error) => {
    //         alert(JSON.stringify(error))
    //         console.error(error)
    //     })
    // }

    return(
        <View style={[styles.container, {marginTop: statusBarHeight}]}>
            <View style={[styles.topPanel, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Home")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.topPanelText}>Place info</Text>
            </View>

            <View style={[styles.parkingPlaceInfo, {flexDirection:'row'}]}>
                <Image style={styles.garagePhoto} source={require('../../assets/garage1.png')}/>
                <View style={styles.parkingPlaceTextInfo}>
                    <Text style={{marginTop: 15, fontSize: 18}}>Owner:</Text>
                    <Text style={{fontSize: 27, textAlign:'center'}}>{owner}</Text>
                    <Text style={{marginTop: 20, fontSize: 20}}>Address:</Text>
                    <Text style={{fontSize: 28, textAlign:'center'}}>{address}</Text>
                    <Text style={{fontSize: 28, textAlign:'center', marginTop: 10}}>{price}</Text>

                </View>
            </View>
            
            <View style = {styles.modalPickerView}>
                <TouchableOpacity 
                    onPress={() => changeModalVisibility(true)}
                    style={styles.touchableOpacity}
                    
                >
                    <Text style={styles.text}>{chooseData}</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType='slide'
                    visible={isModalVisible}
                    onRequestClose={() => changeModalVisibility(false)}
                >
                    <DateModalPicker
                        changeModalVisibility={changeModalVisibility}
                        setData={setData}
                    />
                </Modal>
                <TouchableOpacity 
                    onPress={() => changeTimeModalVisibility(true)}
                    style={styles.touchableOpacity}
                    
                >
                    <Text style={styles.text}>{chooseTime}</Text>
                </TouchableOpacity>
                <Modal
                    transparent={true}
                    animationType='slide'
                    visible={isTimeModalVisible}
                    onRequestClose={() => changeTimeModalVisibility(false)}
                >
                    <TimeModalPicker
                        changeTimeModalVisibility={changeTimeModalVisibility}
                        setTime={setTime}
                    />
                </Modal>
            </View>
            {/* <View style={styles.totalPrice}>
                <Text style={styles.totalPriceText}>Total price:</Text>
                <Text>{price}</Text>
            </View> */}
            <TouchableOpacity 
                style={styles.rentButton} 
                // onPress={post_request}
            >
                <Text style={styles.rentButtonText}>Rent</Text>
            </TouchableOpacity>
            
        </View>
    )

}

export default PlaceRentScreen;