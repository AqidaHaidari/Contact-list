import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../utilize/colors';
import Avatar from './avatar';
export default function ContactThumnail ({name, phone}){
    const initial =name[0].toUpperCase();

    return (
        <View style={styles.thumnailContainer}>
            <Avatar name={name} size={90}/>
            <Text style={styles.name}>
                {name}
            </Text>
            <Text style={styles.phone}>
                {phone}
            </Text>
        </View>
        
    )
}
const styles=StyleSheet.create({
    thumnailContainer:{
        justifyContent:"center",
        alignItems:'center'
    },
    name:{
        fontSize:16,
        fontWeight:"bold",
        color:colors.white
    },
    phone:{
        fontSize:16,
        fontWeight:"bold",
    }
})