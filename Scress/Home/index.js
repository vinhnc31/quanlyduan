import React from 'react';
import { ScrollView, FlatList, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { API_PRODUCT } from '../../helper/Api';
import { API_THELOAI } from '../../helper/Api';
import chitiet from './chitiet';

const home = (props) => {
  
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const navigation = props.navigation;
  const chuyenMh = (item) => {
    navigation.navigate(chitiet,{item});
    
  }

  const getProducttl = () => {
    fetch(API_THELOAI + "/getAlltl")
      .then(item => item.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }



  const getProduct = () => {
    fetch(API_PRODUCT + "/getAllsp")
      .then(item => item.json() ,  )
   
      .then(data1 => setData1(data1) )
      .catch(err => console.log(err))
  }

  useEffect((item) => {
    getProducttl()
    getProduct()
  
  }, [])







  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginLeft: 10 }}>
        Thể loại
      </Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              {/* <Image source={{ uri: item.imgTheloai }} style={styles.itemImage} /> */}
              <Text style={styles.itemName}>{item.nameTheloai}</Text>
            </View>

          );
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginLeft: 10 }}>
        Top sách xem nhiều nhất
      </Text >
      <View style={styles.vertical} >
        <FlatList
          data={data1}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>{navigation.navigate('chitiet',{ item_sp:item});}}>
              <View style={styles.itemContainer2}>
              
                {/* ahhahahahahahkkkkkkkkkkkkkkkkkkkkkkkkkkkkk */}
              <Image source={{ uri: 'http:192.168.0.102:4444/' + item.image }} style={styles.itemImage2}  />
                <Text style={styles.itemName2}>{item.Tenuser}</Text>
                
              </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, marginLeft: 20 }}>
        Đề xuất
      </Text >
      <View style={styles.vertical} >
        <FlatList
          data={data1}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() =>{navigation.navigate('chitiet',{ item_sp:item});}}>
              <View style={styles.itemContainer2}>
                <Image source={{ uri: 'http:192.168.0.102:4444/' + item.image }} style={styles.itemImage2} />
                <Text style={styles.itemName2}>{item.Tenuser}</Text>
              </View>
              </TouchableOpacity>

            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
    margin: 8,
    marginTop: 20

  },


  itemImage: {
    width: 70,
    height: 70,
    textAlign: 'center',
    borderRadius: 50,
  },
  itemName: {
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

  },
  searchInput: {
    height: 50,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',

  },
  vertical: {
    flex: 1,
    height: "100%",
    paddingLeft: 10


  },

  itemContainer2: {
    alignItems: 'center',
    marginLeft: 27,
    margin: 10,
    marginTop: 20
  },
  itemImage2: {
    flex: 1,
    width: 150,
    height: 100,
    borderWidth: 3,

    borderColor: '#ccc',
  },

  itemName2: {
    fontSize: 16,
    marginTop: 8,

  },




});

export default home;