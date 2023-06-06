import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

const Account = (props) => {
  const navigation = props.navigation;

  const [authInfo, setAuthInfo] = useState(AsyncStorage.getItem('authInfo'));
  
  const ondmk = () => {
    navigation.navigate('doimk');
  }

  // Funtion lấy data login từ AsyncStorage bộ nhớ tạm
  const duLieuTamThoi = async () => {
    try {
        const authInfo = await AsyncStorage.getItem('authInfo');
        if (authInfo !== null) {
            console.log('authInfo của bộ nhớ tạm thời', authInfo);
            setAuthInfo(JSON.parse(authInfo));
        }
    }catch (error) {
        console.log(error);
    }
  };

  // hàm logout
  const doLogout = () => {
    AsyncStorage.removeItem('authInfo');
    navigation.reset({
        index: 0,
        routes: [{name: 'Dangnhap'}]
    });
  };

  useEffect(() => {
    duLieuTamThoi();
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.heard}>
        <Image style={styles.img} source={require("../../Avata/avata.png")} />
        <View>
          <Text style={styles.title}>Tài khoản của bạn</Text>
          <Text style={styles.text}>{authInfo.email}</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={() => ondmk()}>
        <Text style={styles.textButton}>Đổi mật khẩu</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => doLogout()}>
        <Text style={styles.textButton}>Đăng Xuất</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heard: {
    width: "100%",
    height: 186,
    backgroundColor: "#62CDFF",
    flexDirection: 'row'
  },
  title: {
    fontSize: 20, width: 184, height: 33, marginTop: 24
  },
  img: {
    height: 104,
    width: 104,
    marginTop: 41,
    marginLeft: 31,
  },
  text: {
    height: 33,
    fontWeight: "400",
    fontSize: 16,
    marginLeft: 21,
    marginTop: 30,
  },
  button: {
    width: "95%",
    height: 63,
    backgroundColor: "#62CDFF",
    marginTop: 33,
    marginLeft: 10,
    borderRadius: 20,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
    alignSelf: "center",
    lineHeight: 63,
    width: "100%",
    height: 63,
    fontWeight: "500",
  },
});

export default Account;
