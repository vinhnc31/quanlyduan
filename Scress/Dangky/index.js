import { Text,View, Pressable,TextInput,StyleSheet} from "react-native";
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { API_USE } from '../../helper/Api';
const dangky = (props) => {
    const navigation = props.navigation;
    const chuyenMh = (props) => {
        navigation.navigate(props);
    }
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  



    const onLogout = () => {
      const data = {
         name, email, password
      }
      fetch(API_USE + "/dangky", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json"
          }
      }).then(reponse => {
          if (!reponse.ok) {
              setError("Tài khoản không chính xác !")
          } else {
              navigation.navigate("Dangnhap")
          }
      }).catch(err => console.log(err))

  }
    return(
   <View style={styles.container}>
      <TextInput
        placeholder="Name"
        onChangeText={setname}
        value={name}
        style={styles.input}
      />
  <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        style={styles.input}
      />
     
   
    <Pressable style={{ width: 100, height: 50, borderWidth: 2, marginTop: 10, backgroundColor: "blue", borderRadius: 10, alignSelf: "center" }} onPress={() => onLogout()} >
                <Text style={{ textAlign: 'center', justifyContent: "center", padding: 10,color:"white" }}>Dang ky</Text>
   </Pressable>
   
   </View>
   

    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '80%',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 10,
    },
  });

export default dangky;