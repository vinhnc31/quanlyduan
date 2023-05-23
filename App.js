import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import dangnhap from './Scress/Dangnhap';
import dangky from './Scress/Dangky';
import home from './Scress/Home';



const App = () =>{
  return (
    <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>
     <Stack.Screen name='Dangnhap' component={dangnhap}/>
     <Stack.Screen name='dangky' component={dangky}/>
     <Stack.Screen name='Home' component={home}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
