import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="inicio"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size = 28 }) => (
          <Image
            source={require('@/assets/images/inicio.png')} 
            style={{ width: size, height: size, tintColor: color }}
            resizeMode="contain"/>
          ),
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, size = 28 }) => (
            <Image
            source={require('@/assets/images/sobre.webp')} 
            style={{ width: size, height: size, tintColor: color }}
            resizeMode="contain"
          />
          ),
        }}
      />
      <Tabs.Screen
        name="clima" 
        options={{
          title: 'Clima',
          tabBarIcon: ({ color, size = 28 }) => (
            <Image
              source={require('@/assets/images/nuvem.png')} 
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tabs>
  );
}
