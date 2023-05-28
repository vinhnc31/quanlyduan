import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Account = (props) => {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <Text>Man hinh Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Account