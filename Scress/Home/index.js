import React, { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import { ScrollView, FlatList, View, Text, TextInput, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import filter from "lodash.filter";


const API_ENDPOINT = 'http://172.20.10.6:4000/Book/api'

const index = (props) => {
  const navigation = props.navigation;
  const [data, setdata] = useState([]);
  const [fulldata, setfulldata] = useState([])
  const [searchQuery, setsearchQuery] = useState('')


  const getProduct = async () => {
    try {
      const response = await fetch(API_ENDPOINT)
      const json = await response.json();
      setdata(json.sp)
      console.log("danh sách", json.sp);
      setfulldata(json.sp);// chuc nang chi tiet 

    } catch (error) {
      console.log('có lỗi có lỗi rồi ');
    }
  }


  useEffect(() => {
    getProduct();
  }, []);

  const handleSearch = (query) => {
    setsearchQuery(query)
    const formattedQuery = query;
    const filteredData = filter(fulldata, (sp) => {
      return contains(sp, formattedQuery);
      // 
    });
    setdata(filteredData)
  }



  const contains = ({ nameBook, cotegary }, query) => {
    if (nameBook.includes(query)) {
      return true;
    }
    return false

  }


  // useEffect(() => {
  //   const filteredResult = data.filter(
  //     (item) =>
  //       item.nameBook.toLowerCase().includes(searchText.toLowerCase()) // Lọc dữ liệu theo tên sách
  //   );
  //   setFilteredData(filteredResult);
  // }, [searchText, data]);


  const renderItem = ({ item }) => {

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => { navigation.navigate('theloai') }}>
           
        <Text style={{ fontSize: 10, color: "black" }}> {item.cotegary} </Text>      
     
      </TouchableOpacity>
    );
  };

  const renderItemProduct = ({ item }) => {

    return (
      <View style={styles.itemContainer2}>

        <TouchableOpacity onPress={() => { navigation.navigate('chitiet', { item_sp: item }) }}>
          <View style={{ borderWidth: 1, alignItems: "center", height: 170,width:130, paddingTop: 7 }}>
            <Image source={{ uri: 'http:172.20.10.6:4000/' + item.image }} style={styles.itemImage2} />
            <Text style={styles.itemName}>{item.nameBook} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, marginHorizontal: 20, marginTop: 40 }}>
        <TextInput placeholder='Search'
          clearButtonMode='always'// tạo nút bấm xóa 
          // không tự động viết hoa đầu dòng 
          autoCorrect={false}
          value={searchQuery}
          onChangeText={(query) => { handleSearch(query) }}
          style={styles.input} />
          <Icon name="search" size={20} color="gray" style={styles.searchIcon} />


      </View>

      <View style={styles.text}>
        <Text style={styles.text}>Thể Loại</Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.text}>Danh sách</Text>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={renderItemProduct}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.text}>Đề xuất </Text>
        <FlatList
          data={data}
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
    paddingHorizontal: 10,
    borderRadius: 30,
    height: 30,
    margin: 6,
    marginLeft:15,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer2: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    flexBasis: '50%',
  },
  searchBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 14,
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
  }, itemImage2: {
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
    borderColor: 'gray',
    borderRadius: 8,
    paddingLeft: 20, // Để tạo khoảng trống bên trái để chứa biểu tượng
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: 280,
  },
});


export default index;