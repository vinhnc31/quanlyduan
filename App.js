import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import dangnhap from "./Scress/Dangnhap";
import dangky from "./Scress/Dangky";
import SplashScreen from "./Scress/Splash";
import TabNaviagation from "./Scress/Tabnavigation";
import doimk from "./Scress/doimatkhau";
import { BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import chitiet from "./Scress/detail";
import SearchBook from "./Scress/searchBook";
import favourite from "./Scress/Favourite";
import readBook from "./Scress/ReadBook";


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
        <Stack.Screen
          name="detail"
          component={chitiet}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="searchBook"
          component={SearchBook}
          options={{ headerShown: false }}
        />
        <Stack.Screen

          name="Favourite"
          component={favourite}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReadBook"
          component={readBook}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
