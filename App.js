import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  var [C, setC] = useState('');
  var [F, setF] = useState('');

  function CalcularTemperatura() {
    F = (9 * parseFloat(C) + 160) / 5;

    alert(' TEMPERAURA EM Fahrenheit: ' + F);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Aplictivo Temperatura </Text>

      <TextInput
        style={styles.campo}
        placeholder="Digite uma temp. em Celsius "
        keyboardType="numeric"
        onChangeText={(C) => setC(C)}
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularTemperatura}>
        <Text style={styles.textBotao}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
  },
  titulo: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
    color: '#228B22',
  },
  campo: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    margin: 15,
    padding: 10,
    fontSize: 15,
  },
  botao: {
    justifyContent: 'cnter',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#FFD700',
    padding: 10,
  },
  textBotao: {
    fontSize: 25,
  },
});
