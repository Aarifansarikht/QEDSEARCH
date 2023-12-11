import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../utils/colors';
export default function Loader() {
  return (
    <View style={styles.absolute}>
      <View
        style={{
          width: 70,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderRadius: 10,
          elevation: 5,
        }}>
        <ActivityIndicator size={'large'} color={color.primaryColor} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    ...StyleSheet.absoluteFill,
  },
});
