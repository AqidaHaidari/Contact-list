import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import Contacts from "./screens/contacts"
import Profile from './screens/profile';
import CreateContact from "./screens/createContact"
import SearchScreen  from "./screens/searchScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Contacts' component={Contacts} 
        options={({navigation})=>({
         headerRight:()=>(
           <TouchableOpacity style={{paddingRight:24}} onPress={()=>navigation.navigate('SearchScreen')}>
             <Text>
               <MaterialIcons  name='search' size={24} color='black' />
             </Text>
           </TouchableOpacity>
         )
        })}
        />
        <Stack.Screen name='CreateContact' component={CreateContact} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='SearchScreen' component={SearchScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:"#f8f4f4"
  },
});
