import React from 'react'
import { View, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import { theme } from '../core/theme'

export default function Header({ children }) {
    return (
        <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        minHeight: '10%',
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    }
})