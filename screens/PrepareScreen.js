import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const PREPARE_OPTIONS = [
  {
    id: '1',
    title: 'Preparedness Checklist',
    description: 'Complete tasks to earn XP and get cyclone-ready',
    icon: 'checkbox-outline',
    color: '#e94560',
    screen: 'Checklist',
  },
  {
    id: '2',
    title: 'Cyclone Safety Quiz',
    description: 'Test your knowledge of cyclone safety procedures',
    icon: 'help-circle-outline',
    color: '#3498db',
    screen: 'Quiz',
  },
  {
    id: '3',
    title: 'Vulnerability Assessment',
    description: 'Find out your personal risk level and get a recommendation',
    icon: 'warning-outline',
    color: '#f39c12',
    screen: 'Vulnerability',
  },
];

export default function PrepareScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Prepare Yourself</Text>
        <Text style={styles.subtitle}>Choose an activity to strengthen your readiness</Text>
        {PREPARE_OPTIONS.map(option => (
          <TouchableOpacity
            key={option.id}
            style={[styles.card, { borderLeftColor: option.color }]}
            onPress={() => navigation.navigate(option.screen)}
          >
            <View style={[styles.iconBox, { backgroundColor: option.color }]}>
              <Ionicons name={option.icon} size={28} color="#ffffff" />
            </View>
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>{option.title}</Text>
              <Text style={styles.cardDesc}>{option.description}</Text>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="#888" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  scroll: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#aaaaaa',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#16213e',
    borderRadius: 14,
    borderLeftWidth: 5,
    padding: 16,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#aaaaaa',
    lineHeight: 18,
  },
});
