import { Pressable, StyleSheet, Text } from 'react-native';
import colors from '../theme/colors';

// Botón reutilizable. variant: 'primary' (relleno) u 'outline' (borde).
export default function PrimaryButton({ title, onPress, variant = 'primary', style }) {
  const isOutline = variant === 'outline';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        isOutline && styles.outline,
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, isOutline && styles.outlineText]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: colors.primary,
  },
});
