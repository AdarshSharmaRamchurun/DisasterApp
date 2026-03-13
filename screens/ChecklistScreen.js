import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressBar from '../components/ProgressBar';
import BadgeCard from '../components/BadgeCard';

const CHECKLIST_ITEMS = [
  { id: '1', task: 'Store at least 3 days of drinking water', xp: 10 },
  { id: '2', task: 'Stock non-perishable food supplies', xp: 10 },
  { id: '3', task: 'Prepare a first aid kit', xp: 15 },
  { id: '4', task: 'Charge all mobile devices and power banks', xp: 10 },
  { id: '5', task: 'Secure loose outdoor furniture and objects', xp: 15 },
  { id: '6', task: 'Identify your nearest cyclone shelter', xp: 20 },
  { id: '7', task: 'Keep important documents in a waterproof bag', xp: 15 },
  { id: '8', task: 'Have candles, torches and spare batteries ready', xp: 10 },
  { id: '9', task: 'Know your evacuation route', xp: 20 },
  { id: '10', task: 'Check on elderly or vulnerable neighbours', xp: 15 },
];

export default function ChecklistScreen() {
  const [completed, setCompleted] = useState([]);

  const toggleItem = (id) => {
    const updatedCompleted = [];
    let found = false;
    for (let i = 0; i < completed.length; i++) {
      if (completed[i] === id) {
        found = true;
      } else {
        updatedCompleted.push(completed[i]);
      }
    }
    if (found === false) {
      updatedCompleted.push(id);
    }
    setCompleted(updatedCompleted);
  };

  let totalXP = 0;
  for (let i = 0; i < CHECKLIST_ITEMS.length; i++) {
    if (completed.includes(CHECKLIST_ITEMS[i].id)) {
      totalXP = totalXP + CHECKLIST_ITEMS[i].xp;
    }
  }

  let maxXP = 0;
  for (let i = 0; i < CHECKLIST_ITEMS.length; i++) {
    maxXP = maxXP + CHECKLIST_ITEMS[i].xp;
  }

  const progress = totalXP / maxXP;

  let allDone = false;
  if (completed.length === CHECKLIST_ITEMS.length) {
    allDone = true;
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Cyclone Preparedness</Text>
        <Text style={styles.subtitle}>Complete tasks to earn XP and stay safe</Text>
        <Text style={styles.xpText}>{totalXP} / {maxXP} XP earned</Text>
        <ProgressBar progress={progress} />
        <Text style={styles.percentText}>{Math.round(progress * 100)}% Complete</Text>
        {allDone === true && <BadgeCard />}
        {CHECKLIST_ITEMS.map(item => (
          <TouchableOpacity
            key={item.id}
            style={[styles.item, completed.includes(item.id) && styles.itemDone]}
            onPress={() => toggleItem(item.id)}
          >
            <View style={[styles.checkbox, completed.includes(item.id) && styles.checkboxDone]}>
              {completed.includes(item.id) && <Text style={styles.tick}>✓</Text>}
            </View>
            <Text style={[styles.itemText, completed.includes(item.id) && styles.itemTextDone]}>{item.task}</Text>
            <Text style={styles.xpReward}>+{item.xp} XP</Text>
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
    marginBottom: 16,
  },
  xpText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e94560',
    marginBottom: 8,
  },
  percentText: {
    fontSize: 13,
    color: '#aaaaaa',
    marginBottom: 20,
    marginTop: 4,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  itemDone: {
    opacity: 0.6,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#e94560',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#e94560',
  },
  tick: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 14,
  },
  itemText: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
  },
  itemTextDone: {
    textDecorationLine: 'line-through',
    color: '#aaaaaa',
  },
  xpReward: {
    color: '#e94560',
    fontWeight: '700',
    fontSize: 13,
    marginLeft: 8,
  },
});
