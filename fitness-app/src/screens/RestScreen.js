import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, theme } from '../theme/theme';

export default function RestScreen() {
  const [baseTime, setBaseTime] = useState(90);
  const [timeLeft, setTimeLeft] = useState(90);
  const [isActive, setIsActive] = useState(false);
  const [customMin, setCustomMin] = useState('');
  const [customSec, setCustomSec] = useState('');

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(baseTime);
  };

  const addTime = (seconds) => {
    setTimeLeft(timeLeft + seconds);
  };

  const setPreset = (seconds) => {
    setIsActive(false);
    setBaseTime(seconds);
    setTimeLeft(seconds);
  };

  const applyCustomTime = () => {
    const m = parseInt(customMin) || 0;
    const s = parseInt(customSec) || 0;
    const totalSeconds = (m * 60) + s;
    if (totalSeconds > 0) {
      setPreset(totalSeconds);
      setCustomMin('');
      setCustomSec('');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Zona de Resurrección 🪦</Text>
        
        <View style={styles.timerCircle}>
          <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        </View>

        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleTimer}>
            <Text style={styles.buttonText}>{isActive ? 'Pausar' : 'Iniciar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.dangerButton]} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.addTimeContainer}>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => addTime(30)}>
            <Text style={styles.buttonText}>+30s</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => addTime(60)}>
            <Text style={styles.buttonText}>+1min</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Preajustes</Text>
        <View style={styles.presetsContainer}>
          {[30, 60, 90, 120, 180].map((sec) => (
            <TouchableOpacity 
              key={sec} 
              style={[styles.presetChip, baseTime === sec && styles.presetChipActive]} 
              onPress={() => setPreset(sec)}
            >
              <Text style={[styles.presetText, baseTime === sec && styles.presetTextActive]}>
                {sec >= 60 ? `${sec / 60}m` : `${sec}s`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Tiempo Personalizado</Text>
        <View style={styles.customTimeContainer}>
          <TextInput
            style={styles.timeInput}
            placeholder="Min"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={customMin}
            onChangeText={setCustomMin}
            maxLength={2}
          />
          <Text style={styles.timeColon}>:</Text>
          <TextInput
            style={styles.timeInput}
            placeholder="Seg"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={customSec}
            onChangeText={setCustomSec}
            maxLength={2}
          />
          <TouchableOpacity style={styles.applyButton} onPress={applyCustomTime}>
            <Text style={styles.applyButtonText}>Fijar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.accent,
    marginBottom: 30,
  },
  timerCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 4,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    marginBottom: 30,
    ...theme.shadows.neonGreen,
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: colors.text,
    textShadowColor: colors.accent,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 15,
  },
  addTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 30,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  dangerButton: {
    backgroundColor: colors.danger,
  },
  buttonText: {
    color: colors.background,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  presetsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 30,
    width: '100%',
  },
  presetChip: {
    backgroundColor: colors.surface,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  presetChipActive: {
    borderColor: colors.accent,
    backgroundColor: '#1a331a',
  },
  presetText: {
    color: colors.textSecondary,
    fontWeight: 'bold',
  },
  presetTextActive: {
    color: colors.accent,
  },
  customTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: colors.surface,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },
  timeInput: {
    backgroundColor: '#1a1a1a',
    color: colors.text,
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    width: 60,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  timeColon: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  applyButton: {
    backgroundColor: colors.primary,
    marginLeft: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyButtonText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
  }
});
