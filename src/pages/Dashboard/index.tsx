import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    FlatList 
} from 'react-native';

import { Logo } from '../../components/Logo';
import { ListPet } from '../../components/ListPet';

import { apiListFeed } from '../../mock';

export default function Dashboard() {
    return(
        <View style={styles.container}>
            <Logo/>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{flex:1}}
                data={apiListFeed}
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