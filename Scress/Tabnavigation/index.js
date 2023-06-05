import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import home from "../Home";
import Account from "../Account";
import Favourite from "../Favourite";

const Tab = createBottomTabNavigator();

const TabNaviagation = (props) => {
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
      <Tab.Screen name="Favorite" component={Favourite}  options={{headerShown: false}}/>
      <Tab.Screen name="Account" component={Account}  options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};
export default TabNaviagation;
