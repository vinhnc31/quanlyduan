import React, { useEffect, useState } from "react";
import { ScrollView, FlatList, View, Text, TextInput, StyleSheet,Image } from "react-native";
import {API_URL, API_BOOK } from "../../helper/Api";

const  Home= (props) => {
  const navigation = props.navigation;
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");
  
  const getProduct = () => {
    fetch(API_BOOK)
        .then(item => item.json())
        .then(data => {
           console.log(data);
          setData(data)})
        .catch(err => console.log(err))
}


  useEffect(() => {
    getProduct();
  }, []);

  console.log("aa"+ data.sp)

  // useEffect(() => {
  //   const filteredResult = data.filter(
  //     (item) =>
  //       item.nameBook.toLowerCase().includes(searchText.toLowerCase()) // Lọc dữ liệu theo tên sách
  //   );
  //   setFilteredData(filteredResult);
  // }, [searchText, data]);


  const renderItem = ({ item }) => {
    
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}> {item.author}

        </Text>
      </View>
    );
  };

  const renderItemProduct = ({ item }) => {
    
    return (
      <View style={styles.itemContainer2}>
          <Image source={{ uri: API_URL+'/'+item.image }} style={styles.itemImage2} />
        <Text style={styles.itemName}>Name: {item.nameBook}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>
  
      <View style={styles.text}>
        <Text style={styles.text}>Thể Loại</Text>
        <FlatList
          horizontal
          data={data.sp}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
  
      <View style={styles.text}>
        <Text style={styles.text}>Danh sách</Text>
        <FlatList
          data={data.sp}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItemProduct}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    margin: 10,
  },
  itemContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    flexBasis: '50%',
    borderWidth: 1,
    borderRadius: 20,
  },
  itemName: {
    fontSize: 16,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    height: 40,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemImage2: {
    width: 170,
    height: 100,
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 5,
  },

  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});


export default Home;