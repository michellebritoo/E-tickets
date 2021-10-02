import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function LogoLight() {
    return (
        <Image source={require('../assets/Logo_Light.png')} style={styles.image} />

    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        marginBottom: 8,
    },
})