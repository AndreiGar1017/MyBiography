import {  Text, StyleSheet, SafeAreaView, ScrollView,  } from "react-native";

const TextComponent = () => {
    return[
        <SafeAreaView>
    <ScrollView style={styles.container}>
        <Text style={styles.text}>Nombre: Andrei García</Text>
        <Text style={styles.text}>Ocupación: Estudiante de Ingeniería de Software</Text>
        <Text style={styles.text}>Edad:20</Text>
        <Text style={styles.text}>Fecha de Nacimiento: 03/Abr/2003</Text>
        <Text style={styles.text}>Sobre mi: Soy Estudiante de Ingeniería de Software, en la Universidad Autónoma de Querétaro y actualmente estoy cursando el 6to Semestre de la carrera.
        </Text>
    </ScrollView>
    </SafeAreaView>
    ]
}

const styles = StyleSheet.create(
    {
    text:{
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9'
    }
    }
)

export default TextComponent;