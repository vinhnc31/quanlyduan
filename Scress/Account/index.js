import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
const Account = (props) => {
  const navigation = props.navigation;
  const ondmk =() => {
    navigation.navigate('doimk');
  }
  return (
    <View style={styles.container}>
      <View style={styles.heard}>
        <Image style={styles.img} source={require("../../Avata/avata.png")} />
        <Text style={styles.text}>hoangtv@gmail.com</Text>
      </View>

      <Pressable style={styles.button} onPress={ () => ondmk()}>
        <Text style={styles.textButton}>Đổi mật khẩu</Text>
      </Pressable>

      <Pressable style={styles.button}>
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
  },
  img: {
    height: 104,
    width: 104,
    marginTop: 41,
    marginLeft: 31,
  },
  text: {
    fontSize: 16,
    marginLeft: 31,
    marginTop: 10,
  },
  button: {
    width: "95%",
    height: 63,
    backgroundColor: "#62CDFF",
    marginTop: 35,
    marginLeft: 10,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    textAlign: "center",
    lineHeight: 63,
  },
});

export default Account;
