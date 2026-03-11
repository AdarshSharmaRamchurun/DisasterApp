import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChecklistItem = () => {
  return (
    <View style={styles.container}>
      <Text>Checklist Item Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ChecklistItem;
