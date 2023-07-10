import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.toLowerCase() === 'juan' && password === 'recuperação') {
      // Lógica para autenticar o usuário
      alert('Login bem-sucedido!');
    } else {
      // Lógica para lidar com login inválido
      alert('Nome de usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;