import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import BackButtonLight from '../components/BackButtonLight'
import Header from '../components/Header'
import { theme } from '../core/theme'
import Background from '../components/Background'

export default function EventsScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [senha, setSenha] = useState({ value: '', error: '' })

  return (
    <Background >
      <Header>
        <BackButtonLight goBack={navigation.goBack} />
      </Header>
    </Background>
  )
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
    color: theme.colors.secondaryText,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  rowQuestion: {
    flexDirection: 'row',
    marginTop: 4,
    color: theme.colors.secondaryText,
    textAlign: 'end',
    justifyContent: 'flex-end',
  },
})
