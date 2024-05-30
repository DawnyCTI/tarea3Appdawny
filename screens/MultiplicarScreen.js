import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const MultiplicarScreen = () => {
    const [numero, setNumero] = useState('');
    const [tabla, setTabla] = useState([]);

    const generarTabla = () => {
        const num = parseInt(numero, 10);
        if (isNaN(num)) {
            setTabla(['Número inválido']);
            return;
        }
// Dawny chalas Telemaco 2022-1014
        const nuevaTabla = [];
        for (let i = 1; i <= 13; i++) {
            nuevaTabla.push(`${num} x ${i} = ${num * i}`);
        }
        setTabla(nuevaTabla);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Número"
                keyboardType="numeric"
                value={numero}
                onChangeText={setNumero}
            />
            <Button title="Generar Tabla" onPress={generarTabla} />
            {tabla.length > 0 && tabla.map((linea, index) => (
                <Text key={index}>{linea}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '80%',
        paddingHorizontal: 10,
    },
});

export default MultiplicarScreen;
