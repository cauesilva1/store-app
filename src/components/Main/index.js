import react from "react";
import { View, StyleSheet, Image,Alert,ScrollView} from "react-native";
import styles from "./style";
import FlatButton from "../Button";
import Title from "../Title";
import Footer from "../Footer";


export default function Main({navigation}){

    return(
            <ScrollView style={styles.scrollView}>
                <Title/>
                <View style={styles.container}>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/coca-lata.png')} />
                    <FlatButton page={"page1"} style={styles.textButton} text='comprar'
                        navigation={navigation} />
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/snickers.png')} />
                    <FlatButton page={"page2"} style={styles.textButton} id="sweets" text='comprar'
                     navigation={navigation}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/salgado.png')} />
                    <FlatButton page={"page3"} style={styles.textButton} text='comprar'
                     navigation={navigation}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/cafe.png')} />
                    <FlatButton page={"page4"} style={styles.textButton} text='comprar'
                     navigation={navigation}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/caldo.png')} />
                    <FlatButton page={"page5"} style={styles.textButton} text='comprar'
                     navigation={navigation}/>
                </View>
                <View style={styles.box}>
                    <Image style={styles.Image}
                    source={require('/store-APP/assets/coca-lata.png')} />
                    <FlatButton page={"page6"} style={styles.textButton} text='comprar'
                     navigation={navigation}/>
                </View>
                </View>
                <Footer/>
            </ScrollView>
    );
}

