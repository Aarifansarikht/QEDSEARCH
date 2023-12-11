import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootNavigation from './src/navigation/RootNavigation';


function App() {
  useEffect(() => {
    SplashScreen.hide();
   
    });
  return (
    <NavigationContainer>
    <RootNavigation />
  </NavigationContainer>
  );
}

export default App;