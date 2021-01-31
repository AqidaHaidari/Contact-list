import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ContactListItem from '../components/contactListItem';
import colors from '../utilize/colors';
const contact=[
    {id:'1',name:'Aqida jan',phone:'01111111',email:'aqida@gmail.com'},
    {id:'2',name:'Nazi',phone:'011987767',email:'aqida@gmail.com'},
    {id:'3',name:'Sodab',phone:'08777811111',email:'aqida@gmail.com'},
    {id:'4',name:'Marjan',phone:'0000111111',email:'aqida@gmail.com'},
    {id:'5',name:'Zainab',phone:'09999999888',email:'aqida@gmail.com'},
    {id:'6',name:'Fati',phone:'087766666',email:'aqida@gmail.com'}
]
export default function contacts(){

 return(
    <FlatList data={contact}
    keyExtractor={(item)=>{
        item.id
    }} 
    renderItem={({item})=>{
        return <ContactListItem name={item.name} phone={item.phone} />
    }} />
 )

}
const styles=StyleSheet.create({
 
    
})