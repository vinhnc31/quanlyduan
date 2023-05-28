import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const SplashScreen = (props) => {
  const navigation = props.navigation;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Dangnhap');
    }, 2000); // Set the desired delay in milliseconds

    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require("../../Avata/avata.png")} />
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
});
export default SplashScreen;
