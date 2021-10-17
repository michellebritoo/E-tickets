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
        <View style={styles.bg}>
          <FormTitle> {JSON.stringify(name)}</FormTitle>
          <Text>{JSON.stringify(description)}</Text>
          <Text>Preço: R$ {JSON.stringify(price)}</Text>
        </View>

      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    margin: 5
  }
})