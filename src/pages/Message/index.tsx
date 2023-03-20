import React from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native';

import { Logo } from '../../components/Logo';

export default function Message() {
    return(
        <View style={styles.container}>
            <Logo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})