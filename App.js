import React from 'react'
import { Provider, Text } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  ContactScreen,
  StartScreen,
  EventsScreen,
  NovoArquivo
} from './src/screens'


const Stack = createStackNavigator()

export default function App() {
  return (
      <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="StartScreen" screenOptions={{ headerShown: false, }} >
            <Stack.Screen name="ContactScreen" component={ContactScreen} />
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="EventsScreen" component={EventsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  )
}


