import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function NotFoundpage() {
  return (
    <View>
      <Text>Not Found</Text>
      <Link href={"/"} >Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
