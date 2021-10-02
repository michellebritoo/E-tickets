import React from 'react'
import Background from '../components/Background'
import BottomMenu from '../components/BottomMenu'
import Header from '../components/Header'


export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header/>
      <BottomMenu navigation={navigation} />
    </Background>
  )
}

