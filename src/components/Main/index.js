import react from "react";
import { View, StyleSheet, Image,Alert,ScrollView} from "react-native";
import styles from "./style";
import FlatButton from "../Button";


export default function Main({}){
    return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/coca-lata.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/snickers.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/salgado.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/cafe.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/caldo.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/coca-lata.png')} />
                    <FlatButton style={styles.textButton} text='comprar'/>
                </View>
                </View>
            </ScrollView>
    );
}

