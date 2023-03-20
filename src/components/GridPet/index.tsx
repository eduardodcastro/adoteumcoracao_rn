import React from 'react';

import { 
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';

import { colors } from '../../exports/Colors';

import { ItemProps } from '../../exports/Props';

const {width: WIDTH} = Dimensions.get('window') 

export function GridPet({data}: ItemProps) {

    return(
        <Image
            style={styles.gridImage}
            source={{ uri: data.pet_photo }}
        />
    )
}

const styles = StyleSheet.create({
    gridImage: {
        width: (WIDTH/3),
        height: 120,
        marginBottom: 1,
        marginHorizontal: 1
    }
})
