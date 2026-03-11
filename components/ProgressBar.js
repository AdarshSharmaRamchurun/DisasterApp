import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Text>Progress Bar Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default ProgressBar;
