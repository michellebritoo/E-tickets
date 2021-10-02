import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        mode === 'secondary' && { backgroundColor: theme.colors.secondary },
        style,
      ]}
      labelStyle={
        styles.text,
        mode === 'secondary' &&  styles.textSec 
      }
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    marginVertical: 10,
    paddingVertical: 2,
    margin:10
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  textSec: {
    fontWeight: 'bold',
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 26,
  },
})
