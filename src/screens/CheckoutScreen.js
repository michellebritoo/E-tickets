import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'

export default function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { name, description, price, image } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>name: {JSON.stringify(name)}</Text>
      <Text>description: {JSON.stringify(description)}</Text>
      <Text>price: {JSON.stringify(price)}</Text>
      <Text>image: {JSON.stringify(image)}</Text>
    </View>
  );
}

