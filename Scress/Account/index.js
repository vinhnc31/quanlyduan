import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Pressable } from "react-native";
const Account = (props) => {
  const navigation = props.navigation;
  const ondmk = () => {
    navigation.navigate('doimk');
  }
  return (
    <View style={styles.container}>
      <View style={styles.heard}>
        <Image style={styles.img} source={require("../../Avata/avata.png")} />
        <View>
          <Text style={styles.title}>Tài khoản của bạn</Text>
          <Text style={styles.text}>hoangtv@gmail.com</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={() => ondmk()}>
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
    width: 150,
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
