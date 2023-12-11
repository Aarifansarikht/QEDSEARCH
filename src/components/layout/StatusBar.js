import { StyleSheet, Text, View, StatusBar as StatusBarComponent, Platform } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native';

export function StatusBar({ statusBarColor, barStyle }) {
    useFocusEffect(
        React.useCallback(() => {
            StatusBarComponent.setBarStyle(barStyle ? barStyle : 'dark-content');
            if (Platform.OS == 'android') {
                StatusBarComponent.setBackgroundColor(statusBarColor)
            }
        }, [])
    );
}

const styles = StyleSheet.create({})