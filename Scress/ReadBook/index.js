import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { API_PRODUCT } from "../../helper/Api";

const readBook = (props) => {
  const navigation = props.navigation;
  const route = useRoute();
  const { Item } = route.params;

  const [idchapter, setIdChapter] = useState(Item.chapter[0]);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  let newIndex = 0;

  const [disableButton, setDisableButton] = useState(false);

  const getChapter = async () => {
    setDisableButton(true); // disable các nút bấm
    await fetch(`${API_PRODUCT}/${idchapter}/detailChapterApi`)
      .then((item) => item.json())
      .then((data) => {
        //set list chapter
        setData(data);
        setLoading(false);
        setDisableButton(false);
      })
      .catch((err) => {
        console.log("loi: " + err);
        setDisableButton(false);
      });
  };

  useEffect(() => {
    getChapter();
  }, []);

  const handlePrevChapter = () => {
    if (!disableButton) {
      newIndex = index - 1;
      if (newIndex >= 0) {
        setIndex(newIndex);
        setIdChapter(Item.chapter[newIndex]);
        getChapter();
      } else {
        console.log("Đã đến đầu truyện!");
      }
    }
  };

  const handleNextChapter = () => {
    if (!disableButton) {
      newIndex = newIndex + 1;
      if (newIndex < Item.chapter.length) {
        setIndex(newIndex);
        setIdChapter(Item.chapter[newIndex]);
        getChapter();
      } else {
        console.log("Truyện đã hết!");
      }
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={styles.txtnameBook}>{Item.nameBook}</Text>
          <Text style={styles.txtchuong}>{data.chapter.nameChapter}</Text>
          <View style={styles.txtButton}>
            <Pressable onPress={handlePrevChapter}>
              <Text style={styles.txtButton1}>Trước</Text>
            </Pressable>
            <Pressable onPress={handleNextChapter}>
              <Text style={styles.txtButton2}>Sau</Text>
            </Pressable>
          </View>
          <ScrollView>
            <Text style={styles.txtContent}>{data.chapter.contentChapter}</Text>
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
  },
  txtButton1: {
    backgroundColor: "#62CDFF",
    width: 169,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 44,
    marginBottom: 44,
  },
  txtButton2: {
    backgroundColor: "#62CDFF",
    width: 169,
    height: 35,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "600",
    borderRadius: 10,
    marginLeft: 35,
    marginTop: 44,
    marginBottom: 44,
  },
  txtContent: {
    padding: 10,
  },
});