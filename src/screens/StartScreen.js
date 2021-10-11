import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import Background from '../components/Background'
import BottomMenu from '../components/BottomMenu'
import Header from '../components/Header'
import Logo from '../img/logo.png'
import RockInRio from '../img/logo-rock-in-rio.png'
import Paragraph from '../components/Paragraph';

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header/>
      <Image style={styles.logo}
        source={Logo}
      />
      <Paragraph style={styles.welcome}>
        Seja Bem-Vindo ao E-ticket
      </Paragraph>
      <Image style={styles.logorock}
        source={RockInRio}
      />
      <Paragraph style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores similique fugiat cumque aspernatur. Odio aspernatur praesentium magnam eveniet nam odit itaque quas eos quam quos? Reprehenderit, repellendus. Mollitia, cupiditate.
      </Paragraph>
      <BottomMenu navigation={navigation} />
    </Background>
  )
}

const styles = StyleSheet.create({

logo: {
  marginTop: 0,
  width: 325,
  height: 280
},
welcome:{
  marginTop: -10,
  fontSize: 24
},
logorock: {
  marginTop: 0,
  width: 400,
  height: 200,
},
description:{
    width: "80%",
    marginTop: 5,
    fontSize: 16,
    textAlign: 'justify'
}
})