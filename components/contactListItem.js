import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../utilize/colors';
import Avatar from './avatar';
export default function ContactListItem ({name, phone,onPress}){
    const initial =name[0].toUpperCase();

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
            <Avatar name={name} size={40}/>
            <View style={styles.details}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTittle}>{phone}</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    contactInfo:{
        flexDirection:'row',
        paddingVertical:16,
        paddingHorizontal:24,
        backgroundColor:colors.secondary,
        borderBottomColor:'gray',
        borderBottomWidth:0.3
    },
    details:{
        marginLeft:20

    },
    title:{
        color:colors.black,
        fontSize:16,
        fontWeidth:'bold'
    },
    subTittle:{
        color:colors.primary
    }
})