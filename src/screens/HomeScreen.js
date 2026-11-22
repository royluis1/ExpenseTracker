import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import colors from '../theme/colors';

const FEATURES = [
  'Registrá cada gasto en pocos segundos.',
  'Organizalos por categoría.',
  'Consultá cuánto gastaste en total.',
];

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.appName}>ExpenseTracker</Text>
        <Text style={styles.welcome}>¡Te damos la bienvenida!</Text>
        <Text style={styles.description}>
          ExpenseTracker es la app que te ayuda a registrar y consultar tus gastos personales
          para que sepas siempre en qué se va tu dinero.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>¿Qué vas a poder hacer?</Text>
        {FEATURES.map((feature) => (
          <View key={feature} style={styles.featureRow}>
            <View style={styles.bullet} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actions}>
        <PrimaryButton title="Ver mis gastos" onPress={() => navigation.navigate('Expenses')} />
        <PrimaryButton
          title="Cargar un gasto"
          variant="outline"
          onPress={() => navigation.navigate('NewExpense')}
          style={styles.secondaryButton}
        />
      </View>
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
    paddingTop: 64,
  },
  hero: {
    alignItems: 'center',
    marginBottom: 32,
  },
  appName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
    marginRight: 12,
  },
  featureText: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  actions: {
    marginTop: 28,
  },
  secondaryButton: {
    marginTop: 12,
  },
});
