import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image ,TextInput , Button ,TouchableOpacity} from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source = {require('../assets/home.png')}/>
      <Text style={styles.text}>Home Page</Text>
      <StatusBar style="auto" />
    <TouchableOpacity style={styles.SignUpbtn}  onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.SignUpText}>Register</Text> 
      </TouchableOpacity> 
    <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
    </View>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorchid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight:'bold',
    color : 'black',
    fontSize : 30,
    padding: 20
  },
  image :{
    marginBottom: 10,
    width: 200,
    height: 200,
  },
      SignUpbtn: {
        width: "50%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom:20,
        backgroundColor: "orange",
    },
    loginBtn: {
      width: "50%",
      borderRadius: 15,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom:10,
      backgroundColor: "orange",
    },
    loginText: {
      fontWeight: 'bold',
      fontSize: 18
    },
    SignUpText: {
      fontWeight: 'bold',
      fontSize: 20
    }
});