import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'

export default function BottomMenu({navigation}) {
    return (
        <View style={styles.bottom}>
            <Button
                mode="secondary"
                onPress={() => navigation.navigate('EventsScreen')}
            >
                Eventos
            </Button>
            <Button
                mode="secondary"
                onPress={() => navigation.navigate('ContactScreen')}
            >
                Contato
            </Button>
            <Button
                mode="secondary"
            >
                News
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    bottom: {
        flexDirection: 'row',
        position: 'fixed',
        bottom: 0,
        color: 'red',
        justifyContent: 'space-between',
      },
})
