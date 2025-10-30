import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';

export default function ProjectScreen({ project, onBack }: { project: any; onBack: () => void }) {
  return (
    <View style={styles.screen}>
      <Header title={project.title} subtitle={project.short} onBack={onBack} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.paragraph}>{project.overview}</Text>

        <Text style={styles.sectionTitle}>Technologies</Text>
        <Text style={styles.paragraph}>{project.tech.join(', ')}</Text>

        {project.link ? (
          <>
            <Text style={styles.sectionTitle}>Link</Text>
            <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
              <Text style={styles.link}>{project.link}</Text>
            </TouchableOpacity>
          </>
        ) : null}

        <Text style={[styles.sectionTitle, { marginTop: 18 }]}>Notes</Text>
        <Text style={styles.paragraph}>{project.notes}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  container: { padding: 16, paddingBottom: 40 },
  sectionTitle: { fontSize: 14, fontWeight: '700', marginTop: 12 },
  paragraph: { marginTop: 6, color: '#333', lineHeight: 20 },
  link: { color: '#1e73ff', marginTop: 6 }
});
