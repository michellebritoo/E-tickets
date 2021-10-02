import React from 'react'
import { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import BackButtonLight from '../components/BackButtonLight'
import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import FormTitle from '../components/FormTitle'
import Header from '../components/Header'
import Background from '../components/Background'
import { theme } from '../core/theme'

export default function ContactScreen({ navigation }) {
    const [name, setName] = useState({ value: '', error: '' })
    const [phone, setPhone] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [message, setMessage] = useState({ value: '', error: '' })

    return (
        <Background>
            <Header>
                <BackButtonLight goBack={navigation.goBack} />
            </Header>

            <View style={styles.bg}>
                <FormTitle>Entre em contato</FormTitle>

                <TextInput
                    label="Nome"
                    returnKeyType="next"
                    value={name.value}
                    onChangeText={(text) => setName({ value: text, error: '' })}
                    error={!!name.error}
                    errorText={name.error}
                />

                <TextInput
                    label="Email"
                    returnKeyType="done"
                    value={email.value}
                    onChangeText={(text) => setEmail({ value: text, error: '' })}
                    error={!!email.error}
                    errorText={email.error}
                    autoCapitalize="none"
                    autoCompleteType="email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />

                <TextInput
                    label="Telefone"
                    returnKeyType="next"
                    value={phone.value}
                    onChangeText={(text) => setPhone({ value: text, error: '' })}
                    error={!!phone.error}
                    errorText={phone.error}
                />

                <TextInput
                    label="Mensagem"
                    returnKeyType="next"
                    value={message.value}
                    onChangeText={(text) => setMessage({ value: text, error: '' })}
                    error={!!message.error}
                    errorText={message.error}
                    multiline
                    mode="outlined"               
                    numberOfLines={6}
                />

                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('StartScreen')}>
                    ENVIAR
                </Button>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        padding: 20,
        backgroundColor: '#fff',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        color: theme.colors.secondaryText,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    rowQuestion: {
        flexDirection: 'row',
        marginTop: 4,
        color: theme.colors.secondaryText,
        textAlign: 'end',
        justifyContent: 'flex-end',
    },
})
