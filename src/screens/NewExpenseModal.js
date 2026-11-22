import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import CategoryPicker from '../components/CategoryPicker';
import FormField from '../components/FormField';
import PrimaryButton from '../components/PrimaryButton';
import CATEGORIES from '../data/categories';
import colors from '../theme/colors';

// Muestra un mensaje simple. Alert no funciona en la versión web, por eso se usa window.alert ahí.
function showMessage(title, message) {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n\n${message}`);
  } else {
    Alert.alert(title, message);
  }
}

export default function NewExpenseModal() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [categoryId, setCategoryId] = useState(CATEGORIES[0].id);

  const handleSave = () => {
    if (!name.trim() || !amount.trim()) {
      showMessage('Faltan datos', 'Completá el nombre y el monto del gasto.');
      return;
    }

    const category = CATEGORIES.find((item) => item.id === categoryId);
    // Todavía no se guarda la información: solo mostramos lo que se cargó.
    console.log('Gasto a guardar:', { name, amount, category: category.name });
    showMessage(
      'Gasto registrado',
      `${name} - $${amount} (${category.name})\n\nEn este Sprint los datos todavía no se guardan.`
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.subtitle}>Completá los datos del nuevo gasto.</Text>

        <FormField
          label="Nombre del gasto"
          placeholder="Ej: Supermercado"
          value={name}
          onChangeText={setName}
        />

        <FormField
          label="Monto"
          placeholder="Ej: 25000"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <CategoryPicker label="Categoría" value={categoryId} onChange={setCategoryId} />

        <PrimaryButton title="Guardar" onPress={handleSave} />
      </ScrollView>
    </KeyboardAvoidingView>
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
  subtitle: {
    fontSize: 15,
    color: colors.textSecondary,
    marginBottom: 24,
  },
});
