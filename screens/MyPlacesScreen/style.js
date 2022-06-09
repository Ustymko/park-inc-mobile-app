import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
        width: '100%'
      },
      place:{
          backgroundColor: '#adffa8',
          margin: 10,
          alignItems: 'center'
      },
      movieText: {
        fontSize: 26,
        fontWeight: "200",
      },
      openTheGates:{
          borderWidth: 3,
      },
      topPanel:{
          backgroundColor: '#0893cf',
          alignItems: 'center',
          height: '7%'
        }, 
        topPanelText:{
          flex: 5,
          color: '#ffffff',
          fontSize: 35,
          paddingLeft: '15%'
        },
        backButton:{
          flex: 1,
          marginLeft: '3%'
        }, 
        backButtonArrow:{
          color: '#ffffff',
          fontSize: 35
        },
})

export default styles