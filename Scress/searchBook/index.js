import { Text,View,Image,StyleSheet, Pressable } from "react-native";
const SearchBook = (props) => {
    const navigation = props.navigation;

    return(
   <View style={[styles.container]}>
      <Image style={{ width: 50, height: 50,borderRadius:10}} source={{ uri: "https://newsmd1fr.keeng.net/tiin/archive/images/20210220/145211_facebook_doi_anh_dai_dien_2.jpg" }} />
    <Text>HO va ten: Bui Hong quan</Text>
    <Text>MSV: PH20506</Text>
   </View>

    );
};
const styles = StyleSheet.create({
    container: {
      borderWidth: 3,
      borderColor: 'black',
      padding: 20,
      width: 350,
      alignSelf: 'center',
      borderRadius: 10,
    },
});
export default SearchBook;