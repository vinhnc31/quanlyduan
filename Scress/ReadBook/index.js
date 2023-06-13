import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const readBook = (props) => {
  const navigation = props.navigation;
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.txtnameBook}>Địa Phủ Đế Vương</Text>
      <Text style={styles.txtchuong}>Chương 1 </Text>
      <View style={styles.txtButton}>
        <Pressable>
          <Text style={styles.txtButton1}>Trước</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.txtButton2}>Sau</Text>
        </Pressable>
      </View>
      
        <Text style={styles.txtContent}>
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
          Lý Thành Thiên cảm giác cải lưng thật lạnh, nhân châu khẽ động, có
          chút khó khăn lật mí mắt. "Ồ, không khí dễ chịu!" "Quát đò heo, đây là
          dấu nha?". “Thôi thôi thôi lại nữa, ta tiếp tục xuyên rồi!" Lúc này Lý
          Thành Thiên la lối om sòm, ngồi bật dậy, nhận ra mình vậy mà nằm ngay
          giữa đại lộ. Chính xác đại lộ là từ đá khối mà thành, cũng không biết
          đến từ chất liệu gì lại đặc biệt lạnh như vậy, Lý Thành Thiên vỏ đầu,
          nghĩ tới chất liệu làm gì nha, tại sao hắn ở đây, hơn nữa nằm ngay
          đường xã không sợ xe tông chết sao. Hắn mới ý thức lại hai bên đưởng,
          toàn là nhà kiểu xưa, còn treo đèn lồng, rốt cuộc đã xuyên tới thế
          giới nào rồi. Trông không giống sẽ có xe tông. Đứng dậy khởi động gân
          cốt. Lý Thành Thiên ngẩng đầu nhìn trời, bị doạ kém chút ngất đi, trên
          trời cũng không giống cái chỗ kia. Từng tầng mây đen cuộn lại tạo
          thành những vòng xoáy khủng bố trên trời, như là cõi yêu ma tác quái,
          con người đều không sống nổi. Không đúng, vửa rồi Lý Thành Thiên còn
          gặp mấy tiên nhân đầu. Trước đó hẳn là người Địa Cầu, một quỷ nghèo đi
          cua gái, còn là hoa khôi trường người ta. Kết quả bị từ chối, hắn kiên
          trì đi tới, nào ngờ nữ sinh kia có chút quả phận, đẩy hắn một cái.
        </Text>
      </ScrollView>
    </View>
  );
};

export default readBook;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  txtnameBook: {
    marginTop: 23,
    fontSize: 24,
    fontWeight: "600", 
    alignSelf: 'center',
  },
  txtchuong:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 14,
  },
  txtButton: {
    flexDirection: 'row',
  },
  txtButton1: {
    backgroundColor: '#62CDFF',
    width: 169,
    height:35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 44,
    marginBottom: 44,
  },
  txtButton2: {
    backgroundColor: '#62CDFF',
    width: 169,
    height:35,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '600',
    borderRadius: 10,
    marginLeft: 35,
    marginTop: 44,
    marginBottom: 44,
    
  },
  txtContent: {
    padding: 10,
  },

});
