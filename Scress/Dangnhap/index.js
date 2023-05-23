import { Text, View, Pressable, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import dangky from "../Dangky";
import home from "../Home";
import { API_USE } from '../../helper/Api';
const dangnhap = (props) => {
    const navigation = props.navigation;
    navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
    });
    const chuyenMh = (props) => {
        navigation.navigate(props);
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
      
    const onLogin = () => {
        const data = {
            email, password
        }
        fetch(API_USE + "/dangnhap", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(reponse => {
            if (!reponse.ok) {
                setError("Tài khoản không chính xác !")
            } else {
                navigation.navigate("Home")
            }
        }).catch(err => console.log(err))

    }
    return (
        <View style={styles.container}>

        <Text> hoof triinh</Text>
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                style={styles.input}
            />

            <Pressable style={{ width: 100, height: 50, borderWidth: 2, marginTop: 10, backgroundColor: "blue", borderRadius: 10, alignSelf: "center" }} onPress={() => onLogin()}  >
                <Text style={{ textAlign: 'center', justifyContent: "center", padding: 10, color: "white" }}>Dang nhap</Text>
            </Pressable>

            <TouchableOpacity onPress={() => chuyenMh(dangky)}>
                <Text style={styles.registerText}>Don't have an account? Register here</Text>
            </TouchableOpacity>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
    },
    registerText: {
        marginTop: 10,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default dangnhap;