import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChecklistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Checklist Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChecklistScreen;
