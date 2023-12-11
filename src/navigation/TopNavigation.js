import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TabScreen1 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    }}>
    <Text style={{color: '#000'}}>Tab 1 Content</Text>
  </View>
);

const TabScreen2 = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    }}>
    <Text style={{color: '#000'}}>Tab 2 Content</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();
function TopNavigation(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={TabScreen1} />
      <Tab.Screen name="Tab2" component={TabScreen2} />
    </Tab.Navigator>
  );
}

export default TopNavigation;
