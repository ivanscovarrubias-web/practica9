import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, theme } from '../theme/theme';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>🎃 Gym del Terror 🎃</Text>
      
      <TouchableOpacity 
        style={[styles.card, styles.primaryCard]} 
        onPress={() => navigation.navigate('Entrenar')}
      >
        <Text style={styles.cardTitle}>Último Entrenamiento</Text>
        <Text style={styles.cardContent}>Piernas de Zombi - Ayer</Text>
        <Text style={styles.cardAction}>Entrenar Ahora 🧟</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.secondaryCard]} 
        onPress={() => navigation.navigate('Historial')}
      >
        <Text style={styles.cardTitle}>Esta Semana</Text>
        <Text style={styles.cardContent}>3 Entrenamientos Completados 🦇</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.accentCard]} 
        onPress={() => navigation.navigate('Descanso')}
      >
        <Text style={styles.cardTitle}>Descanso Actual</Text>
        <Text style={styles.cardContent}>Recuperando energía... 🩸</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.darkCard]} 
        onPress={() => navigation.navigate('Ejercicios')}
      >
        <Text style={styles.cardTitle}>Explorar Ejercicios</Text>
        <Text style={styles.cardContent}>Aprende nuevos hechizos 🕸️</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: colors.primary,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  card: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
  },
  primaryCard: {
    borderColor: colors.primary,
    ...theme.shadows.neonOrange,
  },
  secondaryCard: {
    borderColor: colors.secondary,
    ...theme.shadows.neonPurple,
  },
  accentCard: {
    borderColor: colors.accent,
    ...theme.shadows.neonGreen,
  },
  darkCard: {
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContent: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  cardAction: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 5,
  }
});
