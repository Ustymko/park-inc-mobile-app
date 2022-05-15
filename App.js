import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import PlaceRentScreen from './screens/PlaceRentScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name = "Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name = "Map"
          component={MapScreen} 
        />
        <Stack.Screen
          name = "PlaceRent"
          component={PlaceRentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <LinearGradient colors={['#0893cf', 'transparent']}>
    //   <View style={{width: 100, height: 100, backgroundColor: 'black'}}></View>
    // </LinearGradient>
  );
};

export default App;