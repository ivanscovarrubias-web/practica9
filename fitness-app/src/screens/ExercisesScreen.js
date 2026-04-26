import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { colors, theme } from '../theme/theme';
import { mockExercises } from '../data/mockData';

export default function ExercisesScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');

  const categories = ['Todos', 'Piernas', 'Pecho', 'Espalda', 'Hombros', 'Brazos'];

  const filteredExercises = mockExercises.filter(ex => 
    (filter === 'Todos' || ex.category === filter) && 
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.exerciseCard}>
      <Text style={styles.exerciseIcon}>{item.image}</Text>
      <View style={styles.exerciseInfo}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseDetail}>{item.category} • {item.equipment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Grimorio de Ejercicios 📖</Text>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar hechizo (ejercicio)..."
        placeholderTextColor={colors.textSecondary}
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.filtersContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[styles.filterChip, filter === item && styles.filterChipActive]}
              onPress={() => setFilter(item)}
            >
              <Text style={[styles.filterText, filter === item && styles.filterTextActive]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filteredExercises}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: colors.surface,
    color: colors.text,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 15,
  },
  filtersContainer: {
    marginBottom: 15,
  },
  filterChip: {
    backgroundColor: colors.surface,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterChipActive: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    ...theme.shadows.neonPurple,
  },
  filterText: {
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  filterTextActive: {
    color: colors.text,
  },
  listContainer: {
    paddingBottom: 20,
  },
  exerciseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  exerciseIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exerciseDetail: {
    color: colors.textSecondary,
    fontSize: 12,
  }
});
