import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    parkingPlace:{
        backgroundColor: '#69aff5',
        margin: 15,
        height: '15%',
        flexDirection: 'row',
        alignItems:'center',
        
    },
    address:{
        flex: 1,
        fontSize: 30,
        marginTop: 5,
    },
    price:{
        flex: 1,
        fontSize: 30,
    },
    details:{
        fontSize: 35,
        //marginLeft: '5%',
        margin: '5%',
        backgroundColor: '#95c5f5',
        padding: 15,
    }
});

export default styles;
