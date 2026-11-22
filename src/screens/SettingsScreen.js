import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import colors from '../theme/colors';

function SettingRow({ title, subtitle, children }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowText}>
        <Text style={styles.rowTitle}>{title}</Text>
        {subtitle ? <Text style={styles.rowSubtitle}>{subtitle}</Text> : null}
      </View>
      {children}
    </View>
  );
}

export default function SettingsScreen() {
  // Opciones de ejemplo: todavía no se guardan, solo muestran cómo se verá la pantalla.
  const [notifications, setNotifications] = useState(true);
  const [monthlySummary, setMonthlySummary] = useState(false);

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.section}>Preferencias</Text>
      <View style={styles.card}>
        <SettingRow title="Notificaciones" subtitle="Recordatorios para cargar gastos">
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ true: colors.primary }}
          />
        </SettingRow>
        <SettingRow title="Resumen mensual" subtitle="Recibir un resumen a fin de mes">
          <Switch
            value={monthlySummary}
            onValueChange={setMonthlySummary}
            trackColor={{ true: colors.primary }}
          />
        </SettingRow>
        <SettingRow title="Moneda">
          <Text style={styles.value}>Peso argentino (ARS)</Text>
        </SettingRow>
      </View>

      <Text style={styles.section}>Acerca de</Text>
      <View style={styles.card}>
        <SettingRow title="Versión">
          <Text style={styles.value}>1.0.0 (Sprint 1)</Text>
        </SettingRow>
        <SettingRow title="Proyecto" subtitle="Programación III - Proyecto Integrador" />
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
    padding: 16,
  },
  section: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
    textTransform: 'uppercase',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 4,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowText: {
    flex: 1,
    marginRight: 12,
  },
  rowTitle: {
    fontSize: 16,
    color: colors.text,
  },
  rowSubtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    marginTop: 2,
  },
  value: {
    fontSize: 15,
    color: colors.textSecondary,
  },
});
