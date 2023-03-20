import {
  StyleSheet,
  Text,
  View, 
  StatusBar
} from 'react-native';

import { colors } from './src/exports/Colors';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={colors.GRAY_COLOR}
        barStyle='dark-content'
        translucent={false}
      />
      <Routes/>
    </NavigationContainer>
  );
}
