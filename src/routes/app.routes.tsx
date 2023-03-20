import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { colors } from '../exports/Colors';

import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import Message from '../pages/Message';

const Tab = createBottomTabNavigator();

function AppRoutes() {
    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                // let iconName;
                let iconSize = 24;
                // let iconColor;

                function isColor(statusColor: boolean) {
                    return statusColor ? colors.MAIN_COLOR : colors.GRAY_2_COLOR;
                }

                if (route.name === 'Dashboard') {
                    return <MaterialIcons name='pets' size={iconSize} color={isColor(focused)} />;
                } else if (route.name === 'Favorites') {
                    return <MaterialIcons name='star' size={iconSize} color={isColor(focused)} />;
                } else if (route.name === 'Message') {
                    return <MaterialIcons name='message' size={iconSize} color={isColor(focused)} />;
                } else if (route.name === 'Profile') {
                    return <FontAwesome5 name="user-circle" size={24} color={isColor(focused)} />;
                }

            },
            tabBarActiveTintColor: colors.MAIN_COLOR,
            tabBarInactiveTintColor: colors.GRAY_2_COLOR,
            })}
        >
            <Tab.Screen 
                name="Dashboard"
                component={Dashboard}
                options={{headerShown: false, tabBarLabel:() => {return null},}}
            />
            <Tab.Screen 
                name="Favorites" 
                component={Favorites} 
                options={{headerShown: false, tabBarLabel:() => {return null},}}
            />
            <Tab.Screen 
                name="Message" 
                component={Message} 
                options={{headerShown: false, tabBarBadge: 3, tabBarLabel:() => {return null},}}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile}
                options={{headerShown: false, tabBarLabel:() => {return null},}} 
            />
        </Tab.Navigator>
    )
}

export default AppRoutes;