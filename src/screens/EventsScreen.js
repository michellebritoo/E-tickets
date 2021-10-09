import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import BackButtonLight from '../components/BackButtonLight'
import Header from '../components/Header'
import { theme } from '../core/theme'
import Background from '../components/Background'
import Product from '../components/Product'
import FormTitle from '../components/FormTitle'

export default function EventsScreen({ navigation }) {

  return (
    <Background >
      <Header>
        <BackButtonLight goBack={navigation.goBack} />
      </Header>
      <FormTitle>Tickets</FormTitle>
      <Product name='Curso sobre design thinking' description='Aprenda os principios e conceitos sobre design thinking' price='60.00' navigation={navigation} />
      <Product name='Rock In Rio' description='Show com bandas nacionais e internacionais' price='300.00' navigation={navigation} />
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
})
