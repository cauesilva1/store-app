import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: '#F6F6F6',
    },

    box: {
        width: 150,
        height: 200,
        borderColor: "green",
        borderWidth: 1 , 
        backgroundColor: '#D9D9D9',
        borderRadius: 13 ,
        margin: 10,
        marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
    },

    Image: {
        width: 140,
        height: 110,
        resizeMode: 'contain', 
        // shadowColor: "black" ,
        // shadowOffset: {width:3, height: 10},
        // shadowOpacity: 0.8,
        // shadowRadius: 15,
        marginTop: 10 ,
        marginLeft: 5 ,
    },

    scrollView: {
        backgroundColor: '#F6F6F6',
        marginHorizontal: 20,
        width: '90%',
      },
    //   button: {
    //     width: "55%",
    //     height: 30,
    //     marginTop: 10,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "rgba(0, 0, 0, 0.38)",
    //     borderRadius: 20,
    //   },
      text: {
        flex: 1, 
        fontSize: 20 , 
      }
});
export default styles