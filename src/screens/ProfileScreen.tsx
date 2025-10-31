import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>Renz Kirby Onia</Text>
        <Text style={styles.details}>Morera, Guinobatan, Albay</Text>
        <Text style={styles.details}>rkgo2023-4302-29299@bicol-u.edu.ph</Text>
        <Text style={styles.details}>09810269043</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#4F8EF7',
    height: 300,
    borderBottomLeftRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  name: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  details: { fontSize: 14, color: '#fff', marginTop: 4 },
});
