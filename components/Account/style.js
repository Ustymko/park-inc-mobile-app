import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollView: {
        width: Dimensions.get('window').width - 20,
        height: 200,
        margin: 10,
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
        width: 400,
        backgroundColor: '#fff',
        marginBottom: 10
    }

});

export default styles;