import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ChecklistItem({ item, isCompleted, onToggle }) {
  return (
    <TouchableOpacity
      style={[styles.item, isCompleted === true && styles.itemDone]}
      onPress={() => onToggle(item.id)}
    >
      <View style={[styles.checkbox, isCompleted === true && styles.checkboxDone]}>
        {isCompleted === true && <Text style={styles.tick}>✓</Text>}
      </View>
      <Text style={[styles.itemText, isCompleted === true && styles.itemTextDone]}>
        {item.task}
      </Text>
      <Text style={styles.xpReward}>+{item.xp} XP</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
