import { useEffect, useState } from "react";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_UPDATE_USER, API_USER } from "../../helper/Api";

const doimk = (props) => {
  const navigation = props.navigation;

  const [data, setData] = useState([]);

  const [idUser, setIduser] = useState('');
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPasswordError, setOldPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [authInfo, setAuthInfo] = useState(AsyncStorage.getItem("authInfo"));

  const getIdUser =  async () => {
    const idUser = await data
      .filter((user) => user.email.includes(authInfo.email))
      .map((user) => user._id);
    console.log("idUser: ", idUser);
    setIduser(idUser);
  };

  // Funtion lấy data login từ AsyncStorage bộ nhớ tạm
  const duLieuTamThoi = async () => {
    try {
      const authInfo = await AsyncStorage.getItem("authInfo");
      if (authInfo !== null) {
        console.log("authInfo của bộ nhớ tạm thời", authInfo);
        setAuthInfo(JSON.parse(authInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // danh sach users
  const getUsers = () => {
    fetch(API_USER)
      .then((item) => item.json())
      .then((data) => {
        console.log("List user" + JSON.stringify(data));
        setData(data);
      })
      .catch((err) => console.log("loi: " + err));
  };
  if (idUser.length === 0) {
    setTimeout(() => {
        getIdUser();
      }, 2000);
  }

  useEffect(() => {
    duLieuTamThoi();
    getUsers();
  }, []);

  const validateOldPassword = () => {
    if (oldPassword.length === 0) {
      setOldPasswordError("Mật cũ không được để trống");
      return false;
    } else if (oldPassword !== authInfo.password) {
      setOldPasswordError("Mật khẩu không chính xác !");
      return false;
    } else {
      setOldPasswordError("");
    }
  };

  const validateNewPassword = () => {
    if (newPassword.length === 0) {
      setNewPasswordError("Mật khẩu mới được để trống");
      return false;
    } else {
      setNewPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.length === 0) {
      setConfirmPasswordError("Xác nhận mật không được để trống");
      return false;
    } else if (confirmPassword !== newPassword) {
      setConfirmPasswordError("Xác nhận mật khẩu không giống với mật khẩu mới");
      return false;
    } else {
      setConfirmPasswordError("");
    }
  };

  const navigateToAccount = () => {
    navigation.navigate("Dangnhap");
  };
  const doLogout = () => {
    AsyncStorage.removeItem('authInfo');
    navigation.reset({
        index: 0,
        routes: [{name: 'Dangnhap'}]
    });
  };

  const handleSubmit = () => {
    validateOldPassword();
    validateNewPassword();
    validateConfirmPassword();
    if (!oldPasswordError && !newPasswordError && !confirmPasswordError) {
      fetch(API_UPDATE_USER, {
        method: "PUT",
        body: JSON.stringify({ id: idUser, password: newPassword }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((reponse) => {
        console.log('reponse'+ JSON.stringify(reponse));
          if (!reponse.ok) {
            Alert.alert("Thông Báo", "Đổi mật khẩu thất bại !", [
                { text: "OK"},
              ]);
          } else {
            Alert.alert("Thông Báo", "Mật khẩu đã được thay đổi thành công !", [
              { text: "OK", onPress: () => doLogout() },
            ]);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  const toBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textBack} onPress={() => {toBack()}}>Back</Text>
      <Text style={styles.text}>DỔI MẬT KHẨU</Text>
      <TextInput
        placeholder="Old password"
        onChangeText={setOldPassword}
        value={oldPassword}
        style={styles.input}
        secureTextEntry={false}
        onBlur={validateOldPassword}
      />
      {oldPasswordError ? (
        <Text style={styles.checkText}>{oldPasswordError}</Text>
      ) : null}
      <TextInput
        placeholder="New Password"
        onChangeText={setNewPassword}
        value={newPassword}
        style={styles.input}
        secureTextEntry={true}
        onBlur={validateNewPassword}
      />
      {newPasswordError ? (
        <Text style={styles.checkText}>{newPasswordError}</Text>
      ) : null}
      <TextInput
        placeholder="Comfirm Password"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        style={styles.input}
        secureTextEntry={true}
        onBlur={validateConfirmPassword}
      />
      {confirmPasswordError ? (
        <Text style={styles.checkText}>{confirmPasswordError}</Text>
      ) : null}

      <Pressable style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.textButton}>SUMIT</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#62CDFF",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    height: 53,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
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
    marginLeft: 20,
    fontSize: 16,
    color: "#FF0000",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 32,
    marginBottom: 87,
    marginTop: -80,
    textAlign: "center",
    fontWeight: "bold",
  },
  textBack: {
    fontSize: 16,
    marginBottom: 120,
    marginLeft: 10,
    marginTop: -120,
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: 'flex-start'
  },
});
export default doimk;