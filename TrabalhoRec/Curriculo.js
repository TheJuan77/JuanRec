import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResumeScreen = () => {
  const name = 'Juan Pablo Guedes Santana';
  const email = 'thejuan0777@gmail.com';
  const skills = [
    'JavaScript',
    'React Native',
    'HTML',
    'CSS',
    'Git',
    'SQL',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currículo</Text>
      <Text style={styles.label}>Nome: Juan Pablo Guedes Santana</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.label}>E-mail:thejuan0777@gmail.com</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.label}>Habilidades:Além de vasto conhecimento na área, sou uma pessoa extremamente calma, que consegue lidar com pressão caso necessário</Text>
      {skills.map((skill, index) => (
        <Text key={index} style={styles.skill}>{skill}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  skill: {
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 8,
  },
});

export default ResumeScreen;
