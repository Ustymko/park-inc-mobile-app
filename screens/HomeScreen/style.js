import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e6e6e6',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  parkingPlaces: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#ffffff',
    //bottom: '10%'
  },
  scrollView:{
    marginTop: '10%',
    marginHorizontal: 70,
    marginBottom: '25%'
  },
  homeScreenButtons:{
    bottom: 0, 
    position: 'absolute', 
    width: '100%'
  }
  });

export default styles;