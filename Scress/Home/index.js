import React from "react";
import {
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import { API_PRODUCT } from "../../helper/Api";

const home = (props) => {
  const navigation = props.navigation;
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const chuyenMh = (props) => {
    navigation.navigate(props);
  };

  const getProduct = () => {
    fetch(API_PRODUCT + "/getAllsp")
      .then((item) => item.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
    //  getProduct()
  }, []);

  // useEffect(() => {
  //   // Lọc dữ liệu theo từ khóa tìm kiếm
  //   const newData = data.filter(item => {
  //     const itemName = item.name.toLowerCase();
  //     const searchValue = searchText.toLowerCase();
  //     return itemName.indexOf(searchValue) > -1;
  //   });
  //   setFilteredData(newData);
  // }, [searchText]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imgsp }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.tensp}</Text>
    </View>
  );

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
      <Text style={styles.text}>Thể Loại</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.text}>Top sách xem nhiều nhất</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 8,
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  itemName: {
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  searchInput: {
    height: 40,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
    marginTop: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
export default home;
