import { Pressable, StyleSheet, Text, View } from 'react-native';
import CATEGORIES from '../data/categories';
import colors from '../theme/colors';
import { formatCurrency } from '../utils/format';

// Fila de la lista de gastos: muestra descripción, categoría y monto.
export default function ExpenseItem({ expense, onPress }) {
  const category = CATEGORIES.find((item) => item.id === expense.categoryId);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <View style={styles.info}>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.category}>{category ? category.name : 'Sin categoría'}</Text>
      </View>
      <Text style={styles.amount}>{formatCurrency(expense.amount)}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  pressed: {
    opacity: 0.7,
  },
  info: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  category: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
});
