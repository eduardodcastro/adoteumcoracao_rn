import React, { useState } from 'react';

import { 
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import { Logo } from '../../components/Logo';

import { colors } from '../../exports/Colors';

import { Feather } from '@expo/vector-icons'

export default function UserRegistration() {

    const loadingAuth = false
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUserName] = useState('')
    
    return(
        <View style={styles.container}>
            <Logo/>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    placeholderTextColor={colors.BLUE_2_COLOR}
                    value={email}
                    // onChangeText={(text) => setEmail(text)}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    placeholderTextColor={colors.BLUE_2_COLOR}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TextInput
                    placeholder="Digite seu nome de usuário"
                    style={styles.input}
                    placeholderTextColor={colors.BLUE_2_COLOR}
                    value={username}
                    // onChangeText={(text) => setEmail(text)}
                    onChangeText={setUserName}
                />

                <TouchableOpacity style={styles.button}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color={colors.WHITE_COLOR} />
                        ) : (<Text style={styles.buttonText}>Criar usuário</Text>)
                    }
                    
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.GRAY_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input: {
        width: '95%',
        height: 50,
        backgroundColor: colors.BLUE_COLOR,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: colors.BLUE_2_COLOR,
    },
    button: {
        width: '95%',
        height: 50,
        backgroundColor: colors.MAIN_COLOR,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.GRAY_COLOR
    },
})