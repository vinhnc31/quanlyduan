import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Favourite = (props) => {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <Text>Man hinh Account 32222</Text>
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
export default Favourite