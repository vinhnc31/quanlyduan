import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import dangnhap from "./Scress/Dangnhap";
import dangky from "./Scress/Dangky";
import SplashScreen from "./Scress/Splash";
import TabNaviagation from "./Scress/Tabnavigation";
import doimk from "./Scress/doimatkhau";
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dangnhap"
          component={dangnhap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="dangky"
          component={dangky}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={TabNaviagation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="doimk"
          component={doimk}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
