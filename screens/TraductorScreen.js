import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TraductorScreen = () => {
    const [numero, setNumero] = useState('');
    const [texto, setTexto] = useState('');

    const traducirNumero = () => {
        const unidades = [
            '', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'
        ];
        const decenas = [
            '', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'
        ];
        const centenas = [
            '', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
        ];

        const num = parseInt(numero, 10);
        if (isNaN(num) || num < 1 || num > 1000) {
            setTexto('Número inválido');
            return;
        }
// Dawny chalas Telemaco 2022-1014
        if (num === 1000) {
            setTexto('mil');
            return;
        }

        const c = Math.floor(num / 100);
        const d = Math.floor((num % 100) / 10);
        const u = num % 10;

        const strCentena = centenas[c];
        const strDecena = decenas[d];
        const strUnidad = unidades[u];

        const resultado = `${strCentena} ${strDecena} ${strUnidad}`.trim();
        setTexto(resultado);
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
            <Button title="Traducir" onPress={traducirNumero} />
            {texto !== '' && <Text>Resultado: {texto}</Text>}
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

export default TraductorScreen;
