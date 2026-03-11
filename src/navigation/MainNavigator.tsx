import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InterruptScreen from '../screens/InterruptScreen';

export type RootStackParamList = {
  Home: undefined;
  Interrupt: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#0f0f0f' },
        headerTintColor: '#d4af37',
        contentStyle: { backgroundColor: '#0f0f0f' }
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'StopTheSpiral' }} />
      <Stack.Screen
        name="Interrupt"
        component={InterruptScreen}
        options={{ title: 'Interrupt the Spiral' }}
      />
    </Stack.Navigator>
  );
}
