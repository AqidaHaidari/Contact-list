import React,{useState} from 'react';
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
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('contacts.db');//for db

export default function createContact({navigation}){
    const [name, setName]=useState(null);
    const [phone, setPhone]=useState(null);
    const [email, setEmail]=useState(null);
    const addContact=(name,phone,email)=>{
        db.transaction(tx=>{
            tx.executeSql('insert into contact(name, phone, email) values(?,?,?);',[name,phone,email],()=>navigation.navigate('Contacts'));
        })
    }
 return(
     <View style={styles.formContainer}>
        <TextInput placeholder="name" style={styles.input} value={name} onChangeText={(name)=>{setName(name)}}/>
        <TextInput placeholder="email"style={styles.input} keyboardType="email-address" value={email} onChangeText={(email)=>{setEmail(email)}}/>
        <TextInput placeholder="phone" style={styles.input} keyboardType="numeric" value={phone} onChangeText={(phone)=>{setPhone(phone)}}/>
        <TouchableOpacity style={[styles.btn,{backgroundColor:colors.primary}]} onPress={()=>addContact(name,phone,email)}>
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