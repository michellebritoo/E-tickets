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
  marginTop: "-5vh",
  width: '325px',
  height: '280px'
},
welcome:{
  marginTop: "-5vh",
  fontSize: '1.5rem'
},
logorock: {
  marginTop: "5vh",
  width: '400px',
  height: '200px',
},
description:{
    width: "80%",
    marginTop: "5vh",
    fontSize: '1rem',
    textAlign: 'justify'
}
})