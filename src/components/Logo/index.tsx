import React from 'react';

import { 
    Text,
    View,
    StyleSheet
} from 'react-native';

import { colors } from '../../exports/Colors';

import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';

import { Entypo } from '@expo/vector-icons'

export function Logo() {
    let [fontsLoaded] = useFonts({
        Pacifico_400Regular,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.designLogo}>adote um</Text>
            <Entypo name="heart" size={28} color={colors.MAIN_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '4%',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    designLogo: {
        fontFamily: 'Pacifico_400Regular', 
        fontSize: 32,
        color: colors.MAIN_COLOR,
        marginRight: 2
    }
})
