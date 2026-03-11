import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResourceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Resource Screen</Text>
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

export default ResourceScreen;
