import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../../helper/Api";
import { TouchableOpacity } from "react-native-gesture-handler";
const FavouriteScreen = ({ route, navigation }) => {
  const chuyenMh = (screenName, params) => {
    navigation.navigate(screenName, params);
  };
  const { item_sp } = route.params || {};
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    saveFavouriteItems();
    // Save the item automatically when component mounts
  }, []);
  useEffect(() => {
    loadFavouriteItems();
    // Save the item automatically when component mounts
  }, [favouriteItems]);

  const saveFavouriteItems = async () => {
    try {
      const storedFavouriteItems = await AsyncStorage.getItem("dataFa");
      if (storedFavouriteItems) {
        const parsedItems = JSON.parse(storedFavouriteItems);
        const updatedItems = [...parsedItems, item_sp];
        await AsyncStorage.setItem("dataFa", JSON.stringify(updatedItems));
        console.log("Dữ liệu đã được lưu vào AsyncStorage");
        setFavouriteItems(updatedItems);
        setHasData(true);
      } else {
        await AsyncStorage.setItem("dataFa", JSON.stringify([item_sp]));
        console.log("Dữ liệu đã được lưu vào AsyncStorage");
        setFavouriteItems([item_sp]);
        setHasData(true);
      }
    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu vào AsyncStorage:", error);
    }
  };

  const loadFavouriteItems = async () => {
    try {
      const storedFavouriteItems = await AsyncStorage.getItem("dataFa");
      if (storedFavouriteItems !== null) {
        const parsedItems = JSON.parse(storedFavouriteItems);
        setFavouriteItems(parsedItems);
        setHasData(true);
      } else {
        setFavouriteItems([]);
        setHasData(false);
      }
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu từ AsyncStorage:", error);
    }
  };
  const removeFavouriteItem = (item) => {
    Alert.alert("Ban Chac Chan La Muon Xoa Chu ?", "", [
      {
        text: "No",
        onPress: () => {},
        style: "No",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            const updatedItems = favouriteItems.filter(
              (favItem) => favItem !== item
            );
            await AsyncStorage.setItem("dataFa", JSON.stringify(updatedItems));
            setFavouriteItems(updatedItems);
            console.log("Dữ liệu đã được cập nhật trong AsyncStorage");
          } catch (error) {
            console.error("Lỗi khi xóa dữ liệu từ AsyncStorage:", error);
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    if (item && item.image) {
      return (
        <TouchableOpacity
        onPress={() => chuyenMh("detail", { item_sp: item })}
        >
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <Image
                source={{ uri: API_URL + "/" + item.image }}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.nameBook}</Text>
                <Text style={styles.itemGenre}>{item.genre}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => removeFavouriteItem(item)}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../Avata/delete.png")}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
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
          Tủ Sách
        </Text>
      </View>
      {hasData ? (
        <FlatList
          data={favouriteItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={styles.noDataText}>Không có dữ liệu</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemImage: {
    width: 100,
    height: 130,
    marginRight: 8,
    borderRadius: 5,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemGenre: {
    fontSize: 14,
    color: "gray",
    marginTop: 50,
    alignSelf: "center",
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    alignSelf: "center",

    fontWeight: "bold",
  },
  container2: {
    width: "100%",
    height: 80,
    backgroundColor: "#62CDFF",
  },
});

export default FavouriteScreen;
