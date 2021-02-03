import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ContactListItem from '../components/contactListItem';
import colors from '../utilize/colors';
import {Feather} from '@expo/vector-icons';
const contact=[
    {id:'1',name:'Aqida jan',phone:'01111111',email:'aqida@gmail.com'},
    {id:'2',name:'Nazi',phone:'011987767',email:'aqida@gmail.com'},
    {id:'3',name:'Sodab',phone:'08777811111',email:'aqida@gmail.com'},
    {id:'4',name:'Marjan',phone:'0000111111',email:'aqida@gmail.com'},
    {id:'5',name:'Zainab',phone:'09999999888',email:'aqida@gmail.com'},
    {id:'6',name:'Fati',phone:'087766666',email:'aqida@gmail.com'},{id:'1',name:'Aqida jan',phone:'01111111',email:'aqida@gmail.com'},
    {id:'7',name:'Nazi',phone:'011987767',email:'aqida@gmail.com'},
    {id:'8',name:'Sodab',phone:'08777811111',email:'aqida@gmail.com'},
    {id:'9',name:'Marjan',phone:'0000111111',email:'aqida@gmail.com'},
    {id:'10',name:'Zainab',phone:'09999999888',email:'aqida@gmail.com'}
]
export default function contacts(){
 return(
     <View>
    <FlatList data={contact}
    keyExtractor={(item)=>{
        item.id
    }} 
    renderItem={({item})=>{
        return <ContactListItem name={item.name} phone={item.phone} />
    }} />
    <View style={styles.floatButton}>
        <Text>
            <Feather name="plus" size={28} color="white"></Feather>
        </Text>
    </View>
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