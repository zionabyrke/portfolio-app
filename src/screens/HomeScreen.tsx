import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import projects from '../data/projects';
import Header from '../components/Header';

export default function HomeScreen({ onOpenProject }: { onOpenProject: (p: any) => void }) {
  return (
    <View style={styles.screen}>
      <Header title="Project Portfolio" subtitle="A concise showcase" />
      <ScrollView contentContainerStyle={styles.list}>
        {projects.map((p) => (
          <TouchableOpacity key={p.id} style={styles.card} onPress={() => onOpenProject(p)}>
            <Text style={styles.title}>{p.title}</Text>
            <Text numberOfLines={2} style={styles.desc}>{p.short}</Text>
            <Text style={styles.tag}>{p.tech.join(' • ')}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  list: { padding: 16, gap: 12, paddingBottom: 40 },
  card: { backgroundColor: '#f7f7f8', padding: 14, borderRadius: 10 },
  title: { fontSize: 16, fontWeight: '700' },
  desc: { marginTop: 6, color: '#444' },
  tag: { marginTop: 8, fontSize: 12, color: '#666' }
});
