import React,{useState} from "react";
import { View, Text, StyleSheet,Image,FlatList,TouchableOpacity } from "react-native";

const Favourite = () => {

  return (
    <View style={banner.container}>
      <Text style={banner.ts}>Tủ Sách</Text>
      {/* <FlatList
        data={listItem}
        renderItem={ItemView}
        keyExtractor={(item,index)=>index.toString()}
      /> */}
      <View style={banner.anhtruyen}>
        <Image style={banner.anh} source={require('../../assets/diaphu.jpg')} />
        <View style={banner.tentruyen}><Text >Địa Phủ Đế Vương</Text></View>
        <View style={banner.mota}><Text>Ba trăm năm trước địa phủ, một mình chống toàn tộc, đầu Tam Giới, dẹp tan chiến loạn.</Text></View>
      </View>
       <View style={banner.anhtruyen2}>
        <Image style={banner.anh} source={require('../../assets/hethong.jpg')} />
        <View style={banner.tentruyen}><Text >Trác Phác</Text></View>
        <View style={banner.mota}><Text>Trác Phác" tìm ngọc trong đá, mài dũa đá thành ngọc".</Text></View>
      </View>
       <View style={banner.anhtruyen}>
        <Image style={banner.anh} source={require('../../assets/ytien.jpg')} />
        <View style={banner.tentruyen}><Text >Y Tiên</Text></View>
        <View style={banner.mota}><Text>Vân Mạc tuy không thể tu hành, nhưng vẫn bồi dưỡng ra một Thần Đế chiến lực phi phàm...</Text></View>
      </View>
       <View style={banner.anhtruyen2}>
        <Image style={banner.anh} source={require('../../assets/thandaodanton.jpg')} />
        <View style={banner.tentruyen}><Text >Thần Đạo Đan Tôn</Text></View>
        <View style={banner.mota}><Text>Lăng Hàn - Một Đan Đế đại danh đỉnh đỉnh mang trong thân mình tuyệt thế thần công pháp vì truy cầu bước cuối...</Text></View>
      </View>
       <View style={banner.anhtruyen}>
        <Image style={banner.anh} source={require('../../assets/hethong.jpg')} />
        <View style={banner.tentruyen}><Text >Hệ thống</Text></View>
        <View style={banner.mota}><Text>Một chàng trai xuyên không vào ở rể nhà Họ Giang thời Tần, chàng trai ở rể bị coi là phế vật lại mang trong mình hệ thống mạnh nhất</Text></View>
      </View>
    </View>
    
  );
}

const banner = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  ts: {
    marginLeft: 30,
    marginTop: 30,
    backgroundColor:"#66CCFF",
    fontSize: 24,
    color: "black",
    textAlign: "center",
    height: 35,
    width: 350,
    borderRadius: 10,
    fontWeight:"bold"
  
  },
  anhtruyen: {
    borderRadius:2,
    marginTop: 30,
    marginLeft:30,
    backgroundColor: "#F5F5F5" ,
    width: 350,
    height: 159,
    
  },
  anhtruyen2: {
      borderRadius:2,
    marginTop: 30,
    marginLeft:30,
    backgroundColor: "#F8F8FF" ,
    width: 350,
    height:159
  },
  anh: {
    width: 125,
    height:159
  },
  tentruyen: {
    marginLeft:150,
    marginTop:-150,
    fontSize: 20,
    width: 177,
    height: 22,
    color: "black",
    fontWeight:'bold'
  },
  mota: {
    marginLeft: 150,
    marginTop:20,
    width: 200,
    height:50,
    fontSize: 15,
  },
  item: {
    height: 60,
    padding: 10
  },
  text: {
    fontSize:20
  }
});
export default Favourite;