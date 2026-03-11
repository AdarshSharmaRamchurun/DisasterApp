import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BadgeCard = () => {
  return (
    <View style={styles.container}>
      <Text>Badge Card Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});

export default BadgeCard;
