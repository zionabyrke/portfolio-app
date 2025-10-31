import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function DashboardScreen() {
  const navigation = useNavigation();

  const cards = [
    { title: 'Profile', icon: 'person-circle-outline', screen: 'Profile' },
    { title: 'Work', icon: 'briefcase-outline', screen: 'Profile' },
    { title: 'Skill', icon: 'construct-outline', screen: 'Profile' },
    { title: 'Education', icon: 'school-outline', screen: 'Profile' },
    { title: 'Hobby', icon: 'bicycle-outline', screen: 'Profile' },
    { title: 'Projects', icon: 'folder-outline', screen: 'Projects' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Portfolio</Text>
      </View>
      <View style={styles.cardContainer}>
        {cards.map((card, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => navigation.navigate(card.screen)}>
            <Ionicons name={card.icon} size={40} color="#4F8EF7" />
            <Text style={styles.cardText}>{card.title}</Text>
          </TouchableOpacity>
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
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: -50,
  },
  card: {
    backgroundColor: '#fff',
    width: 140,
    height: 140,
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: { marginTop: 8, fontSize: 16, fontWeight: '500' },
});
