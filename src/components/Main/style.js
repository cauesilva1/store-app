import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: "wrap",

        paddingBottom: 20,
        // backgroundColor: '#ccc'
    },
    box: {
        width: 150,
        height: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.19)',
        borderRadius: 35,
        margin: 10,
        marginTop: "10%",
    },
    Image: {
        width: 160,
        height: 150,
        resizeMode: 'contain', 
        shadowColor: "black" ,
        shadowOffset: {width:6, height: 10},
        shadowOpacity: 0.8,
        shadowRadius: 10,  
    },
    scrollView: {
        width: '100%',
        height: '89%',
        backgroundColor: '#fff',
        marginHorizontal: 20,
      },
});
export default styles