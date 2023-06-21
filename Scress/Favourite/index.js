import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,Button,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BOOK,API_URL } from "../../helper/Api";
const FavouriteScreen = ({ route }) => {
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
      const storedFavouriteItems = await AsyncStorage.getItem('dataFa');
      if (storedFavouriteItems) {
        const parsedItems = JSON.parse(storedFavouriteItems);
        const updatedItems = [...parsedItems, item_sp];
        await AsyncStorage.setItem('dataFa', JSON.stringify(updatedItems));
        console.log('Dữ liệu đã được lưu vào AsyncStorage');
        setFavouriteItems(updatedItems);
        setHasData(true);
      } else {
        await AsyncStorage.setItem('dataFa', JSON.stringify([item_sp]));
        console.log('Dữ liệu đã được lưu vào AsyncStorage');
        setFavouriteItems([item_sp]);
        setHasData(true);
      }
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', error);
    }
  };

  const loadFavouriteItems = async () => {
    try {
      const storedFavouriteItems = await AsyncStorage.getItem('dataFa');
      if (storedFavouriteItems !== null) {
        const parsedItems = JSON.parse(storedFavouriteItems);
        setFavouriteItems(parsedItems);
        setHasData(true);
      } else {
        setFavouriteItems([]);
        setHasData(false);
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu từ AsyncStorage:', error);
    }
  };
  const removeFavouriteItem = async (item) => {
    try {
      const updatedItems = favouriteItems.filter(
        (favItem) => favItem !== item
      );
      await AsyncStorage.setItem('dataFa', JSON.stringify(updatedItems));
      setFavouriteItems(updatedItems);
      console.log('Dữ liệu đã được cập nhật trong AsyncStorage');
    } catch (error) {
      console.error('Lỗi khi xóa dữ liệu từ AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => {
    if (item && item.image) {
      return (
        <View style={styles.item}>
          <View style={styles.itemContent}>
            <Image source={{ uri: API_URL + '/' + item.image }} style={styles.itemImage} />
            <View style={styles.itemTextContainer}>
              <Text style={styles.itemName}>{item.nameBook}</Text>
              <Text style={styles.itemGenre}>{item.genre}</Text>
            </View>
            
          </View>
          <Button
            title="Xóa"
            onPress={() => removeFavouriteItem(item)}
            color="red"
          />
        </View>
      );
    } else {
      return null;
    }
  };
  
  

  return (
    <View style={styles.container}>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: 'gray',
    marginTop:50,
    alignSelf: 'center',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 16,
    alignSelf: 'center',
   
    fontWeight: 'bold',
  },
});



export default FavouriteScreen;
