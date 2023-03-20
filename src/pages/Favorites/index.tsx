import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import { Logo } from '../../components/Logo';
import { ListPet } from '../../components/ListPet';

import { apiListFavorites } from '../../mock';

export default function Favorites() {
    return(
        <View style={styles.container}>
            <Logo/>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                data={apiListFavorites}
                keyExtractor={(item) => item.id_user}
                renderItem={ ({item}) => <ListPet data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})