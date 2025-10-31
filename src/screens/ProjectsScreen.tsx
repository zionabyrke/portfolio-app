import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const projects = [
  { title: 'Portfolio App', description: 'A personal portfolio showcasing skills, work, and projects.', tech: 'React Native, Expo' },
  { title: 'Weather Tracker', description: 'Tracks weather using public APIs with clean design.', tech: 'React Native, OpenWeather API' },
  { title: 'Task Manager', description: 'A productivity app for managing daily to-do lists.', tech: 'TypeScript, AsyncStorage' },
];

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Projects</Text>
      </View>
      <View style={styles.content}>
        {projects.map((project, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{project.title}</Text>
            <Text style={styles.desc}>{project.description}</Text>
            <Text style={styles.tech}>{project.tech}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#4F8EF7',
    height: 180,
    borderBottomLeftRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  content: { padding: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 4,
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  desc: { fontSize: 14, color: '#555', marginTop: 8 },
  tech: { fontSize: 12, color: '#4F8EF7', marginTop: 6 },
});
