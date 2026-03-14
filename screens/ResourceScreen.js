import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RESOURCES = [
  {
    id: '1',
    category: 'Emergency Numbers',
    color: '#e74c3c',
    items: [
      { label: 'Police', number: '999' },
      { label: 'Fire & Rescue', number: '995' },
      { label: 'SAMU (Ambulance)', number: '114' },
      { label: 'NDRRMC Hotline', number: '8924' },
    ],
  },
  {
    id: '2',
    category: 'Meteorological Services',
    color: '#3498db',
    items: [
      { label: 'MMS Weather Hotline', number: '96' },
      { label: 'MMS Website', url: 'https://metservice.intnet.mu' },
    ],
  },
  {
    id: '3',
    category: 'Cyclone Safety Tips',
    color: '#f39c12',
    items: [
      { label: 'Stay indoors during Class 3 and Class 4 warnings' },
    ],
  },
  {
    id: '4',
    category: 'Flood Safety Tips',
    color: '#2ecc71',
    items: [
      { label: 'test' },
     
    ],
  },
  {
    id: '5',
    category: 'Shelter Guidance',
    color: '#9b59b6',
    items: [
      { label: 'District Council of Rivière du Rempart', number: '5764-8886' },
    ],
  },
];

export default function ResourceScreen() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleSection = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const handleCall = (number) => {
    Linking.openURL(`tel:${number}`);
  };

  const handleURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Emergency Resources</Text>
        <Text style={styles.subtitle}>Mauritius cyclone and flood guidance</Text>
        {RESOURCES.map(section => (
          <View key={section.id} style={styles.section}>
            <TouchableOpacity
              style={[styles.sectionHeader, { backgroundColor: section.color }]}
              onPress={() => toggleSection(section.id)}
            >
              <Text style={styles.sectionTitle}>{section.category}</Text>
              <Text style={styles.sectionArrow}>{expandedId === section.id ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {expandedId === section.id && (
              <View style={styles.sectionBody}>
                {section.items.map((item, index) => (
                  <View key={index} style={styles.itemRow}>
                    <Text style={styles.itemLabel}>{item.label}</Text>
                    {item.number !== undefined && (
                      <TouchableOpacity
                        style={styles.callBtn}
                        onPress={() => handleCall(item.number)}
                      >
                        <Text style={styles.callBtnText}>{item.number}</Text>
                      </TouchableOpacity>
                    )}
                    {item.url !== undefined && (
                      <TouchableOpacity
                        style={styles.urlBtn}
                        onPress={() => handleURL(item.url)}
                      >
                        <Text style={styles.urlBtnText}>Visit</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
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
    marginBottom: 20,
  },
  section: {
    marginBottom: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  sectionArrow: {
    fontSize: 14,
    color: '#ffffff',
  },
  sectionBody: {
    backgroundColor: '#16213e',
    padding: 16,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
  },
  itemLabel: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    lineHeight: 20,
    paddingRight: 10,
  },
  callBtn: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  callBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  urlBtn: {
    backgroundColor: '#3498db',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  urlBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
});
