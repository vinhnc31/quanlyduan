import {
  Text,
  View,
  Pressable,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  CheckBox
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import dangky from "../Dangky";
import home from "../Home";
import { API_USE } from "../../helper/Api";
const dangnhap = (props) => {
  const navigation = props.navigation;
  const chuyenMh = (props) => {
    navigation.navigate(props);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Funtion lưu thông tin authentication vào AsyncStorage
  const storageAutheInfo = async (value) => {
    try {
        const authInfo = JSON.stringify(value);
        await AsyncStorage.setItem('authInfo', authInfo);
    } catch (error) {
        console.log(error);
    }
  };

  const onLogin = () => {

    // const data = {
    //   email,
    //   password,
    // };
    // fetch(API_USE + "/dangnhap", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((reponse) => {
    //     if (!reponse.ok) {
    //       setError("Tài khoản không chính xác !");
    //     } else {
            let request = {email, password};
            storageAutheInfo(request);
    //       navigation.navigate("Home");
    //     }
    //   })
    //   .catch((err) => console.log(err));

    navigation.navigate("Home")
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ĐĂNG NHẬP</Text>
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
      
      <Pressable style={styles.button} onPress={() => onLogin()}>
        <Text style={styles.textButton}>Đăng Nhập</Text>
      </Pressable>
      <View style = {styles.viewRegister}>
        <Text style={styles.registerText}>
          Bạn chưa có tài khoản? 
          <TouchableOpacity  onPress={() => chuyenMh(dangky)}>
            <Text style={styles.btnRegister}>Đăng ký</Text>
          </TouchableOpacity>
        </Text>
      </View>
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
  registerText: {
    color: "black",
    fontSize: 16,
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
  btnRegister: {
    fontSize: 16,
    marginTop:15,
    color: "#0093FD",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  viewRegister: { 
    marginTop : 20
  }
});

export default dangnhap;
