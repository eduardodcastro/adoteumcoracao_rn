import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

import { Logo } from '../../components/Logo';
import { GridPet } from '../../components/GridPet';

import { apiListGrid } from '../../mock';



export default function Profile() {
    return(
        <View style={styles.container}>
            <Logo/>
            <View style={styles.publications}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                    data={apiListGrid}
                    keyExtractor={(item) => item.id_user}
                    renderItem={ ({item}) => <GridPet data={item} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    publications: {
        flex: 1,
    }
})