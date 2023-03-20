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

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackAuthParams } from '../../routes/auth.routes'

export default function SignIn() {

    const navigation = useNavigation<NativeStackNavigationProp<StackAuthParams>>();
    const loadingAuth = false
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleGoto() {
        navigation.navigate('UserRegistration');
    }
    
    return(
        <View style={styles.container}>
            <Logo/>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Digite seu e-mail"
                    style={styles.input}
                    placeholderTextColor={colors.GRAY_COLOR}
                    value={email}
                    // onChangeText={(text) => setEmail(text)}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder="Digite sua senha"
                    style={styles.input}
                    placeholderTextColor={colors.GRAY_COLOR}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color={colors.WHITE_COLOR} />
                        ) : (<Text style={styles.buttonText}>Entrar</Text>)
                    }
                    
                </TouchableOpacity>

                <View style={styles.containerRegister}>
                    <Text style={styles.contentRegister}>Se você não é registrado</Text>
                    <TouchableOpacity style={styles.btnRegister} onPress={handleGoto}>
                        <Text style={styles.btnRegisterText}>Clique Aqui.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.BLUE_COLOR,
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
        backgroundColor: colors.BLUE_2_COLOR,
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: colors.GRAY_COLOR,
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
    containerRegister: {
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 20,
    },
    contentRegister: {
        fontSize: 16,
        color: colors.GRAY_3_COLOR
    },
    btnRegister: {
        marginHorizontal: 8
    },
    btnRegisterText: {
        fontSize: 16,
        color: colors.MAIN_COLOR,
    }
})