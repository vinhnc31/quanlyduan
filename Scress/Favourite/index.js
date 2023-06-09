import React,{useState} from "react";
import { View, Text, StyleSheet,Image,FlatList,SafeAreaView } from "react-native";

const DATA = [
  { id: 1, text: 'Địa Phủ đế vương',tt:'Ba trăm năm trước địa phủ, một mình chống toàn tộc, đầu Tam Giới, dẹp tan chiến loạn.', image: require('../../assets/diaphu.jpg') }, 
  { id: 2, text: 'Trác Phác',tt:'Trác Phác" tìm ngọc trong đá, mài dũa đá thành ngọc".',image: require('../../assets/hethong.jpg') },
  { id: 3, text: 'Y Tiên',tt:'Vân Mạc tuy không thể tu hành, nhưng vẫn bồi dưỡng ra một Thần Đế chiến lực phi phàm...',image: require('../../assets/ytien.jpg') },
  { id: 4, text: 'Thần Đạo Đan Tôn',tt:'Lăng Hàn - Một Đan Đế đại danh đỉnh đỉnh mang trong thân mình tuyệt thế thần công pháp vì truy cầu bước cuối...',image: require('../../assets/thandaodanton.jpg') },
  { id: 5, text: 'Hệ thống',tt:'Một chàng trai xuyên không vào ở rể nhà Họ Giang thời Tần, chàng trai ở rể bị coi là phế vật lại mang trong mình hệ thống mạnh nhất',image: require('../../assets/xuyenkhong.png') },
  { id: 6, text: 'Người đẹp và quái vật',tt:'Tên khác: The Lady And The Beast 100 năm sau cái chết của cô, nữ hoàng Martina, người thành lập nên Đế chế Carabella, đã tái sinh thành Astina Lette, con gái của một Bá tước.',image: require('../../assets/nguoidepvaquaivat.png')}, 
  { id: 7, text: 'Hôn Phu Ẩn Sắc',tt:'Erden - Lãnh Chúa Thành Halstead, Người Đứng Đầu Gia Tộc Bao Đời Sinh Ra Toàn Quái Vật Vô Cùng Ác Hiểm. Người Luôn Che Đậy Bản Thân Bằng Vẻ Ngoài Của Một Vị Quân Chủ Tàn Độc',image: require('../../assets/honphuansac.png')},
  { id: 8, text: 'Ta Làm Kiêu Hùng Tại Dị Giới',tt:'TRUYỆN MAIN CÓ NÃO VÀ HAY Dương Cửu là sinh viên muốn trở thành một thế hệ kiêu hùng, một lần cơ duyên xảo hợp xuyên qua dị giới, lại gặp kẻ gian hãm hại.',image: require('../../assets/talamkieuhung.png')},
  { id: 9, text: 'Thẩm Phán Lee Han Young',tt:'Thẩm phán Lee, người tin rằng công lý sẽ được thực thi ở quan tòa, trước khi bị xử tử, anh ta đã không tuân theo những mệnh lệnh của cấp trên và đã bị kết án chung thân ở ngục tù. Nhưng liệu có phải là do những điều tai quái mà anh ấy từng nghe khi còn nhỏ không? Cùng với những ký ức của mình, Lee có cơ hội để được sống lại lần nữa.',image: require('../../assets/thamphan.png')},
  { id: 10, text: 'Ma Vương Phàm Ăn',tt:'Trong thế giới này tồn tại hai loại người. Những người có năng lực đặc biệt và những kẻ không có. Những người có năng lực mạnh sẽ tieu diệt quái vật để lên cấp và trở thành người thành công. Trong khi đó những kẻ không có trở thành những kẻ thất bại bị cả xã hội khinh thường.',image: require('../../assets/mavuong.png')}
];
const Favourite = () => {
   const [data, setdata] = useState(DATA);
  const renderItem = ({ item, index }) => {
    return (
      <View style={banner.item}>
        <Image
          style={banner.image}
          source={item.image}
          resizeMode="contain"
        />
        <View style={banner.text}>
          <Text style={banner.fontSize}>{item.text}</Text>
          <Text>{item.tt}</Text>
        </View>
     </View>
    )
    
  }
  return (
    <View style={banner.container}>
      <Text style={banner.ts}>Tủ Sách</Text>
      <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={{marginTop:20}}
        />
       
     </SafeAreaView>
        
    
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

  item: {
    marginLeft:30,
    width: 350,
    flexDirection: "row",
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFCC',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:10
    },
    shadowOpacity: 3,
    shadowRadius: 10,
    padding:10
    
  },
  image: {
    width: 100,
    height:100
  },
  text: {
    flex:1,
    marginLeft: 10,
    justifyContent:'center'
  },
  fontSize: {
    fontSize:18
  },
  
});
export default Favourite;