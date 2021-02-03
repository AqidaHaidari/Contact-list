import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/profile';
export default function App() {
  return (
    <View style={styles.container}>
     <Profile name="Aqida" phone="0888888" email="aqida@gmail.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
