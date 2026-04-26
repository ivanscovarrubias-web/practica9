export const mockExercises = [
  { id: '1', name: 'Levantamiento de Calabaza (Peso Muerto)', category: 'Piernas', equipment: 'Barra', image: '🎃' },
  { id: '2', name: 'Prensa de Calaveras (Press Militar)', category: 'Hombros', equipment: 'Mancuernas', image: '💀' },
  { id: '3', name: 'Sentadillas de Bruja (Sentadilla Libre)', category: 'Piernas', equipment: 'Barra', image: '🧹' },
  { id: '4', name: 'Remo del Monstruo (Remo con Barra)', category: 'Espalda', equipment: 'Barra', image: '🧟' },
  { id: '5', name: 'Zancadas de Zombi', category: 'Piernas', equipment: 'Mancuernas', image: '🩸' },
  { id: '6', name: 'Vuelo de Vampiro (Aperturas)', category: 'Pecho', equipment: 'Mancuernas', image: '🦇' },
  { id: '7', name: 'Curl de Telaraña (Bíceps)', category: 'Brazos', equipment: 'Mancuernas', image: '🕸️' },
  { id: '8', name: 'Empuje Fantasmal (Press de Banca)', category: 'Pecho', equipment: 'Barra', image: '👻' },
];

export const mockHistory = [
  { id: 'h1', date: '31 Oct 2026', title: 'Entrenamiento del Terror', duration: '45 min', type: 'Full Body' },
  { id: 'h2', date: '29 Oct 2026', title: 'Piernas de Zombi', duration: '60 min', type: 'Piernas' },
  { id: 'h3', date: '27 Oct 2026', title: 'Pecho de Gárgola', duration: '50 min', type: 'Pecho' },
];

export const mockCurrentWorkout = [
  {
    exercise: mockExercises[0],
    sets: [
      { set: 1, reps: 10, weight: '60 kg', completed: true },
      { set: 2, reps: 10, weight: '65 kg', completed: false },
      { set: 3, reps: 8, weight: '70 kg', completed: false },
    ]
  },
  {
    exercise: mockExercises[3],
    sets: [
      { set: 1, reps: 12, weight: '50 kg', completed: false },
      { set: 2, reps: 10, weight: '55 kg', completed: false },
    ]
  }
];
