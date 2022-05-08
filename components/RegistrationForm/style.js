import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    registration:{
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#199187'       
    },
    textinput: {
        // alignSelf: 'stretch',
        // height: 40,
        // marginBottom: 30,
        // color: '#fff',
        // borderBottomColor: '#f8f8f8',
        // borderBottomWidth: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button:{
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext:{
        color: '#fff',
        fontWeight: 'bold',
    }
    
});

export default styles;