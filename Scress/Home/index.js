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
const Home = (props) => {
  const navigation = props.navigation;
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [datatheloai, setdatatheloai] = useState([
    { nametheloai: "Ngôn Tình" },
    { nametheloai: "Kiếm Hiệp" },
    { nametheloai: "Ngụ Ngôn " },
    { nametheloai: "Ngụ Ngôn " },
  ]);

  const getProduct = () => {
    fetch(API_BOOK)
      .then((item) => item.json())
      .then((data) => {
        console.log(data.sp);
        setData(data.sp);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    getProduct();
  }, []);
  if (isLoading) {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        <ActivityIndicator size={"large"} color={"black"} />
      </View>
    );
  }
  if (error) {
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Lỗi kết nối dữ liệu...... Bạn vui lòng kiểm tra interner!</Text>
    </View>;
  }

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Theloai", { item_theloai: item });
        }}
      >
        <View style={styles.itemContainer}>
          <Text style={styles.itemName}> {item.nametheloai}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItemProduct = ({ item }) => {
    return (
      <View style={styles.itemContainer2}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("detail", { item_sp: item });
          }}
        >
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
      <View style={styles.container2}>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            fontWeight: "bold",
            color: "#fff",
            marginTop: 30,
          }}
        >
          Home
        </Text>
        <TouchableOpacity
          style={{ marginLeft: "60%", marginTop: 30 }}
          onPress={() => {
            navigation.navigate("searchBook");
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../Avata/search.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.text}>Thể Loại</Text>
          <FlatList
            horizontal
            data={datatheloai}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsHorizontalScrollIndicator="false"
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.text}>Danh Sách </Text>
          <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderItemProduct}
          />
        </View>
      </ScrollView>
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
    fontSize: 25,
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
    paddingLeft: 20,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 280,
  },
  container2: {
    width: "100%",
    height: 80,
    backgroundColor: "#62CDFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 0,
  },
});

export default Home;
