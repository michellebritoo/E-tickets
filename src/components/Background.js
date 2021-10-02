import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native'
import { theme } from '../core/theme'


export default function Background({ children }) {
  return ( 
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
