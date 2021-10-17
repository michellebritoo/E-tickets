import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import Header from '../components/Header'
import BackButtonLight from '../components/BackButtonLight'
import FormTitle from '../components/FormTitle'
import Background from '../components/Background'

export default function DetailsScreen({ route, navigation }) {
  const { name, description, price, image } = route.params;
  return (     
    <Background>
      <Header>
        <BackButtonLight goBack={navigation.goBack} />
      </Header> 
        
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>      
      <FormTitle> {JSON.stringify(name)}</FormTitle>
      <Text>name: {JSON.stringify(name)}</Text>
      <Text>description: {JSON.stringify(description)}</Text>
      <Text>price: {JSON.stringify(price)}</Text>
      <Text>image: {JSON.stringify(image)}</Text>
    </View>
    </Background>
  );
}

