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
                <Image source={item.image} style={styles.itemImage2} />
                <Text style={styles.itemName}>{item.nameBook} </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    borderRadius: 30,
    height: 30,
    margin: 6,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer2: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    flexBasis: "50%",
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: "#f2f2f2",
    marginTop: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  text: {
    padding: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImage2: {
    width: 100,
    height: 130,
    marginBottom: 10,
    borderRadius: 5,
  },

  itemImage: {
    width: 50,
    height: 0,
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingLeft: 20,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 280,
  },
  container2: {
    borderWidth: 1,
    borderColor: "black",
    padding: 20,
    width: 370,
    alignSelf: "center",
    borderRadius: 10,
  },
});
export default SearchBook;
