import React from 'react';

import { 
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

import { colors } from '../../exports/Colors';

import { Entypo, FontAwesome } from '@expo/vector-icons'; 

import { ItemProps } from '../../exports/Props';

export function ListPet({data}: ItemProps) {

    // console.log(data.name_user);

    return(
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                {data.photo_user && (
                    <Image
                        style={styles.imagePhoto}
                        source={{ uri: data.photo_user }}
                    />
                )}

                <Text style={styles.textPhoto}>{data.name_user}</Text>
            </View>
            <Image
                style={styles.imagePet}
                source={{ uri: data.pet_photo }}
            />
            <View style={styles.tools}>
                <TouchableOpacity>
                    <Entypo 
                        name="star-outlined" 
                        size={24} 
                        color={colors.MAIN_COLOR}
                        style={styles.toolsStart}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome name="send-o" size={24} color={colors.MAIN_COLOR} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom: 15,
    },
    containerProfile: {
        paddingHorizontal: '4%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    imagePhoto: {
        width: 32,
        height: 32,
        borderRadius: 32/2,
        marginRight: 4,
    },
    textPhoto: {
        color: colors.GRAY_3_COLOR
    },
    imagePet: {
        width: '100%',
        height: 566,
    },
    tools: {
        paddingHorizontal: '4%',
        paddingVertical: '2%',
        flexDirection: 'row'
    },
    toolsStart: {
        marginRight: 10,
    }
})
