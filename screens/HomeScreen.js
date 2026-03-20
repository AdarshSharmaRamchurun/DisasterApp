import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WARNING_LEVELS = {
  1: { label: 'Class 1', color: '#2ecc71', advice: 'A cyclone is in the region. Stay informed and begin preparing.' },
  2: { label: 'Class 2', color: '#f39c12', advice: 'Winds expected soon. Secure your home and stock supplies.' },
  3: { label: 'Class 3', color: '#e67e22', advice: 'Dangerous winds imminent. Stay indoors and away from windows.' },
  4: { label: 'Class 4', color: '#e74c3c', advice: 'Extremely dangerous. Do not go outside under any circumstances.' },
};

const DISTRICTS = [
  'Port Louis',
  'Pamplemousses',
  'Rivière du Rempart',
  'Flacq',
  'Grand Port',
  'Savanne',
  'Black River',
  'Plaines Wilhems',
  'Moka',
];

const HIGH_RISK_DISTRICTS = ['Rivière du Rempart', 'Grand Port', 'Savanne', 'Port Louis'];

export default function HomeScreen({ navigation }) {
  const [warningLevel, setWarningLevel] = useState(2);
  const [selectedDistrict, setSelectedDistrict] = useState('Rivière du Rempart');
  const [showDistrictPicker, setShowDistrictPicker] = useState(false);



  const handleLevelChange = (level) => {
    setWarningLevel(level);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setShowDistrictPicker(false);
  };

  const currentWarning = WARNING_LEVELS[warningLevel];

  let isHighRisk = false;
  for (let i = 0; i < HIGH_RISK_DISTRICTS.length; i++) {
    if (HIGH_RISK_DISTRICTS[i] === selectedDistrict) {
      isHighRisk = true;
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Text style={styles.title}>CycloneSafe MU</Text>
        <Text style={styles.subtitle}>Mauritius Cyclone Preparedness</Text>

        <View style={[styles.warningCard, { backgroundColor: currentWarning.color }]}>
          <Text style={styles.warningLabel}>{currentWarning.label} Warning</Text>
          <Text style={styles.warningDistrict}>{selectedDistrict}</Text>
          <Text style={styles.warningAdvice}>{currentWarning.advice}</Text>
          {warningLevel >= 3 && (
            <View style={styles.alertBanner}>
              <Text style={styles.alertBannerText}>⚠️ Immediate action required in your area</Text>
            </View>
          )}
        </View>

        {isHighRisk === true && (
          <View style={styles.riskBanner}>
            <Text style={styles.riskBannerText}>
              {selectedDistrict} is a known flood and cyclone risk zone. Consider evacuating at Class 3 or above.
            </Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Your District:</Text>
        <TouchableOpacity
          style={styles.districtBtn}
          onPress={() => setShowDistrictPicker(true)}
        >
          <Text style={styles.districtBtnText}>{selectedDistrict}</Text>
          <Text style={styles.districtBtnArrow}>▼</Text>
        </TouchableOpacity>

        {showDistrictPicker === true && (
          <View style={styles.districtList}>
            {DISTRICTS.map(district => (
              <TouchableOpacity
                key={district}
                style={[
                  styles.districtOption,
                  selectedDistrict === district && styles.districtOptionActive,
                ]}
                onPress={() => handleDistrictSelect(district)}
              >
                <Text style={[
                  styles.districtOptionText,
                  selectedDistrict === district && styles.districtOptionTextActive,
                ]}>
                  {district}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <Text style={styles.sectionTitle}>Simulate Warning Level:</Text>
        <View style={styles.levelRow}>
          {[1, 2, 3, 4].map(level => (
            <TouchableOpacity
              key={level}
              style={[styles.levelBtn, { backgroundColor: WARNING_LEVELS[level].color }]}
              onPress={() => handleLevelChange(level)}
            >
              <Text style={styles.levelBtnText}>C{level}</Text>
            </TouchableOpacity>
          ))}
        </View>


        <Text style={styles.sectionTitle}>Get Started:</Text>
        <TouchableOpacity style={styles.mainBtn} onPress={() => navigation.navigate('Prepare')}>
          <Text style={styles.mainBtnText}>Start Preparing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mainBtn, styles.mainBtnSecondary]}
          onPress={() => navigation.navigate('Resources')}
        >
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
    paddingBottom: 40,
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
    marginBottom: 16,
  },
  warningLabel: {
    fontSize: 22,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 4,
  },
  warningDistrict: {
    fontSize: 14,
    color: '#ffffff',
    opacity: 0.85,
    marginBottom: 8,
    fontWeight: '600',
  },
  warningAdvice: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 20,
  },
  alertBanner: {
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
  },
  alertBannerText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 13,
    textAlign: 'center',
  },
  riskBanner: {
    backgroundColor: '#2a1a1a',
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  riskBannerText: {
    color: '#ffaaaa',
    fontSize: 13,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
    marginTop: 8,
  },
  districtBtn: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e94560',
  },
  districtBtnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
  },
  districtBtnArrow: {
    color: '#e94560',
    fontSize: 14,
  },
  districtList: {
    backgroundColor: '#16213e',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#333',
  },
  districtOption: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
  },
  districtOptionActive: {
    backgroundColor: '#e94560',
  },
  districtOptionText: {
    color: '#aaaaaa',
    fontSize: 14,
  },
  districtOptionTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
  levelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 8,
  },
  levelBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  levelBtnText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  permissionWarning: {
    backgroundColor: '#2a2a1a',
    borderLeftWidth: 4,
    borderLeftColor: '#f39c12',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  permissionWarningText: {
    color: '#ffddaa',
    fontSize: 13,
    lineHeight: 20,
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
