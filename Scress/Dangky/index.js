import { Text, View, Pressable, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { API_USER_ADD } from "../../helper/Api";
const dangky = (props) => {
  const navigation = props.navigation;
  const chuyenMh = (props) => {
    navigation.navigate(props);
  };
  const [nameUser, setnameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [repassword, setRepassword] = useState("");
  const [checkValidateName, setCheckValidateName] = useState(true);
  const [checkValidateEmail, setCheckValidateEmail] = useState(false);
  const [checkValidatePwd, setCheckValidatePwd] = useState(false);

  const onLogout = () => {
    const data = {
      nameUser,
      email,
      password,
    }
   2

    fetch('http://192.168.1.182:4000/User/addUser', {
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
  const handlerCheckName = (text) => {
    const name = text == '';
    setnameUser(text);
    !name ? setCheckValidateName(false) : setCheckValidateName(true);
  };

  const handlerCheckEmail = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setEmail(text);
    reg.test(text) ? setCheckValidateEmail(false) : setCheckValidateEmail(true);
  };
  const handlerCheckPwd = (text) => {
    const pwd = text === password;
    checkValidatePwd(text);
    pwd ? setCheckValidatePwd(false) : setCheckValidatePwd(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ĐĂNG KÝ</Text>

      <TextInput
        placeholder="nameUser"
        onChangeText={(text) => {
          handlerCheckName(text);
        }}
        value={nameUser}
        style={styles.input}
      />
         {checkValidateName ? (
        <Text style={styles.checkText}>Tên không được để trống !</Text>
      ) : (
        <Text></Text>
      )}

      <TextInput
        placeholder="Email"
        value={email}
        style={styles.input}
        onChangeText={(text) => {
          handlerCheckEmail(text);
        }}
      />
      {checkValidateEmail ? (
        <Text style={styles.checkText}>Email sai định dạng</Text>
      ) : (
        <Text></Text>
      )}
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
     <TextInput
        placeholder="Comfirm Password"
        onChangeText={setRepassword}
        value={repassword}
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
    // alignItems: "center",
    backgroundColor: "#62CDFF",
  },
  input: {
    width: '100%',
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
    textAlign: 'center',
    fontWeight: 'bold'
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
  checkText: {
    fontSize: 16,
    color: "red",
  },
});

export default dangky;
