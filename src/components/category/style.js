import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row',
        flexWrap: "wrap",
        backgroundColor: '#F8F8F8'
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
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        width: '90%',
      },
});
export default styles