import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import CATEGORIES from '../data/categories';
import colors from '../theme/colors';

// Selector de categoría con "chips" presionables.
export default function CategoryPicker({ label, value, onChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.chips}>
        {CATEGORIES.map((category) => {
          const selected = category.id === value;
          return (
            <Pressable
              key={category.id}
              onPress={() => onChange(category.id)}
              style={[
                styles.chip,
                selected && { backgroundColor: category.color, borderColor: category.color },
              ]}
            >
              <Ionicons
                name={category.icon}
                size={16}
                color={selected ? colors.white : category.color}
                style={styles.chipIcon}
              />
              <Text style={[styles.chipText, selected && styles.chipTextSelected]}>
                {category.name}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  chipIcon: {
    marginRight: 6,
  },
  chipText: {
    fontSize: 14,
    color: colors.text,
  },
  chipTextSelected: {
    color: colors.white,
    fontWeight: '600',
  },
});
