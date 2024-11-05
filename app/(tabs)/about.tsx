import { View,Text,StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function AboutScreen(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
        <Link href={"/"} style={styles.button} >
         Home
        </Link>
      </View>
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
    color: "green",
  },
  button: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 4,
    marginTop: 10,
  },
});