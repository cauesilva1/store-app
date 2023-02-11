import react from "react";
import { StyleSheet,Text, TouchableOpacity, View } from "react-native";

export default function FlatButton() {
    return(
        <TouchableOpacity style={styles.centrilize}>
            <View style={styles.button}>
                <Text>Comprar</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '55%',
        height: 30 ,
        marginTop: 10 ,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.38)',
        borderRadius: 20 ,
    },
    centrilize: {
        alignItems: "center",
        justifyContent: "center",
    }
})