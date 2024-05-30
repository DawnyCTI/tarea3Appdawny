import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';


// Dawny chalas Telemaco 2022-1014
const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('../assets/foto.jpeg')} style={styles.image} />
            <Text style={styles.name}>Dawny Chalas Telemaco</Text>
            <Text style={styles.email}>dawnychalastelemaco@gmail.com</Text>

            <Text style={styles.sectionTitle}>Sobre mí 😃</Text>
            <Text style={styles.subtitle}>🌟 Estudiante de Desarrollo de Software en ITLA | Front-End Developer 🌟</Text>

            <Text style={styles.sectionTitle}>🚀 Sobre mí:</Text>
            <Text style={styles.text}>
                Soy Dawny Chalas Telemaco, un apasionado estudiante de desarrollo de software en el Instituto Tecnológico de Las Américas (ITLA).
                Con un fuerte enfoque en el desarrollo front-end, estoy comprometido en crear experiencias web intuitivas y atractivas.
            </Text>

            <Text style={styles.sectionTitle}>💡 Habilidades Técnicas:</Text>
            <Text style={styles.text}>HTML: Dominio en la estructura y semántica de sitios web.</Text>
            <Text style={styles.text}>CSS: Experto en estilos y diseño responsivo para interfaces de usuario atractivas.</Text>
            <Text style={styles.text}>JavaScript: Habilidad para crear interactividad y dinamismo en aplicaciones web.</Text>
            <Text style={styles.text}>PHP: Conocimientos en desarrollo back-end para crear aplicaciones web robustas.</Text>
            <Text style={styles.text}>MySQL: Experiencia en la gestión y manipulación de bases de datos.</Text>

            <Text style={styles.sectionTitle}>🔍 Objetivo:</Text>
            <Text style={styles.text}>
                Estoy en constante aprendizaje y búsqueda de nuevas oportunidades para aplicar mis habilidades y conocimientos en proyectos desafiantes.
                Mi objetivo es convertirme en un desarrollador integral que pueda abordar tanto el front-end como el back-end de las aplicaciones web.
            </Text>

            <Text style={styles.sectionTitle}>📈 En busca de:</Text>
            <Text style={styles.text}>Oportunidades de empleo en desarrollo web.</Text>
            <Text style={styles.text}>Proyectos colaborativos donde pueda aportar y seguir aprendiendo.</Text>
            <Text style={styles.text}>Networking con profesionales de la industria tecnológica.</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 18,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default HomeScreen;
