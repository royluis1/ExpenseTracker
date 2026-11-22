import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import NewExpenseModal from '../screens/NewExpenseModal';
import colors from '../theme/colors';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

// Navegador principal: las pestañas son la pantalla base y sobre ellas
// se apilan el detalle de un gasto y el modal para cargar uno nuevo.
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.primary,
        headerTitleStyle: { color: colors.text },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetailScreen}
        options={{ title: 'Detalle del gasto', headerBackTitle: 'Volver' }}
      />
      <Stack.Screen
        name="NewExpense"
        component={NewExpenseModal}
        options={{ title: 'Nuevo gasto', presentation: 'modal' }}
      />
    </Stack.Navigator>
  );
}
