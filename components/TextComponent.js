import {  Text, StyleSheet, SafeAreaView, ScrollView,  } from "react-native";


const TextComponent = () => {
    return[
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text style={styles.text}><Text style={styles.label}>Nombre:</Text> Andrei García Bautista</Text>
                <Text style={styles.text}><Text style={styles.label}>Ocupación: </Text> Estudiante de Ingeniería de Software</Text>
                <Text style={styles.text}><Text style={styles.label}>Edad:</Text> 20 años</Text>
                <Text style={styles.text}><Text style={styles.label}>Fecha de Nacimiento:</Text> 03/Abr/2003</Text>
                <Text style={styles.text}><Text style={styles.label}>Sobre mi:</Text> Soy Estudiante de Ingeniería de Software, en la Universidad Autónoma de Querétaro y actualmente estoy cursando el 6to Semestre de la carrera.
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
        color: '#E0E1DD'
    },
    container: {
        backgroundColor: '#778DA9',
        borderRadius: 10,
        padding: "2%"
    },
    label:{
        fontWeight: 'bold'
    }
    }
)

export default TextComponent;