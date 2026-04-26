export const colors = {
  background: '#0a0a0a', // Oscuro profundo
  surface: '#1c1c1c', // Gris oscuro para tarjetas
  primary: '#ff6600', // Naranja Calabaza
  secondary: '#8a2be2', // Morado Bruja
  accent: '#39ff14', // Verde Monstruo
  text: '#f2f2f2', // Blanco Hueso
  textSecondary: '#a0a0a0', // Gris claro para textos secundarios
  danger: '#ff003c', // Rojo Sangre
  border: '#333333', // Borde sutil
};

export const theme = {
  colors,
  shadows: {
    neonOrange: {
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    neonPurple: {
      shadowColor: colors.secondary,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    },
    neonGreen: {
      shadowColor: colors.accent,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 10,
    }
  }
};
