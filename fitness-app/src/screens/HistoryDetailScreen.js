import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, theme } from '../theme/theme';

export default function HistoryDetailScreen({ route }) {
  const { session } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailCard}>
        <Text style={styles.title}>{session.title}</Text>
        <Text style={styles.date}>{session.date}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Duración</Text>
            <Text style={styles.statValue}>{session.duration}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Tipo</Text>
            <Text style={styles.statValue}>{session.type}</Text>
          </View>
        </View>

        <View style={styles.logsContainer}>
          <Text style={styles.logsTitle}>Ejercicios Realizados:</Text>
          <Text style={styles.logItem}>🦇 Aperturas (3x10)</Text>
          <Text style={styles.logItem}>💀 Press Militar (4x8)</Text>
          <Text style={styles.logItem}>👻 Press de Banca (3x12)</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  detailCard: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.secondary,
    ...theme.shadows.neonPurple,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#111',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 5,
  },
  statValue: {
    color: colors.accent,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logsContainer: {
    marginTop: 10,
  },
  logsTitle: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  logItem: {
    color: colors.textSecondary,
    fontSize: 16,
    marginBottom: 10,
    paddingLeft: 10,
  }
});
