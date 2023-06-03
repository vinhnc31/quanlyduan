
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';


 

const chitiet = ({route,navigation}) => {

  const { item_sp } = route.params;

  const click =()=>{
      console.log(item_sp);
  }


  return (
    <View style={styles.container}>
      {/* <Image style={{ width: 230, height: 230, margin: 20, marginLeft: 70 }} source={require('../image/img1.png')} /> */}
      <Image style={{ width: 230, height: 230, margin: 20, marginLeft: 70 }} source={{ uri: 'http:192.168.0.102:4444/' + item_sp.image }}/>
     
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.texthihi}> {item_sp.Mauser}</Text>
        <Text style={styles.texthihi}>Tác giả: {item_sp.tacgia}</Text>
        <Text style={styles.texthihi}>Ngày xuất bản: {item_sp.ngayxuatban}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity style={styles.buttonhihi} onPress={click}>
          <Text style={{ fontWeight: '600' }}>Đọc Truyện</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonhihi1}>
          <Text style={{ fontWeight: '600' }}>Thêm vào giỏ sách</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ backgroundColor: '#62CDFF', fontWeight: 'bold', fontSize: 17, marginTop: 20, padding: 6 }}>Tóm tắt Nội dung</Text>
        <View>
        {/* <ScrollView style={{ margin: 5 }}> {item_sp.mota}    </ScrollView> */}
        <ScrollView>
          <Text > {item_sp.mota}   </Text>
        </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default chitiet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  texthihi: {
    fontSize: 20,
    margin: 3,
    fontWeight: '600'
  },
  buttonhihi: {
    width: 100,
    height: 28,
    backgroundColor: '#62CDFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.8,
    marginLeft: 20
  },
  buttonhihi1: {
    width: 150,
    height: 28,
    backgroundColor: '#62CDFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.8,
    marginLeft: 60,

  }
});