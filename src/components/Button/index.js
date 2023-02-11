import react from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FlatButton({ navigation, page }) {
  const Buy = () => {
    if ((page == "page1")) {
      console.log("category");
      navigation.navigate("Drinks");
    } 
    if ((page == "page2")) {
      console.log("category");
      navigation.navigate("Sweets");
    }
    if ((page == "page3")) {
        console.log("category");
        navigation.navigate("Snack");
      }
      if ((page == "page4")) {
        console.log("category");
        navigation.navigate("Coffee");
      }
      if ((page == "page5")) {
        console.log("category");
        navigation.navigate("Soup");
      }
      if ((page == "page6")) {
        console.log("category");
        navigation.navigate("Others");
      }
  };

  return (
    <TouchableOpacity style={styles.centrilize}>
      <View style={styles.button}>
        <Text onPress={() => Buy()}>Comprar</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "55%",
    height: 30,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.38)",
    borderRadius: 20,
  },
  centrilize: {
    alignItems: "center",
    justifyContent: "center",
  },
});
