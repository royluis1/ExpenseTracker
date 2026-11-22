import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import CATEGORIES from '../data/categories';
import EXPENSES from '../data/expenses';
import colors from '../theme/colors';
import { formatCurrency } from '../utils/format';

function DetailRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

export default function ExpenseDetailScreen({ route, navigation }) {
  const { expenseId } = route.params;
  const expense = EXPENSES.find((item) => item.id === expenseId);

  if (!expense) {
    return (
      <View style={styles.centered}>
        <Text style={styles.rowLabel}>No se encontró el gasto.</Text>
      </View>
    );
  }

  const category = CATEGORIES.find((item) => item.id === expense.categoryId);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.description}>{expense.description}</Text>
        <Text style={styles.amount}>{formatCurrency(expense.amount)}</Text>
      </View>

      <View style={styles.card}>
        <DetailRow label="Categoría" value={category ? category.name : 'Sin categoría'} />
        <DetailRow label="Fecha" value={expense.date} />
      </View>

      <PrimaryButton title="Volver al listado" variant="outline" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 8,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowLabel: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
});
