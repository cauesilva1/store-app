import react from "react";
import { View, StyleSheet, Image,Alert,ScrollView} from "react-native";
import styles from "./style";
import FlatButton from "../Button";


export default function Cafe(){
    return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/cafe.png')} />
                    <FlatButton style={styles.textButton} text='Ver'/>
                </View>
                </View>
            </ScrollView>
    );
}

