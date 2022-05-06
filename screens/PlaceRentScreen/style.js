import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'relative',
    
    //backgroundColor: '#e6e6e6',
    //marginTop: '2%'
    alignItems: 'center',
    //justifyContent: 'center',
  },
  infoAboutParkingPlace:{
    
    backgroundColor: '#0893cf',
    alignItems: 'center',
    height: '7%'
  }, 
  infoAboutParkingPlaceText:{
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
  garagePhoto:{
    width: 200,
    height: 300,
    borderRadius: 20,
    marginTop: 5,
    marginLeft: 5    
  },
  rentButton:{
    position: 'absolute',
    backgroundColor:'#0893cf',
    bottom: 0,
    width:'80%',
    alignItems: 'center',
    marginLeft: '10%'
  },
  rentButtonText:{
    color: '#ffffff',
    fontSize: 35
  }
})

export default styles;