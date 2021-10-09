import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function Product(props) {
    return (
        <View style={styles.bg}>
            <Text style={styles.text}> {props.name} </Text>
            <Paragraph>{props.description}</Paragraph>
            <Text style={styles.text}> Preço: R${props.price} </Text>
            <Button
                mode="secondary"
                onPress={() => props.navigation.navigate('CheckoutScreen', {
                    name: props.name,
                    description: props.description,
                    price: props.price
                })
                }
            >Comprar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        padding: 5,
        margin: 5
    },
    text: {
        padding: 15,
        fontSize: 21,
        lineHeight: 21,
        textAlign: 'center',
        color: theme.colors.secondaryText,
        fontWeight: "bold"
    },
})
