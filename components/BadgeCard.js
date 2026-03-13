import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BadgeCard() {
  return (
    <View style={styles.badge}>
      <Text style={styles.icon}>🏅</Text>
      <Text style={styles.title}>Preparation Complete!</Text>
      <Text style={styles.sub}>You earned the Cyclone Ready badge</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#f1c40f',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1a1a2e',
  },
  sub: {
    fontSize: 13,
    color: '#1a1a2e',
    marginTop: 4,
  },
});
