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
      { label: 'Fire & Rescue Services', number: '995' },
      { label: 'SAMU (Ambulance)', number: '114' },
      { label: 'Coast Guard', number: '16' },
      { label: 'NDRRMC Hotline', number: '8924' },
      { label: 'Electrical Emergency (CEB)', number: '130' },
      { label: 'Mauritius Telecom Faults', number: '190' },
    ],
  },
  {
    id: '2',
    category: 'Official Sources & Live Updates',
    color: '#3498db',
    items: [
      { label: 'MMS Current Cyclone Status', url: 'https://metservice.intnet.mu/current-cyclone.php' },
      { label: 'MMS Cyclone Warning System', url: 'https://metservice.intnet.mu/tropical-cyclone/warning-system.php' },
      { label: 'NDRRMC Cyclone Warning Info', url: 'https://ndrrmc.govmu.org/Pages/cyclonewarning.aspx' },
      { label: 'MMS Weather Hotline', number: '96' },
    ],
  },
  {
    id: '3',
    category: 'Cyclone Warning Classes',
    color: '#9b59b6',
    items: [
      { label: 'Class I — Issued 36–48 hours before gusts of 120 km/h. Begin preparing now.' },
      { label: 'Class II — Issued to allow 12 hours of daylight before gusts of 120 km/h. Secure your home.' },
      { label: 'Class III — Issued to allow 6 hours of daylight before gusts of 120 km/h. Stay indoors.' },
      { label: 'Class IV — Gusts of 120 km/h are occurring. Do not go outside under any circumstances.' },
      { label: 'Safety Bulletin — Issued after Class III/IV when outdoor risk has decreased.' },
      { label: 'Termination — Issued when cyclonic risk has fully abated.' },
    ],
  },
  {
    id: '4',
    category: 'Cyclone Safety Tips',
    color: '#f39c12',
    items: [
      { label: 'Stay indoors and away from windows and glass doors during Class III and IV warnings' },
      { label: 'The calm eye of the cyclone is temporary — do not go outside during this period' },
      { label: 'Listen to MBC Radio or MBC TV for official bulletins issued every 3–6 hours' },
      { label: 'Keep a battery-powered or wind-up radio at home for when power is cut' },
      { label: 'Do not go outside to inspect damage until the official Safety Bulletin or Termination is issued' },
      { label: 'Cyclone bulletins are distributed by MBC, NDRRMC, Police and private radio stations' },
    ],
  },
  {
    id: '5',
    category: 'Flood Safety Tips',
    color: '#2ecc71',
    items: [
      { label: 'Never walk or drive through floodwater — even shallow water can sweep a person away' },
      { label: 'Move to higher ground immediately if flooding is likely in your area' },
      { label: 'Turn off electricity at the mains if floodwater enters your home' },
      { label: 'Do not use taps, electrical appliances or touch power points in a flooded home' },
      { label: 'Keep children and elderly people away from flooded drains, rivers and roads' },
      { label: 'Avoid low-lying roads near rivers, especially in Rivière du Rempart, Port Louis and Plaines Wilhems' },
    ],
  },
  {
    id: '6',
    category: 'Evacuee Centres & Shelter Guidance',
    color: '#e94560',
    items: [
      { label: 'Evacuee Centres are managed by the Ministry of Social Integration — free for all residents' },
      { label: 'Community centres and schools across Mauritius serve as official cyclone shelters' },
      { label: 'Bring food, water, medication, important documents and a change of clothing' },
      { label: 'Official list of Evacuee Centres (Government of Mauritius)', url: 'https://socialsecurity.govmu.org/socialsecurity/wp-content/uploads/2024/08/list-of-evacuee-centres-20.02.24.pdf' },
      { label: 'Evacuee Centres — Ministry of Social Integration', url: 'https://govmu.org/EN/infoservices/socialsecurity/Pages/nationaldisaster.aspx' },
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
        <Text style={styles.subtitle}>Official Mauritius cyclone and flood guidance</Text>
        <View style={styles.offlineBadge}>
          <Text style={styles.offlineBadgeText}>Core content available offline</Text>
        </View>
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
                        <Text style={styles.urlBtnText}>Open</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        <Text style={styles.sourceNote}>
          Sources: Mauritius Meteorological Services, NDRRMC, Government of Mauritius
        </Text>
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
    paddingBottom: 40,
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
    marginBottom: 12,
  },
  offlineBadge: {
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  offlineBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
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
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
    flex: 1,
    paddingRight: 8,
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
    fontSize: 13,
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
    fontSize: 13,
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
    fontSize: 13,
  },
  sourceNote: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 16,
    fontStyle: 'italic',
  },
});
