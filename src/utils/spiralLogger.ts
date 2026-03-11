import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'spiral-logs';

export type SpiralLogEntry = {
  timestamp: string;
  trigger: string;
};

export async function getSpiralLogs(): Promise<SpiralLogEntry[]> {
  const rawLogs = await AsyncStorage.getItem(STORAGE_KEY);

  if (!rawLogs) {
    return [];
  }

  try {
    return JSON.parse(rawLogs) as SpiralLogEntry[];
  } catch {
    return [];
  }
}

export async function addSpiralLog(trigger = 'unknown'): Promise<void> {
  const currentLogs = await getSpiralLogs();

  const newEntry: SpiralLogEntry = {
    timestamp: new Date().toISOString(),
    trigger
  };

  const updatedLogs = [newEntry, ...currentLogs];
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLogs));
}
