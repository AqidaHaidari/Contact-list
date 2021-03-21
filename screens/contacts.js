import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import ContactListItem from '../components/contactListItem';
import colors from '../utilize/colors';
import {Feather} from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('contacts.db');//for db


export default function contacts({navigation}){
    const [contact,setContacts]=useState([]); //for db
    useEffect(()=>{
        db.transaction(tx=>{
            tx.executeSql('select * from contact' ,[],(tx,{rows})=>{
                var data=[];
                for(var i=0; i<rows.length; i++){
                    data.push(rows[i]);
                }
                setContacts(data);
            })
        })
    })
    const deleteContact=(id)=>{
        db.transaction(tx=>{
            tx.executeSql('delete from contact where id=?',[id]);
        })
    }
 return(
     <View>
   {
    contact.length>0?
        <FlatList data={contact}
        keyExtractor={(item)=>{
            item.id
        }} 
        renderItem={({item})=>{
            return <ContactListItem name={item.name} phone={item.phone} onPress={()=>navigation.navigate('Profile',{item:item})} onDeleteContact={()=>onDeleteContact(item.id)}/>
        }} />:
        <View>
            <Text>there is no contact</Text>
        </View>
      }
    <TouchableOpacity  onPress={()=>navigation.navigate('CreateContact')} style={styles.floatButton}>
        <Text>
            <Feather name="plus" size={28} color="white"></Feather>
        </Text>
    </TouchableOpacity>
    </View>
 )

}
const styles=StyleSheet.create({
 
    floatButton:{
        backgroundColor:"orange",
        padding:20,
        borderRadius:"50%",
        right:40,
        bottom:40,
        position:"absolute"
    }
})