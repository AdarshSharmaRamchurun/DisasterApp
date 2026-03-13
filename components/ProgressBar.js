import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ProgressBar({ progress }) {
  return (
    <View style={styles.background}>
      <View style={[styles.fill, { width: `${progress * 100 > 100 ? 100 : progress * 100}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 14,
    backgroundColor: '#16213e',
    borderRadius: 7,
    overflow: 'hidden',
  },
  fill: {
    height: 14,
    backgroundColor: '#e94560',
    borderRadius: 7,
  },
});
