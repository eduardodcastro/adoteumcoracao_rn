import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import UserRegistration from '../pages/UserRegistration';

export type StackAuthParams = {
    SignIn: undefined;
    UserRegistration: undefined;
}

const Stack = createNativeStackNavigator<StackAuthParams>();

function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='SignIn' 
                component={SignIn} 
                options={{headerShown: false}}
            />

            <Stack.Screen 
                name='UserRegistration' 
                component={UserRegistration} 
                options={{title: 'Criar usuário'}}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes;