import { View, Text, StyleSheet } from "react-native";

const Navbar = () =>{
    return[
        <View style={styles.container}>
            <Text style={styles.text}>Biografía</Text>
        </View>
    ]
}

const styles = StyleSheet.create(
    {
        container: {
            width:'100%',
            height: 50,
            backgroundColor: "#0d1b2a",
            paddingLeft: 10
        },
        text: {
            color: '#E0E1DD',
            fontSize: 30,
            paddingTop: 10,
            fontWeight: 'bold'
        }
    }
)

export default Navbar;