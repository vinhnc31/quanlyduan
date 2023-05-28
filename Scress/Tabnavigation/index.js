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
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (rn === "Favorite") {
            iconName = focused ? "favorite" : "favorite-outline";
          } else if (rn === "Account") {
            iconName = focused ? "account" : "account-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        };
      }}
    >
      <Tab.Screen name="home" component={home} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Favorite" component={Favourite} />
    </Tab.Navigator>
  );
};
export default TabNaviagation;
