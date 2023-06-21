import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { API_PRODUCT } from "../../helper/Api";

const readBook = (props) => {
  const navigation = props.navigation;
  const route = useRoute();
  const { Item } = route.params;

  const [chapters, setChapters] = useState(Item.chapter);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [chapterData, setChapterData] = useState(null);

  const [loading, setLoading] = useState(true);

  const getChapter = async (chapterId) => {
    await fetch(`${API_PRODUCT}/${chapterId}/detailChapterApi`)
      .then((item) => item.json())
      .then((data) => {
        //set list chapter
        setChapterData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("loi: " + err);
        setDisableButton(false);
      });
  };

  useEffect(() => {
    getChapter(chapters[currentChapterIndex]);
  }, [currentChapterIndex]);

  const handlePrevChapter = () => {
    // Navigate to previous chapter if there is one
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
    } else {
      console.log("Đã đến đầu truyện!");
    }
  };

  const handleNextChapter = () => {
    // Navigate to next chapter if there is one
    if (currentChapterIndex < chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
    } else {
      console.log("Đã đến cuối truyện!");
    }
  };

  const disableButton = false;

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          <ActivityIndicator size={"large"} color={"black"} />
        </View>
      ) : (
        <View>
          <Text style={styles.txtnameBook}>{Item.nameBook}</Text>
          <Text style={styles.txtchuong}>
            {chapterData?.chapter?.nameChapter}
          </Text>
          <View style={styles.txtButton}>
            <Pressable style={{}} onPress={handlePrevChapter}>
              <Text style={styles.txtButton1}>Trước</Text>
            </Pressable>
            <Pressable style={{}} onPress={handleNextChapter}>
              <Text style={styles.txtButton2}>Sau</Text>
            </Pressable>
          </View>
          <ScrollView>
            <Text style={styles.txtContent}>
              {chapterData?.chapter?.contentChapter}
            </Text>
          </ScrollView>
        </View>
      )}
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
    alignSelf: "center",
  },
  txtchuong: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 10,
    marginTop: 14,
  },
  txtButton: {
    flexDirection: "row",
    alignSelf: "center",
  },
  txtButton1: {
    backgroundColor: "#62CDFF",
    width: 169,
    height: 35,
    textAlign: "center",
    paddingTop: 5,
    fontSize: 20,
    marginRight: 10,
    fontWeight: "600",
    borderRadius: 10,
    marginTop: 44,
    marginBottom: 10,
  },
  txtButton2: {
    backgroundColor: "#62CDFF",
    width: 169,
    height: 35,
    textAlign: "center",
    fontSize: 20,
    paddingTop: 5,
    fontWeight: "600",
    borderRadius: 10,
    marginTop: 44,
    marginBottom: 10,
    marginLeft: 10,
  },
  txtContent: {
    padding: 10,
    marginTop: 30,
    marginBottom: 175,
  },
});
