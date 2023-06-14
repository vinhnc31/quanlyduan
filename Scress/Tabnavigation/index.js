import React from "react";
import { StyleSheet} from 'react-native';
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
          headerShown: false,
          tabBarIcon: ({ color,size, focused  }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          headerShown: false,
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
