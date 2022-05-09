import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        paddingVertical: 14,
        //paddingHorizontal: 10,
        backgroundColor: 'white'
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
      }, 
      findPlace:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },

});

export default styles;
