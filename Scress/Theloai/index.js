import React, { useEffect, useState } from "react";
import {
  ScrollView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { API_BOOK, API_URL } from "../../helper/Api";
const Category = ({ route, navigation }) => {
  const chuyenMh = (screenName, params) => {
    navigation.navigate(screenName, params);
  };
  const { item_theloai } = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loctheloai = () =>
    data.filter((sp) =>
      sp.genre.toLowerCase().includes(item_theloai.nametheloai.toLowerCase())
    );
  const getProduct = () => {
    fetch(API_BOOK)
      .then((item) => item.json())
      .then((data) => {
        console.log(data);
        setData(data.sp);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  const renderItemProduct = ({ item }) => {
    return (
      <View style={styles.itemContainer2}>
        <TouchableOpacity onPress={() => chuyenMh("detail", { item_sp: item })}>
          <View
            style={{
              borderWidth: 1,
              alignItems: "center",
              height: 170,
              width: 130,
              paddingTop: 7,
            }}
          >
            <Image
              source={{ uri: API_URL + "/" + item.image }}
              style={styles.itemImage2}
            />
            <Text style={styles.itemName} numberOfLines={1}>
              {item.nameBook}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator size={"large"} color={"black"} />
        </View>
      ) : (
        <View style={styles.text}>
          <Text style={styles.textTL}>Danh sách thể loại:</Text>
          <FlatList
            data={loctheloai()}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderItemProduct}
          />
        </View>
      )}
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
  textTL: {
    marginTop: 30,
    marginLeft: 27,
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
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
    paddingLeft: 20, // Để tạo khoảng trống bên trái để chứa biểu tượng
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 280,
  },
});
export default Category;
