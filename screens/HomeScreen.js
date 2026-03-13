import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context' ;


const WARNING_LEVELS = {
    1: { label: 'Class 1', color: '#2ecc71', advice: 'A cyclone is in the region. Stay informed and begin preparing.' },
    2: { label: 'Class 2', color: '#f39c12', advice: 'Winds expected soon. Secure your home and stock supplies.' },
    3: { label: 'Class 3', color: '#e67e22', advice: 'Dangerous winds imminent. Stay indoors and away from windows.' },
    4: { label: 'Class 4', color: '#e74c3c', advice: 'Extremely dangerous. Do not go outside under any circumstances.' },

}



export default function HomeScreen({ navigation }) {
  const [warningLevel, setWarningLevel] = useState(2);
    const currentWarning = WARNING_LEVELS[warningLevel];

  return (
        <SafeAreaView style={styles.safe}>
              <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>DisasterApp</Text>
        <Text style={styles.subtitle}>Mauritius Cyclone Preparedness</Text>


        <View style={[styles.warningCard, { backgroundColor: currentWarning.color }]}>
          <Text style={styles.warningLabel}>{currentWarning.label} Warning</Text>
          <Text style={styles.warningAdvice}>{currentWarning.advice}</Text>
        </View>

        <Text style={styles.sectionTitle}>Simulate Warning Level:</Text>
        <View style={styles.levelRow}>
          {[1, 2, 3, 4].map(level => (

            <TouchableOpacity
              key={level}
              style={[styles.levelBtn, { backgroundColor: WARNING_LEVELS[level].color }]}
              onPress={() => setWarningLevel(level)}

                          >
                                          <Text style={styles.levelBtnText}>C{level}</Text>
            </TouchableOpacity>
          ))}
        </View>


        <Text style={styles.sectionTitle}>Get Started:</Text>
                <TouchableOpacity style={styles.mainBtn} onPress={() => navigation.navigate('Checklist')}>
                            <Text style={styles.mainBtnText}>Start Preparing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.mainBtn, styles.mainBtnSecondary]} onPress={() => navigation.navigate('Resources')}>
          <Text style={styles.mainBtnText}>View Resources</Text>

        </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#aaaaaa',
    textAlign: 'center',
    marginBottom: 24,
  },

  warningCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  warningLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
  },
warningAdvice: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },

  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },

  levelBtn: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  levelBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },

  mainBtn: {
    backgroundColor: '#e94560',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  mainBtnSecondary: {
    backgroundColor: '#16213e',
    borderWidth: 1,
    borderColor: '#e94560',
  },

  mainBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },

  });
