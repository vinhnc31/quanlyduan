import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { API_USE } from "../../helper/Api";
const dangky = (props) => {
  const navigation = props.navigation;
  const chuyenMh = (props) => {
    navigation.navigate(props);
  };
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogout = () => {
    const data = {
      name,
      email,
      password,
    };
    fetch(API_USE + "/dangky", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((reponse) => {
        if (!reponse.ok) {
          setError("Tài khoản không chính xác !");
        } else {
          navigation.navigate("Dangnhap");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ĐĂNG KÝ</Text>
      <TextInput
        placeholder="Name"
        onChangeText={setname}
        value={name}
        style={styles.input}
      />
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

      <Pressable style={styles.button} onPress={() => onLogout()}>
        <Text style={styles.textButton}>ĐĂNG KÝ</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#62CDFF",
  },
  input: {
    width: 364,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 32,
    marginBottom: 87,
    marginTop: -80,
  },
  button: {
    width: 150,
    height: 50,
    borderWidth: 2,
    marginTop: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignSelf: "center",
  },
  textButton: {
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
    color: "#000000",
    fontSize: 20,
  },
});

export default dangky;
