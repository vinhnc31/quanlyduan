import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavouriteScreen = ({ route }) => {
  const { item_sp } = route.params;
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [hasData, setHasData] = useState(false);


  useEffect(() => {
    loadFavouriteItems();
  }, []);

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
  

  const saveFavouriteItems = async () => {
    try {
      const storedFavouriteItems = await AsyncStorage.getItem('dataFa');
      if (storedFavouriteItems) {
        const parsedItems = JSON.parse(storedFavouriteItems);
        const updatedItems = [...parsedItems, item_sp];
        await AsyncStorage.setItem('dataFa', JSON.stringify(updatedItems));
        console.log('Dữ liệu đã được lưu vào AsyncStorage');
      } else {
        await AsyncStorage.setItem('dataFa', JSON.stringify([item_sp]));
        console.log('Dữ liệu đã được lưu vào AsyncStorage');
      }
    } catch (error) {
      console.error('Lỗi khi lưu dữ liệu vào AsyncStorage:', error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemName}>{item && item.nameBook}</Text>
      </View>
    );
  };
  console.log(favouriteItems)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh sách yêu thích</Text>
      {hasData ? (
      

        
      <View>
      <FlatList
        data={favouriteItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
     
    </View>
      ) : (
        <Text style={styles.noDataText}>Không có dữ liệu</Text>
      )}
      <Button title="Thêm vào yêu thích" onPress={saveFavouriteItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    marginBottom: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: 14,
    color: 'gray',
  },
  noDataText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FavouriteScreen;
