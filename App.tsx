import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProjectScreen from './src/screens/ProjectScreen';

type Screen = { name: 'home' | 'project'; params?: any };

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {screen.name === 'home' && (
        <HomeScreen onOpenProject={(p) => setScreen({ name: 'project', params: p })} />
      )}
      {screen.name === 'project' && (
        <ProjectScreen project={screen.params} onBack={() => setScreen({ name: 'home' })} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' }
});
