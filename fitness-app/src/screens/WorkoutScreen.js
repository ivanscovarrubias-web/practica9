import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { colors, theme } from '../theme/theme';

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState([]);

  const addExercise = () => {
    setWorkout([
      ...workout,
      {
        id: Date.now().toString(),
        name: '',
        sets: [
          { id: Date.now().toString() + 'set', setNumber: 1, reps: '', weight: '', completed: false }
        ]
      }
    ]);
  };

  const addSet = (exerciseIndex) => {
    const newWorkout = [...workout];
    const exercise = newWorkout[exerciseIndex];
    exercise.sets.push({
      id: Date.now().toString(),
      setNumber: exercise.sets.length + 1,
      reps: '',
      weight: '',
      completed: false
    });
    setWorkout(newWorkout);
  };

  const updateExerciseName = (exerciseIndex, text) => {
    const newWorkout = [...workout];
    newWorkout[exerciseIndex].name = text;
    setWorkout(newWorkout);
  };

  const updateSet = (exerciseIndex, setIndex, field, value) => {
    const newWorkout = [...workout];
    newWorkout[exerciseIndex].sets[setIndex][field] = value;
    setWorkout(newWorkout);
  };

  const toggleSet = (exerciseIndex, setIndex) => {
    const newWorkout = [...workout];
    newWorkout[exerciseIndex].sets[setIndex].completed = !newWorkout[exerciseIndex].sets[setIndex].completed;
    setWorkout(newWorkout);
  };

  const removeExercise = (exerciseIndex) => {
    const newWorkout = workout.filter((_, index) => index !== exerciseIndex);
    setWorkout(newWorkout);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Entrenamiento Activo 💀</Text>
      
      {workout.length === 0 && (
        <Text style={styles.emptyText}>No hay hechizos en tu ritual de hoy. ¡Añade uno para empezar!</Text>
      )}

      {workout.map((item, eIndex) => (
        <View key={item.id} style={styles.exerciseCard}>
          <View style={styles.exerciseHeaderRow}>
            <TextInput
              style={styles.exerciseNameInput}
              placeholder="Ej. Sentadillas de Bruja..."
              placeholderTextColor={colors.textSecondary}
              value={item.name}
              onChangeText={(text) => updateExerciseName(eIndex, text)}
            />
            <TouchableOpacity onPress={() => removeExercise(eIndex)} style={styles.removeBtn}>
              <Text style={styles.removeBtnText}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 0.5 }]}>Serie</Text>
            <Text style={styles.tableHeaderText}>Reps</Text>
            <Text style={styles.tableHeaderText}>Peso</Text>
            <Text style={[styles.tableHeaderText, { flex: 0.5 }]}>Hecho</Text>
          </View>
          
          {item.sets.map((set, sIndex) => (
            <View key={set.id} style={[styles.setRow, set.completed && styles.setRowCompleted]}>
              <Text style={[styles.setRowText, { flex: 0.5 }]}>{set.setNumber}</Text>
              
              <TextInput
                style={styles.setRowInput}
                keyboardType="numeric"
                placeholder="0"
                placeholderTextColor={colors.textSecondary}
                value={set.reps}
                onChangeText={(val) => updateSet(eIndex, sIndex, 'reps', val)}
                editable={!set.completed}
              />
              
              <TextInput
                style={styles.setRowInput}
                keyboardType="numeric"
                placeholder="0 kg"
                placeholderTextColor={colors.textSecondary}
                value={set.weight}
                onChangeText={(val) => updateSet(eIndex, sIndex, 'weight', val)}
                editable={!set.completed}
              />

              <TouchableOpacity 
                style={[styles.checkbox, set.completed && styles.checkboxCompleted]} 
                onPress={() => toggleSet(eIndex, sIndex)}
              >
                {set.completed && <Text style={styles.checkboxTick}>✓</Text>}
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity style={styles.addSetButton} onPress={() => addSet(eIndex)}>
            <Text style={styles.addSetButtonText}>+ Añadir Serie</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.addExerciseButton} onPress={addExercise}>
        <Text style={styles.addExerciseButtonText}>+ Añadir Ejercicio 🕸️</Text>
      </TouchableOpacity>

      {workout.length > 0 && (
        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishButtonText}>Finalizar Ritual 🩸</Text>
        </TouchableOpacity>
      )}
      
      <View style={styles.bottomPadding} />
    </ScrollView>
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
    color: colors.danger,
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: colors.danger,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  emptyText: {
    color: colors.textSecondary,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  exerciseCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    ...theme.shadows.neonPurple,
  },
  exerciseHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  exerciseNameInput: {
    flex: 1,
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingVertical: 5,
  },
  removeBtn: {
    marginLeft: 10,
    padding: 5,
    backgroundColor: colors.danger,
    borderRadius: 5,
  },
  removeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    color: colors.textSecondary,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  setRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  setRowCompleted: {
    backgroundColor: '#1a331a',
    borderColor: colors.accent,
    borderWidth: 1,
  },
  setRowText: {
    color: colors.text,
    flex: 1,
    textAlign: 'center',
  },
  setRowInput: {
    flex: 1,
    color: colors.text,
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
    marginHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    maxWidth: 40,
    marginLeft: 10,
  },
  checkboxCompleted: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  checkboxTick: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  addSetButton: {
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  addSetButtonText: {
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  addExerciseButton: {
    backgroundColor: colors.surface,
    borderColor: colors.accent,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    borderStyle: 'dashed',
  },
  addExerciseButtonText: {
    color: colors.accent,
    fontWeight: 'bold',
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: colors.danger,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    ...theme.shadows.neonOrange,
    shadowColor: colors.danger,
  },
  finishButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  },
  bottomPadding: {
    height: 40,
  }
});
