import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';

const {Navigator, Screen} = createStackNavigator();
function RootNavigation(props) {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}

export default RootNavigation;
