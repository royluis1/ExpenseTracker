import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet } from 'react-native';
import ExpensesScreen from '../screens/ExpensesScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

// Ícono de cada pestaña según la ruta (relleno si está activa, contorno si no).
const TAB_ICONS = {
  Home: ['home', 'home-outline'],
  Expenses: ['list', 'list-outline'],
  Settings: ['settings', 'settings-outline'],
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        headerTintColor: colors.text,
        tabBarIcon: ({ focused, color, size }) => {
          const [active, inactive] = TAB_ICONS[route.name];
          return <Ionicons name={focused ? active : inactive} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Inicio', headerShown: false }}
      />
      <Tab.Screen
        name="Expenses"
        component={ExpensesScreen}
        options={({ navigation }) => ({
          title: 'Mis gastos',
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('NewExpense')}
              style={styles.headerButton}
              accessibilityLabel="Agregar gasto"
            >
              <Ionicons name="add-circle" size={30} color={colors.primary} />
            </Pressable>
          ),
        })}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Ajustes' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 16,
  },
});
