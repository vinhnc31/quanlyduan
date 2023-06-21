import React from "react";
import { StyleSheet, Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import home from "../Home";
import Account from "../Account";

import SearchBook from "../searchBook";
import FavouriteScreen from "../Favourite";

const Tab = createBottomTabNavigator();

const TabNaviagation = (props) => {

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(
          'Thông báo',
          'Bạn có chắc muốn thoát ứng dụng?',
          [
            { text: 'Không', style: 'cancel', onPress: () => {} },
            { text: 'Thoát', onPress: () => BackHandler.exitApp() },
          ],
          { cancelable: false }
        );
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );
  return (
    <Tab.Navigator
    initialRouteName={home}
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#62CDFF',
    },
  })}
  tabBarOptions={{
    activeTintColor: 'black',
  }}
  >
    <Tab.Screen
      name="home"
      component={home}
      options={{
        headerShown: true,
        tabBarIcon: ({ color,size, focused  }) => (
          <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
        ),
      }}
    />
    <Tab.Screen
      name="Yêu thích"
      component={FavouriteScreen}
      options={{
        headerShown: true,
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name={focused ? 'heart' : 'heart-outline'} color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused  }) => (
          <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={size}/>
        ),
      }}
    />
  </Tab.Navigator>
  );
};
export default TabNaviagation;
