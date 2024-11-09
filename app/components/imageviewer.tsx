import { View, StyleSheet } from "react-native";

import { Image, type ImageSource } from "expo-image";

type Props = {
  imgsrc: ImageSource;
};

export default function Imageviewer({ imgsrc }: Props) {
  return <Image style={styles.image} source={imgsrc} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
