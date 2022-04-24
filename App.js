import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
          options = {{title: "Welcome"}}
        />
        <Stack.Screen 
          name = "Map"
          component={MapScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;