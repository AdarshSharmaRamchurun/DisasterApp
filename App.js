import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import PrepareScreen from './screens/PrepareScreen';
import ChecklistScreen from './screens/ChecklistScreen';
import QuizScreen from './screens/QuizScreen';
import VulnerabilityScreen from './screens/VulnerabilityScreen';
import ResourceScreen from './screens/ResourceScreen';

const Tab = createBottomTabNavigator();
const PrepareStack = createNativeStackNavigator();

function PrepareNavigator() {
  return (
    <PrepareStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1a1a2e' },
        headerTintColor: '#ffffff',
        headerTitleStyle: { fontWeight: '800' },
      }}
    >
      <PrepareStack.Screen
        name="PrepareHub"
        component={PrepareScreen}
        options={{ title: 'Prepare' }}
      />
      <PrepareStack.Screen
        name="Checklist"
        component={ChecklistScreen}
        options={{ title: 'Preparedness Checklist' }}
      />
      <PrepareStack.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ title: 'Cyclone Safety Quiz' }}
      />
      <PrepareStack.Screen
        name="Vulnerability"
        component={VulnerabilityScreen}
        options={{ title: 'Vulnerability Assessment' }}
      />
    </PrepareStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: '#1a1a2e' },
            tabBarActiveTintColor: '#e94560',
            tabBarInactiveTintColor: '#888',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Prepare"
            component={PrepareNavigator}
            options={{
              tabBarLabel: 'Prepare',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="shield-checkmark-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Resources"
            component={ResourceScreen}
            options={{
              tabBarLabel: 'Resources',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
