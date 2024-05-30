import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SumadoraScreen = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const sumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Número 1"
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1}
            />
            <TextInput
                style={styles.input}
                placeholder="Número 2"
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2}
            />
            <Button title="Sumar" onPress={sumar} />
            {resultado !== null && <Text>Resultado: {resultado}</Text>}
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
// Dawny chalas Telemaco 2022-1014
export default SumadoraScreen;
