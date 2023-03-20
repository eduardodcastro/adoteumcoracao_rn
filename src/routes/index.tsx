import React from 'react';

import { View, StyleSheet, ActivityIndicator } from 'react-native';

import { colors } from '../exports/Colors';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
    
    const isAuthenticated = false;
    const loading = false;

    if(loading) {
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={60} color={colors.MAIN_COLOR}/>
            </View>
        )
    }
    
    return(
        isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor: colors.SECONDARY_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Routes;