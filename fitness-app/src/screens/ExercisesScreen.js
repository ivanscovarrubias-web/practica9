import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { colors, theme } from '../theme/theme';
import { mockExercises } from '../data/mockData';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ExercisesScreen() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Todos');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['Todos', 'Pecho', 'Espalda', 'Piernas', 'Hombros', 'Brazos', 'Core'];

  const filteredExercises = mockExercises.filter(ex => 
    (filter === 'Todos' || ex.category === filter) && 
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedId === item.id;

    return (
      <TouchableOpacity 
        style={[styles.exerciseCard, isExpanded && styles.exerciseCardExpanded]} 
        activeOpacity={0.8}
        onPress={() => toggleExpand(item.id)}
      >
        <View style={styles.cardHeaderRow}>
          <Text style={styles.exerciseIcon}>{item.image}</Text>
          <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDetail}>{item.category} • {item.equipment}</Text>
          </View>
        </View>

        {isExpanded && (
          <View style={styles.expandedDetails}>
            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Nivel:</Text>
              <Text style={styles.detailValueHighlight}>{item.level}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Ejecución:</Text>
              <Text style={styles.detailText}>{item.description}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Músculos Principales:</Text>
              <Text style={styles.detailValue}>{item.primaryMuscles}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Músculos Secundarios:</Text>
              <Text style={styles.detailValue}>{item.secondaryMuscles}</Text>
            </View>

            <View style={styles.detailSection}>
              <Text style={styles.detailLabel}>Beneficios:</Text>
              <Text style={styles.detailText}>{item.benefits}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

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
              onPress={() => {
                setFilter(item);
                setExpandedId(null); // Reset expand on filter change
              }}
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
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: colors.accent,
  },
  exerciseCardExpanded: {
    borderLeftColor: colors.primary,
    ...theme.shadows.neonOrange,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  expandedDetails: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  detailSection: {
    marginBottom: 12,
  },
  detailLabel: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  detailText: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  detailValue: {
    color: colors.text,
    fontSize: 14,
  },
  detailValueHighlight: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: 'bold',
  }
});
