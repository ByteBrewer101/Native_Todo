import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Imageviewer from "../components/imageviewer";
import Button1 from "../components/buttons";
import { useState } from "react";

import IconButton from "../components/logoButton";
import CircleButton from "../components/circularbutton";
import EmojiPicker from "../components/Emojipicker";

const placeHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(placeHolderImage);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImage = async () => {
    let img = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!img.canceled) {
      setSelectedImage(img.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("Pick an image first");
    }
  };

   const onReset = () => {
     setShowAppOptions(false);
   };

    const onAddSticker = () => {
      setIsModalVisible(true);
    };

    const onModalClose = () => {
      setIsModalVisible(false);
    };
   const onSaveImageAsync = async () => {
     // we will implement this later
   };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image style={styles.image} source={placeHolderImage} /> */}

        <Imageviewer imgsrc={selectedImage} />
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerStyles}>
          <Button1 label="Choose a photo" theme="primary" onPress={pickImage} />
          <Button1 label="Use This photo" />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        {/* A list of emoji component will go here */}
      </EmojiPicker>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
  },
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 18,
  // },

  footerStyles: {
    flex: 1 / 3,
    alignItems: "center",
  },

  btnband: {
    flexDirection: "row",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
