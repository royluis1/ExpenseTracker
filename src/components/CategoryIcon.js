import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import colors from '../theme/colors';

// Círculo con el ícono de la categoría, pintado con su color.
export default function CategoryIcon({ category, size = 44 }) {
  const color = category ? category.color : colors.textSecondary;
  const icon = category ? category.icon : 'help';

  return (
    <View
      style={[
        styles.circle,
        { width: size, height: size, borderRadius: size / 2, backgroundColor: color + '22' },
      ]}
    >
      <Ionicons name={icon} size={size * 0.5} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
