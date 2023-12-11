import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from '../../utils/colors';
import Logo from './Logo';
import {SIDE_SPACE} from '../../utils/constants';

function HeaderHome(props) {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 1}}>
          <Logo color={'light'} type={'logo-text'} width={100} height={30} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.primaryColor,
    paddingHorizontal: SIDE_SPACE,
    paddingTop: 10,
    paddingBottom: 15,
  },
});

export default HeaderHome;
