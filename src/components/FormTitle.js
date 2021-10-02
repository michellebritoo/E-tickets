import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function FormTitle(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
    marginLeft: 7,
    marginLeft: 7,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color: theme.colors.secondaryText
  },
})
