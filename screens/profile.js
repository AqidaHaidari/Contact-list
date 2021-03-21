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
import ContactThumnail from "../components/contactThumnail";
import DetailsListItems from '../components/detailsListItems';
export default function Profile(props){
    const {route}=props;
    const {item} =route.params;
    const  {name, email,phone}=item
 return(
     <View style={styles.container}>
         <View style={styles.thumbnailSection}>
             <ContactThumnail name={name} phone={phone}/>
         </View>
         <View style={styles.detailSection}>
             <DetailsListItems icon="email" tilte="Email" subTitle={email}/>
             <DetailsListItems icon="phone" tilte="Work" subTitle={phone}/>
         </View>
    </View>
 )

}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    thumbnailSection:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:colors.primary,
        borderBottomWidth:1,
        borderBottomColor:colors.secondary
    },
    detailSection:{
        paddingTop:10,
        flex:1
    }
  
})