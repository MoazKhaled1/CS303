import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../Firebase';


export default function SignUp({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [username, setUsername] = useState("");
    const handleSignUp = () =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed Up 
        console.log('Signed Up Successfully')
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign Up With Us</Text>
            <StatusBar style="auto" />
            {/* <View style={styles.inputView}>
                <TextInput style={styles.inputText}
                    placeholder="UserName"
                    placeholderTextColor="#003f5c"
                    onChangeText={username => setUsername(username)}
                />
            </View> */}
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
        
            <TouchableOpacity style={styles.SignUpbtn} onPress={handleSignUp}>
                <Text style={styles.SignUpText}>SignUp</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.Backbtn}  onPress={() => navigation.navigate("Home")}>
                <Text style={styles.SignUpText}>Go Back</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'indigo',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'darkorange',
        fontSize: 30,
        padding: 30
    },
    image: {
        marginBottom: 10,
        width: 200,
        height: 200,
    },
    SignUpbtn: {
        width: "35%",
        borderRadius: 20,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 190,
        marginTop: 20,
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
        padding: 30
    },
    inputText: {
        fontWeight: 'bold',
        fontSize: 20,
        height: 50,
        color: "white"
    },
    SignUpText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});