import {Text, StyleSheet, View, SafeAreaView, Platform} from 'react-native';
import React, {Component, Fragment} from 'react';
import {color} from '../../utils/colors';
import {NavigationCOn} from '@react-navigation/native';
import {StatusBar} from './StatusBar';
/**
 * @augments {Component<{ statusBarColor:string, barStyle:string>}
 */

function Container({statusBarColor, barStyle, children}) {
  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: statusBarColor && statusBarColor}}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar statusBarColor={statusBarColor} barStyle={barStyle} />
        <View style={{flex: 1}}>{children}</View>
      </SafeAreaView>
    </>
  );
}

export default Container;
