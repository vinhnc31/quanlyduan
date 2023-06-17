import React from "react";
import { StyleSheet, Text, View ,Image} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { BackHandler, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import home from "../Home";
import Account from "../Account";
import Favourite from "../Favourite";
import SearchBook from "../searchBook";

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
      screenOptions={({ route }) => {
        tabBarIcon = ({ focused, size, color }) => {
          let iconName;
          let rn = route.name;
          if (rn === "Home") {
            iconName = focused ? "Home" : "HomeOutlined";
            
          } else if (rn === "Favorite") {
            iconName = focused ? "Heart" : "HeartOutlined";
          } else if (rn === "Account") {
            iconName = focused ? "User" : "UserOutlined";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        };
      }}
      
     
      
    >
      <Tab.Screen name="home" component={home} options={{headerShown: true}} />  
      <Tab.Screen name="Tủ sách" component={Favourite}  options={{headerShown: true}}/>
      <Tab.Screen name="Account" component={Account}  options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};
export default TabNaviagation;
