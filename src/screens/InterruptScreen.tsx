import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainNavigator';
import { appStyles } from '../styles/appStyles';
import { theme } from '../styles/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Interrupt'>;

export default function InterruptScreen({ navigation }: Props) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(interval);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={appStyles.container}>
      <Text style={appStyles.heading}>Pause. Breathe. You are here right now.</Text>

      {timeLeft > 0 ? (
        <Text style={[appStyles.text, { color: theme.colors.accent, fontSize: 52, marginBottom: 28 }]}>
          {timeLeft}
        </Text>
      ) : (
        <Text style={[appStyles.text, { marginBottom: 28 }]}>You're safe. Spiral interrupted.</Text>
      )}

      <Pressable onPress={() => navigation.navigate('Home')} style={appStyles.button}>
        <Text style={appStyles.buttonText}>Back Home</Text>
      </Pressable>
    </View>
  );
}
