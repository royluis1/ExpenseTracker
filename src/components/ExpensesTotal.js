import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';
import { formatCurrency } from '../utils/format';

// Tarjeta con el total de los gastos, se muestra al final del listado.
export default function ExpensesTotal({ expenses }) {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Total de gastos</Text>
        <Text style={styles.count}>{expenses.length} registros</Text>
      </View>
      <Text style={styles.total}>{formatCurrency(total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    borderRadius: 14,
    padding: 18,
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
  },
  count: {
    fontSize: 13,
    color: colors.primaryLight,
    marginTop: 2,
  },
  total: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.white,
  },
});
