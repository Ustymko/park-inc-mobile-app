import { Text, View, TouchableOpacity, Image, Modal } from "react-native"
import styles from "./style"
import Constants from 'expo-constants'
import React, {useState} from 'react'
import {DateModalPicker} from '../../components/DateModalPicker'
import { TimeModalPicker } from "../../components/TimeModalPicker"

const statusBarHeight = Constants.statusBarHeight

const PlaceRentScreen = ({navigation}) => {
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

    return(
        <View style={[styles.container, {marginTop: statusBarHeight}]}>
            <View style={[styles.topPanel, {flexDirection: "row"}]}>
                <TouchableOpacity
                   onPress = {() => navigation.navigate("Map")}
                   style={styles.backButton}
                >
                    <Text style={styles.backButtonArrow}>{backButton}</Text>
                </TouchableOpacity>
                <Text style={styles.topPanelText}>Place info</Text>
            </View>

            <View style={[styles.parkingPlaceInfo, {flexDirection:'row'}]}>
                <Image style={styles.garagePhoto} source={require('../../assets/garage1.png')}/>
                <View style={styles.parkingPlaceTextInfo}>
                    <Text style={{marginTop: 30, fontSize: 20}}>Owner:</Text>
                    <Text style={{fontSize: 30}}>Taras Kloba</Text>
                    <Text style={{marginTop: 20, fontSize: 20}}>Address:</Text>
                    <Text style={{fontSize: 28, textAlign:'center'}}>Chornovola 10</Text>

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
            <TouchableOpacity style={styles.rentButton}>
                <Text style={styles.rentButtonText}>Rent</Text>
            </TouchableOpacity>
            
        </View>
    )

}

export default PlaceRentScreen;