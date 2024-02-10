import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, StatusBar  } from "react-native";
import TextComponent from "./components/TextComponent";
import Navbar from "./components/Navbar";


const App = () => {
  return[
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0d1b2a" barStyle="light-content"/>
      <Navbar></Navbar>
      <ScrollView>
        <Image style={styles.image} source={require('./assets/images/andrei.jpeg')}/>
        <TextComponent/>
      </ScrollView>
    </SafeAreaView>
  ]
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#415A77'
    },
    image: {
      width: 150,
      height: 200,
      alignSelf: 'center',
      margin: 5
    }
  }
)

export default App;