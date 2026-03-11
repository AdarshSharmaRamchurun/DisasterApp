import React from 'react';
import { NavigationContainer } from '@react-navigation/native' ;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' ;
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ChecklistScreen from './screens/ChecklistScreen';
import QuizScreen from './screens/QuizScreen';
import ResourceScreen from './screens/ResourceScreen';

const Tab = createBottomTabNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1a1a'},
        tabBarActiveTintColor:  '#e94560',
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
          name="Checklist"
          component={ChecklistScreen}
          options={{
            tabBarLabel: 'Prepare',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkbox-outline" size={size} color={color} />
            ),
          }}
        />

                <Tab.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            tabBarLabel: 'Quiz',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="help-circle-outline" size={size} color={color} />
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
   )
}















