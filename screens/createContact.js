import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ContactListItem from '../components/contactListItem';
import colors from '../utilize/colors';
export default function createContact(){
 return(
     <View style={styles.formContainer}>
        <TextInput placeholder="name" style={styles.input}/>
        <TextInput placeholder="email"style={styles.input} keyboardType="email-address" />
        <TextInput placeholder="phone" style={styles.input} keyboardType="numeric"/>
        <TouchableOpacity style={[styles.btn,{backgroundColor:colors.primary}]}>
            <Text style={styles.btnTxt}>Save</Text>
        </TouchableOpacity>
         <TouchableOpacity style={[styles.btn,{backgroundColor:'red'}]}>
            <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
    </View>
 )

}
const styles=StyleSheet.create({

  formContainer:{
      borderRadius:30,
      marginTop:60,
      paddingVertical:20,
      paddingHorizontal:40,
      backgroundColor:colors.white
  },
  input:{
      paddingBottom:10,
      marginBottom:10,
      borderBottomColor:colors.secondary,
      borderBottomWidth:1
  },
  btn:{
      padding:20,
      marginTop:20,
      borderRadius:5,
      justifyContent:'center',
      alignItems:"center"
  },
  btnTxt:{
      color:colors.white
  }
})