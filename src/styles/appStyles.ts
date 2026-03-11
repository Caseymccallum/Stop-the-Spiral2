import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.lg
  },
  heading: {
    color: theme.colors.text,
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: theme.spacing.lg
  },
  text: {
    color: theme.colors.text,
    fontSize: 18,
    textAlign: 'center'
  },
  button: {
    backgroundColor: theme.colors.accent,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 24,
    minWidth: 220
  },
  buttonText: {
    color: theme.colors.background,
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center'
  }
});
