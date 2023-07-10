import React from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';

const MainScreen = () => {
  const openGithubRepo = () => {
    const githubRepoUrl = 'https://github.com/TheJuan77';
    Linking.openURL(githubRepoUrl);
  };

  const openCalculatorCode = () => {
    // Lógica para abrir o código da calculadora funcional
    // Substitua a implementação abaixo pelo código completo e funcional da calculadora
    alert('Abrindo código da calculadora');
  };

  const openRandomResume = () => {
    // Lógica para abrir a tela com os dados de currículo de um aluno aleatório
    // Substitua a implementação abaixo pela lógica adequada para exibir os dados do currículo
    alert('Abrindo currículo do aluno');
  };

  return (
    <View style={styles.container}>
      <Button title="Repositório GitHub" onPress={openGithubRepo} />
      <Button title="Calculadora" onPress={openCalculatorCode} />
      <Button title="Currículo Aleatório" onPress={openRandomResume} />
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
});

export default MainScreen;
