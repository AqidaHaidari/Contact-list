import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../utilize/colors';
import Avatar from './avatar';
import { MaterialCommunityIcons} from '@expo/vector-icons';
export default function ContactListItem ({name, phone,onPress,onDeleteContact}){
    const initial =name[0].toUpperCase();

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
            <Avatar name={name} size={50}/>
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTittle}>{phone}</Text>
            </View>
            <View style={styles.trash}>
            <MaterialCommunityIcons name='trash-can' size={24} color='red' onPress={onDeleteContact} />

            </View>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
     
        paddingLeft:24
    },
    contactInfo:{
        flex:1,
        flexDirection:'row',
        paddingVertical:16,
        paddingHorizontal:24,
        borderBottomWidth:0.3,
        borderBottomColor:colors.secondary
    },
    details:{
        flex:2,
        marginLeft:20

    },
    title:{
        color:colors.black,
        fontSize:16,
        fontWeidth:'bold'
    },
    subTittle:{
        color:colors.primary
    },
    trash:{
        flex:1

    }
})