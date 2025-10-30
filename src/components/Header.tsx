import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Header({ title, subtitle, onBack }: { title: string; subtitle?: string; onBack?: () => void }) {
  return (
    <View style={styles.header}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.back}>
          <Text style={styles.backText}>{'<'} Back</Text>
        </TouchableOpacity>
      ) : <View style={styles.backPlaceholder} /> }
      <View style={styles.center}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle} numberOfLines={1}>{subtitle}</Text> : null}
      </View>
      <View style={styles.right} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { height: 64, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
  back: { padding: 8 },
  backText: { color: '#1e73ff' },
  backPlaceholder: { width: 56 },
  center: { flex: 1, alignItems: 'center' },
  title: { fontSize: 18, fontWeight: '700' },
  subtitle: { fontSize: 12, color: '#666' },
  right: { width: 56 }
});
