import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { colors, theme } from '../theme/theme';
import { mockHistory } from '../data/mockData';

export default function HistoryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.historyCard}
      onPress={() => navigation.navigate('HistoryDetail', { session: item })}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.info}>Tipo: {item.type}</Text>
        <Text style={styles.info}>Duración: {item.duration}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Pergaminos Antiguos 📜</Text>
      <FlatList
        data={mockHistory}
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
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  historyCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    ...theme.shadows.neonOrange,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info: {
    color: colors.text,
    fontSize: 14,
  }
});
