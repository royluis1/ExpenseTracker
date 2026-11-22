import { FlatList, StyleSheet, Text, View } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';
import EXPENSES from '../data/expenses';
import colors from '../theme/colors';

export default function ExpensesScreen({ navigation }) {
  return (
    <FlatList
      style={styles.screen}
      contentContainerStyle={styles.content}
      data={EXPENSES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ExpenseItem
          expense={item}
          onPress={() => navigation.navigate('ExpenseDetail', { expenseId: item.id })}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={<Text style={styles.title}>Últimos gastos</Text>}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 12,
  },
  separator: {
    height: 10,
  },
});
