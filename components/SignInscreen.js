import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase';

export default function Login({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignin = () =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log('Welcome Back')
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome Back</Text>
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={email => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={password => setPassword(password)}
                />
            </View>
        
            <TouchableOpacity style={styles.SignInbtn} onPress={handleSignin}> 
                <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Backbtn}  onPress={() => navigation.navigate("Home")}>
                <Text style={styles.LoginText}>Go Back</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkviolet',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
        padding: 20
    },
    // image: {
    //     marginBottom: 10,
    //     width: 200,
    //     height: 200,
    // },
    SignInbtn: {
        width: "35%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 190,
        marginBottom: 20,
        backgroundColor: "orange",
    },
    Backbtn: {
        width: "35%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -190,
        marginTop: -70,
        marginBottom: 20,
        backgroundColor: "orange",
    },   
    inputView: {
        width: "80%",
        backgroundColor: "orangered",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 50,
        color: "white"
    },
    LoginText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});