import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import PlaceRentScreen from './screens/PlaceRentScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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