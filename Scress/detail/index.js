import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { API_BOOK,API_URL } from "../../helper/Api";
const chitiet = ({ route, navigation }) => {
  const { item_sp } = route.params;

  const toReadBook =()=>{
    navigation.navigate('ReadBook', {Item: item_sp});
      console.log(JSON.stringify(item_sp));
  }




  const sangtusach = () => {
    navigation.navigate('Favourite', { item_sp: item_sp });
    alert('Thêm thành công');
  }
  return (
    <View style={styles.container}>
      <Image style={{ width: 230, height: 230, margin: 20, alignSelf: 'center' }} source={{ uri: API_URL+ '/' + item_sp.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item_sp.nameBook}</Text>
        <Text style={styles.author}>Tác giả: {item_sp.author}</Text>
        <Text style={styles.date}>Ngày xuất bản: {item_sp.date}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toReadBook}>
          <Text style={styles.buttonText}>Đọc Truyện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={sangtusach}>
          <Text style={styles.buttonText}>Thêm vào giỏ sách</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Tóm tắt Nội dung</Text>
        <ScrollView style={styles.summaryScrollView}>
          <Text style={styles.summaryText}>{item_sp.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default chitiet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 230,
    height: 230,
    margin: 20,
    marginLeft: 70,
  },
  detailsContainer: {
    marginLeft: 30,
  },
  title: {
    fontSize: 20,
    margin: 3,
    fontWeight: '600',
  },
  author: {
    fontWeight: 'normal',
  },
  date: {
    fontWeight: 'normal',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 100,
    height: 28,
    backgroundColor: '#62CDFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.8,
    marginLeft: 20,
  },
  buttonText: {
    fontWeight: '600',
  },
  summaryContainer: {
    marginTop: 20,
  },
  summaryTitle: {
    backgroundColor: '#62CDFF',
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
    padding: 6,
  },
  summaryScrollView: {
    height: 165,
  },
  summaryText: {
    marginHorizontal: 15,
    marginTop: 5,
  },
});
