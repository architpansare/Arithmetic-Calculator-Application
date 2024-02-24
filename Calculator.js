import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CalculatorApp = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddition = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers');
    } else {
      setErrorMessage('');
      const sum = parseFloat(num1) + parseFloat(num2);
      setResult(`Result: ${sum}`);
    }
  };

  const handleSubtraction = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers');
    } else {
      setErrorMessage('');
      const difference = parseFloat(num1) - parseFloat(num2);
      setResult(`Result: ${difference}`);
    }
  };

  const handleMultiplication = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers');
    } else {
      setErrorMessage('');
      const product = parseFloat(num1) * parseFloat(num2);
      setResult(`Result: ${product}`);
    }
  };

  const handleDivision = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers');
    } else if (parseFloat(num2) === 0) {
      setErrorMessage('Cannot divide by zero');
    } else {
      setErrorMessage('');
      const quotient = parseFloat(num1) / parseFloat(num2);
      setResult(`Result: ${quotient}`);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        value={num1}
        onChangeText={(text) => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        value={num2}
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAddition} />
        <Button title="Subtract" onPress={handleSubtraction} />
        <Button title="Multiply" onPress={handleMultiplication} />
        <Button title="Divide" onPress={handleDivision} />
      </View>
      {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CalculatorApp;
