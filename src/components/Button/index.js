import react from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

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
        <Text style={styles.buttonText} onPress={() => Buy()}>Ver</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100 ,
    height: 30,
    marginTop: 10,
    marginBottom: 10 ,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: '5%',
    color: "white", 
  },
  centrilize: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white", 
  }
});


{/* <TouchableOpacity onPress={() => Buy()} style={styles.centrilize}>
<View style={styles.button}>
<Image
      style={styles.Image}
      source={require("/store-APP/assets/coca-lata.png")}
    />
</View>
</TouchableOpacity>
);
}

const styles = StyleSheet.create({
centrilize: {
alignItems: "center",
justifyContent: "center",
},
Image: {
width: 160,
height: 160,
resizeMode: 'contain', 
shadowColor: "#000000" ,
shadowOffset: {width:30, height: 50},
shadowOpacity: 0.8,
shadowRadius: 10,
marginBottom: 10 ,
marginLeft: 5 ,
},
text: {
flex: 1, 
fontSize: 20 , 
} */}