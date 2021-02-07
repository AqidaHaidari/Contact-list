import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../utilize/colors';
export default function createContact(){
 return(
     <View style={styles.searchContainer}>
         <TextInput placeholder="Search . . ." style={styles.searchInput}/>
    </View>
 )

}
const styles=StyleSheet.create({
    searchContainer:{
        backgroundColor:colors.secondary
    },
    searchInput:{
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        backgroundColor:colors.white,
        borderRadius:10
    }
})