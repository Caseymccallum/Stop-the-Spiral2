import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MainNavigator';
import { appStyles } from '../styles/appStyles';
import { addSpiralLog } from '../utils/spiralLogger';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const handlePress = async () => {
    await addSpiralLog('unknown');
    navigation.navigate('Interrupt');
  };

  return (
    <View style={appStyles.container}>
      <Pressable onPress={handlePress} style={appStyles.button}>
        <Text style={appStyles.buttonText}>Stop the Spiral</Text>
      </Pressable>
    </View>
  );
}
