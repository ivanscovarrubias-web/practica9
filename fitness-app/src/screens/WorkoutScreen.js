import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, theme } from '../theme/theme';
import { mockCurrentWorkout } from '../data/mockData';

export default function WorkoutScreen() {
  const [workout, setWorkout] = useState(mockCurrentWorkout);

  const toggleSet = (exerciseIndex, setIndex) => {
    const newWorkout = [...workout];
    newWorkout[exerciseIndex].sets[setIndex].completed = !newWorkout[exerciseIndex].sets[setIndex].completed;
    setWorkout(newWorkout);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Entrenamiento Activo 💀</Text>
      
      {workout.map((item, eIndex) => (
        <View key={eIndex} style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>{item.exercise.image} {item.exercise.name}</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Serie</Text>
            <Text style={styles.tableHeaderText}>Reps</Text>
            <Text style={styles.tableHeaderText}>Peso</Text>
            <Text style={styles.tableHeaderText}>Hecho</Text>
          </View>
          
          {item.sets.map((set, sIndex) => (
            <View key={sIndex} style={[styles.setRow, set.completed && styles.setRowCompleted]}>
              <Text style={styles.setRowText}>{set.set}</Text>
              <Text style={styles.setRowText}>{set.reps}</Text>
              <Text style={styles.setRowText}>{set.weight}</Text>
              <TouchableOpacity 
                style={[styles.checkbox, set.completed && styles.checkboxCompleted]} 
                onPress={() => toggleSet(eIndex, sIndex)}
              >
                {set.completed && <Text style={styles.checkboxTick}>✓</Text>}
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      <TouchableOpacity style={styles.finishButton}>
        <Text style={styles.finishButtonText}>Finalizar Ritual 🩸</Text>
      </TouchableOpacity>
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
  exerciseCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    ...theme.shadows.neonPurple,
  },
  exerciseName: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: 'bold',
    marginBottom: 15,
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
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.textSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    maxWidth: 40,
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
  finishButton: {
    backgroundColor: colors.danger,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
    ...theme.shadows.neonOrange,
    shadowColor: colors.danger,
  },
  finishButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 18,
  }
});
