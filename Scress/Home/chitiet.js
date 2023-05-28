
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React from 'react'


 

const chitiet = (props) => {
 
  return (
    <View style={styles.container}>
      <Image style={{ width: 230, height: 230, margin: 20, marginLeft: 70 }} source={require('../image/img1.png')} />
     
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.texthihi}>Địa phủ đế vương</Text>
        <Text style={styles.texthihi}>Tác giả: Mạc Thanh Hải</Text>
        <Text style={styles.texthihi}>Ngày xuất bản: 22/12/2022</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <TouchableOpacity style={styles.buttonhihi}>
          <Text style={{ fontWeight: '600' }}>Đọc Truyện</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonhihi1}>
          <Text style={{ fontWeight: '600' }}>Thêm vào giỏ sách</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ backgroundColor: '#62CDFF', fontWeight: 'bold', fontSize: 17, marginTop: 20, padding: 6 }}>Tóm tắt Nội dung</Text>
        <Text style={{ margin: 5 }}>
          Ba trăm năm trước Địa Phủ lâm vào khói lửa,
          trong một đêm hoang tàn sạch sẽ, cô liêu hiu quạnh,
          oán hận chôn vùi vào tương lại mờ mịt,vạn kiếp bất p
          hục. Ba trăm năm trước địa phủ, một mình chống toàn tộc
          ,đầu Tam Giơi, dẹp tan chiến loạn.
        </Text>
      </View>
    </View>
  )
}

export default chitiet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  texthihi: {
    fontSize: 20,
    margin: 3,
    fontWeight: '600'
  },
  buttonhihi: {
    width: 100,
    height: 28,
    backgroundColor: '#62CDFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.8,
    marginLeft: 20
  },
  buttonhihi1: {
    width: 150,
    height: 28,
    backgroundColor: '#62CDFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.8,
    marginLeft: 60,

  }
});