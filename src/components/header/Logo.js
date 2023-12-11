import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LOGO_DARK, LOGO_LIGHT, LOGO_TEXT_DARK, LOGO_TEXT_LIGHT } from '../../utils/images/index';

export default function Logo({ type, color, width, height }) {
    if (color === 'dark') {
        return (
            type === 'logo-text' ? <Image style={{ width: width, height: height, resizeMode: 'contain', }} source={LOGO_TEXT_DARK} /> : <Image style={{ width: width, height: height, resizeMode: 'contain', }} source={LOGO_DARK} />
        )
    } else {
        return (
            type === 'logo-text' ? <Image style={{ width: width, height: height, resizeMode: 'contain' }} source={LOGO_TEXT_LIGHT} /> : <Image style={{ width: width, height: height, resizeMode: 'contain' }} source={LOGO_LIGHT} />
        )
    }

}

const styles = StyleSheet.create({})