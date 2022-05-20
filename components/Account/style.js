import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#87CEEB',
        paddingLeft: 60,
        paddingRight: 60,
    },

    scrollView: {
        width: 370,
        height: 200,
        margin: 20,
        

      },
    textinput: {
        height: 40,
        width: 250 ,
        marginBottom: 10,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 2,
        padding: 10,
    },
    avatar:{
        width: 180,
        height: 180,
        marginTop: 30,

    },
    changephoto:{

    },
    history:{
        marginTop: 50,
        fontSize:30,
    },
    historyParkingPlace:{
        height: 100,
        width: 370,
        backgroundColor: '#fff',
        marginBottom: 10
    }

});

export default styles;