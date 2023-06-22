import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { API_BOOK, API_URL } from "../../helper/Api";
const SearchBook = (props) => {
  const navigation = props.navigation;

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getProduct = () => {
    fetch(API_BOOK)
      .then((item) => item.json())
      .then((data) => {
        console.log(data);
        setData(data.sp);
      })
      .catch((err) => console.log(err));
  };
  const handleSearch = (text) => {
    setSearchQuery(text);

    // Xóa kết quả tìm kiếm trước đó khỏi filteredData
    setFilteredData([]);

    if (text !== "") {
      const filtered = data.filter(
        (item) => item.nameBook.toLowerCase().indexOf(text.toLowerCase()) !== -1
      );
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    getProduct();
    handleSearch(searchQuery);
  }, [searchQuery]);
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Tìm kiếm"
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <View style={styles.text}>
        <FlatList
          data={filteredData}
          numColumns={2}
          keyExtractor={(item) => item.id && item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("detail", { item_sp: item });
              }}
            >
              <View style={styles.itemContainer2}>
                <Image source={{ uri: API_URL + "/" + item.image }} style={styles.itemImage2} />
                <Text style={styles.itemName} numberOfLines={1}>{item.nameBook} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer2: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    flexBasis: "50%",
    width: 200,
    borderWidth: 1,
    borderColor: '#fff',
  },
  itemName: {
    fontSize: 14,
  },
  searchContainer: {
    backgroundColor: "#f2f2f2",
    marginTop: 20,
  },
  text: {
    padding: 10,
    alignSelf: 'center'
  },
  itemImage2: {
    width: 130,
    height: 150,
    marginBottom: 10,
    borderRadius: 5,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingLeft: 20,
  },
});
export default SearchBook;
