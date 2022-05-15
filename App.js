import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import PlaceRentScreen from './screens/PlaceRentScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';

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
          name = "Login"
          component={LoginScreen}
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
  );
};

export default App;